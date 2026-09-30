import { createReducer, on } from '@ngrx/store';
import { CartItem, Category, Order, Product, ProductSort } from '../core/models/commerce.models';
import * as ShopActions from './shop.actions';

export interface ShopState {
  products: Product[];
  categories: Category[];
  loading: boolean;
  error: string | null;
  category: string;
  query: string;
  sort: ProductSort;
  visibleCount: number;
  cartItems: CartItem[];
  wishlistIds: number[];
  orders: Order[];
  lastOrderId: string | null;
}

export const initialShopState: ShopState = {
  products: [],
  categories: [],
  loading: false,
  error: null,
  category: 'all',
  query: '',
  sort: 'featured',
  visibleCount: 12,
  cartItems: [],
  wishlistIds: [],
  orders: [],
  lastOrderId: null,
};

export const shopReducer = createReducer(
  initialShopState,
  on(ShopActions.loadCatalog, (state) => ({ ...state, loading: true, error: null })),
  on(ShopActions.loadCatalogSuccess, (state, { products, categories }) => ({
    ...state,
    products,
    categories,
    loading: false,
  })),
  on(ShopActions.loadCatalogFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(ShopActions.setCategory, (state, { category }) => ({ ...state, category, visibleCount: 12 })),
  on(ShopActions.setSearch, (state, { query }) => ({ ...state, query, visibleCount: 12 })),
  on(ShopActions.setSort, (state, { sort }) => ({ ...state, sort, visibleCount: 12 })),
  on(ShopActions.showMoreProducts, (state) => ({
    ...state,
    visibleCount: state.visibleCount + 12,
  })),
  on(ShopActions.toggleWishlist, (state, { productId }) => ({
    ...state,
    wishlistIds: state.wishlistIds.includes(productId)
      ? state.wishlistIds.filter((id) => id !== productId)
      : [...state.wishlistIds, productId],
  })),
  on(ShopActions.addToCart, (state, { product, quantity = 1 }) => {
    const existing = state.cartItems.find((item) => item.product.id === product.id);
    const cartItems = existing
      ? state.cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item,
        )
      : [...state.cartItems, { product, quantity: Math.min(quantity, product.stock) }];
    return { ...state, cartItems };
  }),
  on(ShopActions.removeFromCart, (state, { productId }) => ({
    ...state,
    cartItems: state.cartItems.filter((item) => item.product.id !== productId),
  })),
  on(ShopActions.setCartQuantity, (state, { productId, quantity }) => ({
    ...state,
    cartItems:
      quantity <= 0
        ? state.cartItems.filter((item) => item.product.id !== productId)
        : state.cartItems.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: Math.min(quantity, item.product.stock) }
              : item,
          ),
  })),
  on(ShopActions.clearCart, (state) => ({ ...state, cartItems: [] })),
  on(ShopActions.placeOrder, (state, { order }) => ({
    ...state,
    orders: [order, ...state.orders],
    cartItems: [],
    lastOrderId: order.id,
  })),
  on(ShopActions.loadPersistedDataSuccess, (state, data) => ({
    ...state,
    cartItems: data.cartItems,
    wishlistIds: data.wishlistIds,
    orders: data.orders,
  })),
);
