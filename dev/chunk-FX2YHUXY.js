import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-2FZTR7PT.js";
import {
  placeOrder
} from "./chunk-46YXLFEM.js";
import {
  NG_ICON_DIRECTIVES,
  NgIcon
} from "./chunk-JKLOG7BW.js";
import {
  Component,
  CurrencyPipe,
  Router,
  RouterLink,
  Store,
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
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CU7B2LGP.js";

// src/app/features/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.product.id;
function CheckoutComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2, "Your bag is empty, so there\u2019s nothing to check out just yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 7);
    \u0275\u0275text(4, "Find something good");
    \u0275\u0275elementEnd()();
  }
}
function CheckoutComponent_Conditional_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Please enter your name.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_10_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Please enter your street address.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_10_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_10_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Required.");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_10_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.product.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, ctx_r1.discountedPrice(item_r3)));
  }
}
function CheckoutComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "form", 8);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_Conditional_10_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitOrder());
    });
    \u0275\u0275elementStart(2, "section", 9)(3, "div", 10)(4, "span");
    \u0275\u0275text(5, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h2");
    \u0275\u0275text(8, "Where should it go?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "We\u2019ll use these details for delivery updates.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 11)(12, "label", 12);
    \u0275\u0275text(13, "Full name");
    \u0275\u0275elementStart(14, "input", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, CheckoutComponent_Conditional_10_Conditional_15_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 12);
    \u0275\u0275text(17, "Email address");
    \u0275\u0275elementStart(18, "input", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, CheckoutComponent_Conditional_10_Conditional_19_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 12);
    \u0275\u0275text(21, "Street address");
    \u0275\u0275elementStart(22, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, CheckoutComponent_Conditional_10_Conditional_23_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label", 16);
    \u0275\u0275text(25, "City");
    \u0275\u0275elementStart(26, "input", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, CheckoutComponent_Conditional_10_Conditional_27_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 16);
    \u0275\u0275text(29, "ZIP / postal code");
    \u0275\u0275elementStart(30, "input", 18);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(31, CheckoutComponent_Conditional_10_Conditional_31_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label", 12);
    \u0275\u0275text(33, "Country");
    \u0275\u0275elementStart(34, "select", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(35, "option");
    \u0275\u0275text(36, "United States");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option");
    \u0275\u0275text(38, "Canada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option");
    \u0275\u0275text(40, "United Kingdom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option");
    \u0275\u0275text(42, "Australia");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "section", 20)(44, "div", 10)(45, "span");
    \u0275\u0275text(46, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div")(48, "h2");
    \u0275\u0275text(49, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51, "Payments are not processed in this demo.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 21)(53, "span", 22);
    \u0275\u0275text(54, "\u2022\u2022\u2022\u2022 \xA0 \u2022\u2022\u2022\u2022 \xA0 \u2022\u2022\u2022\u2022 \xA0 4242");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 23);
    \u0275\u0275text(56, "DEMO ONLY");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "p", 24);
    \u0275\u0275text(58, " A test confirmation only. No card details or real payment are collected. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "button", 25);
    \u0275\u0275text(60, " Place demo order ");
    \u0275\u0275element(61, "ng-icon", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "aside", 27)(63, "h2");
    \u0275\u0275text(64, "Your order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 28);
    \u0275\u0275repeaterCreate(66, CheckoutComponent_Conditional_10_For_67_Template, 8, 5, "div", 29, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 30)(69, "span");
    \u0275\u0275text(70, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 30)(75, "span");
    \u0275\u0275text(76, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 30)(81, "span");
    \u0275\u0275text(82, "Estimated tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 31)(87, "span");
    \u0275\u0275text(88, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "strong");
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 32);
    \u0275\u0275element(93, "ng-icon", 33);
    \u0275\u0275elementStart(94, "span");
    \u0275\u0275text(95, "Your details stay in this browser demo.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(13);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.fullName.touched && ctx_r1.form.controls.fullName.invalid ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.email.touched && ctx_r1.form.controls.email.invalid ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.address.touched && ctx_r1.form.controls.address.invalid ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.city.touched && ctx_r1.form.controls.city.invalid ? 27 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.postalCode.touched && ctx_r1.form.controls.postalCode.invalid ? 31 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance(32);
    \u0275\u0275repeater(ctx_r1.items());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 10, ctx_r1.subtotal()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.delivery() === 0 ? "Complimentary" : \u0275\u0275pipeBind1(79, 12, ctx_r1.delivery()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 14, ctx_r1.tax()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(91, 16, ctx_r1.total()));
  }
}
var CheckoutComponent = class _CheckoutComponent {
  store = inject(Store);
  router = inject(Router);
  formBuilder = inject(FormBuilder).nonNullable;
  items = this.store.selectSignal(selectCartItems);
  subtotal = this.store.selectSignal(selectCartSubtotal);
  delivery = this.store.selectSignal(selectCartDelivery);
  tax = this.store.selectSignal(selectCartTax);
  total = this.store.selectSignal(selectCartTotal);
  form = this.formBuilder.group({
    fullName: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    address: ["", [Validators.required, Validators.minLength(5)]],
    city: ["", Validators.required],
    postalCode: ["", Validators.required],
    country: ["United States", Validators.required]
  });
  submitOrder() {
    if (this.items().length === 0) {
      void this.router.navigate(["/cart"]);
      return;
    }
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    const shipping = this.form.getRawValue();
    const order = {
      id: `MM-${Date.now().toString(36).toUpperCase()}`,
      placedAt: (/* @__PURE__ */ new Date()).toISOString(),
      items: this.items(),
      shipping,
      subtotal: this.subtotal(),
      delivery: this.delivery(),
      tax: this.tax(),
      total: this.total()
    };
    this.store.dispatch(placeOrder({ order }));
    void this.router.navigate(["/orders", order.id]);
  }
  discountedPrice(item) {
    return discountedUnitPrice(item.product) * item.quantity;
  }
  static \u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], decls: 11, vars: 1, consts: [[1, "checkout-page", "page-wrap"], [1, "checkout-heading"], [1, "eyebrow"], [1, "display-title"], ["routerLink", "/cart", 1, "back-link"], [1, "checkout-empty"], [1, "checkout-layout"], ["routerLink", "/", 1, "primary-button"], ["novalidate", "", 1, "delivery-form", 3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "section-title"], [1, "form-grid"], [1, "field", "full-field"], ["type", "text", "formControlName", "fullName", "autocomplete", "name", "placeholder", "Jamie Taylor"], ["type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "jamie@example.com"], ["type", "text", "formControlName", "address", "autocomplete", "street-address", "placeholder", "14 Orchard Lane"], [1, "field"], ["type", "text", "formControlName", "city", "autocomplete", "address-level2", "placeholder", "Brooklyn"], ["type", "text", "formControlName", "postalCode", "autocomplete", "postal-code", "placeholder", "11211"], ["formControlName", "country", "autocomplete", "country-name"], [1, "form-section", "payment-section"], [1, "demo-payment"], [1, "payment-card"], [1, "demo-badge"], [1, "payment-note"], ["type", "submit", 1, "primary-button", "place-order"], ["name", "lucideArrowRight", "aria-hidden", "true"], [1, "checkout-summary"], [1, "checkout-items"], [1, "checkout-item"], [1, "summary-line"], [1, "summary-total"], [1, "checkout-reassurance"], ["name", "lucideShieldCheck", "aria-hidden", "true"], [1, "checkout-quantity"], [1, "checkout-name"]], template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "Almost yours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 3);
      \u0275\u0275text(6, "A few delivery details.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 4);
      \u0275\u0275text(8, "Back to bag");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, CheckoutComponent_Conditional_9_Template, 5, 0, "div", 5)(10, CheckoutComponent_Conditional_10_Template, 96, 18, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.items().length === 0 ? 9 : 10);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, NgIcon, CurrencyPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.checkout-page[_ngcontent-%COMP%] {\n  min-height: 500px;\n  padding-top: 55px;\n}\n.checkout-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 25px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.checkout-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.back-link[_ngcontent-%COMP%] {\n  padding-bottom: 7px;\n  color: var(--%NS%sage-deep);\n  font-size: 11px;\n  font-weight: 600;\n}\n.checkout-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  align-items: start;\n  gap: 62px;\n  padding-top: 30px;\n}\n.delivery-form[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.form-section[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.section-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n  font-family: var(--%NS%font-display);\n  font-size: 17px;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.checkout-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--%NS%font-display);\n  font-size: 22px;\n  font-weight: 500;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: var(--%NS%muted);\n  font-size: 10px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px 14px;\n  padding-left: 32px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  color: #4c554c;\n  font-size: 10px;\n  font-weight: 600;\n}\n.full-field[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 43px;\n  padding: 0 11px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 2px;\n  background: var(--%NS%surface);\n  color: var(--%NS%ink);\n  font-size: 12px;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #a0a39c;\n}\n.field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #ad442d;\n  font-size: 9px;\n  font-weight: 500;\n}\n.payment-section[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n.demo-payment[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 55px;\n  margin-left: 32px;\n  padding: 0 13px;\n  border: 1px solid var(--%NS%line);\n  background: var(--%NS%surface);\n}\n.payment-card[_ngcontent-%COMP%] {\n  color: #5b625a;\n  font-size: 12px;\n}\n.demo-badge[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n  background: #f0e9d9;\n  color: #715d38;\n  font-size: 8px;\n  font-weight: 700;\n}\n.payment-note[_ngcontent-%COMP%] {\n  margin: 8px 0 0 32px;\n  color: var(--%NS%muted);\n  font-size: 9px;\n}\n.place-order[_ngcontent-%COMP%] {\n  min-width: 205px;\n  margin: 22px 0 0 32px;\n}\n.checkout-summary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 20px;\n  padding: 23px;\n  border: 1px solid var(--%NS%line);\n  background: #fbfaf5;\n}\n.checkout-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 19px;\n}\n.checkout-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.checkout-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20px minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 8px;\n  font-size: 10px;\n}\n.checkout-quantity[_ngcontent-%COMP%] {\n  display: grid;\n  width: 18px;\n  height: 18px;\n  place-items: center;\n  border-radius: 50%;\n  background: #e6ebe2;\n  color: var(--%NS%sage-deep);\n  font-size: 9px;\n}\n.checkout-name[_ngcontent-%COMP%] {\n  line-height: 1.4;\n}\n.checkout-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 10px;\n}\n.summary-line[_ngcontent-%COMP%], \n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 13px;\n  color: var(--%NS%muted);\n  font-size: 10px;\n}\n.summary-total[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding-block: 15px 0;\n  border-top: 1px solid var(--%NS%line);\n  color: var(--%NS%ink);\n  font-size: 13px;\n}\n.summary-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.checkout-reassurance[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  align-items: center;\n  margin-top: 20px;\n  padding: 11px;\n  background: #e7ece4;\n  color: var(--%NS%sage-deep);\n  font-size: 9px;\n}\n.checkout-empty[_ngcontent-%COMP%] {\n  min-height: 300px;\n  display: grid;\n  place-content: center;\n  justify-items: center;\n  gap: 14px;\n  color: var(--%NS%muted);\n  font-size: 13px;\n}\n@media (max-width: 800px) {\n  .checkout-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) 290px;\n    gap: 24px;\n  }\n  .checkout-summary[_ngcontent-%COMP%] {\n    padding: 17px;\n  }\n}\n@media (max-width: 650px) {\n  .checkout-page[_ngcontent-%COMP%] {\n    padding-top: 38px;\n  }\n  .checkout-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 25px;\n  }\n  .delivery-form[_ngcontent-%COMP%], \n   .checkout-summary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .checkout-summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .demo-payment[_ngcontent-%COMP%], \n   .payment-note[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .place-order[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-checkout", imports: [CurrencyPipe, ReactiveFormsModule, RouterLink, NG_ICON_DIRECTIVES], template: `<section class="checkout-page page-wrap">
  <div class="checkout-heading">
    <div>
      <span class="eyebrow">Almost yours</span>
      <h1 class="display-title">A few delivery details.</h1>
    </div>
    <a class="back-link" routerLink="/cart">Back to bag</a>
  </div>

  @if (items().length === 0) {
    <div class="checkout-empty">
      <p>Your bag is empty, so there\u2019s nothing to check out just yet.</p>
      <a class="primary-button" routerLink="/">Find something good</a>
    </div>
  } @else {
    <div class="checkout-layout">
      <form class="delivery-form" [formGroup]="form" (ngSubmit)="submitOrder()" novalidate>
        <section class="form-section">
          <div class="section-title">
            <span>01</span>
            <div>
              <h2>Where should it go?</h2>
              <p>We\u2019ll use these details for delivery updates.</p>
            </div>
          </div>
          <div class="form-grid">
            <label class="field full-field"
              >Full name<input
                type="text"
                formControlName="fullName"
                autocomplete="name"
                placeholder="Jamie Taylor"
              />
              @if (form.controls.fullName.touched && form.controls.fullName.invalid) {
                <small>Please enter your name.</small>
              }
            </label>
            <label class="field full-field"
              >Email address<input
                type="email"
                formControlName="email"
                autocomplete="email"
                placeholder="jamie@example.com"
              />
              @if (form.controls.email.touched && form.controls.email.invalid) {
                <small>Enter a valid email address.</small>
              }
            </label>
            <label class="field full-field"
              >Street address<input
                type="text"
                formControlName="address"
                autocomplete="street-address"
                placeholder="14 Orchard Lane"
              />
              @if (form.controls.address.touched && form.controls.address.invalid) {
                <small>Please enter your street address.</small>
              }
            </label>
            <label class="field"
              >City<input
                type="text"
                formControlName="city"
                autocomplete="address-level2"
                placeholder="Brooklyn"
              />
              @if (form.controls.city.touched && form.controls.city.invalid) {
                <small>Required.</small>
              }
            </label>
            <label class="field"
              >ZIP / postal code<input
                type="text"
                formControlName="postalCode"
                autocomplete="postal-code"
                placeholder="11211"
              />
              @if (form.controls.postalCode.touched && form.controls.postalCode.invalid) {
                <small>Required.</small>
              }
            </label>
            <label class="field full-field"
              >Country<select formControlName="country" autocomplete="country-name">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select></label
            >
          </div>
        </section>

        <section class="form-section payment-section">
          <div class="section-title">
            <span>02</span>
            <div>
              <h2>Payment</h2>
              <p>Payments are not processed in this demo.</p>
            </div>
          </div>
          <div class="demo-payment">
            <span class="payment-card">\u2022\u2022\u2022\u2022 &nbsp; \u2022\u2022\u2022\u2022 &nbsp; \u2022\u2022\u2022\u2022 &nbsp; 4242</span
            ><span class="demo-badge">DEMO ONLY</span>
          </div>
          <p class="payment-note">
            A test confirmation only. No card details or real payment are collected.
          </p>
        </section>

        <button class="primary-button place-order" type="submit">
          Place demo order <ng-icon name="lucideArrowRight" aria-hidden="true" />
        </button>
      </form>

      <aside class="checkout-summary">
        <h2>Your order</h2>
        <div class="checkout-items">
          @for (item of items(); track item.product.id) {
            <div class="checkout-item">
              <span class="checkout-quantity">{{ item.quantity }}</span
              ><span class="checkout-name">{{ item.product.title }}</span
              ><strong>{{ discountedPrice(item) | currency }}</strong>
            </div>
          }
        </div>
        <div class="summary-line">
          <span>Subtotal</span><span>{{ subtotal() | currency }}</span>
        </div>
        <div class="summary-line">
          <span>Delivery</span
          ><span>{{ delivery() === 0 ? 'Complimentary' : (delivery() | currency) }}</span>
        </div>
        <div class="summary-line">
          <span>Estimated tax</span><span>{{ tax() | currency }}</span>
        </div>
        <div class="summary-total">
          <span>Total</span><strong>{{ total() | currency }}</strong>
        </div>
        <div class="checkout-reassurance">
          <ng-icon name="lucideShieldCheck" aria-hidden="true" /><span
            >Your details stay in this browser demo.</span
          >
        </div>
      </aside>
    </div>
  }
</section>
`, styles: ["/* src/app/features/checkout/checkout.component.scss */\n:host {\n  display: block;\n}\n.checkout-page {\n  min-height: 500px;\n  padding-top: 55px;\n}\n.checkout-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 25px;\n  border-bottom: 1px solid var(--line);\n}\n.checkout-heading .eyebrow {\n  display: block;\n  margin-bottom: 10px;\n}\n.back-link {\n  padding-bottom: 7px;\n  color: var(--sage-deep);\n  font-size: 11px;\n  font-weight: 600;\n}\n.checkout-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 340px;\n  align-items: start;\n  gap: 62px;\n  padding-top: 30px;\n}\n.delivery-form {\n  min-width: 0;\n}\n.form-section {\n  padding-bottom: 30px;\n  border-bottom: 1px solid var(--line);\n}\n.section-title {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.section-title > span {\n  color: var(--coral);\n  font-family: var(--font-display);\n  font-size: 17px;\n}\n.section-title h2,\n.checkout-summary h2 {\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: 22px;\n  font-weight: 500;\n}\n.section-title p {\n  margin: 5px 0 0;\n  color: var(--muted);\n  font-size: 10px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px 14px;\n  padding-left: 32px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  color: #4c554c;\n  font-size: 10px;\n  font-weight: 600;\n}\n.full-field {\n  grid-column: 1/-1;\n}\n.field input,\n.field select {\n  width: 100%;\n  height: 43px;\n  padding: 0 11px;\n  border: 1px solid var(--line);\n  border-radius: 2px;\n  background: var(--surface);\n  color: var(--ink);\n  font-size: 12px;\n}\n.field input::placeholder {\n  color: #a0a39c;\n}\n.field small {\n  color: #ad442d;\n  font-size: 9px;\n  font-weight: 500;\n}\n.payment-section {\n  padding-top: 24px;\n}\n.demo-payment {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 55px;\n  margin-left: 32px;\n  padding: 0 13px;\n  border: 1px solid var(--line);\n  background: var(--surface);\n}\n.payment-card {\n  color: #5b625a;\n  font-size: 12px;\n}\n.demo-badge {\n  padding: 5px 6px;\n  background: #f0e9d9;\n  color: #715d38;\n  font-size: 8px;\n  font-weight: 700;\n}\n.payment-note {\n  margin: 8px 0 0 32px;\n  color: var(--muted);\n  font-size: 9px;\n}\n.place-order {\n  min-width: 205px;\n  margin: 22px 0 0 32px;\n}\n.checkout-summary {\n  position: sticky;\n  top: 20px;\n  padding: 23px;\n  border: 1px solid var(--line);\n  background: #fbfaf5;\n}\n.checkout-summary h2 {\n  margin-bottom: 19px;\n}\n.checkout-items {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-bottom: 18px;\n  border-bottom: 1px solid var(--line);\n}\n.checkout-item {\n  display: grid;\n  grid-template-columns: 20px minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 8px;\n  font-size: 10px;\n}\n.checkout-quantity {\n  display: grid;\n  width: 18px;\n  height: 18px;\n  place-items: center;\n  border-radius: 50%;\n  background: #e6ebe2;\n  color: var(--sage-deep);\n  font-size: 9px;\n}\n.checkout-name {\n  line-height: 1.4;\n}\n.checkout-item strong {\n  white-space: nowrap;\n  font-size: 10px;\n}\n.summary-line,\n.summary-total {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 13px;\n  color: var(--muted);\n  font-size: 10px;\n}\n.summary-total {\n  margin-top: 12px;\n  padding-block: 15px 0;\n  border-top: 1px solid var(--line);\n  color: var(--ink);\n  font-size: 13px;\n}\n.summary-total strong {\n  font-size: 16px;\n}\n.checkout-reassurance {\n  display: flex;\n  gap: 7px;\n  align-items: center;\n  margin-top: 20px;\n  padding: 11px;\n  background: #e7ece4;\n  color: var(--sage-deep);\n  font-size: 9px;\n}\n.checkout-empty {\n  min-height: 300px;\n  display: grid;\n  place-content: center;\n  justify-items: center;\n  gap: 14px;\n  color: var(--muted);\n  font-size: 13px;\n}\n@media (max-width: 800px) {\n  .checkout-layout {\n    grid-template-columns: minmax(0, 1fr) 290px;\n    gap: 24px;\n  }\n  .checkout-summary {\n    padding: 17px;\n  }\n}\n@media (max-width: 650px) {\n  .checkout-page {\n    padding-top: 38px;\n  }\n  .checkout-layout {\n    display: flex;\n    flex-direction: column-reverse;\n    gap: 25px;\n  }\n  .delivery-form,\n  .checkout-summary {\n    width: 100%;\n  }\n  .checkout-summary {\n    position: static;\n  }\n  .form-grid {\n    padding-left: 0;\n  }\n  .demo-payment,\n  .payment-note {\n    margin-left: 0;\n  }\n  .place-order {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=checkout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/checkout/checkout.component.ts", lineNumber: 24 });
})();
export {
  CheckoutComponent
};
//# debugId=48004197-9474-571e-ac5a-8afd2312b393
//# sourceMappingURL=chunk-FX2YHUXY.js.map
