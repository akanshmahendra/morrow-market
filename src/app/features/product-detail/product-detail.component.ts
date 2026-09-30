import { CurrencyPipe, DecimalPipe, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { NG_ICON_DIRECTIVES } from '@ng-icons/core';
import { map } from 'rxjs';
import { Product } from '../../core/models/commerce.models';
import { discountedUnitPrice } from '../../core/models/pricing';
import { addToCart, toggleWishlist } from '../../store/shop.actions';
import {
  selectCatalogLoading,
  selectProducts,
  selectWishlistIds,
} from '../../store/shop.selectors';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, DecimalPipe, NgOptimizedImage, RouterLink, NG_ICON_DIRECTIVES],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly productId = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: Number(this.route.snapshot.paramMap.get('id')) }
  );

  readonly products = this.store.selectSignal(selectProducts);
  readonly loading = this.store.selectSignal(selectCatalogLoading);
  readonly wishlistIds = this.store.selectSignal(selectWishlistIds);
  readonly quantity = signal(1);
  readonly selectedImage = signal<string | null>(null);
  readonly product = computed(() => this.products().find((item) => item.id === this.productId()));
  readonly activeImage = computed(() => {
    const product = this.product();
    return this.selectedImage() ?? product?.images?.[0] ?? product?.thumbnail ?? '';
  });
  readonly discountedPrice = computed(() => {
    const product = this.product();
    return product ? discountedUnitPrice(product) : 0;
  });

  changeQuantity(delta: number): void {
    const product = this.product();
    if (product) this.quantity.update((value) => Math.max(1, Math.min(product.stock, value + delta)));
  }

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ product, quantity: this.quantity() }));
  }

  toggleSaved(product: Product): void {
    this.store.dispatch(toggleWishlist({ productId: product.id }));
  }
}