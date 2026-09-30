# Morrow Market

A responsive demo storefront built with Angular 22 standalone components, zoneless change detection, SSR/hydration, and NgRx Store/Effects.

## Run locally

```bash
npm ci
npm start
```

Open `http://localhost:4200/`.

## Storefront flows

- Browse the DummyJSON catalog, search all loaded products, filter by category, sort by discounted price or rating, and progressively reveal results.
- Open product detail pages, choose a quantity, save favorites, and manage the cart.
- Cart, wishlist, and demo orders persist in browser local storage.
- Sign in with a DummyJSON sample user and view the account page and locally stored order history. Use the sample sign-in button or `emilys` / `emilyspass`.
- Checkout validates delivery details and creates a local order confirmation. Payment is intentionally simulated; no card data is collected and no shipment is created.

## GitHub Pages environments

The [CI and Pages workflow](.github/workflows/ci-pages.yml) runs tests and a build on pull requests to `main` and `develop`. Merges/pushes deploy as follows:

| Branch    | GitHub Actions environment | URL                                     |
| --------- | -------------------------- | --------------------------------------- |
| `develop` | `dev`                      | `https://<owner>.github.io/<repo>/dev/` |
| `main`    | `prod`                     | `https://<owner>.github.io/<repo>/`     |

For a user/organization site named `<owner>.github.io`, production deploys at the domain root and dev at `/dev/`.

One-time repository setup:

1. Create `main` and `develop` branches and push this project to a GitHub repository.
2. In **Settings → Pages**, set the source to **Deploy from a branch**, choose `gh-pages`, and select `/(root)`.
3. In **Settings → Actions → General**, allow GitHub Actions to create and approve pull requests only if your policy requires it; the workflow itself needs `contents: write` to publish `gh-pages`.
4. The workflow creates the `dev` and `prod` deployment environments on their first run. Add required reviewers or branch restrictions to `prod` under **Settings → Environments** if production approval is desired.
5. Merge to `develop` to publish the dev URL; merge to `main` to publish production.

The workflow publishes Angular's browser bundle and preserves the other environment's directory on the `gh-pages` branch. It converts Angular's CSR entry point to `index.html` and generates an environment-aware `404.html` fallback so deep links can be refreshed on GitHub Pages.

## Data and state

Catalog and demo authentication use [DummyJSON](https://dummyjson.com/docs). Its write endpoints simulate changes instead of persisting them, so cart and order data are managed locally. The demo auth token is kept in session storage. Dev and prod API settings are defined in `src/environments/environment.ts` and `src/environments/environment.prod.ts`.

This is a frontend prototype, not a production commerce backend. A production deployment needs server-side inventory/pricing, durable orders, secure authentication (preferably httpOnly cookies), and a payment provider integration.

## Build, tests, and coverage

```bash
npm run build
npm test -- --watch=false
npm run test:coverage
```

Coverage includes every TypeScript file under `src/app` and excludes test files. The coverage command enforces at least 90% statements, branches, functions, and lines in each included file; GitHub Actions runs this gate for pull requests and deployments.
