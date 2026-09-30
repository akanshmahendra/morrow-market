import {
  ProductCardComponent
} from "./chunk-5L7WR5PE.js";
import {
  addToCart,
  loadCatalog,
  setCategory,
  setSort,
  showMoreProducts,
  toggleWishlist
} from "./chunk-TJIYVG26.js";
import {
  NG_ICON_DIRECTIVES,
  NgIcon
} from "./chunk-6WX6LQWI.js";
import {
  ActivatedRoute,
  Component,
  DestroyRef,
  Store,
  computed,
  inject,
  selectCanShowMore,
  selectCatalogError,
  selectCatalogLoading,
  selectCategories,
  selectCategory,
  selectFilteredProducts,
  selectVisibleProducts,
  selectWishlistIds,
  setClassMetadata,
  takeUntilDestroyed,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5QH7RXCL.js";

// src/app/features/storefront/storefront.component.ts
var _forTrack0 = ($index, $item) => $item.slug;
var _forTrack1 = ($index, $item) => $item.id;
function StorefrontComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function StorefrontComponent_For_47_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCategory(category_r2.slug));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedCategory() === category_r2.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r2.name);
  }
}
function StorefrontComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "span", 34);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Finding the good stuff\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StorefrontComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275listener("click", function StorefrontComponent_Conditional_65_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retry());
    });
    \u0275\u0275text(4, "Try again");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function StorefrontComponent_Conditional_66_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-card", 39);
    \u0275\u0275listener("add", function StorefrontComponent_Conditional_66_For_2_Template_app_product_card_add_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addToCart($event));
    })("toggleFavorite", function StorefrontComponent_Conditional_66_For_2_Template_app_product_card_toggleFavorite_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleWishlist($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const \u0275$index_128_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("product", product_r6)("favorite", ctx_r2.wishlistIds().includes(product_r6.id))("priority", \u0275$index_128_r7 === 0);
  }
}
function StorefrontComponent_Conditional_66_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 35);
    \u0275\u0275listener("click", function StorefrontComponent_Conditional_66_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showMore());
    });
    \u0275\u0275text(2, "Show me more ");
    \u0275\u0275element(3, "ng-icon", 6);
    \u0275\u0275elementEnd()();
  }
}
function StorefrontComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275repeaterCreate(1, StorefrontComponent_Conditional_66_For_2_Template, 1, 3, "app-product-card", 37, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, StorefrontComponent_Conditional_66_Conditional_3_Template, 4, 0, "div", 38);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.products());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.canShowMore() ? 3 : -1);
  }
}
function StorefrontComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 4);
    \u0275\u0275text(2, "Nothing here just yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try another search or category to find your next favorite.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function StorefrontComponent_Conditional_67_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setCategory("all"));
    });
    \u0275\u0275text(6, "See everything");
    \u0275\u0275elementEnd()();
  }
}
var StorefrontComponent = class _StorefrontComponent {
  store = inject(Store);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  products = this.store.selectSignal(selectVisibleProducts);
  filteredProducts = this.store.selectSignal(selectFilteredProducts);
  resultCount = computed(
    () => this.filteredProducts().length,
    ...ngDevMode ? [{ debugName: "resultCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  categories = this.store.selectSignal(selectCategories);
  selectedCategory = this.store.selectSignal(selectCategory);
  loading = this.store.selectSignal(selectCatalogLoading);
  error = this.store.selectSignal(selectCatalogError);
  canShowMore = this.store.selectSignal(selectCanShowMore);
  wishlistIds = this.store.selectSignal(selectWishlistIds);
  ngOnInit() {
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.store.dispatch(setCategory({ category: params.get("category") ?? "all" }));
    });
  }
  setCategory(category) {
    this.store.dispatch(setCategory({ category }));
  }
  setSort(event) {
    this.store.dispatch(setSort({ sort: event.target.value }));
  }
  addToCart(product) {
    this.store.dispatch(addToCart({ product }));
  }
  toggleWishlist(productId) {
    this.store.dispatch(toggleWishlist({ productId }));
  }
  retry() {
    this.store.dispatch(loadCatalog());
  }
  showMore() {
    this.store.dispatch(showMoreProducts());
  }
  static \u0275fac = function StorefrontComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorefrontComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorefrontComponent, selectors: [["app-storefront"]], decls: 76, vars: 4, consts: [[1, "hero"], ["src", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2200&q=85", "alt", "A sunlit independent shop with carefully arranged goods", "fetchpriority", "high", 1, "hero-photo"], [1, "hero-shade"], [1, "hero-copy", "page-wrap"], [1, "eyebrow"], ["href", "#discover", 1, "hero-link"], ["name", "lucideArrowRight", "aria-hidden", "true"], [1, "hero-index"], ["aria-label", "Shopping benefits", 1, "benefits", "page-wrap"], [1, "benefit"], ["name", "lucideSparkles", "aria-hidden", "true"], ["name", "lucideTruck", "aria-hidden", "true"], ["name", "lucideShieldCheck", "aria-hidden", "true"], ["id", "discover", 1, "collection", "page-wrap"], [1, "collection-heading"], [1, "display-title"], ["aria-label", "Filter by category", 1, "category-strip"], ["type", "button", 3, "click"], ["type", "button", 3, "active"], [1, "catalog-toolbar"], [1, "result-count"], [1, "sort-control"], ["aria-label", "Sort products", 3, "change"], ["value", "featured"], ["value", "price-low"], ["value", "price-high"], ["value", "rating"], ["name", "lucideChevronDown", "aria-hidden", "true"], ["role", "status", 1, "loading-state"], ["role", "alert", 1, "empty-state"], [1, "empty-state"], [1, "note-band"], [1, "note-inner", "page-wrap"], [1, "note-mark"], [1, "loader"], ["type", "button", 1, "secondary-button", 3, "click"], [1, "product-grid"], [3, "product", "favorite", "priority"], [1, "load-more"], [3, "add", "toggleFavorite", "product", "favorite", "priority"]], template: function StorefrontComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "img", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "The Morrow edit \xB7 No. 04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Find the good");
      \u0275\u0275element(8, "br");
      \u0275\u0275text(9, "in the everyday.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "Useful, beautiful things for home, self, and all the little moments between.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 5);
      \u0275\u0275text(13, "Explore the collection ");
      \u0275\u0275element(14, "ng-icon", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "span");
      \u0275\u0275text(17, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " / 04");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "section", 8)(20, "div", 9);
      \u0275\u0275element(21, "ng-icon", 10);
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "Considered finds, never filler");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9);
      \u0275\u0275element(25, "ng-icon", 11);
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "Free delivery over $75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 9);
      \u0275\u0275element(29, "ng-icon", 12);
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Easy 30-day returns");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "section", 13)(33, "div", 14)(34, "div")(35, "span", 4);
      \u0275\u0275text(36, "A good place to start");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "h2", 15);
      \u0275\u0275text(38, "Find your next favorite.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "p");
      \u0275\u0275text(40, "Little upgrades. Longtime keepers. Things that just feel right.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 16)(42, "button", 17);
      \u0275\u0275listener("click", function StorefrontComponent_Template_button_click_42_listener() {
        return ctx.setCategory("all");
      });
      \u0275\u0275text(43, "Everything ");
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "\u2197");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(46, StorefrontComponent_For_47_Template, 2, 3, "button", 18, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 19)(49, "p", 20);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "label", 21)(52, "span");
      \u0275\u0275text(53, "Sort by");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "select", 22);
      \u0275\u0275listener("change", function StorefrontComponent_Template_select_change_54_listener($event) {
        return ctx.setSort($event);
      });
      \u0275\u0275elementStart(55, "option", 23);
      \u0275\u0275text(56, "Featured");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "option", 24);
      \u0275\u0275text(58, "Price: low to high");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "option", 25);
      \u0275\u0275text(60, "Price: high to low");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "option", 26);
      \u0275\u0275text(62, "Top rated");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(63, "ng-icon", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(64, StorefrontComponent_Conditional_64_Template, 4, 0, "div", 28)(65, StorefrontComponent_Conditional_65_Template, 5, 1, "div", 29)(66, StorefrontComponent_Conditional_66_Template, 4, 1)(67, StorefrontComponent_Conditional_67_Template, 7, 0, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "section", 31)(69, "div", 32)(70, "span", 4);
      \u0275\u0275text(71, "A note from us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "p");
      \u0275\u0275text(73, "\u201CThe things we keep close should make the everyday feel a little more like ours.\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span", 33);
      \u0275\u0275text(75, "Morrow, with care");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(42);
      \u0275\u0275classProp("active", ctx.selectedCategory() === "all");
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.categories());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.resultCount(), " good finds");
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.loading() ? 64 : ctx.error() ? 65 : ctx.products().length > 0 ? 66 : 67);
    }
  }, dependencies: [NgIcon, ProductCardComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 480px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  background: #34423b;\n  color: white;\n}\n.hero-photo[_ngcontent-%COMP%], \n.hero-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.hero-photo[_ngcontent-%COMP%] {\n  object-fit: cover;\n  object-position: center 56%;\n  animation: _ngcontent-%COMP%_hero-reveal 0.9s ease-out both;\n}\n.hero-shade[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(20, 29, 24, 0.78) 0%,\n      rgba(20, 29, 24, 0.5) 42%,\n      rgba(20, 29, 24, 0.06) 100%),\n    linear-gradient(\n      0deg,\n      rgba(20, 29, 24, 0.2),\n      transparent 45%);\n}\n.hero-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding-block: 70px;\n  animation: _ngcontent-%COMP%_rise-in 0.65s 0.08s both;\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #f4b27e;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 18px 0 13px;\n  font-family: var(--%NS%font-display);\n  font-size: 72px;\n  font-weight: 400;\n  line-height: 0.98;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0;\n  color: #e3e3dc;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.hero-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 27px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #f3bd91;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n}\n.hero-link[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.2s ease;\n}\n.hero-link[_ngcontent-%COMP%]:hover   ng-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.hero-index[_ngcontent-%COMP%] {\n  position: absolute;\n  right: max(32px, (100vw - 1240px) / 2);\n  bottom: 28px;\n  color: #dddcd3;\n  font-size: 10px;\n}\n.hero-index[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\n.benefits[_ngcontent-%COMP%] {\n  min-height: 70px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.benefit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 9px;\n  color: #52594f;\n  font-size: 10px;\n}\n.benefit[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n  font-size: 17px;\n}\n.collection[_ngcontent-%COMP%] {\n  padding-top: 78px;\n  padding-bottom: 85px;\n  scroll-margin-top: 20px;\n}\n.collection-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  gap: 20px;\n}\n.collection-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.collection-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 260px;\n  margin: 0 0 4px;\n  color: var(--%NS%muted);\n  font-size: 12px;\n  line-height: 1.7;\n}\n.category-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  overflow-x: auto;\n  margin-top: 28px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--%NS%line);\n  scrollbar-width: none;\n}\n.category-strip[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.category-strip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: none;\n  min-height: 33px;\n  padding: 0 12px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 2px;\n  background: transparent;\n  color: #5e625b;\n  font-size: 10px;\n  text-transform: capitalize;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease;\n}\n.category-strip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.category-strip[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: var(--%NS%ink);\n  background: var(--%NS%ink);\n  color: white;\n}\n.category-strip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  color: #edaa7c;\n}\n.catalog-toolbar[_ngcontent-%COMP%] {\n  min-height: 61px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.result-count[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--%NS%muted);\n  font-size: 11px;\n}\n.sort-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--%NS%muted);\n  font-size: 10px;\n}\n.sort-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  max-width: 150px;\n  appearance: none;\n  padding: 8px 2px;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%ink);\n  font-size: 11px;\n}\n.sort-control[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  margin-left: -8px;\n  color: var(--%NS%ink);\n  pointer-events: none;\n}\n.product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 34px 18px;\n}\n.loading-state[_ngcontent-%COMP%] {\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  color: var(--%NS%muted);\n  font-family: var(--%NS%font-display);\n  font-size: 18px;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border: 2px solid var(--%NS%line);\n  border-top-color: var(--%NS%coral);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.75s linear infinite;\n}\n.empty-state[_ngcontent-%COMP%] {\n  min-height: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 13px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 13px;\n}\n.load-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 42px;\n}\n.note-band[_ngcontent-%COMP%] {\n  padding-block: 48px;\n  background: #e8ede4;\n}\n.note-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr minmax(200px, 2fr) 1fr;\n  align-items: center;\n  gap: 25px;\n}\n.note-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--%NS%font-display);\n  font-size: 24px;\n  line-height: 1.3;\n}\n.note-mark[_ngcontent-%COMP%] {\n  justify-self: end;\n  color: var(--%NS%sage-deep);\n  font-family: var(--%NS%font-display);\n  font-size: 14px;\n  font-style: italic;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_rise-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_hero-reveal {\n  from {\n    transform: scale(1.025);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@media (max-width: 900px) {\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .note-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 2fr;\n  }\n  .note-mark[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .hero[_ngcontent-%COMP%] {\n    min-height: 490px;\n    align-items: end;\n  }\n  .hero-photo[_ngcontent-%COMP%] {\n    object-position: 57% center;\n  }\n  .hero-shade[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        0deg,\n        rgba(20, 29, 24, 0.82) 0%,\n        rgba(20, 29, 24, 0.48) 48%,\n        rgba(20, 29, 24, 0.04) 100%);\n  }\n  .hero-copy[_ngcontent-%COMP%] {\n    padding-block: 40px 64px;\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 54px;\n  }\n  .hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 320px;\n    font-size: 13px;\n  }\n  .hero-index[_ngcontent-%COMP%] {\n    right: 18px;\n    bottom: 18px;\n  }\n  .benefits[_ngcontent-%COMP%] {\n    min-height: 72px;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 7px;\n  }\n  .benefit[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n    text-align: center;\n    font-size: 8px;\n  }\n  .benefit[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .collection[_ngcontent-%COMP%] {\n    padding-block: 54px 60px;\n  }\n  .collection-heading[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .collection-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .category-strip[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .catalog-toolbar[_ngcontent-%COMP%] {\n    min-height: 54px;\n  }\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 28px 12px;\n  }\n  .note-inner[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .note-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 12px;\n    font-size: 21px;\n  }\n}\n/*# sourceMappingURL=storefront.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorefrontComponent, [{
    type: Component,
    args: [{ selector: "app-storefront", imports: [NG_ICON_DIRECTIVES, ProductCardComponent], template: `<section class="hero">
  <img
    class="hero-photo"
    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2200&q=85"
    alt="A sunlit independent shop with carefully arranged goods"
    fetchpriority="high"
  />
  <div class="hero-shade"></div>
  <div class="hero-copy page-wrap">
    <span class="eyebrow">The Morrow edit \xB7 No. 04</span>
    <h1>Find the good<br />in the everyday.</h1>
    <p>Useful, beautiful things for home, self, and all the little moments between.</p>
    <a class="hero-link" href="#discover">Explore the collection <ng-icon name="lucideArrowRight" aria-hidden="true" /></a>
  </div>
  <div class="hero-index"><span>01</span> / 04</div>
</section>

<section class="benefits page-wrap" aria-label="Shopping benefits">
  <div class="benefit"><ng-icon name="lucideSparkles" aria-hidden="true" /><span>Considered finds, never filler</span></div>
  <div class="benefit"><ng-icon name="lucideTruck" aria-hidden="true" /><span>Free delivery over $75</span></div>
  <div class="benefit"><ng-icon name="lucideShieldCheck" aria-hidden="true" /><span>Easy 30-day returns</span></div>
</section>

<section class="collection page-wrap" id="discover">
  <div class="collection-heading">
    <div>
      <span class="eyebrow">A good place to start</span>
      <h2 class="display-title">Find your next favorite.</h2>
    </div>
    <p>Little upgrades. Longtime keepers. Things that just feel right.</p>
  </div>

  <div class="category-strip" aria-label="Filter by category">
    <button type="button" [class.active]="selectedCategory() === 'all'" (click)="setCategory('all')">Everything <span>\u2197</span></button>
    @for (category of categories(); track category.slug) {
      <button type="button" [class.active]="selectedCategory() === category.slug" (click)="setCategory(category.slug)">{{ category.name }}</button>
    }
  </div>

  <div class="catalog-toolbar">
    <p class="result-count">{{ resultCount() }} good finds</p>
    <label class="sort-control">
      <span>Sort by</span>
      <select aria-label="Sort products" (change)="setSort($event)">
        <option value="featured">Featured</option>
        <option value="price-low">Price: low to high</option>
        <option value="price-high">Price: high to low</option>
        <option value="rating">Top rated</option>
      </select>
      <ng-icon name="lucideChevronDown" aria-hidden="true" />
    </label>
  </div>

  @if (loading()) {
    <div class="loading-state" role="status"><span class="loader"></span><p>Finding the good stuff\u2026</p></div>
  } @else if (error()) {
    <div class="empty-state" role="alert"><p>{{ error() }}</p><button class="secondary-button" type="button" (click)="retry()">Try again</button></div>
  } @else if (products().length > 0) {
    <div class="product-grid">
      @for (product of products(); track product.id; let first = $first) {
        <app-product-card
          [product]="product"
          [favorite]="wishlistIds().includes(product.id)"
          [priority]="first"
          (add)="addToCart($event)"
          (toggleFavorite)="toggleWishlist($event)"
        />
      }
    </div>
    @if (canShowMore()) {
      <div class="load-more"><button class="secondary-button" type="button" (click)="showMore()">Show me more <ng-icon name="lucideArrowRight" aria-hidden="true" /></button></div>
    }
  } @else {
    <div class="empty-state"><span class="eyebrow">Nothing here just yet</span><p>Try another search or category to find your next favorite.</p><button class="secondary-button" type="button" (click)="setCategory('all')">See everything</button></div>
  }
</section>

<section class="note-band">
  <div class="note-inner page-wrap">
    <span class="eyebrow">A note from us</span>
    <p>\u201CThe things we keep close should make the everyday feel a little more like ours.\u201D</p>
    <span class="note-mark">Morrow, with care</span>
  </div>
</section>`, styles: ["/* src/app/features/storefront/storefront.component.scss */\n:host {\n  display: block;\n}\n.hero {\n  position: relative;\n  min-height: 480px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  background: #34423b;\n  color: white;\n}\n.hero-photo,\n.hero-shade {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.hero-photo {\n  object-fit: cover;\n  object-position: center 56%;\n  animation: hero-reveal 0.9s ease-out both;\n}\n.hero-shade {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(20, 29, 24, 0.78) 0%,\n      rgba(20, 29, 24, 0.5) 42%,\n      rgba(20, 29, 24, 0.06) 100%),\n    linear-gradient(\n      0deg,\n      rgba(20, 29, 24, 0.2),\n      transparent 45%);\n}\n.hero-copy {\n  position: relative;\n  z-index: 1;\n  padding-block: 70px;\n  animation: rise-in 0.65s 0.08s both;\n}\n.hero .eyebrow {\n  color: #f4b27e;\n}\n.hero h1 {\n  max-width: 640px;\n  margin: 18px 0 13px;\n  font-family: var(--font-display);\n  font-size: 72px;\n  font-weight: 400;\n  line-height: 0.98;\n}\n.hero-copy p {\n  max-width: 400px;\n  margin: 0;\n  color: #e3e3dc;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.hero-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 27px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #f3bd91;\n  color: white;\n  font-size: 12px;\n  font-weight: 600;\n}\n.hero-link ng-icon {\n  font-size: 16px;\n  transition: transform 0.2s ease;\n}\n.hero-link:hover ng-icon {\n  transform: translateX(4px);\n}\n.hero-index {\n  position: absolute;\n  right: max(32px, (100vw - 1240px) / 2);\n  bottom: 28px;\n  color: #dddcd3;\n  font-size: 10px;\n}\n.hero-index span {\n  color: white;\n}\n.benefits {\n  min-height: 70px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  border-bottom: 1px solid var(--line);\n}\n.benefit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 9px;\n  color: #52594f;\n  font-size: 10px;\n}\n.benefit ng-icon {\n  color: var(--coral);\n  font-size: 17px;\n}\n.collection {\n  padding-top: 78px;\n  padding-bottom: 85px;\n  scroll-margin-top: 20px;\n}\n.collection-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  gap: 20px;\n}\n.collection-heading .eyebrow {\n  display: block;\n  margin-bottom: 10px;\n}\n.collection-heading p {\n  max-width: 260px;\n  margin: 0 0 4px;\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.7;\n}\n.category-strip {\n  display: flex;\n  gap: 9px;\n  overflow-x: auto;\n  margin-top: 28px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--line);\n  scrollbar-width: none;\n}\n.category-strip::-webkit-scrollbar {\n  display: none;\n}\n.category-strip button {\n  flex: none;\n  min-height: 33px;\n  padding: 0 12px;\n  border: 1px solid var(--line);\n  border-radius: 2px;\n  background: transparent;\n  color: #5e625b;\n  font-size: 10px;\n  text-transform: capitalize;\n  transition:\n    background 0.2s ease,\n    color 0.2s ease,\n    border-color 0.2s ease;\n}\n.category-strip button:hover,\n.category-strip button.active {\n  border-color: var(--ink);\n  background: var(--ink);\n  color: white;\n}\n.category-strip button span {\n  padding-left: 4px;\n  color: #edaa7c;\n}\n.catalog-toolbar {\n  min-height: 61px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.result-count {\n  margin: 0;\n  color: var(--muted);\n  font-size: 11px;\n}\n.sort-control {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--muted);\n  font-size: 10px;\n}\n.sort-control select {\n  max-width: 150px;\n  appearance: none;\n  padding: 8px 2px;\n  border: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 11px;\n}\n.sort-control ng-icon {\n  margin-left: -8px;\n  color: var(--ink);\n  pointer-events: none;\n}\n.product-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 34px 18px;\n}\n.loading-state {\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  color: var(--muted);\n  font-family: var(--font-display);\n  font-size: 18px;\n}\n.loader {\n  width: 26px;\n  height: 26px;\n  border: 2px solid var(--line);\n  border-top-color: var(--coral);\n  border-radius: 50%;\n  animation: spin 0.75s linear infinite;\n}\n.empty-state {\n  min-height: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 13px;\n  text-align: center;\n}\n.empty-state p {\n  color: var(--muted);\n  font-size: 13px;\n}\n.load-more {\n  display: flex;\n  justify-content: center;\n  margin-top: 42px;\n}\n.note-band {\n  padding-block: 48px;\n  background: #e8ede4;\n}\n.note-inner {\n  display: grid;\n  grid-template-columns: 1fr minmax(200px, 2fr) 1fr;\n  align-items: center;\n  gap: 25px;\n}\n.note-inner p {\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: 24px;\n  line-height: 1.3;\n}\n.note-mark {\n  justify-self: end;\n  color: var(--sage-deep);\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-style: italic;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rise-in {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes hero-reveal {\n  from {\n    transform: scale(1.025);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n@media (max-width: 900px) {\n  .product-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .note-inner {\n    grid-template-columns: 1fr 2fr;\n  }\n  .note-mark {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .hero {\n    min-height: 490px;\n    align-items: end;\n  }\n  .hero-photo {\n    object-position: 57% center;\n  }\n  .hero-shade {\n    background:\n      linear-gradient(\n        0deg,\n        rgba(20, 29, 24, 0.82) 0%,\n        rgba(20, 29, 24, 0.48) 48%,\n        rgba(20, 29, 24, 0.04) 100%);\n  }\n  .hero-copy {\n    padding-block: 40px 64px;\n  }\n  .hero h1 {\n    font-size: 54px;\n  }\n  .hero-copy p {\n    max-width: 320px;\n    font-size: 13px;\n  }\n  .hero-index {\n    right: 18px;\n    bottom: 18px;\n  }\n  .benefits {\n    min-height: 72px;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 7px;\n  }\n  .benefit {\n    flex-direction: column;\n    gap: 4px;\n    text-align: center;\n    font-size: 8px;\n  }\n  .benefit ng-icon {\n    font-size: 16px;\n  }\n  .collection {\n    padding-block: 54px 60px;\n  }\n  .collection-heading {\n    display: block;\n  }\n  .collection-heading p {\n    margin-top: 10px;\n  }\n  .category-strip {\n    margin-top: 20px;\n  }\n  .catalog-toolbar {\n    min-height: 54px;\n  }\n  .product-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 28px 12px;\n  }\n  .note-inner {\n    display: block;\n  }\n  .note-inner p {\n    margin-top: 12px;\n    font-size: 21px;\n  }\n}\n/*# sourceMappingURL=storefront.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorefrontComponent, { className: "StorefrontComponent", filePath: "src/app/features/storefront/storefront.component.ts", lineNumber: 26 });
})();
export {
  StorefrontComponent
};
//# debugId=25798ba6-83dc-5037-ace2-823c49f9eb30
//# sourceMappingURL=chunk-V3JDVWYF.js.map
