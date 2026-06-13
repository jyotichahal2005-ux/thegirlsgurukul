---
name: Static images in Vite artifacts
description: Use public/images/ folder and URL string constants, not @assets alias imports from outside Vite root.
---

## Rule
Put static images in `artifacts/<name>/public/images/` and reference them as URL strings:
```typescript
const heroBg = "/images/hero-bg.png";
```

## Why
The `@assets` alias resolves to `../../attached_assets/` which is outside the Vite root. Even with `fs.strict: false`, this causes unreliable behavior in the workflow environment. Images in the `public/` folder are always served correctly by Vite without any alias or fs configuration needed.

## How to apply
- Copy images from `attached_assets/` to `artifacts/<name>/public/images/`
- Use string constants (not module imports) for image paths in components
- The BASE_PATH for the app is "/", so `/images/foo.png` resolves correctly
