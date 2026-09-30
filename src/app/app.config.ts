import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import {
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
  lucideX,
} from '@ng-icons/lucide';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducer';
import { ShopEffects } from './store/shop.effects';
import { shopReducer } from './store/shop.reducer';

export const appConfig: ApplicationConfig = {
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
      lucideX,
    }),
    provideNgIconsConfig({ strokeWidth: 1.8 }),
  ],
};
