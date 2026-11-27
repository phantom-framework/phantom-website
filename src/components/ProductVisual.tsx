import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function ProductVisual() {
  const [failed, setFailed] = useState(false);
  const source = siteConfig.assets.dashboardOverview;
  if (source && !failed) {
    return <figure className="mt-12"><img src={source} alt="Phantom C2 product overview" loading="lazy" className="w-full h-auto rounded-md border border-border object-contain" onError={() => setFailed(true)} /></figure>;
  }
  return (
    <figure className="product-visual mt-12 relative overflow-hidden border border-border rounded-md">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3 text-[11px] text-muted-foreground font-mono">
        <span>PHANTOM C2 / PRODUCT OVERVIEW</span><span className="hidden sm:block">VISUAL PREVIEW PENDING</span>
      </div>
      <div className="relative flex min-h-[280px] sm:min-h-[360px] flex-col items-center justify-center gap-6 px-6 py-12">
        <div className="abstract-grid absolute inset-0" aria-hidden="true" />
        <img src={siteConfig.assets.phantomIcon} alt="" loading="lazy" className="relative h-32 sm:h-40 w-32 sm:w-40 object-contain" />
        <div className="relative text-center">
          <p className="text-xl font-medium">Phantom C2</p>
          <p className="mt-2 text-[12px] text-muted-foreground">Product imagery will be shared here.</p>
        </div>
      </div>
      <figcaption className="border-t border-border px-5 py-3 text-[11px] text-muted-foreground">Brand visual · Not a representation of the product interface.</figcaption>
    </figure>
  );
}