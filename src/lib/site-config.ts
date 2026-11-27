import phantomIcon from "@/assets/branding/phantom-icon.png.asset.json";

/** Replace null image entries with the public paths below once real assets exist. */
export const siteConfig = {
  contactEmail: "phantom@herculessuite.io",
  herculesUrl: null as string | null,
  privacyUrl: null as string | null,
  acceptableUseUrl: null as string | null,
  assets: {
    phantomLogo: null as string | null, // /assets/branding/phantom-logo.svg
    phantomIcon: import.meta.env.PROD ? "/assets/branding/phantom-icon.png" : phantomIcon.url,
    herculesLogo: null as string | null, // /assets/branding/hercules-logo.svg
    heroVisual: null as string | null, // /assets/product/hero-visual.png
    dashboardOverview: null as string | null, // /assets/product/dashboard-overview.png
    operatorInterface: null as string | null, // /assets/product/operator-interface.png
    infrastructureView: null as string | null, // /assets/product/infrastructure-view.png
  },
  access: { authorisedUseOnly: true, approvalRequired: true },
};

export function accessRequestHref(email = siteConfig.contactEmail) {
  return `mailto:${email}?subject=${encodeURIComponent("Phantom C2 — Access request")}`;
}

export const capabilities = [
  { id: "operators", title: "Operator Management", description: "The people behind each authorised operation." },
  { id: "engagements", title: "Campaign & Engagement Management", description: "The context and scope of security engagements." },
  { id: "infrastructure", title: "Infrastructure Management", description: "Purpose-built infrastructure for security operations." },
  { id: "operations", title: "Post-Exploitation Operations", description: "Offensive security within an authorised assessment." },
  { id: "visibility", title: "Operational Visibility", description: "A perspective on ongoing security operations." },
  { id: "controls", title: "Security & Access Controls", description: "The foundations of responsible operator access." },
];