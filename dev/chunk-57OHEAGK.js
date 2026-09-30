import {
  removeFromCart,
  setCartQuantity
} from "./chunk-TJIYVG26.js";
import {
  NG_ICON_DIRECTIVES,
  NgIcon
} from "./chunk-6WX6LQWI.js";
import {
  Component,
  CurrencyPipe,
  NgOptimizedImage,
  RouterLink,
  Store,
  computed,
  discountedUnitPrice,
  inject,
  selectCartDelivery,
  selectCartItems,
  selectCartSubtotal,
  selectCartTax,
  selectCartTotal,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5QH7RXCL.js";

// src/app/features/cart/cart.component.ts
var _c0 = (a0) => ["/product", a0];
var _forTrack0 = ($index, $item) => $item.product.id;
function CartComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.items().length, " ", ctx_r0.items().length === 1 ? "item" : "items");
  }
}
function CartComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 7);
    \u0275\u0275element(2, "ng-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 2);
    \u0275\u0275text(4, "Room for something good");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Your bag is taking a little break.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Find a thoughtful little upgrade and it will be waiting here.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 9);
    \u0275\u0275text(10, "Explore the collection ");
    \u0275\u0275element(11, "ng-icon", 10);
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_Conditional_9_For_3_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, item_r3.product.price * item_r3.quantity));
  }
}
function CartComponent_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 12)(1, "a", 24);
    \u0275\u0275element(2, "img", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 30)(11, "div", 31)(12, "button", 32);
    \u0275\u0275listener("click", function CartComponent_Conditional_9_For_3_Template_button_click_12_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setQuantity(item_r3, item_r3.quantity - 1));
    });
    \u0275\u0275element(13, "ng-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 32);
    \u0275\u0275listener("click", function CartComponent_Conditional_9_For_3_Template_button_click_16_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setQuantity(item_r3, item_r3.quantity + 1));
    });
    \u0275\u0275element(17, "ng-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 36);
    \u0275\u0275listener("click", function CartComponent_Conditional_9_For_3_Template_button_click_18_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(item_r3));
    });
    \u0275\u0275element(19, "ng-icon", 37);
    \u0275\u0275text(20, " Remove");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 38)(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, CartComponent_Conditional_9_For_3_Conditional_25_Template, 3, 3, "del");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, item_r3.product.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", item_r3.product.thumbnail)("alt", item_r3.product.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.product.brand || item_r3.product.category);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, item_r3.product.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.product.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.product.availabilityStatus);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Quantity for " + item_r3.product.title);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r3.quantity <= 1);
    \u0275\u0275attribute("aria-label", "Remove one " + item_r3.product.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r3.quantity >= item_r3.product.stock);
    \u0275\u0275attribute("aria-label", "Add one " + item_r3.product.title);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 15, ctx_r0.discountedPrice(item_r3) * item_r3.quantity));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(item_r3.product.discountPercentage > 0 ? 25 : -1);
  }
}
function CartComponent_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("You\u2019re ", \u0275\u0275pipeBind1(2, 1, ctx_r0.shippingGap()), " away from complimentary delivery.");
  }
}
function CartComponent_Conditional_9_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "ng-icon", 39);
    \u0275\u0275text(2, " Complimentary delivery is yours.");
    \u0275\u0275elementEnd();
  }
}
function CartComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 11);
    \u0275\u0275repeaterCreate(2, CartComponent_Conditional_9_For_3_Template, 26, 21, "article", 12, _forTrack0);
    \u0275\u0275elementStart(4, "a", 13);
    \u0275\u0275element(5, "ng-icon", 10);
    \u0275\u0275text(6, " Keep looking around");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "aside", 14)(8, "h2", 15);
    \u0275\u0275text(9, "A quick total");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, CartComponent_Conditional_9_Conditional_10_Template, 3, 3, "div", 16)(11, CartComponent_Conditional_9_Conditional_11_Template, 3, 0, "div", 17);
    \u0275\u0275elementStart(12, "div", 18)(13, "span");
    \u0275\u0275text(14, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 18)(19, "span");
    \u0275\u0275text(20, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 18)(25, "span");
    \u0275\u0275text(26, "Estimated tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 19)(31, "span");
    \u0275\u0275text(32, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 20);
    \u0275\u0275text(37, "Taxes are estimated and confirmed at checkout.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "a", 21);
    \u0275\u0275text(39, "Continue to checkout ");
    \u0275\u0275element(40, "ng-icon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 22);
    \u0275\u0275element(42, "ng-icon", 23);
    \u0275\u0275text(43, " Secure demo checkout");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.items());
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.shippingGap() > 0 ? 10 : 11);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 5, ctx_r0.subtotal()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.delivery() === 0 ? "Complimentary" : \u0275\u0275pipeBind1(23, 7, ctx_r0.delivery()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 9, ctx_r0.tax()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 11, ctx_r0.total()));
  }
}
var CartComponent = class _CartComponent {
  store = inject(Store);
  items = this.store.selectSignal(selectCartItems);
  subtotal = this.store.selectSignal(selectCartSubtotal);
  delivery = this.store.selectSignal(selectCartDelivery);
  tax = this.store.selectSignal(selectCartTax);
  total = this.store.selectSignal(selectCartTotal);
  shippingGap = computed(
    () => Math.max(75 - this.subtotal(), 0),
    ...ngDevMode ? [{ debugName: "shippingGap" }] : (
      /* istanbul ignore next */
      []
    )
  );
  setQuantity(item, quantity) {
    this.store.dispatch(setCartQuantity({ productId: item.product.id, quantity }));
  }
  remove(item) {
    this.store.dispatch(removeFromCart({ productId: item.product.id }));
  }
  discountedPrice(item) {
    return discountedUnitPrice(item.product);
  }
  static \u0275fac = function CartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], decls: 10, vars: 2, consts: [[1, "cart-page", "page-wrap"], [1, "page-heading"], [1, "eyebrow"], [1, "display-title"], [1, "item-count"], [1, "cart-empty"], [1, "cart-layout"], [1, "empty-mark"], ["name", "lucideShoppingBag", "aria-hidden", "true"], ["routerLink", "/", 1, "primary-button"], ["name", "lucideArrowRight", "aria-hidden", "true"], [1, "cart-lines"], [1, "cart-line"], ["routerLink", "/", 1, "continue-link"], ["aria-labelledby", "summary-title", 1, "order-summary"], ["id", "summary-title"], [1, "shipping-note"], [1, "shipping-note", "shipping-earned"], [1, "summary-row"], [1, "summary-total"], [1, "tax-note"], ["routerLink", "/checkout", 1, "primary-button", "checkout-button"], [1, "secure-note"], ["name", "lucideShieldCheck", "aria-hidden", "true"], [1, "line-image", 3, "routerLink"], ["width", "220", "height", "220", 3, "ngSrc", "alt"], [1, "line-info"], [1, "line-brand"], [1, "line-title", 3, "routerLink"], [1, "line-stock"], [1, "line-controls"], [1, "quantity-control"], ["type", "button", 3, "click", "disabled"], ["name", "lucideMinus", "aria-hidden", "true"], ["aria-live", "polite"], ["name", "lucidePlus", "aria-hidden", "true"], ["type", "button", 1, "remove-button", 3, "click"], ["name", "lucideTrash2", "aria-hidden", "true"], [1, "line-price"], ["name", "lucideCheck", "aria-hidden", "true"]], template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "Your picks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 3);
      \u0275\u0275text(6, "The shopping bag.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, CartComponent_Conditional_7_Template, 2, 2, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, CartComponent_Conditional_8_Template, 12, 0, "div", 5)(9, CartComponent_Conditional_9_Template, 44, 13, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.items().length > 0 ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.items().length === 0 ? 8 : 9);
    }
  }, dependencies: [NgOptimizedImage, RouterLink, NgIcon, CurrencyPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.cart-page[_ngcontent-%COMP%] {\n  min-height: 460px;\n  padding-top: 55px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 25px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.page-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.item-count[_ngcontent-%COMP%] {\n  padding-bottom: 7px;\n  color: var(--%NS%muted);\n  font-size: 11px;\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 330px;\n  align-items: start;\n  gap: 70px;\n  padding-top: 22px;\n}\n.cart-line[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 116px minmax(0, 1fr) auto;\n  gap: 19px;\n  padding-block: 22px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.line-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  aspect-ratio: 1;\n  background: #ecebe5;\n}\n.line-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.line-info[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.line-brand[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.line-title[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-family: var(--%NS%font-display);\n  font-size: 19px;\n}\n.line-stock[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  color: #6b765c;\n  font-size: 10px;\n}\n.line-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-top: auto;\n  padding-top: 15px;\n}\n.quantity-control[_ngcontent-%COMP%] {\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--%NS%line);\n}\n.quantity-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 30px;\n  display: grid;\n  place-items: center;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%ink);\n  font-size: 13px;\n}\n.quantity-control[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  color: #b1b3ad;\n  cursor: not-allowed;\n}\n.quantity-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 23px;\n  text-align: center;\n  font-size: 11px;\n}\n.remove-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 0;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%muted);\n  font-size: 10px;\n}\n.remove-button[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%coral);\n}\n.line-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  font-size: 12px;\n}\n.line-price[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  color: #999b95;\n  font-size: 10px;\n}\n.continue-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 20px;\n  color: var(--%NS%sage-deep);\n  font-size: 11px;\n  font-weight: 600;\n}\n.continue-link[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.order-summary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n  padding: 23px;\n  border: 1px solid var(--%NS%line);\n  background: #fbfaf5;\n}\n.order-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-family: var(--%NS%font-display);\n  font-size: 24px;\n  font-weight: 500;\n}\n.shipping-note[_ngcontent-%COMP%] {\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 13px;\n  padding: 8px 10px;\n  background: #f0e9d9;\n  color: #705c37;\n  font-size: 10px;\n  line-height: 1.4;\n}\n.shipping-earned[_ngcontent-%COMP%] {\n  background: #e5ece1;\n  color: var(--%NS%sage-deep);\n}\n.summary-row[_ngcontent-%COMP%], \n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding-block: 10px;\n  font-size: 11px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n}\n.summary-total[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding-top: 15px;\n  border-top: 1px solid var(--%NS%line);\n  font-size: 13px;\n}\n.summary-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.tax-note[_ngcontent-%COMP%] {\n  margin: 6px 0 15px;\n  color: var(--%NS%muted);\n  font-size: 9px;\n}\n.checkout-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.secure-note[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  margin-top: 14px;\n  color: var(--%NS%muted);\n  font-size: 9px;\n}\n.cart-empty[_ngcontent-%COMP%] {\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.empty-mark[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 20px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 50%;\n  color: var(--%NS%sage-deep);\n  font-size: 21px;\n}\n.cart-empty[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.cart-empty[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--%NS%font-display);\n  font-size: 30px;\n  font-weight: 500;\n}\n.cart-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 21px;\n  color: var(--%NS%muted);\n  font-size: 12px;\n}\n@media (max-width: 850px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) 280px;\n    gap: 25px;\n  }\n  .order-summary[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n@media (max-width: 650px) {\n  .cart-page[_ngcontent-%COMP%] {\n    padding-top: 38px;\n  }\n  .cart-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 34px;\n  }\n  .cart-lines[_ngcontent-%COMP%], \n   .order-summary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .order-summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .cart-line[_ngcontent-%COMP%] {\n    grid-template-columns: 84px minmax(0, 1fr) auto;\n    gap: 12px;\n  }\n  .line-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .line-price[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .remove-button[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartComponent, [{
    type: Component,
    args: [{ selector: "app-cart", imports: [CurrencyPipe, NgOptimizedImage, RouterLink, NG_ICON_DIRECTIVES], template: `<section class="cart-page page-wrap">
  <div class="page-heading">
    <div><span class="eyebrow">Your picks</span><h1 class="display-title">The shopping bag.</h1></div>
    @if (items().length > 0) { <span class="item-count">{{ items().length }} {{ items().length === 1 ? 'item' : 'items' }}</span> }
  </div>

  @if (items().length === 0) {
    <div class="cart-empty">
      <div class="empty-mark"><ng-icon name="lucideShoppingBag" aria-hidden="true" /></div>
      <span class="eyebrow">Room for something good</span>
      <h2>Your bag is taking a little break.</h2>
      <p>Find a thoughtful little upgrade and it will be waiting here.</p>
      <a class="primary-button" routerLink="/">Explore the collection <ng-icon name="lucideArrowRight" aria-hidden="true" /></a>
    </div>
  } @else {
    <div class="cart-layout">
      <div class="cart-lines">
        @for (item of items(); track item.product.id) {
          <article class="cart-line">
            <a class="line-image" [routerLink]="['/product', item.product.id]">
              <img [ngSrc]="item.product.thumbnail" [alt]="item.product.title" width="220" height="220" />
            </a>
            <div class="line-info">
              <span class="line-brand">{{ item.product.brand || item.product.category }}</span>
              <a class="line-title" [routerLink]="['/product', item.product.id]">{{ item.product.title }}</a>
              <span class="line-stock">{{ item.product.availabilityStatus }}</span>
              <div class="line-controls">
                <div class="quantity-control" [attr.aria-label]="'Quantity for ' + item.product.title">
                  <button type="button" [attr.aria-label]="'Remove one ' + item.product.title" [disabled]="item.quantity <= 1" (click)="setQuantity(item, item.quantity - 1)"><ng-icon name="lucideMinus" aria-hidden="true" /></button>
                  <span aria-live="polite">{{ item.quantity }}</span>
                  <button type="button" [attr.aria-label]="'Add one ' + item.product.title" [disabled]="item.quantity >= item.product.stock" (click)="setQuantity(item, item.quantity + 1)"><ng-icon name="lucidePlus" aria-hidden="true" /></button>
                </div>
                <button class="remove-button" type="button" (click)="remove(item)"><ng-icon name="lucideTrash2" aria-hidden="true" /> Remove</button>
              </div>
            </div>
            <div class="line-price">
              <strong>{{ discountedPrice(item) * item.quantity | currency }}</strong>
              @if (item.product.discountPercentage > 0) { <del>{{ item.product.price * item.quantity | currency }}</del> }
            </div>
          </article>
        }
        <a class="continue-link" routerLink="/"><ng-icon name="lucideArrowRight" aria-hidden="true" /> Keep looking around</a>
      </div>

      <aside class="order-summary" aria-labelledby="summary-title">
        <h2 id="summary-title">A quick total</h2>
        @if (shippingGap() > 0) {
          <div class="shipping-note">You\u2019re {{ shippingGap() | currency }} away from complimentary delivery.</div>
        } @else {
          <div class="shipping-note shipping-earned"><ng-icon name="lucideCheck" aria-hidden="true" /> Complimentary delivery is yours.</div>
        }
        <div class="summary-row"><span>Subtotal</span><span>{{ subtotal() | currency }}</span></div>
        <div class="summary-row"><span>Delivery</span><span>{{ delivery() === 0 ? 'Complimentary' : (delivery() | currency) }}</span></div>
        <div class="summary-row"><span>Estimated tax</span><span>{{ tax() | currency }}</span></div>
        <div class="summary-total"><span>Total</span><strong>{{ total() | currency }}</strong></div>
        <p class="tax-note">Taxes are estimated and confirmed at checkout.</p>
        <a class="primary-button checkout-button" routerLink="/checkout">Continue to checkout <ng-icon name="lucideArrowRight" aria-hidden="true" /></a>
        <div class="secure-note"><ng-icon name="lucideShieldCheck" aria-hidden="true" /> Secure demo checkout</div>
      </aside>
    </div>
  }
</section>`, styles: ["/* src/app/features/cart/cart.component.scss */\n:host {\n  display: block;\n}\n.cart-page {\n  min-height: 460px;\n  padding-top: 55px;\n}\n.page-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 25px;\n  border-bottom: 1px solid var(--line);\n}\n.page-heading .eyebrow {\n  display: block;\n  margin-bottom: 10px;\n}\n.item-count {\n  padding-bottom: 7px;\n  color: var(--muted);\n  font-size: 11px;\n}\n.cart-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 330px;\n  align-items: start;\n  gap: 70px;\n  padding-top: 22px;\n}\n.cart-line {\n  display: grid;\n  grid-template-columns: 116px minmax(0, 1fr) auto;\n  gap: 19px;\n  padding-block: 22px;\n  border-bottom: 1px solid var(--line);\n}\n.line-image {\n  overflow: hidden;\n  aspect-ratio: 1;\n  background: #ecebe5;\n}\n.line-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  mix-blend-mode: multiply;\n}\n.line-info {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.line-brand {\n  color: var(--muted);\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.line-title {\n  margin-top: 5px;\n  font-family: var(--font-display);\n  font-size: 19px;\n}\n.line-stock {\n  margin-top: 7px;\n  color: #6b765c;\n  font-size: 10px;\n}\n.line-controls {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-top: auto;\n  padding-top: 15px;\n}\n.quantity-control {\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  border: 1px solid var(--line);\n}\n.quantity-control button {\n  width: 31px;\n  height: 30px;\n  display: grid;\n  place-items: center;\n  border: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 13px;\n}\n.quantity-control button:disabled {\n  color: #b1b3ad;\n  cursor: not-allowed;\n}\n.quantity-control span {\n  min-width: 23px;\n  text-align: center;\n  font-size: 11px;\n}\n.remove-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 0;\n  border: 0;\n  background: transparent;\n  color: var(--muted);\n  font-size: 10px;\n}\n.remove-button:hover {\n  color: var(--coral);\n}\n.line-price {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 4px;\n  font-size: 12px;\n}\n.line-price del {\n  color: #999b95;\n  font-size: 10px;\n}\n.continue-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  margin-top: 20px;\n  color: var(--sage-deep);\n  font-size: 11px;\n  font-weight: 600;\n}\n.continue-link ng-icon {\n  transform: rotate(180deg);\n}\n.order-summary {\n  position: sticky;\n  top: 20px;\n  padding: 23px;\n  border: 1px solid var(--line);\n  background: #fbfaf5;\n}\n.order-summary h2 {\n  margin: 0 0 18px;\n  font-family: var(--font-display);\n  font-size: 24px;\n  font-weight: 500;\n}\n.shipping-note {\n  min-height: 42px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 13px;\n  padding: 8px 10px;\n  background: #f0e9d9;\n  color: #705c37;\n  font-size: 10px;\n  line-height: 1.4;\n}\n.shipping-earned {\n  background: #e5ece1;\n  color: var(--sage-deep);\n}\n.summary-row,\n.summary-total {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding-block: 10px;\n  font-size: 11px;\n}\n.summary-row {\n  color: var(--muted);\n}\n.summary-total {\n  margin-top: 6px;\n  padding-top: 15px;\n  border-top: 1px solid var(--line);\n  font-size: 13px;\n}\n.summary-total strong {\n  font-size: 16px;\n}\n.tax-note {\n  margin: 6px 0 15px;\n  color: var(--muted);\n  font-size: 9px;\n}\n.checkout-button {\n  width: 100%;\n}\n.secure-note {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  margin-top: 14px;\n  color: var(--muted);\n  font-size: 9px;\n}\n.cart-empty {\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.empty-mark {\n  width: 54px;\n  height: 54px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 20px;\n  border: 1px solid var(--line);\n  border-radius: 50%;\n  color: var(--sage-deep);\n  font-size: 21px;\n}\n.cart-empty .eyebrow {\n  margin-bottom: 8px;\n}\n.cart-empty h2 {\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: 30px;\n  font-weight: 500;\n}\n.cart-empty p {\n  margin: 10px 0 21px;\n  color: var(--muted);\n  font-size: 12px;\n}\n@media (max-width: 850px) {\n  .cart-layout {\n    grid-template-columns: minmax(0, 1fr) 280px;\n    gap: 25px;\n  }\n  .order-summary {\n    padding: 18px;\n  }\n}\n@media (max-width: 650px) {\n  .cart-page {\n    padding-top: 38px;\n  }\n  .cart-layout {\n    display: flex;\n    flex-direction: column;\n    gap: 34px;\n  }\n  .cart-lines,\n  .order-summary {\n    width: 100%;\n  }\n  .order-summary {\n    position: static;\n  }\n  .cart-line {\n    grid-template-columns: 84px minmax(0, 1fr) auto;\n    gap: 12px;\n  }\n  .line-title {\n    font-size: 16px;\n  }\n  .line-price {\n    font-size: 11px;\n  }\n  .remove-button {\n    font-size: 9px;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src/app/features/cart/cart.component.ts", lineNumber: 23 });
})();
export {
  CartComponent
};
//# debugId=5c6480d8-2b7d-5df9-8ba9-8ef3f003d849
//# sourceMappingURL=chunk-57OHEAGK.js.map
