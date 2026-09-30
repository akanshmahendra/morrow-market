import {
  createAction,
  props
} from "./chunk-CU7B2LGP.js";

// src/app/store/shop.actions.ts
var loadCatalog = createAction("[Catalog] Load");
var loadCatalogSuccess = createAction(
  "[Catalog] Load Success",
  props()
);
var loadCatalogFailure = createAction(
  "[Catalog] Load Failure",
  props()
);
var setCategory = createAction("[Catalog] Set Category", props());
var setSearch = createAction("[Catalog] Set Search", props());
var setSort = createAction("[Catalog] Set Sort", props());
var showMoreProducts = createAction("[Catalog] Show More");
var toggleWishlist = createAction(
  "[Wishlist] Toggle Product",
  props()
);
var addToCart = createAction(
  "[Cart] Add Item",
  props()
);
var removeFromCart = createAction("[Cart] Remove Item", props());
var setCartQuantity = createAction(
  "[Cart] Set Quantity",
  props()
);
var clearCart = createAction("[Cart] Clear");
var placeOrder = createAction("[Checkout] Place Order", props());
var loadPersistedData = createAction("[Shop] Load Persisted Data");
var loadPersistedDataSuccess = createAction(
  "[Shop] Load Persisted Data Success",
  props()
);

export {
  loadCatalog,
  loadCatalogSuccess,
  loadCatalogFailure,
  setCategory,
  setSearch,
  setSort,
  showMoreProducts,
  toggleWishlist,
  addToCart,
  removeFromCart,
  setCartQuantity,
  clearCart,
  placeOrder,
  loadPersistedData,
  loadPersistedDataSuccess
};
//# debugId=f0299dc3-8d05-502b-bff6-b533515eab4e
//# sourceMappingURL=chunk-46YXLFEM.js.map
