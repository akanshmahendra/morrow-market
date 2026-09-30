import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AccountApiService } from './account-api.service';
import { CatalogApiService } from './catalog-api.service';

describe('commerce API services', () => {
  let http: HttpTestingController;
  let catalog: CatalogApiService;
  let account: AccountApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    http = TestBed.inject(HttpTestingController);
    catalog = TestBed.inject(CatalogApiService);
    account = TestBed.inject(AccountApiService);
  });

  afterEach(() => http.verify());

  it('loads products and categories together and unwraps the catalog response', () => {
    let result: unknown;
    catalog.getCatalog().subscribe((value) => (result = value));

    http.expectOne('https://dummyjson.com/products?limit=0').flush({
      products: [{ id: 1, title: 'Bottle' }],
      total: 1,
      skip: 0,
      limit: 0,
    });
    http
      .expectOne('https://dummyjson.com/products/categories')
      .flush([
        { slug: 'beauty', name: 'Beauty', url: 'https://dummyjson.com/products/category/beauty' },
      ]);

    expect(result).toEqual({
      products: [{ id: 1, title: 'Bottle' }],
      categories: [
        { slug: 'beauty', name: 'Beauty', url: 'https://dummyjson.com/products/category/beauty' },
      ],
    });
  });

  it('posts username and password to the demo login endpoint', () => {
    let result: unknown;
    account.login('emilys', 'emilyspass').subscribe((value) => (result = value));

    const request = http.expectOne('https://dummyjson.com/auth/login');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 60,
    });
    request.flush({ id: 1, username: 'emilys', accessToken: 'access', refreshToken: 'refresh' });
    expect(result).toEqual({
      id: 1,
      username: 'emilys',
      accessToken: 'access',
      refreshToken: 'refresh',
    });
  });
});
