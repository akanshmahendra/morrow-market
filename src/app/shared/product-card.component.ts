import { CurrencyPipe, DecimalPipe, NgOptimizedImage } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NG_ICON_DIRECTIVES } from '@ng-icons/core';
import { Product } from '../core/models/commerce.models';
import { discountedUnitPrice } from '../core/models/pricing';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, DecimalPipe, NgOptimizedImage, RouterLink, NG_ICON_DIRECTIVES],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly favorite = input(false);
  readonly priority = input(false);
  readonly add = output<Product>();
  readonly toggleFavorite = output<number>();
  readonly salePrice = computed(() => discountedUnitPrice(this.product()));

  addToBag(): void {
    this.add.emit(this.product());
  }

  toggleSaved(): void {
    this.toggleFavorite.emit(this.product().id);
  }
}
