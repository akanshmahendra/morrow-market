import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { NG_ICON_DIRECTIVES } from '@ng-icons/core';
import { Product } from '../../core/models/commerce.models';
import { ProductCardComponent } from '../../shared/product-card.component';
import { addToCart, toggleWishlist } from '../../store/shop.actions';
import { selectWishlistIds, selectWishlistProducts } from '../../store/shop.selectors';

@Component({
  selector: 'app-wishlist',
  imports: [RouterLink, ProductCardComponent, NG_ICON_DIRECTIVES],
  template: `
    <section class="wishlist-page page-wrap">
      <div class="wishlist-heading"><span class="eyebrow">Keep close</span><h1 class="display-title">Your saved finds.</h1><p>Good things you’d like to come back to.</p></div>
      @if (products().length > 0) {
        <div class="wishlist-grid">
          @for (product of products(); track product.id; let first = $first) {
            <app-product-card [product]="product" [favorite]="true" [priority]="first" (add)="addToCart($event)" (toggleFavorite)="toggle($event)" />
          }
        </div>
      } @else {
        <div class="wishlist-empty"><ng-icon name="lucideHeart" aria-hidden="true" /><h2>Nothing tucked away yet.</h2><p>Tap the heart on anything you like and it will be here.</p><a class="primary-button" routerLink="/">Browse the collection</a></div>
      }
    </section>
  `,
  styles: `
    :host { display: block; }
    .wishlist-page { min-height: 430px; padding-top: 55px; }
    .wishlist-heading { padding-bottom: 23px; border-bottom: 1px solid var(--line); }
    .wishlist-heading .eyebrow { display: block; margin-bottom: 10px; }
    .wishlist-heading p { margin: 10px 0 0; color: var(--muted); font-size: 12px; }
    .wishlist-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 34px 18px; padding-top: 28px; }
    .wishlist-empty { min-height: 320px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 12px; text-align: center; }
    .wishlist-empty > ng-icon { color: var(--coral); font-size: 26px; }
    .wishlist-empty h2 { margin: 0; font-family: var(--font-display); font-size: 28px; font-weight: 500; }
    .wishlist-empty p { margin: 0 0 7px; color: var(--muted); font-size: 12px; }
    @media (max-width: 850px) { .wishlist-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
    @media (max-width: 600px) { .wishlist-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 12px; } }
  `,
})
export class WishlistComponent {
  private readonly store = inject(Store);
  readonly products = this.store.selectSignal(selectWishlistProducts);
  readonly wishlistIds = this.store.selectSignal(selectWishlistIds);

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ product }));
  }

  toggle(productId: number): void {
    this.store.dispatch(toggleWishlist({ productId }));
  }
}