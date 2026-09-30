import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Category, Product, ProductResponse } from '../models/commerce.models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CatalogApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  getCatalog(): Observable<{ products: Product[]; categories: Category[] }> {
    return forkJoin({
      productResponse: this.http.get<ProductResponse>(`${this.baseUrl}/products?limit=0`),
      categories: this.http.get<Category[]>(`${this.baseUrl}/products/categories`),
    }).pipe(
      map(({ productResponse, categories }) => ({
        products: productResponse.products,
        categories,
      }))
    );
  }
}