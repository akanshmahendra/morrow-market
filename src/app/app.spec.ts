import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { App } from './app';
import { initialShopState } from './store/shop.reducer';
import { initialAuthState } from './store/auth.reducer';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([]), provideMockStore({ initialState: { shop: initialShopState, auth: initialAuthState } })],
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
});
