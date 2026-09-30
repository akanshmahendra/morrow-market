import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { firstValueFrom, of, Subject, throwError } from 'rxjs';
import { Category, Product } from '../core/models/commerce.models';
import { CatalogApiService } from '../core/services/catalog-api.service';
import * as ShopActions from './shop.actions';
import { ShopEffects } from './shop.effects';
import { initialShopState } from './shop.reducer';

const product: Product = {
  id: 1,
  title: 'Green bottle',
  description: 'A glass bottle',
  category: 'beauty',
  price: 24,
  discountPercentage: 0,
  rating: 4.5,
  stock: 5,
  thumbnail: 'https://example.test/bottle.png',
  images: [],
  brand: 'Morrow',
  availabilityStatus: 'In Stock',
};
const categories: Category[] = [
  { slug: 'beauty', name: 'Beauty', url: 'https://dummyjson.com/products/category/beauty' },
];

describe('ShopEffects', () => {
  let actions$: Subject<Action>;
  let effects: ShopEffects;
  let store: MockStore;
  let catalogApi: { getCatalog: ReturnType<typeof vi.fn> };
  let platformId: string;

  const configure = () => {
    actions$ = new Subject<Action>();
    catalogApi = { getCatalog: vi.fn() };
    TestBed.configureTestingModule({
      providers: [
        ShopEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { shop: initialShopState } }),
        { provide: CatalogApiService, useValue: catalogApi },
        { provide: PLATFORM_ID, useValue: platformId },
      ],
    });
    effects = TestBed.inject(ShopEffects);
    store = TestBed.inject(MockStore);
  };

  beforeEach(() => {
    localStorage.clear();
    platformId = 'browser';
    configure();
  });

  afterEach(() => {
    actions$.complete();
    localStorage.clear();
  });

  it('dispatches a catalog success action when the API succeeds', async () => {
    catalogApi.getCatalog.mockReturnValue(of({ products: [product], categories }));
    const result = firstValueFrom(effects.loadCatalog$);
    actions$.next(ShopActions.loadCatalog());

    expect(await result).toEqual(
      ShopActions.loadCatalogSuccess({ products: [product], categories }),
    );
  });

  it('dispatches a readable catalog failure when the API errors', async () => {
    catalogApi.getCatalog.mockReturnValue(throwError(() => new Error('offline')));
    const result = firstValueFrom(effects.loadCatalog$);
    actions$.next(ShopActions.loadCatalog());

    expect(await result).toEqual(
      ShopActions.loadCatalogFailure({
        error: 'The catalog could not be loaded. Please try again.',
      }),
    );
  });

  it('restores saved cart, favorites, and orders from local storage', async () => {
    const saved = { cartItems: [{ product, quantity: 2 }], wishlistIds: [1], orders: [] };
    localStorage.setItem('morrow-market-shop', JSON.stringify(saved));
    const result = firstValueFrom(effects.loadPersistedData$);
    actions$.next(ShopActions.loadPersistedData());

    expect(await result).toEqual(ShopActions.loadPersistedDataSuccess(saved));
  });

  it('uses empty state when browser storage is missing or malformed', async () => {
    const missingResult = firstValueFrom(effects.loadPersistedData$);
    actions$.next(ShopActions.loadPersistedData());
    expect(await missingResult).toEqual(
      ShopActions.loadPersistedDataSuccess({ cartItems: [], wishlistIds: [], orders: [] }),
    );

    localStorage.setItem('morrow-market-shop', '{not-json');
    const malformedResult = firstValueFrom(effects.loadPersistedData$);
    actions$.next(ShopActions.loadPersistedData());
    expect(await malformedResult).toEqual(
      ShopActions.loadPersistedDataSuccess({ cartItems: [], wishlistIds: [], orders: [] }),
    );
  });

  it('skips local storage on the server platform', async () => {
    TestBed.resetTestingModule();
    platformId = 'server';
    configure();
    const result = firstValueFrom(effects.loadPersistedData$);
    actions$.next(ShopActions.loadPersistedData());

    expect(await result).toEqual(
      ShopActions.loadPersistedDataSuccess({ cartItems: [], wishlistIds: [], orders: [] }),
    );
  });

  it('persists the latest store data after cart and wishlist changes', () => {
    store.setState({
      shop: { ...initialShopState, cartItems: [{ product, quantity: 2 }], wishlistIds: [1] },
    });
    const subscription = effects.persistData$.subscribe();
    actions$.next(ShopActions.addToCart({ product }));

    expect(JSON.parse(localStorage.getItem('morrow-market-shop') ?? 'null')).toEqual({
      cartItems: [{ product, quantity: 2 }],
      wishlistIds: [1],
      orders: [],
    });
    subscription.unsubscribe();
  });

  it('does not write browser storage on the server platform', () => {
    TestBed.resetTestingModule();
    platformId = 'server';
    configure();
    const setItem = vi.spyOn(Storage.prototype, 'setItem');
    const subscription = effects.persistData$.subscribe();
    actions$.next(ShopActions.clearCart());

    expect(setItem).not.toHaveBeenCalled();
    subscription.unsubscribe();
    setItem.mockRestore();
  });
});
