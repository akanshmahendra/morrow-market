import { RenderMode } from '@angular/ssr';
import { appConfig } from './app.config';
import { config } from './app.config.server';
import { routes } from './app.routes';
import { serverRoutes } from './app.routes.server';

describe('application route and provider configuration', () => {
  it('registers the complete lazy-loaded storefront route table', async () => {
    const paths = routes.map((route) => route.path);
    expect(paths).toEqual([
      '',
      'product/:id',
      'wishlist',
      'account',
      'cart',
      'checkout',
      'orders/:id',
      '**',
    ]);

    const lazyRoutes = routes.filter((route) => route.loadComponent);
    const components = await Promise.all(lazyRoutes.map((route) => route.loadComponent?.()));
    expect(components).toHaveLength(7);
    expect(components.every(Boolean)).toBe(true);
    expect(routes.at(-1)?.redirectTo).toBe('');
  });

  it('uses request-time server rendering and merges server providers', () => {
    expect(serverRoutes).toEqual([{ path: '**', renderMode: RenderMode.Server }]);
    expect(appConfig.providers.length).toBeGreaterThan(0);
    expect(config.providers.length).toBeGreaterThan(appConfig.providers.length);
  });
});
