import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { NG_ICON_DIRECTIVES } from '@ng-icons/core';
import { map } from 'rxjs';
import { selectOrders } from '../../store/shop.selectors';
import { discountedUnitPrice } from '../../core/models/pricing';

@Component({
  selector: 'app-order-confirmation',
  imports: [CurrencyPipe, DatePipe, RouterLink, NG_ICON_DIRECTIVES],
  template: `
    <section class="confirmation page-wrap">
      @if (order(); as placedOrder) {
        <div class="confirmation-mark"><ng-icon name="lucideCircleCheck" aria-hidden="true" /></div>
        <span class="eyebrow">A good thing is on its way</span>
        <h1 class="display-title">Thank you, {{ placedOrder.shipping.fullName.split(' ')[0] }}.</h1>
        <p class="confirmation-copy">Your demo order is tucked in. We’ve saved the details right here in this browser.</p>
        <div class="order-card">
          <div class="order-card-heading"><div><span>Order reference</span><strong>{{ placedOrder.id }}</strong></div><div><span>Placed</span><strong>{{ placedOrder.placedAt | date:'mediumDate' }}</strong></div></div>
          <div class="order-products">
            @for (item of placedOrder.items; track item.product.id) {
              <div><span>{{ item.quantity }} × {{ item.product.title }}</span><strong>{{ discountedPrice(item) | currency }}</strong></div>
            }
          </div>
          <div class="delivery-address"><span>Delivering to</span><p>{{ placedOrder.shipping.fullName }}<br />{{ placedOrder.shipping.address }}<br />{{ placedOrder.shipping.city }}, {{ placedOrder.shipping.postalCode }}<br />{{ placedOrder.shipping.country }}</p></div>
          <div class="order-total"><span>Order total</span><strong>{{ placedOrder.total | currency }}</strong></div>
        </div>
        <p class="demo-note">This is a storefront demo. No payment was collected and no shipment will be created.</p>
        <a class="primary-button" routerLink="/">Back to the good stuff</a>
      } @else {
        <span class="eyebrow">Order history</span>
        <h1 class="display-title">This order isn’t here.</h1>
        <p class="confirmation-copy">Order details are stored only in this browser. Try placing a demo order on this device.</p>
        <a class="primary-button" routerLink="/">Explore the collection</a>
      }
    </section>
  `,
  styles: `
    :host { display: block; }
    .confirmation { min-height: 560px; display: flex; flex-direction: column; align-items: center; padding-top: 54px; padding-bottom: 20px; text-align: center; }
    .confirmation-mark { width: 58px; height: 58px; display: grid; place-items: center; margin-bottom: 18px; border-radius: 50%; background: #e4ece2; color: var(--sage-deep); font-size: 29px; }
    .confirmation h1 { margin-top: 10px; }
    .confirmation-copy { max-width: 400px; margin: 12px auto 20px; color: var(--muted); font-size: 12px; line-height: 1.7; }
    .order-card { width: min(100%, 570px); margin-block: 5px 16px; padding: 20px; border: 1px solid var(--line); background: var(--surface); text-align: left; }
    .order-card-heading { display: flex; justify-content: space-between; gap: 15px; padding-bottom: 15px; border-bottom: 1px solid var(--line); }
    .order-card-heading div { display: flex; flex-direction: column; gap: 5px; }
    .order-card-heading span, .delivery-address > span { color: var(--muted); font-size: 9px; }
    .order-card-heading strong { font-size: 11px; }
    .order-products { display: grid; gap: 10px; padding-block: 15px; border-bottom: 1px solid var(--line); }
    .order-products div, .order-total { display: flex; justify-content: space-between; gap: 12px; font-size: 10px; }
    .delivery-address { padding-block: 13px; border-bottom: 1px solid var(--line); }
    .delivery-address p { margin: 6px 0 0; color: #5f665d; font-size: 10px; line-height: 1.6; }
    .order-total { padding-top: 14px; font-size: 12px; }
    .demo-note { margin: 0 0 17px; color: #806943; font-size: 9px; }
    @media (max-width: 500px) { .order-card { padding: 15px; } }
  `,
})
export class OrderConfirmationComponent {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly orderId = toSignal(this.route.paramMap.pipe(map((params) => params.get('id'))), {
    initialValue: this.route.snapshot.paramMap.get('id'),
  });
  private readonly orders = this.store.selectSignal(selectOrders);
  readonly order = computed(() => this.orders().find((item) => item.id === this.orderId()));

  discountedPrice(item: import('../../core/models/commerce.models').CartItem): number {
    return discountedUnitPrice(item.product) * item.quantity;
  }
}