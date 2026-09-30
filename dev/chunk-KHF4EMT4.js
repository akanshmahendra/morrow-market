import {
  addToCart,
  toggleWishlist
} from "./chunk-TJIYVG26.js";
import {
  NG_ICON_DIRECTIVES,
  NgIcon
} from "./chunk-6WX6LQWI.js";
import {
  ActivatedRoute,
  Component,
  CurrencyPipe,
  DecimalPipe,
  NgOptimizedImage,
  RouterLink,
  Store,
  computed,
  discountedUnitPrice,
  inject,
  map,
  selectCatalogLoading,
  selectProducts,
  selectWishlistIds,
  setClassMetadata,
  signal,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5QH7RXCL.js";

// src/app/features/product-detail/product-detail.component.ts
function ProductDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r1.title);
  }
}
function ProductDetailComponent_Conditional_7_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_7_Conditional_4_For_2_Template_button_click_0_listener() {
      const image_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.selectedImage.set(image_r4));
    });
    \u0275\u0275element(1, "img", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const \u0275$index_33_r6 = ctx.$index;
    const item_r7 = \u0275\u0275nextContext(2);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r4.activeImage() === image_r4);
    \u0275\u0275attribute("aria-label", "Show image " + (\u0275$index_33_r6 + 1));
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", image_r4)("alt", item_r7.title + " view " + (\u0275$index_33_r6 + 1));
  }
}
function ProductDetailComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, ProductDetailComponent_Conditional_7_Conditional_4_For_2_Template, 2, 5, "button", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r7.images);
  }
}
function ProductDetailComponent_Conditional_7_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, item_r7.price));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 4, item_r7.discountPercentage, "1.0-0"), "% off");
  }
}
function ProductDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 7)(2, "div", 8);
    \u0275\u0275element(3, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ProductDetailComponent_Conditional_7_Conditional_4_Template, 3, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13)(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 14)(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, ProductDetailComponent_Conditional_7_Conditional_20_Template, 6, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 16);
    \u0275\u0275element(24, "span", 17);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 18)(27, "div", 19)(28, "button", 20);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_7_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.changeQuantity(-1));
    });
    \u0275\u0275element(29, "ng-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 22);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 23);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_7_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.changeQuantity(1));
    });
    \u0275\u0275element(33, "ng-icon", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "button", 25);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_7_Template_button_click_34_listener() {
      const item_r7 = \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addToCart(item_r7));
    });
    \u0275\u0275text(35, "Add to bag ");
    \u0275\u0275element(36, "ng-icon", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 27);
    \u0275\u0275listener("click", function ProductDetailComponent_Conditional_7_Template_button_click_37_listener() {
      const item_r7 = \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleSaved(item_r7));
    });
    \u0275\u0275element(38, "ng-icon", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 29)(40, "div");
    \u0275\u0275element(41, "ng-icon", 30);
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "Complimentary delivery over $75");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div");
    \u0275\u0275element(45, "ng-icon", 31);
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "Easy 30-day returns");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "details", 32)(49, "summary");
    \u0275\u0275text(50, "More to know ");
    \u0275\u0275element(51, "ng-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngSrc", ctx_r4.activeImage())("alt", item_r7.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.images.length > 1 ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.brand || item_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2605 ", \u0275\u0275pipeBind2(13, 20, item_r7.rating, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.availabilityStatus);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 23, ctx_r4.discountedPrice()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r7.discountPercentage > 0 ? 20 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r7.stock, " available to send");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r4.quantity() <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.quantity());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r4.quantity() >= item_r7.stock);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", item_r7.stock < 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("saved", ctx_r4.wishlistIds().includes(item_r7.id));
    \u0275\u0275attribute("aria-pressed", ctx_r4.wishlistIds().includes(item_r7.id))("aria-label", ctx_r4.wishlistIds().includes(item_r7.id) ? "Remove from saved items" : "Save item");
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("", item_r7.description, " We choose pieces that are made to be used, loved, and kept close.");
  }
}
function ProductDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "Finding this good thing\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 12);
    \u0275\u0275text(2, "A little elusive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "We couldn\u2019t find that one.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 38);
    \u0275\u0275text(6, "Back to the collection");
    \u0275\u0275elementEnd()();
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  store = inject(Store);
  route = inject(ActivatedRoute);
  productId = toSignal(this.route.paramMap.pipe(map((params) => Number(params.get("id")))), { initialValue: Number(this.route.snapshot.paramMap.get("id")) });
  products = this.store.selectSignal(selectProducts);
  loading = this.store.selectSignal(selectCatalogLoading);
  wishlistIds = this.store.selectSignal(selectWishlistIds);
  quantity = signal(
    1,
    ...ngDevMode ? [{ debugName: "quantity" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedImage = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedImage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  product = computed(
    () => this.products().find((item) => item.id === this.productId()),
    ...ngDevMode ? [{ debugName: "product" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeImage = computed(
    () => {
      const product = this.product();
      return this.selectedImage() ?? product?.images?.[0] ?? product?.thumbnail ?? "";
    },
    ...ngDevMode ? [{ debugName: "activeImage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  discountedPrice = computed(
    () => {
      const product = this.product();
      return product ? discountedUnitPrice(product) : 0;
    },
    ...ngDevMode ? [{ debugName: "discountedPrice" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changeQuantity(delta) {
    const product = this.product();
    if (product)
      this.quantity.update((value) => Math.max(1, Math.min(product.stock, value + delta)));
  }
  addToCart(product) {
    this.store.dispatch(addToCart({ product, quantity: this.quantity() }));
  }
  toggleSaved(product) {
    this.store.dispatch(toggleWishlist({ productId: product.id }));
  }
  static \u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], decls: 10, vars: 2, consts: [[1, "detail-page", "page-wrap"], ["aria-label", "Breadcrumb", 1, "breadcrumbs"], ["routerLink", "/"], [1, "detail-layout"], ["role", "status", 1, "detail-message"], [1, "detail-message"], ["routerLink", "/", "fragment", "discover"], [1, "gallery"], [1, "main-image"], ["width", "1000", "height", "1000", "priority", "", 3, "ngSrc", "alt"], ["aria-label", "Product images", 1, "thumbnail-row"], [1, "detail-copy"], [1, "eyebrow"], [1, "detail-rating"], [1, "detail-price"], [1, "detail-description"], [1, "stock-line"], [1, "stock-dot"], [1, "purchase-row"], ["aria-label", "Choose quantity", 1, "quantity-control"], ["type", "button", "aria-label", "Decrease quantity", 3, "click", "disabled"], ["name", "lucideMinus", "aria-hidden", "true"], ["aria-live", "polite"], ["type", "button", "aria-label", "Increase quantity", 3, "click", "disabled"], ["name", "lucidePlus", "aria-hidden", "true"], ["type", "button", 1, "primary-button", "add-button", 3, "click", "disabled"], ["name", "lucideShoppingBag", "aria-hidden", "true"], ["type", "button", 1, "save-detail", 3, "click"], ["name", "lucideHeart", "aria-hidden", "true"], [1, "detail-promises"], ["name", "lucideTruck", "aria-hidden", "true"], ["name", "lucidePackageCheck", "aria-hidden", "true"], [1, "product-details"], ["name", "lucideChevronDown", "aria-hidden", "true"], ["type", "button", 3, "selected"], ["type", "button", 3, "click"], ["width", "130", "height", "130", 3, "ngSrc", "alt"], [1, "discount-label"], ["routerLink", "/", 1, "primary-button"]], template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275text(3, "Shop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(6, ProductDetailComponent_Conditional_6_Template, 6, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, ProductDetailComponent_Conditional_7_Template, 54, 25, "div", 3)(8, ProductDetailComponent_Conditional_8_Template, 2, 0, "div", 4)(9, ProductDetailComponent_Conditional_9_Template, 7, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(6);
      \u0275\u0275conditional((tmp_0_0 = ctx.product()) ? 6 : -1, tmp_0_0);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_1_0 = ctx.product()) ? 7 : ctx.loading() ? 8 : 9, tmp_1_0);
    }
  }, dependencies: [NgOptimizedImage, RouterLink, NgIcon, CurrencyPipe, DecimalPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.detail-page[_ngcontent-%COMP%] {\n  min-height: 560px;\n  padding-top: 24px;\n}\n.breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  padding-bottom: 22px;\n  color: var(--%NS%muted);\n  font-size: 10px;\n  text-transform: capitalize;\n}\n.breadcrumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%coral);\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.8fr);\n  align-items: start;\n  gap: 64px;\n  padding-top: 10px;\n}\n.main-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  aspect-ratio: 1/1;\n  background: #ecebe5;\n}\n.main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.thumbnail-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  overflow-x: auto;\n  margin-top: 10px;\n}\n.thumbnail-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 76px;\n  overflow: hidden;\n  aspect-ratio: 1;\n  padding: 0;\n  border: 1px solid transparent;\n  background: #ecebe5;\n}\n.thumbnail-row[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  border-color: var(--%NS%sage-deep);\n}\n.thumbnail-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.detail-copy[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.detail-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  font-family: var(--%NS%font-display);\n  font-size: 44px;\n  font-weight: 500;\n  line-height: 1.04;\n}\n.detail-rating[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  color: #976c29;\n  font-size: 10px;\n}\n.detail-rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  color: #6b765c;\n}\n.detail-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-top: 23px;\n}\n.detail-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.detail-price[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 13px;\n}\n.discount-label[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n  font-size: 10px;\n  font-weight: 700;\n}\n.detail-description[_ngcontent-%COMP%] {\n  margin: 17px 0 0;\n  color: #656b63;\n  font-size: 13px;\n  line-height: 1.8;\n}\n.stock-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 18px;\n  color: #637153;\n  font-size: 10px;\n}\n.stock-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #79895f;\n}\n.purchase-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  margin-top: 18px;\n}\n.quantity-control[_ngcontent-%COMP%] {\n  height: 46px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--%NS%line);\n}\n.quantity-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%ink);\n}\n.quantity-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: #b1b3ad;\n  cursor: not-allowed;\n}\n.quantity-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 22px;\n  text-align: center;\n  font-size: 11px;\n}\n.add-button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.save-detail[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  display: grid;\n  place-items: center;\n  border: 1px solid var(--%NS%line);\n  background: transparent;\n  color: var(--%NS%ink);\n  font-size: 19px;\n}\n.save-detail.saved[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n}\n.detail-promises[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  margin-top: 23px;\n  padding-block: 17px;\n  border-block: 1px solid var(--%NS%line);\n}\n.detail-promises[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  color: #5f665d;\n  font-size: 10px;\n}\n.detail-promises[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%sage-deep);\n  font-size: 16px;\n}\n.product-details[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--%NS%line);\n}\n.product-details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-block: 16px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  list-style: none;\n}\n.product-details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 11px;\n  line-height: 1.7;\n}\n.detail-message[_ngcontent-%COMP%] {\n  min-height: 420px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  text-align: center;\n  color: var(--%NS%muted);\n}\n.detail-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%ink);\n  font-family: var(--%NS%font-display);\n  font-size: 36px;\n  font-weight: 500;\n}\n@media (max-width: 760px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 22px;\n  }\n  .detail-copy[_ngcontent-%COMP%] {\n    padding-top: 3px;\n  }\n  .detail-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .main-image[_ngcontent-%COMP%] {\n    max-height: 440px;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetailComponent, [{
    type: Component,
    args: [{ selector: "app-product-detail", imports: [CurrencyPipe, DecimalPipe, NgOptimizedImage, RouterLink, NG_ICON_DIRECTIVES], template: `<section class="detail-page page-wrap">
  <nav class="breadcrumbs" aria-label="Breadcrumb"><a routerLink="/">Shop</a><span>/</span>@if (product(); as item) { <a routerLink="/" fragment="discover">{{ item.category }}</a><span>/</span><span>{{ item.title }}</span> }</nav>

  @if (product(); as item) {
    <div class="detail-layout">
      <div class="gallery">
        <div class="main-image"><img [ngSrc]="activeImage()" [alt]="item.title" width="1000" height="1000" priority /></div>
        @if (item.images.length > 1) {
          <div class="thumbnail-row" aria-label="Product images">
            @for (image of item.images; track image; let index = $index) {
              <button type="button" [class.selected]="activeImage() === image" [attr.aria-label]="'Show image ' + (index + 1)" (click)="selectedImage.set(image)"><img [ngSrc]="image" [alt]="item.title + ' view ' + (index + 1)" width="130" height="130" /></button>
            }
          </div>
        }
      </div>

      <div class="detail-copy">
        <span class="eyebrow">{{ item.brand || item.category }}</span>
        <h1>{{ item.title }}</h1>
        <div class="detail-rating"><span>\u2605 {{ item.rating | number:'1.1-1' }}</span><span>{{ item.availabilityStatus }}</span></div>
        <div class="detail-price"><strong>{{ discountedPrice() | currency }}</strong>@if (item.discountPercentage > 0) { <del>{{ item.price | currency }}</del><span class="discount-label">{{ item.discountPercentage | number:'1.0-0' }}% off</span> }</div>
        <p class="detail-description">{{ item.description }}</p>
        <div class="stock-line"><span class="stock-dot"></span>{{ item.stock }} available to send</div>
        <div class="purchase-row">
          <div class="quantity-control" aria-label="Choose quantity">
            <button type="button" aria-label="Decrease quantity" [disabled]="quantity() <= 1" (click)="changeQuantity(-1)"><ng-icon name="lucideMinus" aria-hidden="true" /></button>
            <span aria-live="polite">{{ quantity() }}</span>
            <button type="button" aria-label="Increase quantity" [disabled]="quantity() >= item.stock" (click)="changeQuantity(1)"><ng-icon name="lucidePlus" aria-hidden="true" /></button>
          </div>
          <button class="primary-button add-button" type="button" [disabled]="item.stock < 1" (click)="addToCart(item)">Add to bag <ng-icon name="lucideShoppingBag" aria-hidden="true" /></button>
          <button class="save-detail" type="button" [class.saved]="wishlistIds().includes(item.id)" [attr.aria-pressed]="wishlistIds().includes(item.id)" [attr.aria-label]="wishlistIds().includes(item.id) ? 'Remove from saved items' : 'Save item'" (click)="toggleSaved(item)"><ng-icon name="lucideHeart" aria-hidden="true" /></button>
        </div>
        <div class="detail-promises"><div><ng-icon name="lucideTruck" aria-hidden="true" /><span>Complimentary delivery over $75</span></div><div><ng-icon name="lucidePackageCheck" aria-hidden="true" /><span>Easy 30-day returns</span></div></div>
        <details class="product-details"><summary>More to know <ng-icon name="lucideChevronDown" aria-hidden="true" /></summary><p>{{ item.description }} We choose pieces that are made to be used, loved, and kept close.</p></details>
      </div>
    </div>
  } @else if (loading()) {
    <div class="detail-message" role="status">Finding this good thing\u2026</div>
  } @else {
    <div class="detail-message"><span class="eyebrow">A little elusive</span><h1>We couldn\u2019t find that one.</h1><a class="primary-button" routerLink="/">Back to the collection</a></div>
  }
</section>`, styles: ["/* src/app/features/product-detail/product-detail.component.scss */\n:host {\n  display: block;\n}\n.detail-page {\n  min-height: 560px;\n  padding-top: 24px;\n}\n.breadcrumbs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  padding-bottom: 22px;\n  color: var(--muted);\n  font-size: 10px;\n  text-transform: capitalize;\n}\n.breadcrumbs a:hover {\n  color: var(--coral);\n}\n.detail-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.8fr);\n  align-items: start;\n  gap: 64px;\n  padding-top: 10px;\n}\n.main-image {\n  overflow: hidden;\n  aspect-ratio: 1/1;\n  background: #ecebe5;\n}\n.main-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.thumbnail-row {\n  display: flex;\n  gap: 9px;\n  overflow-x: auto;\n  margin-top: 10px;\n}\n.thumbnail-row button {\n  flex: 0 0 76px;\n  overflow: hidden;\n  aspect-ratio: 1;\n  padding: 0;\n  border: 1px solid transparent;\n  background: #ecebe5;\n}\n.thumbnail-row button.selected {\n  border-color: var(--sage-deep);\n}\n.thumbnail-row img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.detail-copy {\n  padding-top: 16px;\n}\n.detail-copy h1 {\n  margin: 10px 0 12px;\n  font-family: var(--font-display);\n  font-size: 44px;\n  font-weight: 500;\n  line-height: 1.04;\n}\n.detail-rating {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  color: #976c29;\n  font-size: 10px;\n}\n.detail-rating span + span {\n  color: #6b765c;\n}\n.detail-price {\n  display: flex;\n  align-items: baseline;\n  gap: 10px;\n  margin-top: 23px;\n}\n.detail-price strong {\n  font-size: 21px;\n}\n.detail-price del {\n  color: var(--muted);\n  font-size: 13px;\n}\n.discount-label {\n  color: var(--coral);\n  font-size: 10px;\n  font-weight: 700;\n}\n.detail-description {\n  margin: 17px 0 0;\n  color: #656b63;\n  font-size: 13px;\n  line-height: 1.8;\n}\n.stock-line {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 18px;\n  color: #637153;\n  font-size: 10px;\n}\n.stock-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #79895f;\n}\n.purchase-row {\n  display: flex;\n  gap: 9px;\n  margin-top: 18px;\n}\n.quantity-control {\n  height: 46px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n}\n.quantity-control button {\n  width: 38px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  border: 0;\n  background: transparent;\n  color: var(--ink);\n}\n.quantity-control button:disabled {\n  color: #b1b3ad;\n  cursor: not-allowed;\n}\n.quantity-control span {\n  min-width: 22px;\n  text-align: center;\n  font-size: 11px;\n}\n.add-button {\n  flex: 1;\n}\n.save-detail {\n  width: 46px;\n  height: 46px;\n  display: grid;\n  place-items: center;\n  border: 1px solid var(--line);\n  background: transparent;\n  color: var(--ink);\n  font-size: 19px;\n}\n.save-detail.saved {\n  color: var(--coral);\n}\n.detail-promises {\n  display: grid;\n  gap: 12px;\n  margin-top: 23px;\n  padding-block: 17px;\n  border-block: 1px solid var(--line);\n}\n.detail-promises div {\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  color: #5f665d;\n  font-size: 10px;\n}\n.detail-promises ng-icon {\n  color: var(--sage-deep);\n  font-size: 16px;\n}\n.product-details {\n  border-bottom: 1px solid var(--line);\n}\n.product-details summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-block: 16px;\n  cursor: pointer;\n  font-size: 11px;\n  font-weight: 600;\n  list-style: none;\n}\n.product-details summary::-webkit-details-marker {\n  display: none;\n}\n.product-details p {\n  color: var(--muted);\n  font-size: 11px;\n  line-height: 1.7;\n}\n.detail-message {\n  min-height: 420px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  text-align: center;\n  color: var(--muted);\n}\n.detail-message h1 {\n  margin: 0;\n  color: var(--ink);\n  font-family: var(--font-display);\n  font-size: 36px;\n  font-weight: 500;\n}\n@media (max-width: 760px) {\n  .detail-layout {\n    grid-template-columns: 1fr;\n    gap: 22px;\n  }\n  .detail-copy {\n    padding-top: 3px;\n  }\n  .detail-copy h1 {\n    font-size: 36px;\n  }\n  .main-image {\n    max-height: 440px;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src/app/features/product-detail/product-detail.component.ts", lineNumber: 23 });
})();
export {
  ProductDetailComponent
};
//# debugId=325328ed-883a-5020-b241-c1d7edd0fe1a
//# sourceMappingURL=chunk-KHF4EMT4.js.map
