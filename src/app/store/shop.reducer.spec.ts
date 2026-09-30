import { addToCart, placeOrder, removeFromCart, toggleWishlist } from './shop.actions';
import { initialShopState, shopReducer } from './shop.reducer';
import { Product } from '../core/models/commerce.models';
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
});