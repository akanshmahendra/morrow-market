import { Product } from './commerce.models';

export function discountedUnitPrice(product: Pick<Product, 'price' | 'discountPercentage'>): number {
  return Math.round(product.price * (1 - product.discountPercentage / 100) * 100) / 100;
}