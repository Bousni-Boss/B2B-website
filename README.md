# Jewelry B2B App (Prototype)

Features:
- Single login (/login) with roles: client, admin, superadmin.
- Catalog grouped by category; product ID = reference; images from /public/catalog (manifest script).
- Product modal: multiple metal colors x quantities + category-specific fields with defaults (rings step=1).
- Company-controlled gem policy per jewelry category: Simple / Synthetic stones / Precious stones.
- Custom orders: customer selects category, uploads (placeholder), provides details.
- Admin dashboard (read-only prototype).
- Noir & Champagne theme (app/theme.css).

## Quick start
```bash
npm install
npm run dev
```

## Build product manifest
Put images under: public/catalog/<Client Name>/<Category Name>/<REF>.(jpg|png|webp) then run:
```bash
npm run build:manifest
```
This writes lib/products.ts and updates lib/data.ts with generated client accounts (password password123).

## Deploy
- Push to GitHub.
- Import in Vercel -> Framework: Next.js -> Root: / -> Build: next build -> Output: .next
- After deploy, go to /login:
  - superadmin / super123
  - admin / admin123
  - clienta / password123
  - clientb / password123

Prototype only: cookies are unsigned and storage is mock; not for production.
