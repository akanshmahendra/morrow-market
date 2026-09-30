import { Component, DestroyRef, OnInit, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NG_ICON_DIRECTIVES } from '@ng-icons/core';
import { Product, ProductSort } from '../../core/models/commerce.models';
import { ProductCardComponent } from '../../shared/product-card.component';
import * as ShopActions from '../../store/shop.actions';
import {
  selectCanShowMore,
  selectCatalogError,
  selectCatalogLoading,
  selectCategories,
  selectCategory,
  selectFilteredProducts,
  selectVisibleProducts,
  selectWishlistIds,
} from '../../store/shop.selectors';

@Component({
  selector: 'app-storefront',
  imports: [NG_ICON_DIRECTIVES, ProductCardComponent],
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss',
})
export class StorefrontComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly products = this.store.selectSignal(selectVisibleProducts);
  readonly filteredProducts = this.store.selectSignal(selectFilteredProducts);
  readonly resultCount = computed(() => this.filteredProducts().length);
  readonly categories = this.store.selectSignal(selectCategories);
  readonly selectedCategory = this.store.selectSignal(selectCategory);
  readonly loading = this.store.selectSignal(selectCatalogLoading);
  readonly error = this.store.selectSignal(selectCatalogError);
  readonly canShowMore = this.store.selectSignal(selectCanShowMore);
  readonly wishlistIds = this.store.selectSignal(selectWishlistIds);
  ngOnInit(): void {
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.store.dispatch(ShopActions.setCategory({ category: params.get('category') ?? 'all' }));
    });
  }

  setCategory(category: string): void {
    this.store.dispatch(ShopActions.setCategory({ category }));
  }

  setSort(event: Event): void {
    this.store.dispatch(ShopActions.setSort({ sort: (event.target as HTMLSelectElement).value as ProductSort }));
  }

  addToCart(product: Product): void {
    this.store.dispatch(ShopActions.addToCart({ product }));
  }

  toggleWishlist(productId: number): void {
    this.store.dispatch(ShopActions.toggleWishlist({ productId }));
  }

  retry(): void {
    this.store.dispatch(ShopActions.loadCatalog());
  }

  showMore(): void {
    this.store.dispatch(ShopActions.showMoreProducts());
  }
}