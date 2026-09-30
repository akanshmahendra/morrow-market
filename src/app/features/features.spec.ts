import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { routes } from '../app.routes';
import { Customer, Order, Product } from '../core/models/commerce.models';
import { ProductCardComponent } from '../shared/product-card.component';
import { login, logout } from '../store/auth.actions';
import { AuthState, initialAuthState } from '../store/auth.reducer';
import {
  addToCart,
  placeOrder,
  removeFromCart,
  setCartQuantity,
  setCategory,
  setSort,
  showMoreProducts,
  toggleWishlist,
} from '../store/shop.actions';
import { initialShopState, ShopState } from '../store/shop.reducer';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const product: Product = {
  id: 1,
  title: 'Green bottle',
  description: 'A useful glass bottle',
  category: 'beauty',
  price: 24,
  discountPercentage: 12.5,
  rating: 4.5,
  stock: 5,
  thumbnail: 'https://example.test/bottle.png',
  images: ['https://example.test/bottle.png', 'https://example.test/bottle-side.png'],
  brand: 'Morrow',
  availabilityStatus: 'In Stock',
};

const customer: Customer = {
  id: 7,
  username: 'emilys',
  email: 'emily@example.com',
  firstName: 'Emily',
  lastName: 'Johnson',
  image: 'https://example.test/emily.png',
};

const order: Order = {
  id: 'MM-TEST',
  placedAt: '2026-10-01T12:00:00.000Z',
  items: [{ product, quantity: 2 }],
  shipping: {
    fullName: 'Jamie Taylor',
    email: 'jamie@example.com',
    address: '14 Orchard Lane',
    city: 'Brooklyn',
    postalCode: '11211',
    country: 'United States',
  },
  subtotal: 42,
  delivery: 6,
  tax: 3.36,
  total: 51.36,
};

function shopState(overrides: Partial<ShopState> = {}): ShopState {
  return {
    ...initialShopState,
    products: [product],
    categories: [{ slug: 'beauty', name: 'Beauty', url: 'https://example.test/beauty' }],
    cartItems: [{ product, quantity: 1 }],
    wishlistIds: [product.id],
    ...overrides,
  };
}

function authState(overrides: Partial<AuthState> = {}): AuthState {
  return { ...initialAuthState, ...overrides };
}

describe('feature route components', () => {
  let store: MockStore;
  let dispatch: ReturnType<typeof vi.spyOn>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      providers: [
        provideRouter(routes),
        provideMockStore({ initialState: { shop: shopState(), auth: authState() } }),
      ],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    dispatch = vi.spyOn(store, 'dispatch');
    router = TestBed.inject(Router);
  });

  it('renders product cards, computes sale prices, and emits add/save actions', () => {
    const fixture = TestBed.createComponent(ProductCardComponent);
    fixture.componentRef.setInput('product', product);
    fixture.componentRef.setInput('favorite', true);
    fixture.componentRef.setInput('priority', true);
    const added: Product[] = [];
    const savedIds: number[] = [];
    fixture.componentInstance.add.subscribe((item) => added.push(item));
    fixture.componentInstance.toggleFavorite.subscribe((id) => savedIds.push(id));
    fixture.detectChanges();

    expect(fixture.componentInstance.salePrice()).toBe(21);
    fixture.componentInstance.addToBag();
    fixture.componentInstance.toggleSaved();
    expect(added).toEqual([product]);
    expect(savedIds).toEqual([1]);
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('A little less');

    fixture.componentRef.setInput('product', { ...product, stock: 0, discountPercentage: 0 });
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Sold out');
  });

  it('handles catalog filters, sort, retry, paging, add-to-cart, and wishlist actions', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/', StorefrontComponent);
    harness.detectChanges();

    expect(component.resultCount()).toBe(1);
    expect(dispatch).toHaveBeenCalledWith(setCategory({ category: 'all' }));
    component.setCategory('beauty');
    component.setSort({ target: { value: 'rating' } } as unknown as Event);
    component.retry();
    component.showMore();
    component.addToCart(product);
    component.toggleWishlist(product.id);

    expect(dispatch).toHaveBeenCalledWith(setCategory({ category: 'beauty' }));
    expect(dispatch).toHaveBeenCalledWith(setSort({ sort: 'rating' }));
    expect(dispatch).toHaveBeenCalledWith(showMoreProducts());
    expect(dispatch).toHaveBeenCalledWith(addToCart({ product }));
    expect(dispatch).toHaveBeenCalledWith(toggleWishlist({ productId: product.id }));
  });

  it('renders cart totals and dispatches quantity/removal actions', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/cart', CartComponent);
    harness.detectChanges();

    expect(component.shippingGap()).toBe(54);
    expect((harness.routeNativeElement as HTMLElement).textContent).toContain('Green bottle');
    component.setQuantity({ product, quantity: 1 }, 3);
    component.remove({ product, quantity: 1 });
    expect(dispatch).toHaveBeenCalledWith(setCartQuantity({ productId: product.id, quantity: 3 }));
    expect(dispatch).toHaveBeenCalledWith(removeFromCart({ productId: product.id }));
  });

  it('validates checkout, handles an empty cart, and places a demo order', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/checkout', CheckoutComponent);
    const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    component.submitOrder();
    expect(component.form.controls.fullName.touched).toBe(true);
    expect(dispatch).not.toHaveBeenCalledWith(expect.objectContaining({ type: placeOrder.type }));

    component.form.setValue({
      fullName: 'Jamie Taylor',
      email: 'jamie@example.com',
      address: '14 Orchard Lane',
      city: 'Brooklyn',
      postalCode: '11211',
      country: 'United States',
    });
    component.submitOrder();
    expect(dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: placeOrder.type }));
    expect(navigate).toHaveBeenCalledWith(['/orders', expect.any(String)]);
    expect(component.discountedPrice({ product, quantity: 2 })).toBe(42);

    store.setState({ shop: shopState({ cartItems: [] }), auth: authState() });
    component.submitOrder();
    expect(navigate).toHaveBeenCalledWith(['/cart']);
    harness.detectChanges();
  });

  it('renders a saved account, exposes the sample credentials, and dispatches account actions', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/account', AccountComponent);
    harness.detectChanges();

    const routeElement = harness.routeNativeElement as HTMLElement;
    const signInButton = routeElement.querySelector('.login-button') as HTMLButtonElement;
    signInButton.click();
    expect(component.form.controls.username.touched).toBe(true);
    expect(dispatch).not.toHaveBeenCalledWith(expect.objectContaining({ type: login.type }));
    (routeElement.querySelector('.sample-button') as HTMLButtonElement).click();
    expect(component.form.getRawValue()).toEqual({ username: 'emilys', password: 'emilyspass' });
    signInButton.click();
    expect(dispatch).toHaveBeenCalledWith(login({ username: 'emilys', password: 'emilyspass' }));

    store.setState({
      shop: shopState(),
      auth: authState({ loading: true, error: 'Try signing in again' }),
    });
    harness.detectChanges();
    expect(routeElement.textContent).toContain('Try signing in again');
    expect(routeElement.textContent).toContain('Checking…');

    store.setState({
      shop: shopState(),
      auth: authState({ customer, error: null, loading: false }),
    });
    harness.detectChanges();
    expect(routeElement.textContent).toContain('Your next good find');

    store.setState({
      shop: shopState({ orders: [{ ...order, items: [order.items[0], order.items[0]] }] }),
      auth: authState({ customer, error: null, loading: false }),
    });
    harness.detectChanges();
    expect(routeElement.textContent).toContain('Hello, Emily.');
    expect(routeElement.textContent).toContain(order.id);
    (routeElement.querySelector('.account-heading .secondary-button') as HTMLButtonElement).click();
    expect(dispatch).toHaveBeenCalledWith(logout());
  });

  it('shows saved items and its empty state, and dispatches wishlist actions', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/wishlist', WishlistComponent);
    harness.detectChanges();
    expect(component.products()).toEqual([product]);
    const routeElement = harness.routeNativeElement as HTMLElement;
    (routeElement.querySelector('.quick-add') as HTMLButtonElement).click();
    (routeElement.querySelector('.save-button') as HTMLButtonElement).click();
    expect(dispatch).toHaveBeenCalledWith(addToCart({ product }));
    expect(dispatch).toHaveBeenCalledWith(toggleWishlist({ productId: product.id }));

    store.setState({ shop: shopState({ wishlistIds: [] }), auth: authState() });
    harness.detectChanges();
    expect((harness.routeNativeElement as HTMLElement).textContent).toContain(
      'Nothing tucked away yet.',
    );
  });

  it('handles product images, quantity bounds, add/save, loading, and missing products', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/product/1', ProductDetailComponent);
    harness.detectChanges();
    expect(component.product()).toEqual(product);
    expect(component.activeImage()).toBe(product.images[0]);
    component.selectedImage.set(product.images[1]);
    expect(component.activeImage()).toBe(product.images[1]);
    component.changeQuantity(2);
    component.changeQuantity(20);
    expect(component.quantity()).toBe(product.stock);
    component.changeQuantity(-20);
    expect(component.quantity()).toBe(1);
    component.addToCart(product);
    component.toggleSaved(product);
    expect(dispatch).toHaveBeenCalledWith(addToCart({ product, quantity: 1 }));
    expect(dispatch).toHaveBeenCalledWith(toggleWishlist({ productId: product.id }));

    const missing = await harness.navigateByUrl('/product/999', ProductDetailComponent);
    expect(missing.product()).toBeUndefined();
    missing.changeQuantity(1);
    expect(missing.quantity()).toBe(1);
    expect(missing.discountedPrice()).toBe(0);
    expect((harness.routeNativeElement as HTMLElement).textContent).toContain(
      'We couldn’t find that one.',
    );

    store.setState({ shop: shopState({ loading: true }), auth: authState() });
    harness.detectChanges();
    expect((harness.routeNativeElement as HTMLElement).textContent).toContain(
      'Finding this good thing',
    );

    store.setState({
      shop: shopState({ products: [{ ...product, images: [] }] }),
      auth: authState(),
    });
    const noGallery = await harness.navigateByUrl('/product/1', ProductDetailComponent);
    expect(noGallery.activeImage()).toBe(product.thumbnail);
  });

  it('renders a saved order and handles a missing order reference', async () => {
    const harness = await RouterTestingHarness.create();
    store.setState({ shop: shopState({ orders: [order] }), auth: authState() });
    const component = await harness.navigateByUrl(
      `/orders/${order.id}`,
      OrderConfirmationComponent,
    );
    harness.detectChanges();
    expect(component.order()).toEqual(order);
    expect((harness.routeNativeElement as HTMLElement).textContent).toContain('Thank you, Jamie.');
    expect(component.discountedPrice(order.items[0])).toBe(42);

    await harness.navigateByUrl('/orders/missing', OrderConfirmationComponent);
    expect((harness.routeNativeElement as HTMLElement).textContent).toContain(
      'This order isn’t here.',
    );
  });
});
