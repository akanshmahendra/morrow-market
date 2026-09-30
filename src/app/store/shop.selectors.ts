import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Customer } from '../core/models/commerce.models';
import { discountedUnitPrice } from '../core/models/pricing';
import { AuthState } from './auth.reducer';
import { ShopState } from './shop.reducer';

export const selectShopState = createFeatureSelector<ShopState>('shop');
export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectCustomer = createSelector(selectAuthState, (state) => state.customer);
export const selectAuthLoading = createSelector(selectAuthState, (state) => state.loading);
export const selectAuthError = createSelector(selectAuthState, (state) => state.error);
export const selectProducts = createSelector(selectShopState, (state) => state.products);
export const selectCategories = createSelector(selectShopState, (state) => state.categories);
export const selectCatalogLoading = createSelector(selectShopState, (state) => state.loading);
export const selectCatalogError = createSelector(selectShopState, (state) => state.error);
export const selectCategory = createSelector(selectShopState, (state) => state.category);
export const selectSearchQuery = createSelector(selectShopState, (state) => state.query);
export const selectSort = createSelector(selectShopState, (state) => state.sort);
export const selectWishlistIds = createSelector(selectShopState, (state) => state.wishlistIds);
export const selectCartItems = createSelector(selectShopState, (state) => state.cartItems);
export const selectOrders = createSelector(selectShopState, (state) => state.orders);
export const selectPersistedData = createSelector(
  selectCartItems,
  selectWishlistIds,
  selectOrders,
  (cartItems, wishlistIds, orders) => ({ cartItems, wishlistIds, orders })
);

export const selectFilteredProducts = createSelector(
  selectProducts,
  selectCategory,
  selectSearchQuery,
  selectSort,
  (products, category, query, sort) => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category;
      const matchesQuery =
        !normalizedQuery ||
        `${product.title} ${product.description} ${product.brand} ${product.category}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
    if (sort === 'price-low') {
      return [...filtered].sort((a, b) => discountedUnitPrice(a) - discountedUnitPrice(b));
    }
    if (sort === 'price-high') {
      return [...filtered].sort((a, b) => discountedUnitPrice(b) - discountedUnitPrice(a));
    }
    if (sort === 'rating') return [...filtered].sort((a, b) => b.rating - a.rating);
    return filtered;
  }
);

export const selectVisibleProducts = createSelector(
  selectFilteredProducts,
  selectShopState,
  (products, state) => products.slice(0, state.visibleCount)
);
export const selectCanShowMore = createSelector(
  selectFilteredProducts,
  selectShopState,
  (products, state) => products.length > state.visibleCount
);
export const selectWishlistProducts = createSelector(
  selectProducts,
  selectWishlistIds,
  (products, wishlistIds) => products.filter((product) => wishlistIds.includes(product.id))
);
export const selectCartCount = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);
export const selectCartSubtotal = createSelector(
  selectCartItems,
  (items) =>
    Math.round(
      items.reduce(
        (total, item) => total + discountedUnitPrice(item.product) * item.quantity,
        0
      ) * 100
    ) / 100
);
export const selectCartDelivery = createSelector(selectCartSubtotal, (subtotal) =>
  subtotal === 0 || subtotal >= 75 ? 0 : 6
);
export const selectCartTax = createSelector(
  selectCartSubtotal,
  (subtotal) => Math.round(subtotal * 0.08 * 100) / 100
);
export const selectCartTotal = createSelector(
  selectCartSubtotal,
  selectCartDelivery,
  selectCartTax,
  (subtotal, delivery, tax) => subtotal + delivery + tax
);