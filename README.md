# Jatin Bhuva | Portfolio

Personal portfolio site built with React + TypeScript + Vite.

- Live: `https://jatinbhuva.github.io/portfolio/`

## Tech

- React (client)
- TypeScript
- Vite
- CSS Modules (component/section styles)

## Scripts

```bash
# install
yarn install

# dev server
yarn dev

# production build (outputs to dist/)
yarn build

# preview production build locally
yarn preview

# lint
yarn lint
```

## GitHub Pages (deployment rules)

This repo deploys the **production build** (`dist/`) to GitHub Pages via `.github/workflows/static.yml`.

Key rules:

1. Do **not** deploy the repository root. The root `index.html` is a Vite dev entry that imports `/src/main.tsx` (that path will 404 on Pages).
2. This is a **project pages** site, so the app is served from `/<repo>/` (here: `/portfolio/`).
3. Any **absolute** asset path like `/some-file.jpg` points to `https://jatinbhuva.github.io/some-file.jpg` and will 404. Prefer `import.meta.env.BASE_URL` for public assets.

## Static assets (how to reference images)

You have two safe options:

### 1) Put the file in `public/`

`public/` files are copied as-is to the build output root. On GitHub Pages, prefix them with `BASE_URL`:

```ts
const portraitSrc = `${import.meta.env.BASE_URL}20260419_102433-IMG_STYLE~2.jpg`
```

### 2) Put the file in `src/assets/` and import it

Vite will fingerprint and bundle it:

```ts
import portraitSrc from '../assets/portrait.jpg'
```

## Project structure

```text
.
├─ .github/workflows/static.yml    # GitHub Pages deploy (builds + uploads dist/)
├─ index.html                      # Vite HTML entry (dev)
├─ public/                         # static files copied as-is
├─ src/
│  ├─ app/                         # app shell / layout
│  ├─ components/                  # reusable UI components (CSS modules)
│  ├─ data/                        # content (see src/data/portfolio.ts)
│  ├─ hooks/                       # shared hooks
│  ├─ sections/                    # page sections
│  ├─ styles/                      # shared style helpers
│  ├─ theme/                       # theme/tokens
│  ├─ utils/                       # small utilities
│  ├─ main.tsx                     # React entry point
│  └─ index.css                    # global styles
├─ vite.config.ts                  # Vite config (GitHub Pages base)
└─ dist/                           # generated build output (do not edit)
```
