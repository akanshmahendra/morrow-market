import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { PersistedShopData } from '../core/models/commerce.models';
import { CatalogApiService } from '../core/services/catalog-api.service';
import * as ShopActions from './shop.actions';
import { selectPersistedData } from './shop.selectors';

const STORAGE_KEY = 'morrow-market-shop';
const emptyData: PersistedShopData = { cartItems: [], wishlistIds: [], orders: [] };

@Injectable()
export class ShopEffects {
  private readonly actions$ = inject(Actions);
  private readonly api = inject(CatalogApiService);
  private readonly store = inject(Store);
  private readonly platformId = inject(PLATFORM_ID);

  loadCatalog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShopActions.loadCatalog),
      switchMap(() =>
        this.api.getCatalog().pipe(
          map((data) => ShopActions.loadCatalogSuccess(data)),
          catchError(() =>
            of(
              ShopActions.loadCatalogFailure({
                error: 'The catalog could not be loaded. Please try again.',
              }),
            ),
          ),
        ),
      ),
    ),
  );

  loadPersistedData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShopActions.loadPersistedData),
      map(() => {
        if (!isPlatformBrowser(this.platformId)) return emptyData;
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          return saved
            ? { ...emptyData, ...(JSON.parse(saved) as Partial<PersistedShopData>) }
            : emptyData;
        } catch {
          return emptyData;
        }
      }),
      map((data) => ShopActions.loadPersistedDataSuccess(data)),
    ),
  );

  persistData$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          ShopActions.addToCart,
          ShopActions.removeFromCart,
          ShopActions.setCartQuantity,
          ShopActions.clearCart,
          ShopActions.toggleWishlist,
          ShopActions.placeOrder,
        ),
        withLatestFrom(this.store.select(selectPersistedData)),
        tap(([, data]) => {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          }
        }),
      ),
    { dispatch: false },
  );
}
