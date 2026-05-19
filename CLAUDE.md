# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for Impormedical's metrology laboratory (calibration of tensiometers, thermometers, thermohygrometers under ISO/IEC 17025:2017). User-facing copy is in Spanish.

Stack: React 19 + TypeScript + Vite 8, styled with Tailwind CSS v4 (via `@tailwindcss/vite`). No router, no state library, no test framework.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # tsc -b (typecheck both tsconfig projects) then vite build
npm run lint     # eslint .
npm run preview  # serve the built dist/
```

There is no test runner configured. `npm run build` is the primary correctness gate — it runs the TypeScript project references build (strict: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`) before bundling.

## Environment

`.env` provides `VITE_RECAPTCHA_SITE_KEY`. It is referenced two ways:
- In `src/components/PQRSFModal.tsx` via `import.meta.env.VITE_RECAPTCHA_SITE_KEY` (standard Vite).
- In `index.html` via the `%VITE_RECAPTCHA_SITE_KEY%` HTML-replacement token in the reCAPTCHA `<script src>`. If the key is missing at build time this token will be left unreplaced — confirm `.env` is loaded.

## Architecture

Routing is handmade — there is no react-router. `src/App.tsx` holds a `page: 'main' | 'policy'` state and toggles which subtree renders. Policy navigation uses `history.pushState`/`popstate` with `#politica-<key>` hashes, parsed on mount and on back/forward navigation. Any new "page" should follow this same pattern (extend `PageName`, branch in `App.tsx`) rather than introducing a router.

Global app state lives in `src/context/AppContext.tsx` (`useApp()` hook). It exposes `showPage`, `showPolicy`, and `openPQRSFModal`. Sections call these instead of doing navigation themselves — `useApp()` throws if used outside the provider in `App.tsx`.

Layout layers:
- `src/pages/MainPage.tsx` composes the landing in fixed order: `Navbar → Hero → StatsBar → Services → WhyUs → HowItWorks → Traceability → CtaBanner → Contact → Footer`.
- `src/sections/*` — each landing section is one file. `src/sections/services/` holds the three product cards (Tensiómetro, Termómetro, Termohigrómetro) plus `CheckIcon` and `ExtraPointsNotice`.
- `src/pages/PolicyPage.tsx` renders one of six policies from `src/data/policies.ts` — the policy body is an HTML string injected via `dangerouslySetInnerHTML` and styled by the `.policy-content` rules in `src/index.css`. To add a policy, extend `PolicyKey`, add a `policies[key]` entry, and link to it via `showPolicy('key')`.

PQRSF modal (`src/components/PQRSFModal.tsx`) submits to Salesforce Web-to-Case (`webto.salesforce.com/servlet/servlet.WebToCase`) by POSTing the form into a hidden iframe and watching its `load` event for success. The Salesforce `orgid`, `recordTypeId`, etc. are hardcoded. Submission is gated by an invisible reCAPTCHA v3 token (`action: 'submit'`).

## Styling

Tailwind v4 with the design system declared in `src/index.css` `@theme` (no `tailwind.config.js`). Use the brand color tokens — `bg-navy`, `bg-navy-dark`, `bg-teal`, `bg-orange`, `text-text-mid`, `border-brand-border`, etc. — rather than raw hex. Fonts are `--font-sans` (Inter) and `--font-display` (Space Grotesk, applied to h1–h5 via the base layer); both are loaded from Google Fonts in `index.html`. The `.policy-content` block in `index.css` styles the dangerouslySetInnerHTML'd policy bodies.

## Conventions

- Function components only, exported as named exports (`export function Foo()`); `App` is the only default export.
- Pages live in `src/pages/`, landing sections in `src/sections/`, reusable widgets in `src/components/`. New section files should be added to `MainPage.tsx` in the desired order.
- Imports use `verbatimModuleSyntax` — type-only imports must use `import type`.
