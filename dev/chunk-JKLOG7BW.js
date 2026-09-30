import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostAttributeToken,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  PLATFORM_ID,
  Renderer2,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  effect,
  inject,
  input,
  isObservable,
  isPlatformServer,
  numberAttribute,
  runInInjectionContext,
  setClassMetadata,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵinject,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleProp
} from "./chunk-CU7B2LGP.js";

// node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs
var NgGlyphConfigToken = new InjectionToken("Ng Glyph Config");
var defaultConfig = {
  size: "1em",
  opticalSize: 20,
  weight: 400,
  grade: 0,
  fill: false
};
function injectNgGlyphsConfig() {
  return inject(NgGlyphConfigToken, { optional: true }) ?? defaultConfig;
}
var NgGlyphsToken = new InjectionToken("NgGlyphsToken");
function injectNgGlyphs() {
  const glyphs = inject(NgGlyphsToken, { optional: true });
  if (!glyphs) {
    throw new Error("Please provide the glyphs using the provideNgGlyphs() function.");
  }
  return glyphs;
}
function coerceCssPixelValue(value) {
  return value == null ? "" : /^\d+$/.test(value) ? `${value}px` : value;
}
var NgGlyph = class _NgGlyph {
  constructor() {
    this.glyphsets = injectNgGlyphs();
    this.config = injectNgGlyphsConfig();
    this.name = input.required(
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.glyphset = input(
      this.glyphsets.defaultGlyphset,
      ...ngDevMode ? [{ debugName: "glyphset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.opticalSize = input(this.config.opticalSize, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "opticalSize" } : (
      /* istanbul ignore next */
      {}
    )), { transform: numberAttribute }));
    this.weight = input(this.config.weight, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "weight" } : (
      /* istanbul ignore next */
      {}
    )), { transform: numberAttribute }));
    this.grade = input(this.config.grade, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "grade" } : (
      /* istanbul ignore next */
      {}
    )), { transform: numberAttribute }));
    this.fill = input(this.config.fill, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "fill" } : (
      /* istanbul ignore next */
      {}
    )), { transform: booleanAttribute }));
    this.size = input(this.config.size, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "size" } : (
      /* istanbul ignore next */
      {}
    )), { transform: coerceCssPixelValue }));
    this.color = input(
      this.config.color,
      ...ngDevMode ? [{ debugName: "color" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.glyphsetClass = computed(
      () => {
        const glyphset = this.glyphsets.glyphsets.find((glyphset2) => glyphset2.name === this.glyphset());
        if (!glyphset) {
          throw new Error(`The glyphset "${this.glyphset()}" does not exist. Please provide a valid glyphset.`);
        }
        return glyphset.baseClass;
      },
      ...ngDevMode ? [{ debugName: "glyphsetClass" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fontVariationSettings = computed(
      () => {
        return `'FILL' ${this.fill() ? 1 : 0}, 'wght' ${this.weight()}, 'GRAD' ${this.grade()}, 'opsz' ${this.opticalSize()}`;
      },
      ...ngDevMode ? [{ debugName: "fontVariationSettings" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function NgGlyph_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgGlyph)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgGlyph,
      selectors: [["ng-glyph"]],
      hostVars: 9,
      hostBindings: function NgGlyph_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275domProperty("textContent", ctx.name());
          \u0275\u0275classMap(ctx.glyphsetClass());
          \u0275\u0275styleProp("--%NS%ng-glyph__size", ctx.size())("color", ctx.color())("font-variation-settings", ctx.fontVariationSettings());
        }
      },
      inputs: {
        name: [1, "name"],
        glyphset: [1, "glyphset"],
        opticalSize: [1, "opticalSize"],
        weight: [1, "weight"],
        grade: [1, "grade"],
        fill: [1, "fill"],
        size: [1, "size"],
        color: [1, "color"]
      },
      decls: 0,
      vars: 0,
      template: function NgGlyph_Template(rf, ctx) {
      },
      styles: ["[_nghost-%COMP%]{display:inline-block;width:var(--%NS%ng-glyph__size);height:var(--%NS%ng-glyph__size);font-size:var(--%NS%ng-glyph__size);overflow:hidden}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgGlyph, [{
    type: Component,
    args: [{ selector: "ng-glyph", standalone: true, template: ``, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[class]": "glyphsetClass()",
      "[textContent]": "name()",
      "[style.--ng-glyph__size]": "size()",
      "[style.color]": "color()",
      "[style.font-variation-settings]": "fontVariationSettings()"
    }, styles: [":host{display:inline-block;width:var(--ng-glyph__size);height:var(--ng-glyph__size);font-size:var(--ng-glyph__size);overflow:hidden}\n"] }]
  }], null, { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }], glyphset: [{ type: Input, args: [{ isSignal: true, alias: "glyphset", required: false }] }], opticalSize: [{ type: Input, args: [{ isSignal: true, alias: "opticalSize", required: false }] }], weight: [{ type: Input, args: [{ isSignal: true, alias: "weight", required: false }] }], grade: [{ type: Input, args: [{ isSignal: true, alias: "grade", required: false }] }], fill: [{ type: Input, args: [{ isSignal: true, alias: "fill", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }] });
})();
var NgIconPreProcessorToken = new InjectionToken("Ng Icon Pre Processor");
var NgIconPostProcessorToken = new InjectionToken("Ng Icon Post Processor");
function injectNgIconPreProcessor() {
  return inject(NgIconPreProcessorToken, { optional: true }) ?? ((icon) => icon);
}
function injectNgIconPostProcessor() {
  return inject(NgIconPostProcessorToken, { optional: true }) ?? (() => {
  });
}
var LoggerToken = new InjectionToken("Ng Icon Logger");
var DefaultLogger = class {
  log(message) {
    console.log(message);
  }
  warn(message) {
    console.warn(message);
  }
  error(message) {
    console.error(message);
  }
};
function injectLogger() {
  return inject(LoggerToken, { optional: true }) ?? new DefaultLogger();
}
var NgIconConfigToken = new InjectionToken("Ng Icon Config");
function provideNgIconsConfig(config, ...features) {
  return [
    {
      provide: NgIconConfigToken,
      useValue: config
    },
    features.map((feature) => feature.\u0275providers)
  ];
}
function injectNgIconConfig() {
  return inject(NgIconConfigToken, { optional: true }) ?? {};
}
var NgIconLoaderToken = new InjectionToken("Ng Icon Loader Token");
var NgIconCacheToken = new InjectionToken("Ng Icon Cache Token");
function injectNgIconLoader() {
  return inject(NgIconLoaderToken, { optional: true });
}
function injectNgIconLoaderCache() {
  return inject(NgIconCacheToken, { optional: true });
}
function provideIcons(icons) {
  return [
    {
      provide: NgIconsToken,
      useFactory: (parentIcons = inject(NgIconsToken, {
        optional: true,
        skipSelf: true
      })) => __spreadValues(__spreadValues({}, parentIcons?.reduce((acc, icons2) => __spreadValues(__spreadValues({}, acc), icons2), {})), icons),
      multi: true
    }
  ];
}
var NgIconsToken = new InjectionToken("Icons Token");
function injectNgIcons() {
  return inject(NgIconsToken, { optional: true }) ?? [];
}
function coerceLoaderResult(result) {
  if (typeof result === "string") {
    return Promise.resolve(result);
  }
  if (isObservable(result)) {
    return result.toPromise();
  }
  return result;
}
function toPropertyName(str) {
  return str.replace(/([^a-zA-Z0-9])+(.)?/g, (_, __, chr) => chr ? chr.toUpperCase() : "").replace(/[^a-zA-Z\d]/g, "").replace(/^([A-Z])/, (m) => m.toLowerCase());
}
var policy;
function trustedHTMLFromString(html) {
  if (policy === void 0) {
    const { trustedTypes } = globalThis;
    try {
      policy = trustedTypes?.createPolicy("ng-icons", { createHTML: (s) => s }) ?? null;
    } catch {
      policy = null;
    }
  }
  return policy?.createHTML(html) ?? html;
}
var uniqueId = 0;
var NgIcon = class _NgIcon {
  constructor() {
    this.config = injectNgIconConfig();
    this.icons = injectNgIcons();
    this.loader = injectNgIconLoader();
    this.cache = injectNgIconLoaderCache();
    this.preProcessor = injectNgIconPreProcessor();
    this.postProcessor = injectNgIconPostProcessor();
    this.injector = inject(Injector);
    this.renderer = inject(Renderer2);
    this.platform = inject(PLATFORM_ID);
    this.elementRef = inject(ElementRef);
    this.uniqueId = uniqueId++;
    this.logger = injectLogger();
    this.name = input(
      ...ngDevMode ? [void 0, { debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.svg = input(
      ...ngDevMode ? [void 0, { debugName: "svg" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.size = input(this.config.size, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "size" } : (
      /* istanbul ignore next */
      {}
    )), { transform: coerceCssPixelValue }));
    this.strokeWidth = input(
      this.config.strokeWidth,
      ...ngDevMode ? [{ debugName: "strokeWidth" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.color = input(
      this.config.color,
      ...ngDevMode ? [{ debugName: "color" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => this.updateIcon());
    const ariaHidden = inject(new HostAttributeToken("aria-hidden"), {
      optional: true
    });
    if (!ariaHidden) {
      this.elementRef.nativeElement.setAttribute("aria-hidden", "true");
    }
  }
  ngOnDestroy() {
    this.svgElement = void 0;
  }
  async updateIcon() {
    const name = this.name();
    const svg = this.svg();
    if (svg !== void 0) {
      this.setSvg(svg);
      return;
    }
    if (name === void 0) {
      return;
    }
    const propertyName = toPropertyName(name);
    for (const icons of [...this.icons].reverse()) {
      if (icons[propertyName]) {
        this.setSvg(icons[propertyName]);
        return;
      }
    }
    if (this.loader) {
      const result = await this.requestIconFromLoader(name);
      if (result !== null) {
        this.setSvg(result);
        return;
      }
    }
    this.logger.warn(`No icon named ${name} was found. You may need to import it using the withIcons function.`);
  }
  setSvg(svg) {
    if (isPlatformServer(this.platform)) {
      this.elementRef.nativeElement.innerHTML = svg;
      this.elementRef.nativeElement.setAttribute("data-ng-icon-ssr", "");
      return;
    }
    if (this.elementRef.nativeElement.hasAttribute("data-ng-icon-ssr")) {
      this.elementRef.nativeElement.removeAttribute("data-ng-icon-ssr");
      this.svgElement = this.elementRef.nativeElement.querySelector("svg") ?? void 0;
      if (this.elementRef.nativeElement.innerHTML === svg) {
        return;
      }
    }
    if (this.svgElement) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.svgElement);
    }
    if (svg === "") {
      return;
    }
    const template = this.renderer.createElement("template");
    svg = this.replaceIds(svg);
    this.renderer.setProperty(template, "innerHTML", trustedHTMLFromString(this.preProcessor(svg)));
    this.svgElement = template.content.firstElementChild;
    this.postProcessor(this.svgElement);
    this.renderer.appendChild(this.elementRef.nativeElement, this.svgElement);
  }
  replaceIds(svg) {
    if (!svg.includes("ID_PLACEHOLDER_")) {
      return svg;
    }
    const regex = /ID_PLACEHOLDER_(\d+)/g;
    const idMap = /* @__PURE__ */ new Map();
    const matches = new Set(svg.match(regex));
    if (matches === null) {
      return svg;
    }
    for (const match of matches) {
      const id = match.replace("ID_PLACEHOLDER_", "");
      const placeholder = `ng-icon-${this.uniqueId}-${idMap.size}`;
      idMap.set(id, placeholder);
      svg = svg.replace(new RegExp(match, "g"), placeholder);
    }
    return svg;
  }
  /**
   * Request the icon from the loader.
   * @param name The name of the icon to load.
   * @returns The SVG content for a given icon name.
   */
  requestIconFromLoader(name) {
    return new Promise((resolve) => {
      runInInjectionContext(this.injector, async () => {
        if (this.cache) {
          const cachedResult = this.cache.get(name);
          if (typeof cachedResult === "string") {
            resolve(cachedResult);
            return;
          }
          if (cachedResult instanceof Promise) {
            const result2 = await cachedResult;
            resolve(result2);
            return;
          }
        }
        const promise = coerceLoaderResult(this.loader(name));
        this.cache?.set(name, promise);
        const result = await promise;
        this.cache?.set(name, result);
        resolve(result);
      });
    });
  }
  static {
    this.\u0275fac = function NgIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgIcon)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgIcon,
      selectors: [["ng-icon"]],
      hostAttrs: ["role", "img"],
      hostVars: 6,
      hostBindings: function NgIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275styleProp("--%NS%ng-icon__stroke-width", ctx.strokeWidth())("--%NS%ng-icon__size", ctx.size())("--%NS%ng-icon__color", ctx.color());
        }
      },
      inputs: {
        name: [1, "name"],
        svg: [1, "svg"],
        size: [1, "size"],
        strokeWidth: [1, "strokeWidth"],
        color: [1, "color"]
      },
      decls: 0,
      vars: 0,
      template: function NgIcon_Template(rf, ctx) {
      },
      styles: ["[_nghost-%COMP%]{display:inline-block;width:var(--%NS%ng-icon__size, 1em);height:var(--%NS%ng-icon__size, 1em);line-height:initial;vertical-align:initial;overflow:hidden}[_nghost-%COMP%]     svg{width:inherit;height:inherit;vertical-align:inherit}@layer ng-icon{[_nghost-%COMP%]{color:var(--%NS%ng-icon__color, currentColor)}}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIcon, [{
    type: Component,
    args: [{ selector: "ng-icon", template: "", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      role: "img",
      "[style.--ng-icon__stroke-width]": "strokeWidth()",
      "[style.--ng-icon__size]": "size()",
      "[style.--ng-icon__color]": "color()"
    }, styles: [":host{display:inline-block;width:var(--ng-icon__size, 1em);height:var(--ng-icon__size, 1em);line-height:initial;vertical-align:initial;overflow:hidden}:host ::ng-deep svg{width:inherit;height:inherit;vertical-align:inherit}@layer ng-icon{:host{color:var(--ng-icon__color, currentColor)}}\n"] }]
  }], () => [], { name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false }] }], svg: [{ type: Input, args: [{ isSignal: true, alias: "svg", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], strokeWidth: [{ type: Input, args: [{ isSignal: true, alias: "strokeWidth", required: false }] }], color: [{ type: Input, args: [{ isSignal: true, alias: "color", required: false }] }] });
})();
var NgIconsModule = class _NgIconsModule {
  constructor(icons) {
    if (Object.keys(icons).length === 0) {
      throw new Error("No icons have been provided. Ensure to include some icons by importing them using NgIconsModule.withIcons({ ... }).");
    }
  }
  /**
   * Define the icons that will be included in the application. This allows unused icons to
   * be tree-shaken away to reduce bundle size
   * @param icons The object containing the required icons
   */
  static withIcons(icons) {
    return { ngModule: _NgIconsModule, providers: provideIcons(icons) };
  }
  static {
    this.\u0275fac = function NgIconsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgIconsModule)(\u0275\u0275inject(NgIconsToken));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgIconsModule,
      imports: [NgIcon],
      exports: [NgIcon]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIconsModule, [{
    type: NgModule,
    args: [{
      imports: [NgIcon],
      exports: [NgIcon]
    }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [NgIconsToken]
  }] }], null);
})();
var NG_ICON_DIRECTIVES = [NgIcon];
var NgIconStack = class _NgIconStack {
  constructor() {
    this.size = input.required(
      ...ngDevMode ? [{ debugName: "size" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function NgIconStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgIconStack)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ (function() {
      const _c0 = ["*"];
      return /* @__PURE__ */ \u0275\u0275defineComponent({
        type: _NgIconStack,
        selectors: [["ng-icon-stack"]],
        hostVars: 2,
        hostBindings: function NgIconStack_HostBindings(rf, ctx) {
          if (rf & 2) {
            \u0275\u0275styleProp("--%NS%ng-icon__size", ctx.size());
          }
        },
        inputs: {
          size: [1, "size"]
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function NgIconStack_Template(rf, ctx) {
          if (rf & 1) {
            \u0275\u0275projectionDef();
            \u0275\u0275projection(0);
          }
        },
        styles: ["[_nghost-%COMP%]{display:inline-flex;justify-content:center;align-items:center;position:relative;width:var(--%NS%ng-icon__size);height:var(--%NS%ng-icon__size)}[_nghost-%COMP%]     ng-icon{position:absolute}"]
      });
    })();
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgIconStack, [{
    type: Component,
    args: [{ selector: "ng-icon-stack", standalone: true, template: "<ng-content />", changeDetection: ChangeDetectionStrategy.OnPush, host: {
      "[style.--ng-icon__size]": "size()"
    }, styles: [":host{display:inline-flex;justify-content:center;align-items:center;position:relative;width:var(--ng-icon__size);height:var(--ng-icon__size)}:host ::ng-deep ng-icon{position:absolute}\n"] }]
  }], null, { size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: true }] }] });
})();

export {
  provideNgIconsConfig,
  provideIcons,
  NgIcon,
  NG_ICON_DIRECTIVES
};
//# debugId=a0772ead-90ed-56a2-97d6-d18ea3e558ad
//# sourceMappingURL=chunk-JKLOG7BW.js.map
