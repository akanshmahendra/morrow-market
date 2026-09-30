import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { App } from './app';
import { restoreSession } from './store/auth.actions';
import { initialAuthState } from './store/auth.reducer';
import { loadCatalog, loadPersistedData, setSearch } from './store/shop.actions';
import { initialShopState } from './store/shop.reducer';
import { selectCartCount } from './store/shop.selectors';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([]),
        provideMockStore({ initialState: { shop: initialShopState, auth: initialAuthState } }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the Morrow Market shell', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.wordmark')?.textContent).toContain('morrow');
    expect(compiled.querySelector('[aria-label="Search products"]')).toBeTruthy();
  });

  it('dispatches hydration and catalog actions on startup', () => {
    const store = TestBed.inject(MockStore);
    const dispatch = vi.spyOn(store, 'dispatch');
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    expect(dispatch).toHaveBeenCalledWith(loadPersistedData());
    expect(dispatch).toHaveBeenCalledWith(loadCatalog());
    expect(dispatch).toHaveBeenCalledWith(restoreSession());
  });

  it('updates search state and toggles the mobile menu', () => {
    const store = TestBed.inject(MockStore);
    const dispatch = vi.spyOn(store, 'dispatch');
    const app = TestBed.createComponent(App).componentInstance;
    const inputEvent = { target: { value: 'linen' } } as unknown as Event;

    app.search(inputEvent);
    expect(dispatch).toHaveBeenCalledWith(setSearch({ query: 'linen' }));
    expect(app.menuOpen()).toBe(false);
    app.toggleMenu();
    expect(app.menuOpen()).toBe(true);
    app.toggleMenu();
    expect(app.menuOpen()).toBe(false);
  });

  it('shows the cart quantity badge when the cart is non-empty', async () => {
    const store = TestBed.inject(MockStore);
    store.overrideSelector(selectCartCount, 2);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).querySelector('.cart-count')?.textContent).toBe(
      '2',
    );
  });
});
