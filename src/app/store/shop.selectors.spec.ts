import { Category, Product } from '../core/models/commerce.models';
import { AuthState } from './auth.reducer';
import { ShopState } from './shop.reducer';
import {
  selectAuthError,
  selectAuthLoading,
  selectCanShowMore,
  selectCartCount,
  selectCartDelivery,
  selectCartSubtotal,
  selectCartTax,
  selectCartTotal,
  selectCatalogError,
  selectCatalogLoading,
  selectCategories,
  selectCategory,
  selectCustomer,
  selectFilteredProducts,
  selectOrders,
  selectPersistedData,
  selectProducts,
  selectSearchQuery,
  selectShopState,
  selectSort,
  selectVisibleProducts,
  selectWishlistIds,
  selectWishlistProducts,
} from './shop.selectors';

const products: Product[] = [
  {
    id: 1,
    title: 'Green bottle',
    description: 'Glass water bottle',
    category: 'beauty',
    price: 100,
    discountPercentage: 50,
    rating: 4,
    stock: 10,
    thumbnail: 'https://example.test/one.png',
    images: [],
    brand: 'Morrow',
    availabilityStatus: 'In Stock',
  },
  {
    id: 2,
    title: 'Blue chair',
    description: 'A comfy chair',
    category: 'furniture',
    price: 30,
    discountPercentage: 0,
    rating: 4.9,
    stock: 5,
    thumbnail: 'https://example.test/two.png',
    images: [],
    brand: 'House',
    availabilityStatus: 'In Stock',
  },
  {
    id: 3,
    title: 'Amber jar',
    description: 'Storage jar',
    category: 'home-decoration',
    price: 12,
    discountPercentage: 10,
    rating: 3.5,
    stock: 0,
    thumbnail: 'https://example.test/three.png',
    images: [],
    brand: 'Morrow',
    availabilityStatus: 'Out of Stock',
  },
];

const categories: Category[] = [
  { slug: 'beauty', name: 'Beauty', url: 'https://example.test/beauty' },
];

const state: ShopState = {
  products,
  categories,
  loading: false,
  error: null,
  category: 'all',
  query: '',
  sort: 'featured',
  visibleCount: 2,
  cartItems: [
    { product: products[0], quantity: 2 },
    { product: products[1], quantity: 1 },
  ],
  wishlistIds: [1, 3],
  orders: [],
  lastOrderId: null,
};

describe('shop selectors', () => {
  it('projects shop and auth state fields', () => {
    const auth: AuthState = {
      customer: null,
      loading: true,
      error: 'Could not sign in',
    };

    expect(selectShopState.projector(state)).toBe(state);
    expect(selectProducts.projector(state)).toBe(products);
    expect(selectCategories.projector(state)).toBe(categories);
    expect(selectCatalogLoading.projector(state)).toBe(false);
    expect(selectCatalogError.projector(state)).toBeNull();
    expect(selectCategory.projector(state)).toBe('all');
    expect(selectSearchQuery.projector(state)).toBe('');
    expect(selectSort.projector(state)).toBe('featured');
    expect(selectWishlistIds.projector(state)).toEqual([1, 3]);
    expect(selectOrders.projector(state)).toEqual([]);
    expect(selectCustomer.projector(auth)).toBeNull();
    expect(selectAuthLoading.projector(auth)).toBe(true);
    expect(selectAuthError.projector(auth)).toBe('Could not sign in');
  });

  it('filters by category and case-insensitive text, including empty results', () => {
    expect(selectFilteredProducts.projector(products, 'beauty', '', 'featured')).toEqual([
      products[0],
    ]);
    expect(selectFilteredProducts.projector(products, 'all', 'MORROW', 'featured')).toEqual([
      products[0],
      products[2],
    ]);
    expect(selectFilteredProducts.projector(products, 'furniture', 'glass', 'featured')).toEqual(
      [],
    );
    expect(selectFilteredProducts.projector(products, 'all', ' chair ', 'featured')).toEqual([
      products[1],
    ]);
  });

  it('sorts by sale price and rating while preserving featured order', () => {
    expect(selectFilteredProducts.projector(products, 'all', '', 'featured')).toEqual(products);
    expect(selectFilteredProducts.projector(products, 'all', '', 'price-low')).toEqual([
      products[2],
      products[1],
      products[0],
    ]);
    expect(selectFilteredProducts.projector(products, 'all', '', 'price-high')).toEqual([
      products[0],
      products[1],
      products[2],
    ]);
    expect(selectFilteredProducts.projector(products, 'all', '', 'rating')).toEqual([
      products[1],
      products[0],
      products[2],
    ]);
  });

  it('limits visible results, reports more results, and finds saved products', () => {
    expect(selectVisibleProducts.projector(products, state)).toEqual(products.slice(0, 2));
    expect(selectCanShowMore.projector(products, state)).toBe(true);
    expect(selectCanShowMore.projector(products.slice(0, 2), state)).toBe(false);
    expect(selectWishlistProducts.projector(products, state.wishlistIds)).toEqual([
      products[0],
      products[2],
    ]);
  });

  it('calculates cart totals and persisted data at currency precision', () => {
    const subtotal = selectCartSubtotal.projector(state.cartItems);
    const delivery = selectCartDelivery.projector(subtotal);
    const tax = selectCartTax.projector(subtotal);

    expect(selectCartCount.projector(state.cartItems)).toBe(3);
    expect(subtotal).toBe(130);
    expect(delivery).toBe(0);
    expect(selectCartDelivery.projector(0)).toBe(0);
    expect(selectCartDelivery.projector(40)).toBe(6);
    expect(tax).toBe(10.4);
    expect(selectCartTotal.projector(subtotal, delivery, tax)).toBe(140.4);
    expect(selectPersistedData.projector(state.cartItems, state.wishlistIds, state.orders)).toEqual(
      { cartItems: state.cartItems, wishlistIds: [1, 3], orders: [] },
    );
  });
});
