# Architecture
- Keep the website a static single-page React frontend with anchor navigation and mailto access requests; this permits root-domain GitHub Pages hosting without an application server.
- Keep product content, asset overrides and contact destinations in `src/lib/site-config.ts`; this allows verified product information to replace provisional content centrally.
- Preserve platform-managed integration files untouched and exclude them from the website's TypeScript scope; they are neither imported nor shipped and require no runtime backend.
- Keep an optimized static branding copy in the explicitly requested `public/assets/branding` directory for production and a CDN pointer for preview; GitHub Pages cannot serve Lovable's relative asset proxy path.
- Load the original Three.js visual lazily, use semantic CSS tokens for scene colors and respect reduced motion; this preserves the template's visual identity without slowing the static content.