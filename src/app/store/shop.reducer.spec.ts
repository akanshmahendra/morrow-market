import { Category, Order, Product } from '../core/models/commerce.models';
import {
  addToCart,
  clearCart,
  loadCatalog,
  loadCatalogFailure,
  loadCatalogSuccess,
  loadPersistedDataSuccess,
  placeOrder,
  removeFromCart,
  setCartQuantity,
  setCategory,
  setSearch,
  setSort,
  showMoreProducts,
  toggleWishlist,
} from './shop.actions';
import { initialShopState, shopReducer } from './shop.reducer';
import { selectCartSubtotal, selectCartTax } from './shop.selectors';

const product: Product = {
  id: 1,
  title: 'Sample find',
  description: 'A useful sample item',
  category: 'home-decoration',
  price: 20,
  discountPercentage: 10,
  rating: 4.5,
  stock: 3,
  thumbnail: 'https://example.test/item.png',
  images: [],
  brand: 'Morrow',
  availabilityStatus: 'In Stock',
};

describe('shopReducer', () => {
  it('adds items and caps cart quantity at stock', () => {
    const once = shopReducer(initialShopState, addToCart({ product, quantity: 2 }));
    const twice = shopReducer(once, addToCart({ product, quantity: 4 }));

    expect(twice.cartItems).toEqual([{ product, quantity: 3 }]);
  });

  it('removes a cart item', () => {
    const withItem = shopReducer(initialShopState, addToCart({ product }));

    expect(shopReducer(withItem, removeFromCart({ productId: product.id })).cartItems).toEqual([]);
  });

  it('toggles a product in and out of the wishlist', () => {
    const saved = shopReducer(initialShopState, toggleWishlist({ productId: product.id }));
    const removed = shopReducer(saved, toggleWishlist({ productId: product.id }));

    expect(saved.wishlistIds).toEqual([product.id]);
    expect(removed.wishlistIds).toEqual([]);
  });

  it('records an order and empties the cart', () => {
    const withItem = shopReducer(initialShopState, addToCart({ product }));
    const order = {
      id: 'MM-TEST',
      placedAt: '2026-10-01T12:00:00.000Z',
      items: withItem.cartItems,
      shipping: {
        fullName: 'Jamie Taylor',
        email: 'jamie@example.com',
        address: '14 Orchard Lane',
        city: 'Brooklyn',
        postalCode: '11211',
        country: 'United States',
      },
      subtotal: 18,
      delivery: 6,
      tax: 1.44,
      total: 25.44,
    };
    const placed = shopReducer(withItem, placeOrder({ order }));

    expect(placed.orders[0]).toEqual(order);
    expect(placed.lastOrderId).toBe(order.id);
    expect(placed.cartItems).toEqual([]);
  });

  it('keeps discounted subtotals and tax at currency precision', () => {
    const subtotal = selectCartSubtotal.projector([{ product, quantity: 3 }]);

    expect(subtotal).toBe(54);
    expect(selectCartTax.projector(subtotal)).toBe(4.32);
  });

  it('handles catalog loading, success, and failure states', () => {
    const category: Category = { slug: 'beauty', name: 'Beauty', url: '/beauty' };
    const loading = shopReducer({ ...initialShopState, error: 'old error' }, loadCatalog());
    expect(loading.loading).toBe(true);
    expect(loading.error).toBeNull();
    expect(
      shopReducer(loading, loadCatalogSuccess({ products: [product], categories: [category] })),
    ).toMatchObject({ products: [product], categories: [category], loading: false });
    expect(shopReducer(loading, loadCatalogFailure({ error: 'offline' }))).toMatchObject({
      loading: false,
      error: 'offline',
    });
  });

  it('resets the visible window when filters change and increments it when requested', () => {
    const expanded = { ...initialShopState, visibleCount: 36 };
    expect(shopReducer(expanded, setCategory({ category: 'beauty' }))).toMatchObject({
      category: 'beauty',
      visibleCount: 12,
    });
    expect(shopReducer(expanded, setSearch({ query: 'bottle' }))).toMatchObject({
      query: 'bottle',
      visibleCount: 12,
    });
    expect(shopReducer(expanded, setSort({ sort: 'rating' }))).toMatchObject({
      sort: 'rating',
      visibleCount: 12,
    });
    expect(shopReducer(initialShopState, showMoreProducts()).visibleCount).toBe(24);
  });

  it('adds a default quantity, updates only the matching cart line, and respects stock', () => {
    const otherProduct = { ...product, id: 2, title: 'Second item' };
    const initial = shopReducer(initialShopState, addToCart({ product }));
    expect(initial.cartItems[0].quantity).toBe(1);
    const withTwo = {
      ...initial,
      cartItems: [...initial.cartItems, { product: otherProduct, quantity: 1 }],
    };
    const updated = shopReducer(withTwo, addToCart({ product, quantity: 2 }));
    expect(updated.cartItems).toEqual([
      { product, quantity: 3 },
      { product: otherProduct, quantity: 1 },
    ]);
    expect(
      shopReducer(initialShopState, addToCart({ product: { ...product, stock: 0 } })).cartItems[0]
        .quantity,
    ).toBe(0);
  });

  it('sets cart quantities, removes zero quantities, and clears the cart', () => {
    const otherProduct = { ...product, id: 2, title: 'Second item' };
    const withItems = {
      ...initialShopState,
      cartItems: [
        { product, quantity: 1 },
        { product: otherProduct, quantity: 2 },
      ],
    };
    expect(
      shopReducer(withItems, setCartQuantity({ productId: 1, quantity: 20 })).cartItems,
    ).toEqual([
      { product, quantity: 3 },
      { product: otherProduct, quantity: 2 },
    ]);
    expect(
      shopReducer(withItems, setCartQuantity({ productId: 1, quantity: 0 })).cartItems,
    ).toEqual([{ product: otherProduct, quantity: 2 }]);
    expect(
      shopReducer(withItems, setCartQuantity({ productId: 99, quantity: 2 })).cartItems,
    ).toEqual(withItems.cartItems);
    expect(shopReducer(withItems, clearCart()).cartItems).toEqual([]);
  });

  it('hydrates persisted cart, favorites, and order history', () => {
    const order: Order = {
      id: 'MM-SAVED',
      placedAt: '2026-10-01T12:00:00.000Z',
      items: [{ product, quantity: 1 }],
      shipping: {
        fullName: 'Jamie Taylor',
        email: 'jamie@example.com',
        address: '14 Orchard Lane',
        city: 'Brooklyn',
        postalCode: '11211',
        country: 'United States',
      },
      subtotal: 18,
      delivery: 6,
      tax: 1.44,
      total: 25.44,
    };
    const hydrated = shopReducer(
      initialShopState,
      loadPersistedDataSuccess({
        cartItems: [{ product, quantity: 1 }],
        wishlistIds: [1],
        orders: [order],
      }),
    );
    expect(hydrated.cartItems).toEqual([{ product, quantity: 1 }]);
    expect(hydrated.wishlistIds).toEqual([1]);
    expect(hydrated.orders).toEqual([order]);
  });
});
