import { createAction, props } from '@ngrx/store';
import {
  CartItem,
  Category,
  Order,
  PersistedShopData,
  Product,
  ProductSort,
} from '../core/models/commerce.models';

export const loadCatalog = createAction('[Catalog] Load');
export const loadCatalogSuccess = createAction(
  '[Catalog] Load Success',
  props<{ products: Product[]; categories: Category[] }>()
);
export const loadCatalogFailure = createAction(
  '[Catalog] Load Failure',
  props<{ error: string }>()
);
export const setCategory = createAction('[Catalog] Set Category', props<{ category: string }>());
export const setSearch = createAction('[Catalog] Set Search', props<{ query: string }>());
export const setSort = createAction('[Catalog] Set Sort', props<{ sort: ProductSort }>());
export const showMoreProducts = createAction('[Catalog] Show More');
export const toggleWishlist = createAction(
  '[Wishlist] Toggle Product',
  props<{ productId: number }>()
);

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ product: Product; quantity?: number }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);
export const setCartQuantity = createAction(
  '[Cart] Set Quantity',
  props<{ productId: number; quantity: number }>()
);
export const clearCart = createAction('[Cart] Clear');
export const placeOrder = createAction('[Checkout] Place Order', props<{ order: Order }>());
export const loadPersistedData = createAction('[Shop] Load Persisted Data');
export const loadPersistedDataSuccess = createAction(
  '[Shop] Load Persisted Data Success',
  props<PersistedShopData>()
);