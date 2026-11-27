import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function PhantomBrand() {
  const [failed, setFailed] = useState(false);
  const source = siteConfig.assets.phantomLogo || siteConfig.assets.phantomIcon;
  return (
    <span className="flex items-center gap-3">
      {!failed && <img src={source} alt="" width={32} height={38} className="h-9 w-8 object-contain" onError={() => setFailed(true)} />}
      <span className="flex flex-col text-left">
        <span className="text-[15px] font-semibold uppercase text-foreground">Phantom <span className="text-primary">C2</span></span>
        <span className="text-[10px] text-muted-foreground">By Hercules Suite</span>
      </span>
    </span>
  );
}