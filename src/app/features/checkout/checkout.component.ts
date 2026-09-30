import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NG_ICON_DIRECTIVES } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { Order, ShippingDetails } from '../../core/models/commerce.models';
import { discountedUnitPrice } from '../../core/models/pricing';
import { placeOrder } from '../../store/shop.actions';
import {
  selectCartDelivery,
  selectCartItems,
  selectCartSubtotal,
  selectCartTax,
  selectCartTotal,
} from '../../store/shop.selectors';

@Component({
  selector: 'app-checkout',
  imports: [CurrencyPipe, ReactiveFormsModule, RouterLink, NG_ICON_DIRECTIVES],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder).nonNullable;

  readonly items = this.store.selectSignal(selectCartItems);
  readonly subtotal = this.store.selectSignal(selectCartSubtotal);
  readonly delivery = this.store.selectSignal(selectCartDelivery);
  readonly tax = this.store.selectSignal(selectCartTax);
  readonly total = this.store.selectSignal(selectCartTotal);
  readonly form = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    city: ['', Validators.required],
    postalCode: ['', Validators.required],
    country: ['United States', Validators.required],
  });

  submitOrder(): void {
    if (this.items().length === 0) {
      void this.router.navigate(['/cart']);
      return;
    }
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const shipping = this.form.getRawValue() as ShippingDetails;
    const order: Order = {
      id: `MM-${Date.now().toString(36).toUpperCase()}`,
      placedAt: new Date().toISOString(),
      items: this.items(),
      shipping,
      subtotal: this.subtotal(),
      delivery: this.delivery(),
      tax: this.tax(),
      total: this.total(),
    };
    this.store.dispatch(placeOrder({ order }));
    void this.router.navigate(['/orders', order.id]);
  }

  discountedPrice(item: Order['items'][number]): number {
    return discountedUnitPrice(item.product) * item.quantity;
  }
}
