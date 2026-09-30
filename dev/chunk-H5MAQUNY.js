import {
  ProductCardComponent
} from "./chunk-COBJULQC.js";
import {
  addToCart,
  toggleWishlist
} from "./chunk-46YXLFEM.js";
import {
  NG_ICON_DIRECTIVES,
  NgIcon
} from "./chunk-JKLOG7BW.js";
import {
  Component,
  RouterLink,
  Store,
  inject,
  selectWishlistProducts,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtext
} from "./chunk-CU7B2LGP.js";

// src/app/features/wishlist/wishlist.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function WishlistComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-card", 7);
    \u0275\u0275listener("add", function WishlistComponent_Conditional_8_For_2_Template_app_product_card_add_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart($event));
    })("toggleFavorite", function WishlistComponent_Conditional_8_For_2_Template_app_product_card_toggleFavorite_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggle($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const \u0275$index_17_r4 = ctx.$index;
    \u0275\u0275property("product", product_r3)("favorite", true)("priority", \u0275$index_17_r4 === 0);
  }
}
function WishlistComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, WishlistComponent_Conditional_8_For_2_Template, 1, 3, "app-product-card", 6, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.products());
  }
}
function WishlistComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "ng-icon", 8);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Nothing tucked away yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Tap the heart on anything you like and it will be here.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 9);
    \u0275\u0275text(7, "Browse the collection");
    \u0275\u0275elementEnd()();
  }
}
var WishlistComponent = class _WishlistComponent {
  store = inject(Store);
  products = this.store.selectSignal(selectWishlistProducts);
  addToCart(product) {
    this.store.dispatch(addToCart({ product }));
  }
  toggle(productId) {
    this.store.dispatch(toggleWishlist({ productId }));
  }
  static \u0275fac = function WishlistComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistComponent, selectors: [["app-wishlist"]], decls: 10, vars: 1, consts: [[1, "wishlist-page", "page-wrap"], [1, "wishlist-heading"], [1, "eyebrow"], [1, "display-title"], [1, "wishlist-grid"], [1, "wishlist-empty"], [3, "product", "favorite", "priority"], [3, "add", "toggleFavorite", "product", "favorite", "priority"], ["name", "lucideHeart", "aria-hidden", "true"], ["routerLink", "/", 1, "primary-button"]], template: function WishlistComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Keep close");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 3);
      \u0275\u0275text(5, "Your saved finds.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Good things you\u2019d like to come back to.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, WishlistComponent_Conditional_8_Template, 3, 0, "div", 4)(9, WishlistComponent_Conditional_9_Template, 8, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.products().length > 0 ? 8 : 9);
    }
  }, dependencies: [RouterLink, ProductCardComponent, NgIcon], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.wishlist-page[_ngcontent-%COMP%] {\n  min-height: 430px;\n  padding-top: 55px;\n}\n.wishlist-heading[_ngcontent-%COMP%] {\n  padding-bottom: 23px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.wishlist-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.wishlist-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: var(--%NS%muted);\n  font-size: 12px;\n}\n.wishlist-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 34px 18px;\n  padding-top: 28px;\n}\n.wishlist-empty[_ngcontent-%COMP%] {\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  text-align: center;\n}\n.wishlist-empty[_ngcontent-%COMP%]    > ng-icon[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n  font-size: 26px;\n}\n.wishlist-empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--%NS%font-display);\n  font-size: 28px;\n  font-weight: 500;\n}\n.wishlist-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: var(--%NS%muted);\n  font-size: 12px;\n}\n@media (max-width: 850px) {\n  .wishlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 600px) {\n  .wishlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 28px 12px;\n  }\n}\n/*# sourceMappingURL=wishlist.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistComponent, [{
    type: Component,
    args: [{ selector: "app-wishlist", imports: [RouterLink, ProductCardComponent, NG_ICON_DIRECTIVES], template: `
    <section class="wishlist-page page-wrap">
      <div class="wishlist-heading">
        <span class="eyebrow">Keep close</span>
        <h1 class="display-title">Your saved finds.</h1>
        <p>Good things you\u2019d like to come back to.</p>
      </div>
      @if (products().length > 0) {
        <div class="wishlist-grid">
          @for (product of products(); track product.id; let first = $first) {
            <app-product-card
              [product]="product"
              [favorite]="true"
              [priority]="first"
              (add)="addToCart($event)"
              (toggleFavorite)="toggle($event)"
            />
          }
        </div>
      } @else {
        <div class="wishlist-empty">
          <ng-icon name="lucideHeart" aria-hidden="true" />
          <h2>Nothing tucked away yet.</h2>
          <p>Tap the heart on anything you like and it will be here.</p>
          <a class="primary-button" routerLink="/">Browse the collection</a>
        </div>
      }
    </section>
  `, styles: ["/* angular:styles/component:scss;324b311eb51b4b43;/home/runner/work/morrow-market/morrow-market/src/app/features/wishlist/wishlist.component.ts */\n:host {\n  display: block;\n}\n.wishlist-page {\n  min-height: 430px;\n  padding-top: 55px;\n}\n.wishlist-heading {\n  padding-bottom: 23px;\n  border-bottom: 1px solid var(--line);\n}\n.wishlist-heading .eyebrow {\n  display: block;\n  margin-bottom: 10px;\n}\n.wishlist-heading p {\n  margin: 10px 0 0;\n  color: var(--muted);\n  font-size: 12px;\n}\n.wishlist-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 34px 18px;\n  padding-top: 28px;\n}\n.wishlist-empty {\n  min-height: 320px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  text-align: center;\n}\n.wishlist-empty > ng-icon {\n  color: var(--coral);\n  font-size: 26px;\n}\n.wishlist-empty h2 {\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: 28px;\n  font-weight: 500;\n}\n.wishlist-empty p {\n  margin: 0 0 7px;\n  color: var(--muted);\n  font-size: 12px;\n}\n@media (max-width: 850px) {\n  .wishlist-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 600px) {\n  .wishlist-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 28px 12px;\n  }\n}\n/*# sourceMappingURL=wishlist.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistComponent, { className: "WishlistComponent", filePath: "src/app/features/wishlist/wishlist.component.ts", lineNumber: 106 });
})();
export {
  WishlistComponent
};
//# debugId=33398214-1491-56a5-b680-9e887cb9c18f
//# sourceMappingURL=chunk-H5MAQUNY.js.map
