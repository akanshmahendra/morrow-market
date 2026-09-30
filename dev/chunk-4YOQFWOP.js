import {
  login,
  logout
} from "./chunk-5VGR7ZCJ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-CSWENCLR.js";
import {
  Component,
  CurrencyPipe,
  DatePipe,
  RouterLink,
  Store,
  inject,
  selectAuthError,
  selectAuthLoading,
  selectCustomer,
  selectOrders,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-5QH7RXCL.js";

// src/app/features/account/account.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AccountComponent_Conditional_1_Conditional_28_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 13)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, order_r3.placedAt, "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", order_r3.items.length, " ", order_r3.items.length === 1 ? "item" : "items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, order_r3.total));
  }
}
function AccountComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, AccountComponent_Conditional_1_Conditional_28_For_1_Template, 13, 10, "article", 13, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.orders());
  }
}
function AccountComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2, "Your next good find will show up here.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 14);
    \u0275\u0275text(4, "Browse the collection");
    \u0275\u0275elementEnd()();
  }
}
function AccountComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "span", 3);
    \u0275\u0275text(3, "Your corner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Good to see you back.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 5);
    \u0275\u0275listener("click", function AccountComponent_Conditional_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signOut());
    });
    \u0275\u0275text(9, "Sign out");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "aside", 7);
    \u0275\u0275element(12, "img", 8);
    \u0275\u0275elementStart(13, "h2");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 9);
    \u0275\u0275text(18, "DEMO ACCOUNT");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "section", 10)(20, "div", 11)(21, "div")(22, "span", 3);
    \u0275\u0275text(23, "Kept close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "h2");
    \u0275\u0275text(25, "Your orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, AccountComponent_Conditional_1_Conditional_28_Template, 2, 0)(29, AccountComponent_Conditional_1_Conditional_29_Template, 5, 0, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Hello, ", user_r4.firstName, ".");
    \u0275\u0275advance(7);
    \u0275\u0275property("src", user_r4.image, \u0275\u0275sanitizeUrl)("alt", user_r4.firstName + " " + user_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", user_r4.firstName, " ", user_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", ctx_r1.orders().length, " saved");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.orders().length > 0 ? 28 : 29);
  }
}
function AccountComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter your username.");
    \u0275\u0275elementEnd();
  }
}
function AccountComponent_Conditional_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter your password.");
    \u0275\u0275elementEnd();
  }
}
function AccountComponent_Conditional_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function AccountComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 15)(2, "span", 3);
    \u0275\u0275text(3, "Your Morrow account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 4);
    \u0275\u0275text(5, "Keep the good things close.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Sign in to find your saved details and orders in one place.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "span");
    \u0275\u0275text(10, "\u2733");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " A demo account lets you try the flow. No personal payment data is used.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "form", 17);
    \u0275\u0275listener("ngSubmit", function AccountComponent_Conditional_2_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(13, "h2");
    \u0275\u0275text(14, "Welcome back.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Sign in to your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 18);
    \u0275\u0275text(18, "Username");
    \u0275\u0275elementStart(19, "input", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, AccountComponent_Conditional_2_Conditional_20_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 18);
    \u0275\u0275text(22, "Password");
    \u0275\u0275elementStart(23, "input", 20);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, AccountComponent_Conditional_2_Conditional_24_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, AccountComponent_Conditional_2_Conditional_25_Template, 2, 1, "p", 21);
    \u0275\u0275elementStart(26, "button", 22);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 23);
    \u0275\u0275listener("click", function AccountComponent_Conditional_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.useDemoAccount());
    });
    \u0275\u0275text(29, "Use sample sign-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 24);
    \u0275\u0275text(31, "Sample account: ");
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33, "emilys");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " / ");
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36, "emilyspass");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.username.touched && ctx_r1.form.controls.username.invalid ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.password.touched && ctx_r1.form.controls.password.invalid ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Checking\u2026" : "Sign in");
  }
}
var AccountComponent = class _AccountComponent {
  store = inject(Store);
  formBuilder = inject(FormBuilder).nonNullable;
  customer = this.store.selectSignal(selectCustomer);
  loading = this.store.selectSignal(selectAuthLoading);
  error = this.store.selectSignal(selectAuthError);
  orders = this.store.selectSignal(selectOrders);
  form = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  });
  useDemoAccount() {
    this.form.setValue({ username: "emilys", password: "emilyspass" });
  }
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    this.store.dispatch(login(this.form.getRawValue()));
  }
  signOut() {
    this.store.dispatch(logout());
  }
  static \u0275fac = function AccountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountComponent, selectors: [["app-account"]], decls: 3, vars: 1, consts: [[1, "account-page", "page-wrap"], [1, "login-layout"], [1, "account-heading"], [1, "eyebrow"], [1, "display-title"], ["type", "button", 1, "secondary-button", 3, "click"], [1, "account-layout"], [1, "profile-panel"], ["width", "72", "height", "72", 3, "src", "alt"], [1, "demo-badge"], [1, "orders-panel"], [1, "panel-heading"], [1, "no-orders"], [1, "account-order"], ["routerLink", "/", 1, "secondary-button"], [1, "login-intro"], [1, "login-note"], ["novalidate", "", 1, "login-form", 3, "ngSubmit", "formGroup"], [1, "field"], ["type", "text", "formControlName", "username", "autocomplete", "username", "placeholder", "Your username"], ["type", "password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "Your password"], ["role", "alert", 1, "login-error"], ["type", "submit", 1, "primary-button", "login-button", 3, "disabled"], ["type", "button", 1, "sample-button", 3, "click"], [1, "credential-note"]], template: function AccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275conditionalCreate(1, AccountComponent_Conditional_1_Template, 30, 8)(2, AccountComponent_Conditional_2_Template, 37, 6, "div", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_0_0 = ctx.customer()) ? 1 : 2, tmp_0_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, CurrencyPipe, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.account-page[_ngcontent-%COMP%] {\n  min-height: 490px;\n  padding-top: 54px;\n}\n.login-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(300px, 390px);\n  gap: 64px;\n  align-items: center;\n  padding-block: 35px 55px;\n}\n.login-intro[_ngcontent-%COMP%] {\n  max-width: 460px;\n}\n.login-intro[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 14px;\n}\n.login-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 350px;\n  color: var(--%NS%muted);\n  font-size: 13px;\n  line-height: 1.7;\n}\n.login-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  gap: 9px;\n  max-width: 360px;\n  margin-top: 35px;\n  padding: 13px;\n  background: #e7ece4;\n  color: var(--%NS%sage-deep);\n  font-size: 10px;\n  line-height: 1.6;\n}\n.login-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n}\n.login-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n  padding: 25px;\n  border: 1px solid var(--%NS%line);\n  background: var(--%NS%surface);\n}\n.login-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--%NS%font-display);\n  font-size: 26px;\n  font-weight: 500;\n}\n.login-form[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: -10px 0 2px;\n  color: var(--%NS%muted);\n  font-size: 10px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  color: #4c554c;\n  font-size: 10px;\n  font-weight: 600;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 43px;\n  padding: 0 11px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 2px;\n  background: #fffefa;\n  font-size: 12px;\n}\n.field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.login-error[_ngcontent-%COMP%] {\n  color: #ad442d;\n  font-size: 9px;\n}\n.login-error[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: wait;\n}\n.sample-button[_ngcontent-%COMP%] {\n  min-height: 40px;\n  border: 1px solid var(--%NS%line);\n  background: transparent;\n  color: var(--%NS%ink);\n  font-size: 10px;\n  font-weight: 600;\n}\n.sample-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--%NS%ink);\n}\n.credential-note[_ngcontent-%COMP%] {\n  margin: -3px 0 0 !important;\n  text-align: center;\n  font-size: 9px !important;\n}\n.account-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 22px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.account-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n}\n.account-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: var(--%NS%muted);\n  font-size: 11px;\n}\n.account-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 230px minmax(0, 1fr);\n  gap: 32px;\n  padding-top: 28px;\n}\n.profile-panel[_ngcontent-%COMP%] {\n  min-height: 210px;\n  padding: 20px;\n  border: 1px solid var(--%NS%line);\n  background: var(--%NS%surface);\n  text-align: center;\n}\n.profile-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  margin: auto;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.profile-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 4px;\n  font-family: var(--%NS%font-display);\n  font-size: 19px;\n  font-weight: 500;\n}\n.profile-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: var(--%NS%muted);\n  font-size: 10px;\n}\n.demo-badge[_ngcontent-%COMP%] {\n  padding: 5px 7px;\n  background: #f0e9d9;\n  color: #715d38;\n  font-size: 8px;\n  font-weight: 700;\n}\n.orders-panel[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px solid var(--%NS%line);\n  background: var(--%NS%surface);\n}\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--%NS%line);\n}\n.panel-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n}\n.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: var(--%NS%font-display);\n  font-size: 23px;\n  font-weight: 500;\n}\n.panel-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n  font-size: 9px;\n}\n.account-order[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding-block: 15px;\n  border-bottom: 1px solid var(--%NS%line);\n  font-size: 10px;\n}\n.account-order[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.account-order[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  align-items: end;\n}\n.account-order[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--%NS%muted);\n}\n.no-orders[_ngcontent-%COMP%] {\n  min-height: 130px;\n  display: grid;\n  place-content: center;\n  justify-items: center;\n  gap: 10px;\n  color: var(--%NS%muted);\n  font-size: 11px;\n}\n@media (max-width: 700px) {\n  .account-page[_ngcontent-%COMP%] {\n    padding-top: 38px;\n  }\n  .login-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 25px;\n    padding-top: 28px;\n  }\n  .login-note[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .account-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .profile-panel[_ngcontent-%COMP%] {\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=account.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountComponent, [{
    type: Component,
    args: [{ selector: "app-account", imports: [CurrencyPipe, DatePipe, ReactiveFormsModule, RouterLink], template: `
    <section class="account-page page-wrap">
      @if (customer(); as user) {
        <div class="account-heading"><div><span class="eyebrow">Your corner</span><h1 class="display-title">Hello, {{ user.firstName }}.</h1><p>Good to see you back.</p></div><button class="secondary-button" type="button" (click)="signOut()">Sign out</button></div>
        <div class="account-layout">
          <aside class="profile-panel"><img [src]="user.image" [alt]="user.firstName + ' ' + user.lastName" width="72" height="72" /><h2>{{ user.firstName }} {{ user.lastName }}</h2><p>{{ user.email }}</p><span class="demo-badge">DEMO ACCOUNT</span></aside>
          <section class="orders-panel"><div class="panel-heading"><div><span class="eyebrow">Kept close</span><h2>Your orders</h2></div><span>{{ orders().length }} saved</span></div>
            @if (orders().length > 0) {
              @for (order of orders(); track order.id) {
                <article class="account-order"><div><strong>{{ order.id }}</strong><span>{{ order.placedAt | date:'mediumDate' }}</span></div><div><span>{{ order.items.length }} {{ order.items.length === 1 ? 'item' : 'items' }}</span><strong>{{ order.total | currency }}</strong></div></article>
              }
            } @else {
              <div class="no-orders"><p>Your next good find will show up here.</p><a class="secondary-button" routerLink="/">Browse the collection</a></div>
            }
          </section>
        </div>
      } @else {
        <div class="login-layout">
          <div class="login-intro"><span class="eyebrow">Your Morrow account</span><h1 class="display-title">Keep the good things close.</h1><p>Sign in to find your saved details and orders in one place.</p><div class="login-note"><span>\u2733</span> A demo account lets you try the flow. No personal payment data is used.</div></div>
          <form class="login-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <h2>Welcome back.</h2><p>Sign in to your account</p>
            <label class="field">Username<input type="text" formControlName="username" autocomplete="username" placeholder="Your username" />@if (form.controls.username.touched && form.controls.username.invalid) { <small>Enter your username.</small> }</label>
            <label class="field">Password<input type="password" formControlName="password" autocomplete="current-password" placeholder="Your password" />@if (form.controls.password.touched && form.controls.password.invalid) { <small>Enter your password.</small> }</label>
            @if (error()) { <p class="login-error" role="alert">{{ error() }}</p> }
            <button class="primary-button login-button" type="submit" [disabled]="loading()">{{ loading() ? 'Checking\u2026' : 'Sign in' }}</button>
            <button class="sample-button" type="button" (click)="useDemoAccount()">Use sample sign-in</button>
            <p class="credential-note">Sample account: <strong>emilys</strong> / <strong>emilyspass</strong></p>
          </form>
        </div>
      }
    </section>
  `, styles: ["/* angular:styles/component:scss;58f0139e24d0f137;/home/runner/work/morrow-market/morrow-market/src/app/features/account/account.component.ts */\n:host {\n  display: block;\n}\n.account-page {\n  min-height: 490px;\n  padding-top: 54px;\n}\n.login-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(300px, 390px);\n  gap: 64px;\n  align-items: center;\n  padding-block: 35px 55px;\n}\n.login-intro {\n  max-width: 460px;\n}\n.login-intro .eyebrow {\n  display: block;\n  margin-bottom: 14px;\n}\n.login-intro p {\n  max-width: 350px;\n  color: var(--muted);\n  font-size: 13px;\n  line-height: 1.7;\n}\n.login-note {\n  display: flex;\n  align-items: start;\n  gap: 9px;\n  max-width: 360px;\n  margin-top: 35px;\n  padding: 13px;\n  background: #e7ece4;\n  color: var(--sage-deep);\n  font-size: 10px;\n  line-height: 1.6;\n}\n.login-note span {\n  color: var(--coral);\n}\n.login-form {\n  display: grid;\n  gap: 14px;\n  padding: 25px;\n  border: 1px solid var(--line);\n  background: var(--surface);\n}\n.login-form h2 {\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: 26px;\n  font-weight: 500;\n}\n.login-form > p {\n  margin: -10px 0 2px;\n  color: var(--muted);\n  font-size: 10px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  color: #4c554c;\n  font-size: 10px;\n  font-weight: 600;\n}\n.field input {\n  height: 43px;\n  padding: 0 11px;\n  border: 1px solid var(--line);\n  border-radius: 2px;\n  background: #fffefa;\n  font-size: 12px;\n}\n.field small,\n.login-error {\n  color: #ad442d;\n  font-size: 9px;\n}\n.login-error {\n  margin: 0;\n}\n.login-button {\n  width: 100%;\n}\n.login-button:disabled {\n  opacity: 0.65;\n  cursor: wait;\n}\n.sample-button {\n  min-height: 40px;\n  border: 1px solid var(--line);\n  background: transparent;\n  color: var(--ink);\n  font-size: 10px;\n  font-weight: 600;\n}\n.sample-button:hover {\n  border-color: var(--ink);\n}\n.credential-note {\n  margin: -3px 0 0 !important;\n  text-align: center;\n  font-size: 9px !important;\n}\n.account-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 22px;\n  border-bottom: 1px solid var(--line);\n}\n.account-heading .eyebrow {\n  display: block;\n  margin-bottom: 10px;\n}\n.account-heading p {\n  margin: 9px 0 0;\n  color: var(--muted);\n  font-size: 11px;\n}\n.account-layout {\n  display: grid;\n  grid-template-columns: 230px minmax(0, 1fr);\n  gap: 32px;\n  padding-top: 28px;\n}\n.profile-panel {\n  min-height: 210px;\n  padding: 20px;\n  border: 1px solid var(--line);\n  background: var(--surface);\n  text-align: center;\n}\n.profile-panel img {\n  width: 72px;\n  height: 72px;\n  margin: auto;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.profile-panel h2 {\n  margin: 12px 0 4px;\n  font-family: var(--font-display);\n  font-size: 19px;\n  font-weight: 500;\n}\n.profile-panel p {\n  margin: 0 0 12px;\n  color: var(--muted);\n  font-size: 10px;\n}\n.demo-badge {\n  padding: 5px 7px;\n  background: #f0e9d9;\n  color: #715d38;\n  font-size: 8px;\n  font-weight: 700;\n}\n.orders-panel {\n  padding: 20px;\n  border: 1px solid var(--line);\n  background: var(--surface);\n}\n.panel-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--line);\n}\n.panel-heading .eyebrow {\n  display: block;\n  margin-bottom: 6px;\n}\n.panel-heading h2 {\n  margin: 0;\n  font-family: var(--font-display);\n  font-size: 23px;\n  font-weight: 500;\n}\n.panel-heading > span {\n  color: var(--muted);\n  font-size: 9px;\n}\n.account-order {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding-block: 15px;\n  border-bottom: 1px solid var(--line);\n  font-size: 10px;\n}\n.account-order div {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.account-order div:last-child {\n  align-items: end;\n}\n.account-order span {\n  color: var(--muted);\n}\n.no-orders {\n  min-height: 130px;\n  display: grid;\n  place-content: center;\n  justify-items: center;\n  gap: 10px;\n  color: var(--muted);\n  font-size: 11px;\n}\n@media (max-width: 700px) {\n  .account-page {\n    padding-top: 38px;\n  }\n  .login-layout {\n    grid-template-columns: 1fr;\n    gap: 25px;\n    padding-top: 28px;\n  }\n  .login-note {\n    margin-top: 20px;\n  }\n  .account-layout {\n    grid-template-columns: 1fr;\n  }\n  .profile-panel {\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=account.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountComponent, { className: "AccountComponent", filePath: "src/app/features/account/account.component.ts", lineNumber: 87 });
})();
export {
  AccountComponent
};
//# debugId=3b35f03c-084e-5e66-be98-0df1844b0742
//# sourceMappingURL=chunk-4YOQFWOP.js.map
