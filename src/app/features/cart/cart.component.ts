import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NG_ICON_DIRECTIVES } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { CartItem } from '../../core/models/commerce.models';
import { discountedUnitPrice } from '../../core/models/pricing';
import { removeFromCart, setCartQuantity } from '../../store/shop.actions';
import {
  selectCartDelivery,
  selectCartItems,
  selectCartSubtotal,
  selectCartTax,
  selectCartTotal,
} from '../../store/shop.selectors';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, NgOptimizedImage, RouterLink, NG_ICON_DIRECTIVES],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  private readonly store = inject(Store);
  readonly items = this.store.selectSignal(selectCartItems);
  readonly subtotal = this.store.selectSignal(selectCartSubtotal);
  readonly delivery = this.store.selectSignal(selectCartDelivery);
  readonly tax = this.store.selectSignal(selectCartTax);
  readonly total = this.store.selectSignal(selectCartTotal);
  readonly shippingGap = computed(() => Math.max(75 - this.subtotal(), 0));

  setQuantity(item: CartItem, quantity: number): void {
    this.store.dispatch(setCartQuantity({ productId: item.product.id, quantity }));
  }

  remove(item: CartItem): void {
    this.store.dispatch(removeFromCart({ productId: item.product.id }));
  }

  discountedPrice(item: CartItem): number {
    return discountedUnitPrice(item.product);
  }
}
