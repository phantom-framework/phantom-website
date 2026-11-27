import { lazy, Suspense, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Fingerprint, Globe2, Layers3, LockKeyhole, Menu, Network, ShieldCheck, Users, X, Activity, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PhantomBrand } from "@/components/PhantomBrand";
import { ProductVisual } from "@/components/ProductVisual";
import { accessRequestHref, capabilities, siteConfig } from "@/lib/site-config";
import { CapabilityComparison } from "@/components/CapabilityComparison";

const Logo3D = lazy(() => import("@/components/Logo3D").then(m => ({ default: m.Logo3D })));
const navigation = [
  { label: "Overview", id: "overview" },
  { label: "Comparison", id: "comparison" },
  { label: "Why Phantom", id: "why-phantom" },
  { label: "Security", id: "security" },
  { label: "About Hercules", id: "hercules" }
];
const icons = [Users, Layers3, Network, Crosshair, Activity, LockKeyhole];

function AccessButton({ outline = false, children = "Request Access" }: { outline?: boolean; children?: ReactNode }) {
  return <Button asChild variant={outline ? "outline" : "default"} className="rounded-sm h-11 px-5 text-[13px] group"><a href={accessRequestHref()}>{children}<ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a></Button>;
}
function Eyebrow({ number, children }: { number: string; children: ReactNode }) {
  return <p className="mb-6 flex items-center gap-3 text-[11px] uppercase font-mono text-muted-foreground"><span className="text-primary">{number}</span><span className="h-px w-6 bg-border" />{children}</p>;
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [policy, setPolicy] = useState<"privacy" | "acceptable" | "company" | null>(null);
  const [heroFailed, setHeroFailed] = useState(false);
  const [herculesFailed, setHerculesFailed] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#overview">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="site-container flex h-[72px] items-center justify-between gap-4">
          <a href="#overview" aria-label="Phantom C2 home"><PhantomBrand /></a>
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
            {navigation.map(item => <Button key={item.id} variant="link" asChild className="p-0 h-auto text-[12px] font-normal text-muted-foreground hover:text-foreground hover:no-underline"><a href={`#${item.id}`}>{item.label}</a></Button>)}
          </nav>
          <div className="flex items-center gap-2"><div className="hidden sm:block"><AccessButton outline /></div><Button className="lg:hidden" variant="ghost" size="icon" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
        </div>
        {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden border-t border-border site-container py-4 flex flex-col gap-1">{navigation.map(item => <Button key={item.id} asChild variant="ghost" className="justify-start" onClick={() => setMenuOpen(false)}><a href={`#${item.id}`}>{item.label}</a></Button>)}<div className="mt-3" onClick={() => setMenuOpen(false)}><AccessButton /></div></nav>}
      </header>

      <main>
        <section id="overview" className="hero-section relative overflow-hidden pt-[72px]">
          <div className="hero-scene absolute inset-0" aria-hidden="true">
            <div className="scene-grid absolute inset-0" />
            <div className="hero-geometry absolute">
              {siteConfig.assets.heroVisual && !heroFailed ? <img src={siteConfig.assets.heroVisual} alt="" className="w-full h-full object-contain" onError={() => setHeroFailed(true)} /> : <Suspense fallback={null}><Logo3D /></Suspense>}
            </div>
          </div>
          <div className="site-container relative pointer-events-none py-16 md:py-24">
            <div className="relative max-w-[650px]">
              <p className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground mb-7"><span className="h-1.5 w-1.5 bg-primary" /> INDEPENDENTLY DEVELOPED. PURPOSE-BUILT.</p>
              <p className="mb-5 text-[15px] font-semibold uppercase">Phantom <span className="text-primary">C2</span></p>
              <h1 className="hero-title">Adversarial Emulation Framework.<br /><span className="text-muted-foreground">Built for the Teams<br className="hidden sm:block" /> That Need It.</span></h1>
              <p className="mt-7 text-[15px] leading-[1.8] max-w-[490px] text-muted-foreground">Access to advanced red team infrastructure should not be determined by geography. Phantom C2 helps security teams across the Global South strengthen their offensive security capabilities through purpose-built command-and-control technology.</p>
              <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-4"><AccessButton /><Button asChild variant="ghost" className="h-11 px-2 text-[13px] group"><a href="#introducing">Explore Phantom<ArrowRight className="group-hover:translate-x-1 transition-transform" /></a></Button></div>
              <p className="mt-6 text-[11px] text-muted-foreground">A Hercules Suite product. <span className="mx-2 text-border">/</span> For authorised security operations.</p>
            </div>
          </div>
          <div className="site-container relative pb-5 flex justify-end"><span className="text-[10px] text-muted-foreground font-mono">PHANTOM / INDEPENDENT OFFENSIVE SECURITY</span></div>
        </section>

        <section className="border-y border-border">
          <div className="site-container py-6 flex flex-wrap items-center justify-between gap-5 text-[12px] text-muted-foreground"><span className="text-foreground font-medium">Built for legitimate security practitioners</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Authorised operations</span><span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-info" />Global South perspective</span><span className="flex items-center gap-2"><Fingerprint className="h-4 w-4" />Independent development</span></div>
        </section>

        <section id="access-gap" className="section-space border-b border-border">
          <div className="site-container"><Eyebrow number="01">The access gap</Eyebrow><div className="grid md:grid-cols-2 gap-10 md:gap-20"><h2 className="section-title max-w-[440px]">The Offensive Security Gap Is Real.</h2><div className="space-y-5 text-[14px] text-muted-foreground leading-[1.85]"><p>Commercial red team and post-exploitation frameworks are not equally accessible worldwide. Export controls and restrictions on dual-use technologies can create additional barriers for legitimate security teams in the Global South.</p><p>The result is an uneven landscape: practitioners may struggle to access the same calibre of tooling as their counterparts in more established markets.</p><p className="text-foreground border-l-2 border-primary pl-5">Phantom C2 was created in response to this gap. An independently developed alternative, built for legitimate security work.</p><p className="text-[11px]">All access and use remain subject to applicable laws and regulatory requirements.</p></div></div></div>
        </section>

        <section id="introducing" className="section-space border-b border-border">
          <div className="site-container"><Eyebrow number="02">Introducing Phantom</Eyebrow><div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start"><h2 className="section-title max-w-[480px]">Purpose-Built for Modern Offensive Security.</h2><p className="text-[14px] text-muted-foreground leading-[1.85]">Phantom C2 is an highly customizable and extendible adversary emulation framework designed from an OPSEC-first perspective. With severless support using stateless relays between agents and the teamserver, delivered via cloud functions or embedded local relay listeners. </p></div><ProductVisual /><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-muted-foreground">{["Professional red teams", "Penetration testing companies", "Enterprise security teams", "Managed security providers", "Authorised security researchers"].map(audience => <span key={audience} className="flex items-center gap-2"><Check className="h-3 w-3 text-primary" />{audience}</span>)}</div></div>
        </section>

	<CapabilityComparison />

        <section id="why-phantom" className="section-space border-b border-border hatch-band">
          <div className="site-container"><Eyebrow number="04">Why Phantom</Eyebrow><h2 className="section-title max-w-[600px]">Closing the Access Gap.<br /><span className="text-muted-foreground">Expanding Offensive Security.</span></h2><div className="mt-12 grid md:grid-cols-2 gap-x-16 gap-y-8">{[{ title: "Access, not geography.", desc: "Addressing the barriers faced by legitimate security teams in underserved markets." }, { title: "Independently developed.", desc: "Built by Hercules Suite, rather than depending on access to restricted commercial products." }, { title: "A regional perspective.", desc: "Developed with the needs of practitioners across Africa and the wider Global South in mind." }, { title: "Professional by purpose.", desc: "Intended for authorised security assessments, adversary emulation and red team engagements." }].map((reason, i) => <div key={reason.title} className="border-t border-border pt-6 flex gap-5"><span className="text-[11px] font-mono text-primary mt-1">0{i + 1}</span><div><h3 className="text-[16px] mb-3">{reason.title}</h3><p className="text-[13px] text-muted-foreground leading-[1.8] max-w-[400px]">{reason.desc}</p></div></div>)}</div></div>
        </section>

        <section id="security" className="section-space border-b border-border">
          <div className="site-container"><Eyebrow number="05">Security & responsible use</Eyebrow><div className="grid md:grid-cols-2 gap-10 md:gap-20"><div><ShieldCheck className="h-8 w-8 text-primary mb-6" strokeWidth={1.25} /><h2 className="section-title">Built for Authorised Security Operations.</h2><p className="mt-6 text-[14px] text-muted-foreground leading-[1.85]">Phantom C2 is intended for legitimate security testing and authorised red team engagements. {siteConfig.access.authorisedUseOnly && "Use only on systems you own or have explicit permission to assess."}</p>{siteConfig.access.approvalRequired && <p className="mt-5 border-l-2 border-primary pl-5 text-[13px] leading-[1.8]">Access is subject to appropriate vetting and approval. Unauthorised use is not permitted.</p>}</div><div><p className="text-[11px] font-mono uppercase text-muted-foreground mb-5">Policy & documentation / forthcoming</p>{["Access restrictions", "Customer verification", "Acceptable use", "Operator accountability", "Security documentation"].map(item => <div key={item} className="flex items-center justify-between gap-3 border-t border-border py-4"><span className="text-[13px]">{item}</span><span className="text-[10px] text-muted-foreground">To be published</span></div>)}<p className="mt-4 text-[11px] text-muted-foreground leading-relaxed">These are documentation topics, not claims of implemented technical safeguards.</p></div></div></div>
        </section>

        <section id="hercules" className="section-space border-b border-border">
          <div className="site-container"><Eyebrow number="06">The company behind Phantom</Eyebrow><div className="grid md:grid-cols-2 gap-10 md:gap-20"><div>{siteConfig.assets.herculesLogo && !herculesFailed ? <img src={siteConfig.assets.herculesLogo} alt="Hercules Suite" loading="lazy" className="mb-8 h-12 max-w-[220px] object-contain" onError={() => setHerculesFailed(true)} /> : <p className="mb-6 text-[12px] font-semibold uppercase text-muted-foreground">Hercules Suite</p>}<h2 className="section-title">Built by Hercules Suite.</h2></div><div><p className="text-[14px] text-muted-foreground leading-[1.85]">Hercules Suite is the cybersecurity technology company behind Phantom C2. Phantom is a distinct product within its portfolio, developed and maintained by Hercules Suite.</p><p className="mt-5 text-[14px] text-muted-foreground leading-[1.85]">Its mission: make advanced offensive security capabilities more accessible to legitimate practitioners, particularly across Africa and other underserved markets.</p><Button variant="link" className="mt-6 p-0 text-[13px] text-foreground" {...(siteConfig.herculesUrl ? { asChild: true } : { onClick: () => setPolicy("company") })}>{siteConfig.herculesUrl ? <a href={siteConfig.herculesUrl} target="_blank" rel="noreferrer">Hercules Suite<ArrowUpRight /></a> : <><span>About Hercules Suite</span><ArrowUpRight /></>}</Button></div></div></div>
        </section>

        <section id="request-access" className="section-space relative overflow-hidden hatch-band">
          <div className="site-container text-center relative"><p className="mb-6 text-[11px] font-mono text-primary uppercase">Independent technology. Legitimate purpose.</p><h2 className="section-title">Ready to Explore Phantom C2?</h2><p className="mx-auto mt-6 max-w-[520px] text-[14px] leading-[1.85] text-muted-foreground">Phantom C2 is available to vetted organisations and security professionals conducting authorised security operations.</p><div className="mt-8"><AccessButton /></div><a href={`mailto:${siteConfig.contactEmail}`} className="mt-5 inline-block text-[12px] text-muted-foreground hover:text-foreground transition-colors">{siteConfig.contactEmail}</a></div>
        </section>
      </main>
      <footer className="border-t border-border"><div className="site-container py-10"><div className="flex flex-col md:flex-row justify-between gap-8"><a href="#overview" aria-label="Phantom C2 home"><PhantomBrand /></a><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-[12px] text-muted-foreground">{[{ label: "Overview", id: "overview" }, { label: "Responsible Use", id: "security" }, { label: "Contact", id: "request-access" }].map(item => <Button key={item.id} asChild variant="link" className="p-0 h-auto text-[12px] font-normal text-muted-foreground"><a href={`#${item.id}`}>{item.label}</a></Button>)}</nav></div><div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-[11px] text-muted-foreground"><span>© {new Date().getFullYear()} Hercules Suite. All rights reserved.</span><div className="flex gap-5">{[{ label: "Privacy Policy", key: "privacy" as const, url: siteConfig.privacyUrl }, { label: "Acceptable Use Policy", key: "acceptable" as const, url: siteConfig.acceptableUseUrl }].map(item => <Button key={item.key} variant="link" className="p-0 h-auto text-[11px] font-normal text-muted-foreground" {...(item.url ? { asChild: true } : { onClick: () => setPolicy(item.key) })}>{item.url ? <a href={item.url}>{item.label}</a> : item.label}</Button>)}</div></div></div></footer>
      <Dialog open={policy !== null} onOpenChange={open => { if (!open) setPolicy(null); }}><DialogContent><DialogHeader><DialogTitle>{policy === "privacy" ? "Privacy Policy" : policy === "acceptable" ? "Acceptable Use Policy" : "Hercules Suite"}</DialogTitle><DialogDescription className="pt-4 leading-relaxed">{policy === "company" ? "Phantom C2 is developed and maintained by Hercules Suite." : "The full policy has not yet been published. This notice is a placeholder, not a complete legal policy."}</DialogDescription></DialogHeader>{policy === "acceptable" && <p className="text-[13px] leading-relaxed">Phantom C2 is intended exclusively for authorised security operations. Access is subject to vetting and approval, and use must comply with applicable laws.</p>}<Button asChild variant="outline" className="mt-3"><a href={`mailto:${siteConfig.contactEmail}`}>Contact Hercules Suite<ArrowUpRight /></a></Button></DialogContent></Dialog>
    </div>
  );
}
