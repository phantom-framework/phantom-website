
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const productImages = [
  {
    src: siteConfig.assets.dashboardOverview || "/assets/product/phantom-dashboard.png",
    alt: "Dashboard overview",
    label: "Dashboard Overview",
  },
  {
    src: "/assets/product/phantom-icmp-udc2.png",
    alt: "User-Defined C2 Channel - ICMP",
    label: "User-Defined C2 Channel via ICMP Echo",
  },
  {
    src: "/assets/product/phantom-vm.png",
    alt: "RISC-V VM Execution",
    label: "Bring Your Own Execution Environment",
  },
  {
    src: "/assets/product/phantom-audit.png",
    alt: "Audit Trail",
    label: "Tamper Evident Audit Trail",
  },
];

export function ProductVisual() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((index) =>
      index === 0 ? productImages.length - 1 : index - 1
    );
  };

  const next = () => {
    setCurrent((index) =>
      index === productImages.length - 1 ? 0 : index + 1
    );
  };

  const image = productImages[current];

  return (
    <figure className="product-visual mt-12 w-full overflow-hidden rounded-md border border-border bg-[#0b0f14]">

      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3 text-[11px] font-mono text-muted-foreground">
        <span>PHANTOM C2 / PRODUCT OVERVIEW</span>
        <span className="hidden sm:block">PRODUCT INTERFACE</span>
      </div>

      <div className="relative group">

        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="block w-full h-auto object-contain"
        />

        {/* Previous image */}
        <button
          type="button"
          onClick={previous}
          aria-label="Previous product image"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/70 text-white text-2xl transition hover:bg-primary hover:border-primary"
        >
          ‹
        </button>

        {/* Next image */}
        <button
          type="button"
          onClick={next}
          aria-label="Next product image"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/70 text-white text-2xl transition hover:bg-primary hover:border-primary"
        >
          ›
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 rounded bg-black/75 px-3 py-1.5 font-mono text-[11px] text-white">
          {String(current + 1).padStart(2, "0")} / {String(productImages.length).padStart(2, "0")}
        </div>

      </div>

      <figcaption className="flex items-center justify-between border-t border-border px-5 py-3 text-[11px] text-muted-foreground">
        <span>{image.label}</span>
        <span>Phantom C2 · Product Interface</span>
      </figcaption>

    </figure>
  );
}
