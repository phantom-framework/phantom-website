
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";


const productImages = [
  {
    src: siteConfig.assets.dashboardOverview || "/assets/product/phantom-dashboard.png",
    alt: "Phantom C2 dashboard overview",
    label: "Centralised Operations Dashboard",
  },
  {
    src: "/assets/product/phantom-udc2-channel2.png",
    alt: "User-Defined C2 Channel implementation",
    label: "Extensible User-Defined C2 Channels: Implement custom communication channels using operator-developed COFF objects on Windows or ELF objects on Linux, built against Phantom's User-Defined C2 ABI.",
  },
  {
    src: "/assets/product/phantom-icmp-udc2.png",
    alt: "Runtime loading of a custom ICMP C2 channel",
    label: "Runtime C2 Channel Extension: Load User-Defined C2 channel implementations through BOF or ELF modules at Beacon runtime, extending communication capabilities without requiring a complete agent rebuild.",
  },
  {
    src: "/assets/product/phantom-vm.png",
    alt: "RISC-V bytecode virtual machine execution",
    label: "RISC-V Bytecode Virtual Machine: Execute supported bytecode through an integrated virtual machine, providing an additional execution environment for supported operations.",
  },
  {
    src: "/assets/product/phantom-sc.png",
    alt: "Clean call stack spoofing",
    label: "Clean Call Stack Spoofing: Apply stack spoofing techniques to reduce the visibility of identifiable call-chain patterns during supported operations.",
  },
  {
    src: "/assets/product/phantom-audit.png",
    alt: "Tamper-evident audit trail",
    label: "Tamper-Evident Audit Trails: Export structured audit records that help preserve operational accountability, support activity reviews, and provide evidence for security assessments.",
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
        <span>Product Interface</span>
      </figcaption>

    </figure>
  );
}
