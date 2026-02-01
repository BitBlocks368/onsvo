# Implementation Plans

## Overview
This document outlines the development and implementation strategies for the ongoing projects in the onsvo repository.

## from X Grok

Here are popular & useful additions for a modern **TypeScript** web app repo (already using Husky + Prettier) in 2026:

- **Biome**  
  → Replaces ESLint + Prettier  
  → Much faster, zero-config option, lints + formats in one tool

- **typescript-eslint** (if sticking with ESLint)  
  → Best TypeScript-specific lint rules  
  → Still very common in large teams

- **Vitest** (or **Bun test** / **tsx + node --test**)  
  → Fast Vite-powered unit/component testing  
  → Native ESM + great DX

- **Playwright** or **Cypress**  
  → End-to-end / component testing  
  → Playwright currently has stronger momentum

- **lint-staged**  
  → Run Biome/ESLint/Prettier only on staged files  
  → Almost mandatory with Husky

- **commitlint** + **@commitlint/config-conventional**  
  → Enforce Conventional Commits  
  → Pairs perfectly with Husky

- **lefthook** (alternative to Husky)  
  → Faster & simpler git hooks in many cases

- **tsc --noEmit** + **typecheck script**  
  → Add to pre-commit / CI  
  → Catches type errors early

- **Zod**  
  → Runtime validation + type inference (forms, API, env vars)

- **Tailwind CSS** + **shadcn/ui** or **Radix UI** + **cmdk**  
  → Very popular component/styling combo right now

- **Vite** (if not using already)  
  → Still the fastest dev experience for most non-Next.js apps

- **tsx** / **esbuild** / **unbuild**  
  → For scripts / CLI tools / libraries in monorepo

- **Changesets** (if publishing packages)  
  → Clean changelog + version management

- **Dependabot** / **Renovate**  
  → Automated dependency updates + security PRs

- **Vercel** / **Netlify** / **Cloudflare Pages**  
  → Easy deployment + preview branches

Pick 3–5 that solve your current pain points first — don't add everything at once.

Which direction is your project going? (SPA, Next.js/Remix/SvelteKit, library, full-stack, etc.)
