# ElectroShop – Electronics E‑commerce (Next.js)

Next.js e-commerce project for online electronics, with Bootstrap and an enterprise-style structure.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Bootstrap 5**
- **React 19**

## Project structure (enterprise-style)

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Header, Footer)
│   ├── page.tsx            # Home
│   ├── catalog/            # Product listing
│   ├── cart/
│   ├── checkout/
│   ├── account/
│   ├── login/
│   └── register/
├── components/
│   ├── layout/             # Header, Footer
│   └── providers/          # BootstrapProvider, etc.
├── features/               # Feature modules
│   ├── catalog/            # ProductCard, catalog logic
│   ├── cart/               # Cart UI & logic
│   ├── checkout/
│   ├── account/
│   └── auth/
├── core/                   # Shared application layer
│   ├── api/                # API client
│   ├── config/             # app.config
│   ├── constants/          # ROUTES, etc.
│   ├── lib/                # formatPrice, utils
│   └── types/              # Product, domain types
└── styles/                 # Extra CSS if needed
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` – Development server
- `npm run build` – Production build
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

## Environment

Optional `.env.local`:

- `NEXT_PUBLIC_BASE_URL` – Public site URL
- `NEXT_PUBLIC_API_URL` – Backend API base URL

## Extending

- **Catalog**: Use `@/features/catalog` and `@/core/api` for products.
- **Cart**: Implement in `src/features/cart` and wire to context or API.
- **Auth**: Implement in `src/features/auth` and protect routes as needed.
- **Checkout**: Implement in `src/features/checkout` and `src/app/checkout`.
