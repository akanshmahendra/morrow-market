export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  images: string[];
  brand: string;
  availabilityStatus: string;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: string;
  placedAt: string;
  items: CartItem[];
  shipping: ShippingDetails;
  subtotal: number;
  delivery: number;
  tax: number;
  total: number;
}

export type ProductSort = 'featured' | 'price-low' | 'price-high' | 'rating';

export interface PersistedShopData {
  cartItems: CartItem[];
  wishlistIds: number[];
  orders: Order[];
}

export interface Customer {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
}

export interface LoginResponse extends Customer {
  accessToken: string;
  refreshToken: string;
}
