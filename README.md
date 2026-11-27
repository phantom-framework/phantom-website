# Phantom C2 by Hercules Suite

A static product marketing website for Phantom C2. Built from the original Triage template with React, TypeScript, Vite, Tailwind, shadcn UI and Three.js. No authentication, database connection or application server is required.

## Run locally

```sh
npm ci
npm run dev
```

## Build and test

```sh
npm test
npm run build
npm run preview
```

Vite uses `base: '/'`. The production website is generated in `dist/`. Only upload that directory, not the source checkout, `.env`, or platform-managed integration files.

## Website sections

- Navigation: Overview, Capabilities, Why Phantom, Security, About Hercules and Request Access.
- Overview: product identity, mission, request-access CTA, Explore Phantom and the original template's abstract 3D aesthetic.
- The Access Gap: access barriers for legitimate practitioners, without invented statistics or regulatory-bypass claims.
- Introducing Phantom: intended audience and an explicitly labelled brand visual, not a fabricated product screenshot.
- Capabilities: six provisional categories with editable, neutral descriptions.
- Why Phantom: accessibility, independent development, regional relevance and professional use.
- Security and Responsible Use: authorised use, vetting and approval, and forthcoming policy/documentation topics.
- About Hercules Suite: parent-company attribution and company positioning.
- Request Access: opens an email draft addressed to `phantom@herculessuite.io`; it does not send a message automatically.
- Footer: section navigation, contact, copyright and clearly identified policy placeholder dialogs.

## Content and contact configuration

Edit `src/lib/site-config.ts` for the contact email, company URL, policy URLs, asset paths and provisional capability descriptions. No secret keys are needed. The approved contact email is `phantom@herculessuite.io`.

Unknown URLs are `null`, not dead links. The company and policy controls open informative notices until you supply real destinations. Access requests use a `mailto:` link and require a configured email application on the visitor's device.

## Images and logos

The requested asset structure is ready:

```text
public/assets/
  branding/
    phantom-icon.png          supplied mark, cropped and optimized
    phantom-logo.svg          add your official wordmark here
    phantom-icon.svg          optional vector replacement
    hercules-logo.svg         add the official company logo here
  product/
    hero-visual.png
    dashboard-overview.png
    operator-interface.png
    infrastructure-view.png
  illustrations/
  backgrounds/
```

Only `phantom-icon.png` currently exists. Do not create empty files under the other names. Add actual assets, then set the matching entry in `siteConfig.assets` to its absolute path, such as `/assets/product/dashboard-overview.png`.

- **Phantom branding:** set `phantomLogo` to `/assets/branding/phantom-logo.svg`. With no supplied wordmark, the site uses the uploaded icon alongside a typographic name.
- **Hercules branding:** set `herculesLogo` to `/assets/branding/hercules-logo.svg`. Until then, the company name is shown as text, not an invented logo.
- **Hero visual:** set `heroVisual` to replace the rotating abstract geometry with actual approved imagery.
- **Product overview:** set `dashboardOverview` to replace the labelled brand visual with a real product screenshot. Images preserve aspect ratio and use `object-contain`.
- **Additional screenshots:** operator and infrastructure paths are reserved for later content; they are not displayed until a corresponding section is requested.
- **Favicon:** the uploaded Phantom mark is cropped and padded into a square 64px image at `public/favicon.png`. Replace this when replacing the brand mark, and keep the favicon link in `index.html` aligned.

The preview uses a CDN-hosted asset pointer in `src/assets/branding/`. The production website uses the optimized static copy under the explicitly requested `public/assets/branding/` directory, so GitHub Pages does not rely on Lovable's asset proxy. Keep both aligned when changing the icon.

Use approved product screenshots only. Do not represent generated interfaces or unconfirmed technical capabilities as real product functionality.

## Removed bug-tracker functionality

Removed pages: `Auth`, `Dashboard`, `BugCreate`, `BugList`, `BugDetail`, `Analytics`, `Settings`, `OAuthConsent`, the authenticated `Index` redirect and the router-based `NotFound` page.

Removed components/context: `AppLayout`, `AppSidebar`, `ProtectedRoute`, `SeverityBadge`, `StatusBadge` and `AuthContext`.

Removed MCP implementation: `src/lib/mcp/` (definition, user client and five bug/comment tools), its Vite plugin, generated MCP manifest and the local MCP function source.

Removed package dependencies: backend client, cloud-auth helper, MCP SDK and TanStack Query. Remaining UI dependencies are retained for the template's reusable design primitives. The app no longer imports backend files, subscribes to updates, registers users or makes application API calls.

### Platform-managed files retained

Lovable manages `.env`, `src/integrations/`, `supabase/config.toml` and its generated cron helper. They are intentionally unchanged, excluded from the website's TypeScript compilation where applicable, unreferenced by the app and not included in `dist/`. This transformation does not delete existing cloud data, revoke cloud credentials or deactivate previously deployed cloud services. Those resources are not needed by this website. Never copy platform-managed configuration into the public deployment.

## Remaining real-content placeholders

- Official Phantom wordmark and Hercules Suite logo.
- Approved product screenshots.
- Confirmed capability descriptions and technical specifications.
- Full privacy and acceptable-use policies.
- Access restrictions, customer verification, operator accountability and security documentation.
- Confirmed Hercules Suite website URL.

The website does not claim that the provisional capability categories or documentation topics are implemented technical safeguards.

## GitHub Pages deployment

1. Ensure your GitHub repository's deployment branch is `main`; change the workflow branch if your repository uses a different name.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the build source.
3. The included `.github/workflows/deploy-pages.yml` installs dependencies, tests, builds and deploys `dist/` after pushes to `main` or a manual run.
4. Set the Pages custom domain to `phantom.herculessuite.net`. The included `public/CNAME` preserves this domain in the built site.
5. At your DNS provider, create a CNAME for `phantom` pointing to `<your-github-username>.github.io`. Do not include the repository name in the DNS target.
6. Once DNS is verified, enable **Enforce HTTPS** in GitHub Pages settings.

No paid hosting dependency is added. Deployment and DNS configuration have not been performed by this source change. The root-domain configuration is not intended for a `username.github.io/repository/` subpath.
