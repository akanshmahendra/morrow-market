import {
  login,
  loginFailure,
  loginSuccess,
  logout,
  restoreSession,
  restoreSessionSuccess
} from "./chunk-ZZNTUQ5L.js";
import {
  addToCart,
  clearCart,
  loadCatalog,
  loadCatalogFailure,
  loadCatalogSuccess,
  loadPersistedData,
  loadPersistedDataSuccess,
  placeOrder,
  removeFromCart,
  setCartQuantity,
  setCategory,
  setSearch,
  setSort,
  showMoreProducts,
  toggleWishlist
} from "./chunk-46YXLFEM.js";
import {
  NG_ICON_DIRECTIVES,
  NgIcon,
  provideIcons,
  provideNgIconsConfig
} from "./chunk-JKLOG7BW.js";
import {
  AsyncPipe,
  Component,
  ErrorHandler,
  FEATURE_STATE_PROVIDER,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  Observable,
  Optional,
  PLATFORM_ID,
  ROOT_STORE_PROVIDER,
  RouterLink,
  RouterOutlet,
  ScannedActionsSubject,
  Store,
  StoreFeatureModule,
  StoreRootModule,
  Subject,
  __objRest,
  __spreadProps,
  __spreadValues,
  bootstrapApplication,
  catchError,
  createAction,
  createReducer,
  dematerialize,
  exhaustMap,
  filter,
  forkJoin,
  groupBy,
  ignoreElements,
  inject,
  isPlatformBrowser,
  makeEnvironmentProviders,
  map,
  materialize,
  merge,
  mergeMap,
  of,
  on,
  provideBrowserGlobalErrorListeners,
  provideClientHydration,
  provideEnvironmentInitializer,
  provideHttpClient,
  provideRouter,
  provideStore,
  selectCartCount,
  selectCustomer,
  selectPersistedData,
  setClassMetadata,
  signal,
  switchMap,
  take,
  tap,
  withFetch,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CU7B2LGP.js";

// node_modules/@ng-icons/lucide/fesm2022/ng-icons-lucide.mjs
var lucideArrowRight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`;
var lucideCheck = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M20 6 9 17l-5-5"></path></svg>`;
var lucideChevronDown = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="m6 9 6 6 6-6"></path></svg>`;
var lucideCircleCheck = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`;
var lucideCircleUserRound = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M17.925 20.056a6 6 0 0 0-11.851.001"></path><circle cx="12" cy="11" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>`;
var lucideHeart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>`;
var lucideMenu = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>`;
var lucideMinus = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M5 12h14"></path></svg>`;
var lucidePackageCheck = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M12 22V12"></path><path d="m16 17 2 2 4-4"></path><path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753"></path><path d="M3.29 7 12 12l8.71-5"></path><path d="m7.5 4.27 8.997 5.148"></path></svg>`;
var lucidePlus = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`;
var lucideSearch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>`;
var lucideShieldCheck = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>`;
var lucideShoppingBag = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>`;
var lucideSlidersHorizontal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>`;
var lucideSparkles = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>`;
var lucideTrash2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;
var lucideTruck = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>`;
var lucideX = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="stroke-width:var(--ng-icon__stroke-width, 2)"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`;

// node_modules/@ngrx/effects/fesm2022/ngrx-effects.mjs
var DEFAULT_EFFECT_CONFIG = {
  dispatch: true,
  functional: false,
  useEffectsErrorHandler: true
};
var CREATE_EFFECT_METADATA_KEY = "__@ngrx/effects_create__";
function createEffect(source, config = {}) {
  const effect = config.functional ? source : source();
  const value = __spreadValues(__spreadValues({}, DEFAULT_EFFECT_CONFIG), config);
  Object.defineProperty(effect, CREATE_EFFECT_METADATA_KEY, {
    value
  });
  return effect;
}
function getCreateEffectMetadata(instance) {
  const propertyNames = Object.getOwnPropertyNames(instance);
  const metadata = propertyNames.filter((propertyName) => {
    if (instance[propertyName] && instance[propertyName].hasOwnProperty(CREATE_EFFECT_METADATA_KEY)) {
      const property = instance[propertyName];
      return property[CREATE_EFFECT_METADATA_KEY].hasOwnProperty("dispatch");
    }
    return false;
  }).map((propertyName) => {
    const metaData = instance[propertyName][CREATE_EFFECT_METADATA_KEY];
    return __spreadValues({
      propertyName
    }, metaData);
  });
  return metadata;
}
function getSourceMetadata(instance) {
  return getCreateEffectMetadata(instance);
}
function getSourceForInstance(instance) {
  return Object.getPrototypeOf(instance);
}
function isClassInstance(obj) {
  return !!obj.constructor && obj.constructor.name !== "Object" && obj.constructor.name !== "Function";
}
function isClass(classOrRecord) {
  return typeof classOrRecord === "function";
}
function getClasses(classesAndRecords) {
  return classesAndRecords.filter(isClass);
}
function isToken(tokenOrRecord) {
  return tokenOrRecord instanceof InjectionToken || isClass(tokenOrRecord);
}
function mergeEffects(sourceInstance, globalErrorHandler, effectsErrorHandler) {
  const source = getSourceForInstance(sourceInstance);
  const isClassBasedEffect = !!source && source.constructor.name !== "Object";
  const sourceName = isClassBasedEffect ? source.constructor.name : null;
  const observables$ = getSourceMetadata(sourceInstance).map(({ propertyName, dispatch, useEffectsErrorHandler }) => {
    const observable$ = typeof sourceInstance[propertyName] === "function" ? sourceInstance[propertyName]() : sourceInstance[propertyName];
    const effectAction$ = useEffectsErrorHandler ? effectsErrorHandler(observable$, globalErrorHandler) : observable$;
    if (dispatch === false) {
      return effectAction$.pipe(ignoreElements());
    }
    const materialized$ = effectAction$.pipe(materialize());
    return materialized$.pipe(map((notification) => ({
      effect: sourceInstance[propertyName],
      notification,
      propertyName,
      sourceName,
      sourceInstance
    })));
  });
  return merge(...observables$);
}
var MAX_NUMBER_OF_RETRY_ATTEMPTS = 10;
function defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft = MAX_NUMBER_OF_RETRY_ATTEMPTS) {
  return observable$.pipe(catchError((error) => {
    if (errorHandler)
      errorHandler.handleError(error);
    if (retryAttemptLeft <= 1) {
      return observable$;
    }
    return defaultEffectsErrorHandler(observable$, errorHandler, retryAttemptLeft - 1);
  }));
}
var Actions = class _Actions extends Observable {
  constructor(source) {
    super();
    if (source) {
      this.source = source;
    }
  }
  lift(operator) {
    const observable = new _Actions();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  static {
    this.\u0275fac = function Actions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Actions)(\u0275\u0275inject(ScannedActionsSubject));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Actions,
      factory: _Actions.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Actions, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Observable, decorators: [{
    type: Inject,
    args: [ScannedActionsSubject]
  }] }], null);
})();
function ofType(...allowedTypes) {
  return filter((action) => allowedTypes.some((typeOrActionCreator) => {
    if (typeof typeOrActionCreator === "string") {
      return typeOrActionCreator === action.type;
    }
    return typeOrActionCreator.type === action.type;
  }));
}
var _ROOT_EFFECTS_GUARD = new InjectionToken("@ngrx/effects Internal Root Guard");
var USER_PROVIDED_EFFECTS = new InjectionToken("@ngrx/effects User Provided Effects");
var _ROOT_EFFECTS = new InjectionToken("@ngrx/effects Internal Root Effects");
var _ROOT_EFFECTS_INSTANCES = new InjectionToken("@ngrx/effects Internal Root Effects Instances");
var _FEATURE_EFFECTS = new InjectionToken("@ngrx/effects Internal Feature Effects");
var _FEATURE_EFFECTS_INSTANCE_GROUPS = new InjectionToken("@ngrx/effects Internal Feature Effects Instance Groups");
var EFFECTS_ERROR_HANDLER = new InjectionToken("@ngrx/effects Effects Error Handler", { providedIn: "root", factory: () => defaultEffectsErrorHandler });
var ROOT_EFFECTS_INIT = "@ngrx/effects/init";
var rootEffectsInit = createAction(ROOT_EFFECTS_INIT);
function reportInvalidActions(output, reporter) {
  if (output.notification.kind === "N") {
    const action = output.notification.value;
    const isInvalidAction = !isAction(action);
    if (isInvalidAction) {
      reporter.handleError(new Error(`Effect ${getEffectName(output)} dispatched an invalid action: ${stringify(action)}`));
    }
  }
}
function isAction(action) {
  return typeof action !== "function" && action && action.type && typeof action.type === "string";
}
function getEffectName({ propertyName, sourceInstance, sourceName }) {
  const isMethod = typeof sourceInstance[propertyName] === "function";
  const isClassBasedEffect = !!sourceName;
  return isClassBasedEffect ? `"${sourceName}.${String(propertyName)}${isMethod ? "()" : ""}"` : `"${String(propertyName)}()"`;
}
function stringify(action) {
  try {
    return JSON.stringify(action);
  } catch {
    return action;
  }
}
var onIdentifyEffectsKey = "ngrxOnIdentifyEffects";
function isOnIdentifyEffects(instance) {
  return isFunction(instance, onIdentifyEffectsKey);
}
var onRunEffectsKey = "ngrxOnRunEffects";
function isOnRunEffects(instance) {
  return isFunction(instance, onRunEffectsKey);
}
var onInitEffects = "ngrxOnInitEffects";
function isOnInitEffects(instance) {
  return isFunction(instance, onInitEffects);
}
function isFunction(instance, functionName) {
  return instance && functionName in instance && typeof instance[functionName] === "function";
}
var EffectSources = class _EffectSources extends Subject {
  constructor(errorHandler, effectsErrorHandler) {
    super();
    this.errorHandler = errorHandler;
    this.effectsErrorHandler = effectsErrorHandler;
  }
  addEffects(effectSourceInstance) {
    this.next(effectSourceInstance);
  }
  /**
   * @internal
   */
  toActions() {
    return this.pipe(groupBy((effectsInstance2) => isClassInstance(effectsInstance2) ? getSourceForInstance(effectsInstance2) : effectsInstance2), mergeMap((source$) => {
      return source$.pipe(groupBy(effectsInstance));
    }), mergeMap((source$) => {
      const effect$ = source$.pipe(exhaustMap((sourceInstance) => {
        return resolveEffectSource(this.errorHandler, this.effectsErrorHandler)(sourceInstance);
      }), map((output) => {
        reportInvalidActions(output, this.errorHandler);
        return output.notification;
      }), filter((notification) => notification.kind === "N" && notification.value != null), dematerialize());
      const init$ = source$.pipe(take(1), filter(isOnInitEffects), map((instance) => instance.ngrxOnInitEffects()));
      return merge(effect$, init$);
    }));
  }
  static {
    this.\u0275fac = function EffectSources_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EffectSources)(\u0275\u0275inject(ErrorHandler), \u0275\u0275inject(EFFECTS_ERROR_HANDLER));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _EffectSources,
      factory: _EffectSources.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectSources, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ErrorHandler }, { type: void 0, decorators: [{
    type: Inject,
    args: [EFFECTS_ERROR_HANDLER]
  }] }], null);
})();
function effectsInstance(sourceInstance) {
  if (isOnIdentifyEffects(sourceInstance)) {
    return sourceInstance.ngrxOnIdentifyEffects();
  }
  return "";
}
function resolveEffectSource(errorHandler, effectsErrorHandler) {
  return (sourceInstance) => {
    const mergedEffects$ = mergeEffects(sourceInstance, errorHandler, effectsErrorHandler);
    if (isOnRunEffects(sourceInstance)) {
      return sourceInstance.ngrxOnRunEffects(mergedEffects$);
    }
    return mergedEffects$;
  };
}
var EffectsRunner = class _EffectsRunner {
  get isStarted() {
    return !!this.effectsSubscription;
  }
  constructor(effectSources, store) {
    this.effectSources = effectSources;
    this.store = store;
    this.effectsSubscription = null;
  }
  start() {
    if (!this.effectsSubscription) {
      this.effectsSubscription = this.effectSources.toActions().subscribe(this.store);
    }
  }
  ngOnDestroy() {
    if (this.effectsSubscription) {
      this.effectsSubscription.unsubscribe();
      this.effectsSubscription = null;
    }
  }
  static {
    this.\u0275fac = function EffectsRunner_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EffectsRunner)(\u0275\u0275inject(EffectSources), \u0275\u0275inject(Store));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _EffectsRunner,
      factory: _EffectsRunner.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsRunner, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: EffectSources }, { type: Store }], null);
})();
var EffectsRootModule = class _EffectsRootModule {
  constructor(sources, runner, store, rootEffectsInstances, storeRootModule, storeFeatureModule, guard) {
    this.sources = sources;
    runner.start();
    for (const effectsInstance2 of rootEffectsInstances) {
      sources.addEffects(effectsInstance2);
    }
    store.dispatch({ type: ROOT_EFFECTS_INIT });
  }
  addEffects(effectsInstance2) {
    this.sources.addEffects(effectsInstance2);
  }
  static {
    this.\u0275fac = function EffectsRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EffectsRootModule)(\u0275\u0275inject(EffectSources), \u0275\u0275inject(EffectsRunner), \u0275\u0275inject(Store), \u0275\u0275inject(_ROOT_EFFECTS_INSTANCES), \u0275\u0275inject(StoreRootModule, 8), \u0275\u0275inject(StoreFeatureModule, 8), \u0275\u0275inject(_ROOT_EFFECTS_GUARD, 8));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _EffectsRootModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsRootModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{ type: EffectSources }, { type: EffectsRunner }, { type: Store }, { type: void 0, decorators: [{
    type: Inject,
    args: [_ROOT_EFFECTS_INSTANCES]
  }] }, { type: StoreRootModule, decorators: [{
    type: Optional
  }] }, { type: StoreFeatureModule, decorators: [{
    type: Optional
  }] }, { type: void 0, decorators: [{
    type: Optional
  }, {
    type: Inject,
    args: [_ROOT_EFFECTS_GUARD]
  }] }], null);
})();
var EffectsFeatureModule = class _EffectsFeatureModule {
  constructor(effectsRootModule, effectsInstanceGroups, storeRootModule, storeFeatureModule) {
    const effectsInstances = effectsInstanceGroups.flat();
    for (const effectsInstance2 of effectsInstances) {
      effectsRootModule.addEffects(effectsInstance2);
    }
  }
  static {
    this.\u0275fac = function EffectsFeatureModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EffectsFeatureModule)(\u0275\u0275inject(EffectsRootModule), \u0275\u0275inject(_FEATURE_EFFECTS_INSTANCE_GROUPS), \u0275\u0275inject(StoreRootModule, 8), \u0275\u0275inject(StoreFeatureModule, 8));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _EffectsFeatureModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsFeatureModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{ type: EffectsRootModule }, { type: void 0, decorators: [{
    type: Inject,
    args: [_FEATURE_EFFECTS_INSTANCE_GROUPS]
  }] }, { type: StoreRootModule, decorators: [{
    type: Optional
  }] }, { type: StoreFeatureModule, decorators: [{
    type: Optional
  }] }], null);
})();
var EffectsModule = class _EffectsModule {
  static forFeature(...featureEffects) {
    const effects = featureEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsFeatureModule,
      providers: [
        effectsClasses,
        {
          provide: _FEATURE_EFFECTS,
          multi: true,
          useValue: effects
        },
        {
          provide: USER_PROVIDED_EFFECTS,
          multi: true,
          useValue: []
        },
        {
          provide: _FEATURE_EFFECTS_INSTANCE_GROUPS,
          multi: true,
          useFactory: createEffectsInstances,
          deps: [_FEATURE_EFFECTS, USER_PROVIDED_EFFECTS]
        }
      ]
    };
  }
  static forRoot(...rootEffects) {
    const effects = rootEffects.flat();
    const effectsClasses = getClasses(effects);
    return {
      ngModule: EffectsRootModule,
      providers: [
        effectsClasses,
        {
          provide: _ROOT_EFFECTS,
          useValue: [effects]
        },
        {
          provide: _ROOT_EFFECTS_GUARD,
          useFactory: _provideForRootGuard
        },
        {
          provide: USER_PROVIDED_EFFECTS,
          multi: true,
          useValue: []
        },
        {
          provide: _ROOT_EFFECTS_INSTANCES,
          useFactory: createEffectsInstances,
          deps: [_ROOT_EFFECTS, USER_PROVIDED_EFFECTS]
        }
      ]
    };
  }
  static {
    this.\u0275fac = function EffectsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EffectsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _EffectsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EffectsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
function createEffectsInstances(effectsGroups, userProvidedEffectsGroups) {
  const effects = [];
  for (const effectsGroup of effectsGroups) {
    effects.push(...effectsGroup);
  }
  for (const userProvidedEffectsGroup of userProvidedEffectsGroups) {
    effects.push(...userProvidedEffectsGroup);
  }
  return effects.map((effectsTokenOrRecord) => isToken(effectsTokenOrRecord) ? inject(effectsTokenOrRecord) : effectsTokenOrRecord);
}
function _provideForRootGuard() {
  const runner = inject(EffectsRunner, { optional: true, skipSelf: true });
  const rootEffects = inject(_ROOT_EFFECTS, { self: true });
  const hasEffects = !(rootEffects.length === 1 && rootEffects[0].length === 0);
  if (hasEffects && runner) {
    throw new TypeError(`EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.`);
  }
  return "guarded";
}
function provideEffects(...effects) {
  const effectsClassesAndRecords = effects.flat();
  const effectsClasses = getClasses(effectsClassesAndRecords);
  return makeEnvironmentProviders([
    effectsClasses,
    provideEnvironmentInitializer(() => {
      inject(ROOT_STORE_PROVIDER);
      inject(FEATURE_STATE_PROVIDER, { optional: true });
      const effectsRunner = inject(EffectsRunner);
      const effectSources = inject(EffectSources);
      const shouldInitEffects = !effectsRunner.isStarted;
      if (shouldInitEffects) {
        effectsRunner.start();
      }
      for (const effectsClassOrRecord of effectsClassesAndRecords) {
        const effectsInstance2 = isClass(effectsClassOrRecord) ? inject(effectsClassOrRecord) : effectsClassOrRecord;
        effectSources.addEffects(effectsInstance2);
      }
      if (shouldInitEffects) {
        const store = inject(Store);
        store.dispatch(rootEffectsInit());
      }
    })
  ]);
}

// src/app/app.routes.ts
var routes = [
  __spreadValues({
    path: "",
    loadComponent: () => import("./chunk-63AOMOPT.js").then((m) => m.StorefrontComponent)
  }, false ? { \u0275entryName: "src/app/features/storefront/storefront.component.ts" } : {}),
  __spreadValues({
    path: "product/:id",
    loadComponent: () => import("./chunk-QETVV3G3.js").then((m) => m.ProductDetailComponent)
  }, false ? { \u0275entryName: "src/app/features/product-detail/product-detail.component.ts" } : {}),
  __spreadValues({
    path: "wishlist",
    loadComponent: () => import("./chunk-H5MAQUNY.js").then((m) => m.WishlistComponent)
  }, false ? { \u0275entryName: "src/app/features/wishlist/wishlist.component.ts" } : {}),
  __spreadValues({
    path: "account",
    loadComponent: () => import("./chunk-KLWWMHQS.js").then((m) => m.AccountComponent)
  }, false ? { \u0275entryName: "src/app/features/account/account.component.ts" } : {}),
  __spreadValues({
    path: "cart",
    loadComponent: () => import("./chunk-YJUKBVSU.js").then((m) => m.CartComponent)
  }, false ? { \u0275entryName: "src/app/features/cart/cart.component.ts" } : {}),
  __spreadValues({
    path: "checkout",
    loadComponent: () => import("./chunk-FX2YHUXY.js").then((m) => m.CheckoutComponent)
  }, false ? { \u0275entryName: "src/app/features/checkout/checkout.component.ts" } : {}),
  __spreadValues({
    path: "orders/:id",
    loadComponent: () => import("./chunk-QVJVLE4Y.js").then((m) => m.OrderConfirmationComponent)
  }, false ? { \u0275entryName: "src/app/features/order-confirmation/order-confirmation.component.ts" } : {}),
  { path: "**", redirectTo: "" }
];

// src/app/core/services/account-api.service.ts
var AccountApiService = class _AccountApiService {
  http = inject(HttpClient);
  login(username, password) {
    return this.http.post("https://dummyjson.com/auth/login", {
      username,
      password,
      expiresInMins: 60
    });
  }
  static \u0275fac = function AccountApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountApiService, factory: _AccountApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/store/auth.effects.ts
var SESSION_KEY = "morrow-market-session";
var AuthEffects = class _AuthEffects {
  actions$ = inject(Actions);
  accountApi = inject(AccountApiService);
  platformId = inject(PLATFORM_ID);
  login$ = createEffect(() => this.actions$.pipe(ofType(login), switchMap(({ username, password }) => this.accountApi.login(username, password).pipe(tap((response) => this.saveSession(response)), map((response) => loginSuccess({ customer: this.toCustomer(response) })), catchError(() => of(loginFailure({
    error: "Those details did not match a demo account. Try the sample sign-in."
  })))))));
  restoreSession$ = createEffect(() => this.actions$.pipe(ofType(restoreSession), map(() => {
    if (!isPlatformBrowser(this.platformId))
      return null;
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }), map((response) => restoreSessionSuccess({
    customer: response ? this.toCustomer(response) : null
  }))));
  clearSession$ = createEffect(() => this.actions$.pipe(ofType(logout), tap(() => {
    if (isPlatformBrowser(this.platformId))
      sessionStorage.removeItem(SESSION_KEY);
  })), { dispatch: false });
  saveSession(response) {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(response));
    }
  }
  toCustomer(response) {
    const _a = response, { accessToken: _accessToken, refreshToken: _refreshToken } = _a, customer = __objRest(_a, ["accessToken", "refreshToken"]);
    return customer;
  }
  static \u0275fac = function AuthEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthEffects, factory: _AuthEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthEffects, [{
    type: Injectable
  }], null, null);
})();

// src/app/store/auth.reducer.ts
var initialAuthState = {
  customer: null,
  loading: false,
  error: null
};
var authReducer = createReducer(
  initialAuthState,
  on(login, (state) => __spreadProps(__spreadValues({}, state), { loading: true, error: null })),
  on(loginSuccess, (state, { customer }) => __spreadProps(__spreadValues({}, state), { customer, loading: false })),
  on(loginFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), { loading: false, error })),
  on(logout, () => initialAuthState),
  on(restoreSessionSuccess, (state, { customer }) => __spreadProps(__spreadValues({}, state), { customer }))
);

// src/environments/environment.ts
var environment = {
  name: "dev",
  production: false,
  apiUrl: "https://dummyjson.com"
};

// src/app/core/services/catalog-api.service.ts
var CatalogApiService = class _CatalogApiService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  getCatalog() {
    return forkJoin({
      productResponse: this.http.get(`${this.baseUrl}/products?limit=0`),
      categories: this.http.get(`${this.baseUrl}/products/categories`)
    }).pipe(map(({ productResponse, categories }) => ({
      products: productResponse.products,
      categories
    })));
  }
  static \u0275fac = function CatalogApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CatalogApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CatalogApiService, factory: _CatalogApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CatalogApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/store/shop.effects.ts
var STORAGE_KEY = "morrow-market-shop";
var emptyData = { cartItems: [], wishlistIds: [], orders: [] };
var ShopEffects = class _ShopEffects {
  actions$ = inject(Actions);
  api = inject(CatalogApiService);
  store = inject(Store);
  platformId = inject(PLATFORM_ID);
  loadCatalog$ = createEffect(() => this.actions$.pipe(ofType(loadCatalog), switchMap(() => this.api.getCatalog().pipe(map((data) => loadCatalogSuccess(data)), catchError(() => of(loadCatalogFailure({
    error: "The catalog could not be loaded. Please try again."
  })))))));
  loadPersistedData$ = createEffect(() => this.actions$.pipe(ofType(loadPersistedData), map(() => {
    if (!isPlatformBrowser(this.platformId))
      return emptyData;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? __spreadValues(__spreadValues({}, emptyData), JSON.parse(saved)) : emptyData;
    } catch {
      return emptyData;
    }
  }), map((data) => loadPersistedDataSuccess(data))));
  persistData$ = createEffect(() => this.actions$.pipe(ofType(addToCart, removeFromCart, setCartQuantity, clearCart, toggleWishlist, placeOrder), withLatestFrom(this.store.select(selectPersistedData)), tap(([, data]) => {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  })), { dispatch: false });
  static \u0275fac = function ShopEffects_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShopEffects)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShopEffects, factory: _ShopEffects.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShopEffects, [{
    type: Injectable
  }], null, null);
})();

// src/app/store/shop.reducer.ts
var initialShopState = {
  products: [],
  categories: [],
  loading: false,
  error: null,
  category: "all",
  query: "",
  sort: "featured",
  visibleCount: 12,
  cartItems: [],
  wishlistIds: [],
  orders: [],
  lastOrderId: null
};
var shopReducer = createReducer(
  initialShopState,
  on(loadCatalog, (state) => __spreadProps(__spreadValues({}, state), { loading: true, error: null })),
  on(loadCatalogSuccess, (state, { products, categories }) => __spreadProps(__spreadValues({}, state), {
    products,
    categories,
    loading: false
  })),
  on(loadCatalogFailure, (state, { error }) => __spreadProps(__spreadValues({}, state), { loading: false, error })),
  on(setCategory, (state, { category }) => __spreadProps(__spreadValues({}, state), { category, visibleCount: 12 })),
  on(setSearch, (state, { query }) => __spreadProps(__spreadValues({}, state), { query, visibleCount: 12 })),
  on(setSort, (state, { sort }) => __spreadProps(__spreadValues({}, state), { sort, visibleCount: 12 })),
  on(showMoreProducts, (state) => __spreadProps(__spreadValues({}, state), {
    visibleCount: state.visibleCount + 12
  })),
  on(toggleWishlist, (state, { productId }) => __spreadProps(__spreadValues({}, state), {
    wishlistIds: state.wishlistIds.includes(productId) ? state.wishlistIds.filter((id) => id !== productId) : [...state.wishlistIds, productId]
  })),
  on(addToCart, (state, { product, quantity = 1 }) => {
    const existing = state.cartItems.find((item) => item.product.id === product.id);
    const cartItems = existing ? state.cartItems.map(
      (item) => item.product.id === product.id ? __spreadProps(__spreadValues({}, item), { quantity: Math.min(item.quantity + quantity, product.stock) }) : item
    ) : [...state.cartItems, { product, quantity: Math.min(quantity, product.stock) }];
    return __spreadProps(__spreadValues({}, state), { cartItems });
  }),
  on(removeFromCart, (state, { productId }) => __spreadProps(__spreadValues({}, state), {
    cartItems: state.cartItems.filter((item) => item.product.id !== productId)
  })),
  on(setCartQuantity, (state, { productId, quantity }) => __spreadProps(__spreadValues({}, state), {
    cartItems: quantity <= 0 ? state.cartItems.filter((item) => item.product.id !== productId) : state.cartItems.map(
      (item) => item.product.id === productId ? __spreadProps(__spreadValues({}, item), { quantity: Math.min(quantity, item.product.stock) }) : item
    )
  })),
  on(clearCart, (state) => __spreadProps(__spreadValues({}, state), { cartItems: [] })),
  on(placeOrder, (state, { order }) => __spreadProps(__spreadValues({}, state), {
    orders: [order, ...state.orders],
    cartItems: [],
    lastOrderId: order.id
  })),
  on(loadPersistedDataSuccess, (state, data) => __spreadProps(__spreadValues({}, state), {
    cartItems: data.cartItems,
    wishlistIds: data.wishlistIds,
    orders: data.orders
  }))
);

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore({ shop: shopReducer, auth: authReducer }),
    provideEffects([ShopEffects, AuthEffects]),
    provideIcons({
      lucideArrowRight,
      lucideCheck,
      lucideChevronDown,
      lucideCircleCheck,
      lucideCircleUserRound,
      lucideHeart,
      lucideMenu,
      lucideMinus,
      lucidePackageCheck,
      lucidePlus,
      lucideSearch,
      lucideShieldCheck,
      lucideShoppingBag,
      lucideSlidersHorizontal,
      lucideSparkles,
      lucideTrash2,
      lucideTruck,
      lucideX
    }),
    provideNgIconsConfig({ strokeWidth: 1.8 })
  ]
};

// src/app/app.ts
var _c0 = () => ({ category: "beauty" });
var _c1 = () => ({ category: "fragrances" });
var _c2 = () => ({ category: "furniture" });
var _c3 = () => ({ category: "groceries" });
function App_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", ctx.firstName, " ");
  }
}
function App_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Account ");
  }
}
function App_Conditional_31_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const count_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(count_r1);
  }
}
function App_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, App_Conditional_31_Conditional_0_Template, 2, 1, "span", 32);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx > 0 ? 0 : -1);
  }
}
var App = class _App {
  store = inject(Store);
  cartCount$ = this.store.select(selectCartCount);
  customer$ = this.store.select(selectCustomer);
  menuOpen = signal(
    false,
    ...ngDevMode ? [{ debugName: "menuOpen" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.store.dispatch(loadPersistedData());
    this.store.dispatch(loadCatalog());
    this.store.dispatch(restoreSession());
  }
  search(event) {
    this.store.dispatch(setSearch({ query: event.target.value }));
  }
  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 77, vars: 18, consts: [[1, "announcement"], [1, "announcement-detail"], [1, "site-header"], [1, "header-main", "page-wrap"], ["routerLink", "/", "aria-label", "Morrow Market home", 1, "wordmark"], [1, "search-box"], ["name", "lucideSearch", "aria-hidden", "true"], ["type", "search", "placeholder", "Search the good stuff", "aria-label", "Search products", 3, "input"], ["aria-label", "Shopping links", 1, "header-actions"], ["routerLink", "/wishlist", "aria-label", "Your saved items", 1, "icon-link", "saved-link"], ["name", "lucideHeart", "aria-hidden", "true"], [1, "action-label"], ["routerLink", "/account", "aria-label", "Your account", 1, "icon-link", "account-link"], ["name", "lucideCircleUserRound", "aria-hidden", "true"], ["routerLink", "/cart", "aria-label", "Shopping bag", 1, "icon-link", "cart-link"], ["name", "lucideShoppingBag", "aria-hidden", "true"], ["type", "button", "title", "Browse categories", 1, "mobile-menu", 3, "click"], ["name", "lucideMenu", "aria-hidden", "true"], ["aria-label", "Product categories", 1, "category-nav", "page-wrap"], ["routerLink", "/", "fragment", "discover"], ["routerLink", "/", "fragment", "discover", 3, "queryParams"], ["routerLink", "/", "fragment", "discover", 1, "nav-new"], [1, "nav-note"], [1, "site-footer"], [1, "footer-main", "page-wrap"], [1, "footer-brand"], ["routerLink", "/", 1, "wordmark", "wordmark-light"], [1, "footer-links"], ["routerLink", "/wishlist"], ["routerLink", "/cart"], [1, "footer-note"], [1, "footer-bottom", "page-wrap"], [1, "cart-count"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span");
      \u0275\u0275text(2, "Good things, thoughtfully found.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 1);
      \u0275\u0275text(4, "Complimentary delivery on orders over $75");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "header", 2)(6, "div", 3)(7, "a", 4);
      \u0275\u0275text(8, "morrow");
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, ".");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "label", 5);
      \u0275\u0275element(12, "ng-icon", 6);
      \u0275\u0275elementStart(13, "input", 7);
      \u0275\u0275listener("input", function App_Template_input_input_13_listener($event) {
        return ctx.search($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "kbd");
      \u0275\u0275text(15, "\u2318 K");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "nav", 8)(17, "a", 9);
      \u0275\u0275element(18, "ng-icon", 10);
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "Saved");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "a", 12);
      \u0275\u0275element(22, "ng-icon", 13);
      \u0275\u0275elementStart(23, "span", 11);
      \u0275\u0275conditionalCreate(24, App_Conditional_24_Template, 1, 1);
      \u0275\u0275pipe(25, "async");
      \u0275\u0275conditionalBranchCreate(26, App_Conditional_26_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "a", 14);
      \u0275\u0275element(28, "ng-icon", 15);
      \u0275\u0275elementStart(29, "span", 11);
      \u0275\u0275text(30, "Bag");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, App_Conditional_31_Template, 1, 1);
      \u0275\u0275pipe(32, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 16);
      \u0275\u0275listener("click", function App_Template_button_click_33_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(34, "ng-icon", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "nav", 18)(36, "a", 19);
      \u0275\u0275text(37, "Shop all");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 20);
      \u0275\u0275text(39, "Beauty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 20);
      \u0275\u0275text(41, "Fragrance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 20);
      \u0275\u0275text(43, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 20);
      \u0275\u0275text(45, "Pantry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 21);
      \u0275\u0275text(47, "New finds ");
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "\u2197");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "span", 22);
      \u0275\u0275text(51, "A little more considered.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "main");
      \u0275\u0275element(53, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "footer", 23)(55, "div", 24)(56, "div", 25)(57, "a", 26);
      \u0275\u0275text(58, "morrow");
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, ".");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "p");
      \u0275\u0275text(62, "Everyday things, chosen with a little more care.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 27)(64, "a", 19);
      \u0275\u0275text(65, "Shop the collection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 28);
      \u0275\u0275text(67, "Your saved finds");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "a", 29);
      \u0275\u0275text(69, "Your shopping bag");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "p", 30);
      \u0275\u0275text(71, "Made for the moments in between.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 31)(73, "span");
      \u0275\u0275text(74, "\xA9 2026 Morrow Market");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Thoughtfully sourced. Happily delivered.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(24);
      \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(25, 10, ctx.customer$)) ? 24 : 26, tmp_0_0);
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_1_0 = \u0275\u0275pipeBind1(32, 12, ctx.cartCount$)) ? 31 : -1, tmp_1_0);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-expanded", ctx.menuOpen())("aria-label", ctx.menuOpen() ? "Close navigation" : "Open navigation");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("menu-open", ctx.menuOpen());
      \u0275\u0275advance(3);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(15, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(16, _c2));
      \u0275\u0275advance(2);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(17, _c3));
    }
  }, dependencies: [RouterLink, RouterOutlet, NgIcon, AsyncPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n.announcement[_ngcontent-%COMP%] {\n  min-height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 6px 20px;\n  background: var(--%NS%ink);\n  color: #f8f4ed;\n  font-size: 11px;\n}\n.announcement-detail[_ngcontent-%COMP%] {\n  color: #c8c7bf;\n}\n.site-header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 5;\n  background: var(--%NS%paper);\n}\n.header-main[_ngcontent-%COMP%] {\n  min-height: 82px;\n  display: grid;\n  grid-template-columns: 1fr minmax(230px, 420px) 1fr;\n  align-items: center;\n  gap: 30px;\n}\n.wordmark[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: baseline;\n  font-family: var(--%NS%font-display);\n  font-size: 34px;\n  font-weight: 600;\n  line-height: 1;\n}\n.wordmark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n}\n.search-box[_ngcontent-%COMP%] {\n  height: 43px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 12px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 3px;\n  color: var(--%NS%muted);\n  background: #fffefa;\n}\n.search-box[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--%NS%ink);\n  font-size: 13px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8b8d87;\n}\n.search-box[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 3px 5px;\n  border: 1px solid var(--%NS%line);\n  border-radius: 2px;\n  color: #8b8d87;\n  font: 10px var(--%NS%font-body);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 25px;\n}\n.icon-link[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: var(--%NS%ink);\n  font-size: 12px;\n}\n.icon-link[_ngcontent-%COMP%]   ng-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 19px;\n}\n.cart-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -8px;\n  left: 11px;\n  display: grid;\n  min-width: 16px;\n  height: 16px;\n  place-items: center;\n  padding: 0 4px;\n  border-radius: 50%;\n  background: var(--%NS%coral);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  border: 0;\n  background: transparent;\n  color: var(--%NS%ink);\n  font-size: 22px;\n}\n.category-nav[_ngcontent-%COMP%] {\n  min-height: 43px;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  border-top: 1px solid var(--%NS%line);\n  font-size: 12px;\n}\n.category-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  transition: color 0.2s ease;\n}\n.category-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--%NS%coral);\n}\n.category-nav[_ngcontent-%COMP%]   .nav-new[_ngcontent-%COMP%] {\n  color: var(--%NS%coral);\n}\n.nav-new[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 2px;\n}\n.nav-note[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--%NS%muted);\n  font-family: var(--%NS%font-display);\n  font-size: 14px;\n  font-style: italic;\n}\n.site-footer[_ngcontent-%COMP%] {\n  margin-top: 92px;\n  background: var(--%NS%ink);\n  color: #f7f4ec;\n}\n.footer-main[_ngcontent-%COMP%] {\n  min-height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n}\n.wordmark-light[_ngcontent-%COMP%] {\n  color: #fffaf0;\n}\n.footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: #b5b5ad;\n  font-size: 12px;\n}\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  color: #d8d7d0;\n  font-size: 12px;\n}\n.footer-note[_ngcontent-%COMP%] {\n  color: #d8d7d0;\n  font-family: var(--%NS%font-display);\n  font-size: 18px;\n  font-style: italic;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #41433d;\n  color: #a9aaa2;\n  font-size: 10px;\n}\n@media (max-width: 760px) {\n  .announcement[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .announcement-detail[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-main[_ngcontent-%COMP%] {\n    min-height: 70px;\n    grid-template-columns: 1fr auto;\n    gap: 13px;\n    padding-block: 12px;\n  }\n  .wordmark[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    grid-row: 2;\n    grid-column: 1/-1;\n    height: 40px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  .action-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .saved-link[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: inline-flex;\n    padding: 4px;\n  }\n  .category-nav[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    gap: 23px;\n    white-space: nowrap;\n    scrollbar-width: none;\n  }\n  .category-nav.menu-open[_ngcontent-%COMP%] {\n    max-height: 135px;\n    flex-wrap: wrap;\n    align-content: start;\n    overflow: auto;\n    padding-block: 5px;\n    white-space: normal;\n  }\n  .category-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-note[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .footer-main[_ngcontent-%COMP%] {\n    min-height: 230px;\n    flex-wrap: wrap;\n    padding-block: 30px;\n  }\n  .footer-note[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .footer-links[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n  .footer-bottom[_ngcontent-%COMP%] {\n    gap: 10px;\n    font-size: 9px;\n  }\n}\n@media (max-width: 430px) {\n  .footer-bottom[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ imports: [AsyncPipe, RouterLink, RouterOutlet, NG_ICON_DIRECTIVES], selector: "app-root", template: `<div class="announcement">
  <span>Good things, thoughtfully found.</span>
  <span class="announcement-detail">Complimentary delivery on orders over $75</span>
</div>

<header class="site-header">
  <div class="header-main page-wrap">
    <a class="wordmark" routerLink="/" aria-label="Morrow Market home">morrow<span>.</span></a>

    <label class="search-box">
      <ng-icon name="lucideSearch" aria-hidden="true" />
      <input
        type="search"
        placeholder="Search the good stuff"
        aria-label="Search products"
        (input)="search($event)"
      />
      <kbd>\u2318 K</kbd>
    </label>

    <nav class="header-actions" aria-label="Shopping links">
      <a class="icon-link saved-link" routerLink="/wishlist" aria-label="Your saved items">
        <ng-icon name="lucideHeart" aria-hidden="true" />
        <span class="action-label">Saved</span>
      </a>
      <a class="icon-link account-link" routerLink="/account" aria-label="Your account">
        <ng-icon name="lucideCircleUserRound" aria-hidden="true" />
        <span class="action-label">
          @if (customer$ | async; as customer) {
            {{ customer.firstName }}
          } @else {
            Account
          }
        </span>
      </a>
      <a class="icon-link cart-link" routerLink="/cart" aria-label="Shopping bag">
        <ng-icon name="lucideShoppingBag" aria-hidden="true" />
        <span class="action-label">Bag</span>
        @if (cartCount$ | async; as count) {
          @if (count > 0) {
            <span class="cart-count">{{ count }}</span>
          }
        }
      </a>
      <button
        class="mobile-menu"
        type="button"
        [attr.aria-expanded]="menuOpen()"
        [attr.aria-label]="menuOpen() ? 'Close navigation' : 'Open navigation'"
        title="Browse categories"
        (click)="toggleMenu()"
      >
        <ng-icon name="lucideMenu" aria-hidden="true" />
      </button>
    </nav>
  </div>

  <nav
    class="category-nav page-wrap"
    [class.menu-open]="menuOpen()"
    aria-label="Product categories"
  >
    <a routerLink="/" fragment="discover">Shop all</a>
    <a routerLink="/" fragment="discover" [queryParams]="{ category: 'beauty' }">Beauty</a>
    <a routerLink="/" fragment="discover" [queryParams]="{ category: 'fragrances' }">Fragrance</a>
    <a routerLink="/" fragment="discover" [queryParams]="{ category: 'furniture' }">Home</a>
    <a routerLink="/" fragment="discover" [queryParams]="{ category: 'groceries' }">Pantry</a>
    <a routerLink="/" fragment="discover" class="nav-new">New finds <span>\u2197</span></a>
    <span class="nav-note">A little more considered.</span>
  </nav>
</header>

<main>
  <router-outlet />
</main>

<footer class="site-footer">
  <div class="footer-main page-wrap">
    <div class="footer-brand">
      <a class="wordmark wordmark-light" routerLink="/">morrow<span>.</span></a>
      <p>Everyday things, chosen with a little more care.</p>
    </div>
    <div class="footer-links">
      <a routerLink="/" fragment="discover">Shop the collection</a>
      <a routerLink="/wishlist">Your saved finds</a>
      <a routerLink="/cart">Your shopping bag</a>
    </div>
    <p class="footer-note">Made for the moments in between.</p>
  </div>
  <div class="footer-bottom page-wrap">
    <span>\xA9 2026 Morrow Market</span>
    <span>Thoughtfully sourced. Happily delivered.</span>
  </div>
</footer>
`, styles: ["/* src/app/app.scss */\n:host {\n  display: block;\n  min-height: 100vh;\n}\n.announcement {\n  min-height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 6px 20px;\n  background: var(--ink);\n  color: #f8f4ed;\n  font-size: 11px;\n}\n.announcement-detail {\n  color: #c8c7bf;\n}\n.site-header {\n  position: relative;\n  z-index: 5;\n  background: var(--paper);\n}\n.header-main {\n  min-height: 82px;\n  display: grid;\n  grid-template-columns: 1fr minmax(230px, 420px) 1fr;\n  align-items: center;\n  gap: 30px;\n}\n.wordmark {\n  display: inline-flex;\n  width: fit-content;\n  align-items: baseline;\n  font-family: var(--font-display);\n  font-size: 34px;\n  font-weight: 600;\n  line-height: 1;\n}\n.wordmark span {\n  color: var(--coral);\n}\n.search-box {\n  height: 43px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 12px;\n  border: 1px solid var(--line);\n  border-radius: 3px;\n  color: var(--muted);\n  background: #fffefa;\n}\n.search-box ng-icon {\n  font-size: 17px;\n  flex: none;\n}\n.search-box input {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 13px;\n}\n.search-box input::placeholder {\n  color: #8b8d87;\n}\n.search-box kbd {\n  flex: none;\n  padding: 3px 5px;\n  border: 1px solid var(--line);\n  border-radius: 2px;\n  color: #8b8d87;\n  font: 10px var(--font-body);\n}\n.header-actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 25px;\n}\n.icon-link {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  color: var(--ink);\n  font-size: 12px;\n}\n.icon-link ng-icon {\n  display: inline-flex;\n  font-size: 19px;\n}\n.cart-count {\n  position: absolute;\n  top: -8px;\n  left: 11px;\n  display: grid;\n  min-width: 16px;\n  height: 16px;\n  place-items: center;\n  padding: 0 4px;\n  border-radius: 50%;\n  background: var(--coral);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n}\n.mobile-menu {\n  display: none;\n  border: 0;\n  background: transparent;\n  color: var(--ink);\n  font-size: 22px;\n}\n.category-nav {\n  min-height: 43px;\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  border-top: 1px solid var(--line);\n  font-size: 12px;\n}\n.category-nav a {\n  padding: 12px 0;\n  transition: color 0.2s ease;\n}\n.category-nav a:hover {\n  color: var(--coral);\n}\n.category-nav .nav-new {\n  color: var(--coral);\n}\n.nav-new span {\n  padding-left: 2px;\n}\n.nav-note {\n  margin-left: auto;\n  color: var(--muted);\n  font-family: var(--font-display);\n  font-size: 14px;\n  font-style: italic;\n}\n.site-footer {\n  margin-top: 92px;\n  background: var(--ink);\n  color: #f7f4ec;\n}\n.footer-main {\n  min-height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n}\n.wordmark-light {\n  color: #fffaf0;\n}\n.footer-brand p {\n  margin: 12px 0 0;\n  color: #b5b5ad;\n  font-size: 12px;\n}\n.footer-links {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  color: #d8d7d0;\n  font-size: 12px;\n}\n.footer-note {\n  color: #d8d7d0;\n  font-family: var(--font-display);\n  font-size: 18px;\n  font-style: italic;\n}\n.footer-bottom {\n  min-height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #41433d;\n  color: #a9aaa2;\n  font-size: 10px;\n}\n@media (max-width: 760px) {\n  .announcement {\n    font-size: 10px;\n  }\n  .announcement-detail {\n    display: none;\n  }\n  .header-main {\n    min-height: 70px;\n    grid-template-columns: 1fr auto;\n    gap: 13px;\n    padding-block: 12px;\n  }\n  .wordmark {\n    font-size: 30px;\n  }\n  .search-box {\n    grid-row: 2;\n    grid-column: 1/-1;\n    height: 40px;\n  }\n  .header-actions {\n    gap: 15px;\n  }\n  .action-label {\n    display: none;\n  }\n  .saved-link {\n    display: none;\n  }\n  .mobile-menu {\n    display: inline-flex;\n    padding: 4px;\n  }\n  .category-nav {\n    overflow-x: auto;\n    gap: 23px;\n    white-space: nowrap;\n    scrollbar-width: none;\n  }\n  .category-nav.menu-open {\n    max-height: 135px;\n    flex-wrap: wrap;\n    align-content: start;\n    overflow: auto;\n    padding-block: 5px;\n    white-space: normal;\n  }\n  .category-nav::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-note {\n    display: none;\n  }\n  .footer-main {\n    min-height: 230px;\n    flex-wrap: wrap;\n    padding-block: 30px;\n  }\n  .footer-note {\n    display: none;\n  }\n  .footer-links {\n    margin-left: auto;\n  }\n  .footer-bottom {\n    gap: 10px;\n    font-size: 9px;\n  }\n}\n@media (max-width: 430px) {\n  .footer-bottom span:last-child {\n    display: none;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# debugId=da26fb75-ba1a-5cd7-9666-cd183b635df8
//# sourceMappingURL=main.js.map
