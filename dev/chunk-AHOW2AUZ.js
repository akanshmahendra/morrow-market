import {
  NG_ICON_DIRECTIVES,
  NgIcon
} from "./chunk-6WX6LQWI.js";
import {
  ActivatedRoute,
  Component,
  CurrencyPipe,
  DatePipe,
  RouterLink,
  Store,
  computed,
  discountedUnitPrice,
  inject,
  map,
  selectOrders,
  setClassMetadata,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5QH7RXCL.js";

// src/app/features/order-confirmation/order-confirmation.component.ts
var _forTrack0 = ($index, $item) => $item.product.id;
function OrderConfirmationComponent_Conditional_1_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r1.quantity, " \xD7 ", item_r1.product.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r1.discountedPrice(item_r1)));
  }
}
function OrderConfirmationComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "ng-icon", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "A good thing is on its way");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, "Your demo order is tucked in. We\u2019ve saved the details right here in this browser.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div")(11, "span");
    \u0275\u0275text(12, "Order reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "span");
    \u0275\u0275text(17, "Placed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 8);
    \u0275\u0275repeaterCreate(22, OrderConfirmationComponent_Conditional_1_For_23_Template, 6, 5, "div", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 9)(25, "span");
    \u0275\u0275text(26, "Delivering to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275element(29, "br");
    \u0275\u0275text(30);
    \u0275\u0275element(31, "br");
    \u0275\u0275text(32);
    \u0275\u0275element(33, "br");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 10)(36, "span");
    \u0275\u0275text(37, "Order total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "p", 11);
    \u0275\u0275text(42, "This is a storefront demo. No payment was collected and no shipment will be created.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 12);
    \u0275\u0275text(44, "Back to the good stuff");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const placedOrder_r3 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Thank you, ", placedOrder_r3.shipping.fullName.split(" ")[0], ".");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(placedOrder_r3.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 9, placedOrder_r3.placedAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(placedOrder_r3.items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(placedOrder_r3.shipping.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(placedOrder_r3.shipping.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", placedOrder_r3.shipping.city, ", ", placedOrder_r3.shipping.postalCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(placedOrder_r3.shipping.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 12, placedOrder_r3.total));
  }
}
function OrderConfirmationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Order history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h1", 4);
    \u0275\u0275text(3, "This order isn\u2019t here.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 5);
    \u0275\u0275text(5, "Order details are stored only in this browser. Try placing a demo order on this device.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 12);
    \u0275\u0275text(7, "Explore the collection");
    \u0275\u0275elementEnd();
  }
}
var OrderConfirmationComponent = class _OrderConfirmationComponent {
  store = inject(Store);
  route = inject(ActivatedRoute);
  orderId = toSignal(this.route.paramMap.pipe(map((params) => params.get("id"))), {
    initialValue: this.route.snapshot.paramMap.get("id")
  });
  orders = this.store.selectSignal(selectOrders);
  order = computed(
    () => this.orders().find((item) => item.id === this.orderId()),
    ...ngDevMode ? [{ debugName: "order" }] : (
      /* istanbul ignore next */
      []
    )
  );
  discountedPrice(item) {
    return discountedUnitPrice(item.product) * item.quantity;
  }
  static \u0275fac = function OrderConfirmationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderConfirmationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderConfirmationComponent, selectors: [["app-order-confirmation"]], decls: 3, vars: 1, consts: [[1, "confirmation", "page-wrap"], [1, "confirmation-mark"], ["name", "lucideCircleCheck", "aria-hidden", "true"], [1, "eyebrow"], [1, "display-title"], [1, "confirmation-copy"], [1, "order-card"], [1, "order-card-heading"], [1, "order-products"], [1, "delivery-address"], [1, "order-total"], [1, "demo-note"], ["routerLink", "/", 1, "primary-button"]], template: function OrderConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, OrderConfirmationComponent_Conditional_1_Template, 45, 14)(2, OrderConfirmationComponent_Conditional_2_Template, 8, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_0_0 = ctx.order()) ? 1 : 2, tmp_0_0);
    }
  }, dependencies: [RouterLink, NgIcon, CurrencyPipe, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.confirmation[_ngcontent-%COMP%] {\n  min-height: 560px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 54px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.confirmation-mark[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 18px;\n  border-radius: 50%;\n  background: #e4ece2;\n  color: var(--%NS%sage-deep);\n  font-size: 29px;\n}\n.confirmation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.confirmation-copy[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 12px auto 20px;\n  color: var(--%NS%muted);\n  font-size: 12px;\n  line-height: 1.7;\n}\n.order-card[_ngcontent-%COMP%] {\n  width: min(100%, 570px);\n  margin-block: 5px 16px;\n  padding: 20px;\n  border: 1px solid var(--%NS%line);\n  background: var(--%NS%surface);\n  text-align: left;\n}\n.order-card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.order-card-heading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.order-card-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.delivery-address[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 9px;\n}\n.order-card-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.order-products[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  padding-block: 15px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.order-products[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.order-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 10px;\n}\n.delivery-address[_ngcontent-%COMP%] {\n  padding-block: 13px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.delivery-address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #5f665d;\n  font-size: 10px;\n  line-height: 1.6;\n}\n.order-total[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  font-size: 12px;\n}\n.demo-note[_ngcontent-%COMP%] {\n  margin: 0 0 17px;\n  color: #806943;\n  font-size: 9px;\n}\n@media (max-width: 500px) {\n  .order-card[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=order-confirmation.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationComponent, [{
    type: Component,
    args: [{ selector: "app-order-confirmation", imports: [CurrencyPipe, DatePipe, RouterLink, NG_ICON_DIRECTIVES], template: `
    <section class="confirmation page-wrap">
      @if (order(); as placedOrder) {
        <div class="confirmation-mark"><ng-icon name="lucideCircleCheck" aria-hidden="true" /></div>
        <span class="eyebrow">A good thing is on its way</span>
        <h1 class="display-title">Thank you, {{ placedOrder.shipping.fullName.split(' ')[0] }}.</h1>
        <p class="confirmation-copy">Your demo order is tucked in. We\u2019ve saved the details right here in this browser.</p>
        <div class="order-card">
          <div class="order-card-heading"><div><span>Order reference</span><strong>{{ placedOrder.id }}</strong></div><div><span>Placed</span><strong>{{ placedOrder.placedAt | date:'mediumDate' }}</strong></div></div>
          <div class="order-products">
            @for (item of placedOrder.items; track item.product.id) {
              <div><span>{{ item.quantity }} \xD7 {{ item.product.title }}</span><strong>{{ discountedPrice(item) | currency }}</strong></div>
            }
          </div>
          <div class="delivery-address"><span>Delivering to</span><p>{{ placedOrder.shipping.fullName }}<br />{{ placedOrder.shipping.address }}<br />{{ placedOrder.shipping.city }}, {{ placedOrder.shipping.postalCode }}<br />{{ placedOrder.shipping.country }}</p></div>
          <div class="order-total"><span>Order total</span><strong>{{ placedOrder.total | currency }}</strong></div>
        </div>
        <p class="demo-note">This is a storefront demo. No payment was collected and no shipment will be created.</p>
        <a class="primary-button" routerLink="/">Back to the good stuff</a>
      } @else {
        <span class="eyebrow">Order history</span>
        <h1 class="display-title">This order isn\u2019t here.</h1>
        <p class="confirmation-copy">Order details are stored only in this browser. Try placing a demo order on this device.</p>
        <a class="primary-button" routerLink="/">Explore the collection</a>
      }
    </section>
  `, styles: ["/* angular:styles/component:scss;574a2f4494888d55;/home/runner/work/morrow-market/morrow-market/src/app/features/order-confirmation/order-confirmation.component.ts */\n:host {\n  display: block;\n}\n.confirmation {\n  min-height: 560px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 54px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n.confirmation-mark {\n  width: 58px;\n  height: 58px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 18px;\n  border-radius: 50%;\n  background: #e4ece2;\n  color: var(--sage-deep);\n  font-size: 29px;\n}\n.confirmation h1 {\n  margin-top: 10px;\n}\n.confirmation-copy {\n  max-width: 400px;\n  margin: 12px auto 20px;\n  color: var(--muted);\n  font-size: 12px;\n  line-height: 1.7;\n}\n.order-card {\n  width: min(100%, 570px);\n  margin-block: 5px 16px;\n  padding: 20px;\n  border: 1px solid var(--line);\n  background: var(--surface);\n  text-align: left;\n}\n.order-card-heading {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid var(--line);\n}\n.order-card-heading div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.order-card-heading span,\n.delivery-address > span {\n  color: var(--muted);\n  font-size: 9px;\n}\n.order-card-heading strong {\n  font-size: 11px;\n}\n.order-products {\n  display: grid;\n  gap: 10px;\n  padding-block: 15px;\n  border-bottom: 1px solid var(--line);\n}\n.order-products div,\n.order-total {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 10px;\n}\n.delivery-address {\n  padding-block: 13px;\n  border-bottom: 1px solid var(--line);\n}\n.delivery-address p {\n  margin: 6px 0 0;\n  color: #5f665d;\n  font-size: 10px;\n  line-height: 1.6;\n}\n.order-total {\n  padding-top: 14px;\n  font-size: 12px;\n}\n.demo-note {\n  margin: 0 0 17px;\n  color: #806943;\n  font-size: 9px;\n}\n@media (max-width: 500px) {\n  .order-card {\n    padding: 15px;\n  }\n}\n/*# sourceMappingURL=order-confirmation.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderConfirmationComponent, { className: "OrderConfirmationComponent", filePath: "src/app/features/order-confirmation/order-confirmation.component.ts", lineNumber: 61 });
})();
export {
  OrderConfirmationComponent
};
//# debugId=eb162c09-a674-5aef-9891-45036c781698
//# sourceMappingURL=chunk-AHOW2AUZ.js.map
