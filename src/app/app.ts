import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NG_ICON_DIRECTIVES } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { restoreSession } from './store/auth.actions';
import { loadCatalog, loadPersistedData, setSearch } from './store/shop.actions';
import { selectCartCount, selectCustomer } from './store/shop.selectors';

@Component({
  imports: [AsyncPipe, RouterLink, RouterOutlet, NG_ICON_DIRECTIVES],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private readonly store = inject(Store);
  readonly cartCount$ = this.store.select(selectCartCount);
  readonly customer$ = this.store.select(selectCustomer);
  readonly menuOpen = signal(false);

  ngOnInit(): void {
    this.store.dispatch(loadPersistedData());
    this.store.dispatch(loadCatalog());
    this.store.dispatch(restoreSession());
  }

  search(event: Event): void {
    this.store.dispatch(setSearch({ query: (event.target as HTMLInputElement).value }));
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
