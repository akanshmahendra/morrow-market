import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/storefront/storefront.component').then((m) => m.StorefrontComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./features/product-detail/product-detail.component').then(
        (m) => m.ProductDetailComponent,
      ),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./features/wishlist/wishlist.component').then((m) => m.WishlistComponent),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./features/account/account.component').then((m) => m.AccountComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout.component').then((m) => m.CheckoutComponent),
  },
  {
    path: 'orders/:id',
    loadComponent: () =>
      import('./features/order-confirmation/order-confirmation.component').then(
        (m) => m.OrderConfirmationComponent,
      ),
  },
  { path: '**', redirectTo: '' },
];
