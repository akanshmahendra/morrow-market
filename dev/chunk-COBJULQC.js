import {
  NG_ICON_DIRECTIVES,
  NgIcon
} from "./chunk-JKLOG7BW.js";
import {
  Component,
  CurrencyPipe,
  DecimalPipe,
  Input,
  NgOptimizedImage,
  Output,
  RouterLink,
  computed,
  discountedUnitPrice,
  input,
  output,
  setClassMetadata,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CU7B2LGP.js";

// src/app/shared/product-card.component.ts
var _c0 = (a0) => ["/product", a0];
function ProductCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "A little less");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ng-icon", 8);
  }
}
function ProductCardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.product().price));
  }
}
var ProductCardComponent = class _ProductCardComponent {
  product = input.required(
    ...ngDevMode ? [{ debugName: "product" }] : (
      /* istanbul ignore next */
      []
    )
  );
  favorite = input(
    false,
    ...ngDevMode ? [{ debugName: "favorite" }] : (
      /* istanbul ignore next */
      []
    )
  );
  priority = input(
    false,
    ...ngDevMode ? [{ debugName: "priority" }] : (
      /* istanbul ignore next */
      []
    )
  );
  add = output();
  toggleFavorite = output();
  salePrice = computed(
    () => discountedUnitPrice(this.product()),
    ...ngDevMode ? [{ debugName: "salePrice" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addToBag() {
    this.add.emit(this.product());
  }
  toggleSaved() {
    this.toggleFavorite.emit(this.product().id);
  }
  static \u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: [1, "product"], favorite: [1, "favorite"], priority: [1, "priority"] }, outputs: { add: "add", toggleFavorite: "toggleFavorite" }, decls: 25, vars: 28, consts: [[1, "product-card"], [1, "product-visual"], [1, "product-image", 3, "routerLink"], ["width", "520", "height", "520", 3, "ngSrc", "alt", "priority"], [1, "product-tag"], ["type", "button", 1, "save-button", 3, "click"], ["name", "lucideHeart", "aria-hidden", "true"], ["type", "button", 1, "quick-add", 3, "click", "disabled"], ["name", "lucidePlus", "aria-hidden", "true"], [1, "product-copy"], [1, "product-meta"], [1, "rating"], [1, "product-title", 3, "routerLink"], [1, "product-price"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "article", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, ProductCardComponent_Conditional_4_Template, 2, 0, "span", 4);
      \u0275\u0275elementStart(5, "button", 5);
      \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_5_listener() {
        return ctx.toggleSaved();
      });
      \u0275\u0275element(6, "ng-icon", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_7_listener() {
        return ctx.addToBag();
      });
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ProductCardComponent_Conditional_10_Template, 1, 0, "ng-icon", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "span");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 11);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "a", 12);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "span");
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "currency");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, ProductCardComponent_Conditional_24_Template, 3, 3, "del");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c0, ctx.product().id));
      \u0275\u0275attribute("aria-label", "View " + ctx.product().title);
      \u0275\u0275advance();
      \u0275\u0275property("ngSrc", ctx.product().thumbnail)("alt", ctx.product().title)("priority", ctx.priority());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product().discountPercentage > 10 ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("is-saved", ctx.favorite());
      \u0275\u0275attribute("aria-pressed", ctx.favorite())("aria-label", ctx.favorite() ? "Remove from saved items" : "Save item");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.product().stock < 1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.product().stock > 0 ? "Add to bag" : "Sold out");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product().stock > 0 ? 10 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.product().brand || ctx.product().category);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("\u2605 ", \u0275\u0275pipeBind2(17, 19, ctx.product().rating, "1.1-1"));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(26, _c0, ctx.product().id));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.product().title);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 22, ctx.salePrice()));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.product().discountPercentage > 0 ? 24 : -1);
    }
  }, dependencies: [NgOptimizedImage, RouterLink, NgIcon, CurrencyPipe, DecimalPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.product-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.product-visual[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 1/1.05;\n  background: #ecebe5;\n}\n.product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.045);\n}\n.product-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 11px;\n  left: 11px;\n  padding: 6px 8px;\n  background: var(--%NS%surface);\n  color: var(--%NS%ink);\n  font-size: 9px;\n  font-weight: 700;\n}\n.save-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 9px;\n  right: 9px;\n  width: 34px;\n  height: 34px;\n  display: grid;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  background: var(--%NS%surface);\n  color: var(--%NS%ink);\n  font-size: 17px;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.save-button[_ngcontent-%COMP%]:hover, \n.save-button.is-saved[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n}\n.save-button.is-saved[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  fill: currentColor;\n}\n.quick-add[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  left: 10px;\n  min-height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 12px;\n  border: 0;\n  background: var(--%NS%ink);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0;\n  transform: translateY(6px);\n  transition:\n    opacity 0.2s ease,\n    transform 0.2s ease,\n    background 0.2s ease;\n}\n.quick-add[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--%NS%sage-deep);\n}\n.quick-add[_ngcontent-%COMP%]:disabled {\n  background: #777;\n  cursor: not-allowed;\n}\n.quick-add[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.product-card[_ngcontent-%COMP%]:hover   .quick-add[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%]:focus-within   .quick-add[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.product-copy[_ngcontent-%COMP%] {\n  padding-top: 11px;\n}\n.product-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  color: var(--%NS%muted);\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.rating[_ngcontent-%COMP%] {\n  flex: none;\n  color: #9b7130;\n  text-transform: none;\n}\n.product-title[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  margin-top: 5px;\n  font-family: var(--%NS%font-display);\n  font-size: 17px;\n  line-height: 1.2;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.product-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin-top: 5px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.product-price[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  color: #92958e;\n  font-size: 10px;\n  font-weight: 400;\n}\n@media (max-width: 760px) {\n  .quick-add[_ngcontent-%COMP%] {\n    min-height: 35px;\n    right: 7px;\n    bottom: 7px;\n    left: 7px;\n    opacity: 1;\n    transform: none;\n  }\n  .product-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=product-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCardComponent, [{
    type: Component,
    args: [{ selector: "app-product-card", imports: [CurrencyPipe, DecimalPipe, NgOptimizedImage, RouterLink, NG_ICON_DIRECTIVES], template: `<article class="product-card">
  <div class="product-visual">
    <a
      class="product-image"
      [routerLink]="['/product', product().id]"
      [attr.aria-label]="'View ' + product().title"
    >
      <img
        [ngSrc]="product().thumbnail"
        [alt]="product().title"
        width="520"
        height="520"
        [priority]="priority()"
      />
    </a>
    @if (product().discountPercentage > 10) {
      <span class="product-tag">A little less</span>
    }
    <button
      class="save-button"
      type="button"
      [class.is-saved]="favorite()"
      [attr.aria-pressed]="favorite()"
      [attr.aria-label]="favorite() ? 'Remove from saved items' : 'Save item'"
      (click)="toggleSaved()"
    >
      <ng-icon name="lucideHeart" aria-hidden="true" />
    </button>
    <button class="quick-add" type="button" [disabled]="product().stock < 1" (click)="addToBag()">
      <span>{{ product().stock > 0 ? 'Add to bag' : 'Sold out' }}</span>
      @if (product().stock > 0) {
        <ng-icon name="lucidePlus" aria-hidden="true" />
      }
    </button>
  </div>
  <div class="product-copy">
    <div class="product-meta">
      <span>{{ product().brand || product().category }}</span>
      <span class="rating">\u2605 {{ product().rating | number: '1.1-1' }}</span>
    </div>
    <a class="product-title" [routerLink]="['/product', product().id]">{{ product().title }}</a>
    <div class="product-price">
      <span>{{ salePrice() | currency }}</span>
      @if (product().discountPercentage > 0) {
        <del>{{ product().price | currency }}</del>
      }
    </div>
  </div>
</article>
`, styles: ["/* src/app/shared/product-card.component.scss */\n:host {\n  display: block;\n  min-width: 0;\n}\n.product-card {\n  min-width: 0;\n}\n.product-visual {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 1/1.05;\n  background: #ecebe5;\n}\n.product-image {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.product-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);\n}\n.product-card:hover .product-image img {\n  transform: scale(1.045);\n}\n.product-tag {\n  position: absolute;\n  top: 11px;\n  left: 11px;\n  padding: 6px 8px;\n  background: var(--surface);\n  color: var(--ink);\n  font-size: 9px;\n  font-weight: 700;\n}\n.save-button {\n  position: absolute;\n  top: 9px;\n  right: 9px;\n  width: 34px;\n  height: 34px;\n  display: grid;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  background: var(--surface);\n  color: var(--ink);\n  font-size: 17px;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.save-button:hover,\n.save-button.is-saved {\n  color: var(--coral);\n}\n.save-button.is-saved ng-icon {\n  fill: currentColor;\n}\n.quick-add {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  left: 10px;\n  min-height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 12px;\n  border: 0;\n  background: var(--ink);\n  color: white;\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0;\n  transform: translateY(6px);\n  transition:\n    opacity 0.2s ease,\n    transform 0.2s ease,\n    background 0.2s ease;\n}\n.quick-add:hover:not(:disabled) {\n  background: var(--sage-deep);\n}\n.quick-add:disabled {\n  background: #777;\n  cursor: not-allowed;\n}\n.quick-add ng-icon {\n  font-size: 16px;\n}\n.product-card:hover .quick-add,\n.product-card:focus-within .quick-add {\n  opacity: 1;\n  transform: translateY(0);\n}\n.product-copy {\n  padding-top: 11px;\n}\n.product-meta {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  color: var(--muted);\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.rating {\n  flex: none;\n  color: #9b7130;\n  text-transform: none;\n}\n.product-title {\n  display: block;\n  overflow: hidden;\n  margin-top: 5px;\n  font-family: var(--font-display);\n  font-size: 17px;\n  line-height: 1.2;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.product-price {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin-top: 5px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.product-price del {\n  color: #92958e;\n  font-size: 10px;\n  font-weight: 400;\n}\n@media (max-width: 760px) {\n  .quick-add {\n    min-height: 35px;\n    right: 7px;\n    bottom: 7px;\n    left: 7px;\n    opacity: 1;\n    transform: none;\n  }\n  .product-title {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=product-card.component.css.map */\n"] }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: true }] }], favorite: [{ type: Input, args: [{ isSignal: true, alias: "favorite", required: false }] }], priority: [{ type: Input, args: [{ isSignal: true, alias: "priority", required: false }] }], add: [{ type: Output, args: ["add"] }], toggleFavorite: [{ type: Output, args: ["toggleFavorite"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src/app/shared/product-card.component.ts", lineNumber: 14 });
})();

export {
  ProductCardComponent
};
//# debugId=5f67d0de-6e05-5c89-8694-800c2149cadd
//# sourceMappingURL=chunk-COBJULQC.js.map
