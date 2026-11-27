
const agents = [
  {
    name: "Eclipse",
    platform: "Windows",
    language: "C++ / x64 NASM",
    output: "PIC shellcode, EXE, DLL, Service EXE",
    linking: "Fully position-independent, zero static imports",
    bof: "COFF loader with Beacon API compatibility",
    channels: "HTTP, DNS over HTTPS, TCP, SMB, UDC2 channel modules",
  },
  {
    name: "Spectre",
    platform: "Linux",
    language: "C",
    output: "ELF, raw binary",
    linking: "PIE with optional musl static linking",
    bof: "ELF loader with trampoline table resolution",
    channels: "HTTP, TCP, UDC2 channel modules",
  },
];

const comparisons = [
  {
    capability: "SERVERLESS INFRASTRUCTURE",
    phantom: [
      "Native support for AWS, Azure, and GCP with full Terraform IaC.",
      "Cloud infrastructure deployment is ephemeral by design. Tear down and redeploy in minutes.",
    ],
    other: [
      "Most frameworks only natively support vanilla listener (HTTP/S, DNS, SMB) that can be fingerprinted and blocked.",
    ],
  },
  {
    capability: "USER-DEFINED C2 CHANNELS (UDC2)",
    phantom: [
      "Transport logic lives in a loadable module - an operator-written COFF (Windows) or ELF (Linux) object implementing the UDC2 ABI.",
      "Two deployment modes: embed the module in the payload, or hot-swap it into a running agent without being regenerated.",
    ],
    other: [
      "Custom transports usually require modifying the implant or framework source and rebuilding. New protocols typically mean a new listener, a schema change, or a fork of the C2 chain, and live agents cannot switch transport without redeployment.",
    ],
  },
  {
    capability: "CDN DOMAIN FRONTING",
    phantom: [
      "First-class CDN relay support across all three cloud providers.",
      "Agents connect through CloudFront, Azure Front Door, or Cloud CDN. Traffic appears as requests to high-reputation cloud domains.",
      "Optional custom domain with managed TLS certificates.",
    ],
    other: [
      "Domain fronting support is often manual, fragile, or limited to a single CDN provider.",
    ],
  },
  {
    capability: "HTTPS SNI SPOOFING",
    phantom: [
      "Windows & Linux Agents supports spoofing the Server Name Indication (SNI) hostname used during HTTPS TLS handshakes.",
      "Bypass network controls and filtering rules that make decisions based on observed SNI values.",
    ],
    other: [
      "Not supported or unavailable in many competing frameworks.",
    ],
  },
  {
    capability: "AGENT ARCHITECTURE",
    phantom: [
      "Fully position-independent shellcode agent with zero static imports.",
      "All Win32 APIs resolved at runtime. Zero static imports in the import table.",
      "Native Linux agent with optional static linking for zero-dependency deployment.",
    ],
    other: [
      "Commonly depend on reflective DLL loading or managed runtimes with larger footprints and more observable loading behavior.",
    ],
  },
  {
    capability: "POLYMORPHIC LOADER",
    phantom: [
      "Every build produces a unique binary. Randomized function names, variable names, hash seeds, and junk code insertion.",
      "Multi-layer string obfuscation with randomized encoding per build.",
      "Shellcode encryption with a fresh key per build.",
    ],
    other: [
      "Operators often rely on external packers, manual obfuscation, or static loader templates that share signatures across deployments.",
    ],
  },
  {
    capability: "MODULE STOMPING",
    phantom: [
      "Shellcode is planted into a legitimate module's memory range rather than privately allocated regions.",
      "Execution originates from a signed module, blending into normal process memory layout.",
    ],
    other: [
      "Shellcode typically runs from privately allocated RWX memory, which is more visible to memory scanners and ETW telemetry.",
    ],
  },
  {
    capability: "SLEEP OBFUSCATION",
    phantom: [
      "Sleep obfuscation support in Windows & Linux implants, with configurable masking modes.",
      "In-memory content is encrypted while the agent sleeps.",
    ],
    other: [
      "Often based on public x64-only sleep mask techniques that are well-signatured.",
    ],
  },
  {
    capability: "STACK SPOOFING",
    phantom: [
      "Full call stack frame forgery that presents a clean, legitimate-looking call chain.",
      "Applied to every API call, not just sleep.",
    ],
    other: [
      "Stack spoofing is often limited to sleep calls or a narrow set of APIs, leaving other calls exposed to stack-walking detections.",
    ],
  },
  {
    capability: "DIRECT & INDIRECT SYSCALLS",
    phantom: [
      "Three configurable modes: disabled, direct, or indirect.",
      "Covers critical NT APIs. Bypasses userland hooks entirely.",
    ],
    other: [
      "Syscall support is frequently all-or-nothing with no operator control over the mode, or relies on public implementations that are well-known to EDR vendors.",
    ],
  },
  {
    capability: "AMSI / ETW BYPASS",
    phantom: [
      "Built-in bypass for both AMSI and ETW-TI.",
      "Separate bypass for .NET assembly execution contexts.",
    ],
    other: [
      "Runtime patching approaches are increasingly detected. Some frameworks omit ETW-TI bypass entirely.",
    ],
  },
  {
    capability: "MALLEABLE PROFILES",
    phantom: [
      "JSON-based malleable HTTP profiles with per-URI client and server output configuration.",
      "Output placement: body, header, cookie, or parameter.",
    ],
    other: [
      "Profile systems exist but are often limited in transform depth or lack per-URI granularity.",
    ],
  },
  {
    capability: "VIRTUAL MACHINE EXECUTION",
    phantom: [
      "Custom bytecode RISC-V VM with a full instruction set and native function interop.",
      "Server-side assembler compiles VM programs for deployment to agents.",
      "Beacon API integration: output, token manipulation, and file downloads from VM programs.",
    ],
    other: [
      "Not commonly available. Post-exploitation logic typically runs as shellcode or BOFs with no abstraction layer.",
    ],
  },
  {
    capability: "BOF EXECUTION",
    phantom: [
      "Windows: COFF loader with full Beacon API compatibility and Async execution.",
      "Linux: ELF64 loader with broad libc symbol resolution.",
      "BOF API calls are routed through the agent's evasion layer.",
    ],
    other: [
      "BOF support is often Windows-only. Linux BOF execution is rare. API proxying through syscalls is not standard.",
    ],
  },
  {
    capability: "EXTENSION SYSTEM",
    phantom: [
      "JavaScript scripting engine with sandboxed execution, import system, and typed command definitions.",
      "Pre-hook argument parsing, BOF/VM parameter packing, and post-hook credential extraction.",
      "Hot-loadable extension packs with platform and agent-type filtering.",
    ],
    other: [
      "Lack runtime loading and typed argument support.",
    ],
  },
  {
    capability: "EXTERNAL AGENT PLUGINS (SDK)",
    phantom: [
      "Integrate any external beacon - or your own payload builder/loader - as a supervised separate process speaking JSON-RPC 2.0 over stdin/stdout. Custom agents integrate seamlessly.",
      "The wire contract is plain JSON, so plugins can be written in any language.",
    ],
    other: [
      "Adding a new implant family usually means patching framework internals, recompiling the teamserver, and maintaining a fork. Supported agents are limited to the vendor's own implementations.",
    ],
  },
  {
    capability: "LATERAL MOVEMENT",
    phantom: [
      "BOF-based PsExec, SCShell, WinRM, WMI, and DCOM execution.",
      "SMB named pipe/TCP pivoting for agent chaining.",
    ],
    other: [
      "Lateral movement modules are present but often rely on fork-and-run patterns or external tooling.",
    ],
  },
  {
    capability: "PEER-TO-PEER",
    phantom: [
      "SMB named pipe & TCP pivoting for agent chaining. Parent agents relay traffic for child agents that have no direct internet access.",
      "Link and unlink agents at runtime. The pivot graph is tracked in the UI with parent/child relationships.",
      "Child agents inherit the parent's relay path. No additional infrastructure required to reach segmented networks.",
    ],
    other: [
      "P2P pivoting is available in some frameworks but often limited to a single transport or requires manual configuration. Dynamic link/unlink and integrated pivot tracking are uncommon.",
    ],
  },
  {
    capability: "SOCKS & TUNNELING",
    phantom: [
      "SOCKS4 and SOCKS5 proxy with optional username/password authentication.",
      "Local and reverse port forwarding through the agent.",
      "Per-connection channel multiplexing over the C2 protocol.",
    ],
    other: [
      "SOCKS support is common but often limited to a single protocol version without authentication.",
    ],
  },
  {
    capability: "CREDENTIAL OPERATIONS",
    phantom: [
      "Token manipulations, LSASS dump, DCSync with automatic credential parsing, SAM hashdump, LAPS retrieval.",
      "Credential store with automatic extraction from BOF output. Parsed results are immediately available to the operator.",
    ],
    other: [
      "Credential extraction often requires manual parsing of tool output. Integrated credential stores are uncommon.",
    ],
  },
  {
    capability: "PRIVILEGE ESCALATION",
    phantom: [
      "Token impersonation to SYSTEM and TrustedInstaller.",
      "Multiple UAC bypass techniques (SSPI Datagram, Registry Shell Command).",
      "DCOMPotato for SeImpersonate to SYSTEM.",
    ],
    other: [
      "Elevation paths are available but often depend on external binaries or well-signatured public tools.",
    ],
  },
  {
    capability: "ACTIVE DIRECTORY",
    phantom: [
      "Credential extraction results are automatically parsed and fed into the framework's credential store. DCSync hashes, LAPS passwords, and Kerberos keys appear in the operator console immediately.",
      "Enumerated hosts are auto-populated into the Targets panel for tracking across the engagement.",
      "Integrated relay viability checks across LDAP, SMB, HTTP, and MSSQL protocols.",
    ],
    other: [
      "Credential output usually requires manual parsing, and results are not fed back into the framework automatically.",
    ],
  },
  {
    capability: "CLOUD PAYLOAD HOSTING",
    phantom: [
      "Upload and serve payloads via Stateless relays directly from the operator console.",
      "Host and unhost payloads on demand. Cloud storage lifecycle is fully managed by the teamserver.",
    ],
    other: [
      "Payload hosting is typically manual. Operators stage files on infrastructure they manage separately from the C2 framework.",
    ],
  },
  {
    capability: ".NET & PE EXECUTION",
    phantom: [
      "In-process or Fork-and-run .NET assembly execution with synchronous and async modes.",
      "Unmanaged PE execution in agent memory with support for EXE and DLL binaries, method selection, PE caching, and dependency loading.",
      "AMSI and ETW bypass applied to .NET execution contexts.",
    ],
    other: [
      ".NET execution is common but frequently uses fork-and-run, spawning a sacrificial process per assembly. In-memory PE loading with caching and dependency handling is rare.",
    ],
  },
  {
    capability: "OPERATIONAL GUARDRAILS",
    phantom: [
      "Target validation by username, hostname, IP address, and domain.",
      "Kill date with automatic agent self-termination.",
      "Worktime restrictions to limit activity to defined hours.",
    ],
    other: [
      "Guardrails are often limited to kill dates. Target-aware execution constraints are uncommon.",
    ],
  },
  {
    capability: "SECURITY TELEMETRY",
    phantom: [
      "Agents report target security posture on check-in: CFG, HVCI, DSE, Secure Boot, test signing, debug mode.",
      "Operators see the defensive landscape before tasking.",
    ],
    other: [
      "Security feature detection is usually a manual post-exploitation step rather than an automatic check-in property.",
    ],
  },
  {
    capability: "OPERATOR CONSOLE",
    phantom: [
      "Real-time web UI over WebSocket. Session table, network graph, and global task views. Tabbed lower pane with drag-and-drop reordering and side-by-side split.",
      "Dock layout selection support.",
      "Per-agent console, file browser, process browser, and screenshot gallery.",
      "Integrated credential store with search, export, and automatic population from post-exploitation output.",
      "Payload store, tunnel manager, target tracker, team chat, and event log.",
      "Built-in pf script editor, VM bytecode editor, and communication profile editor.",
      "UDC2 channel manager: define channels from kit modules, bind them to relay listeners, validate arguments, and export controller configuration.",
      "Multi-operator presence: see who is online, which agent they are focused on, and when they are typing.",
      "Role-based access control with admin and operator roles. Read-only mode for observers.",
      "One-click operation report export as a self-contained PDF document. All operational data is mapped to MITRE ATT&CK tactics and techniques. Includes tactic/technique distribution charts, IOC extraction, and a filterable chronological timeline.",
    ],
    other: [
      "Most frameworks provide a CLI or basic web UI. Integrated editors, multi-operator presence, and automatic credential/target population from tool output are uncommon.",
    ],
  },
];

export function CapabilityComparison() {
  return (
    <section id="comparison" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section introduction */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-primary">
            PHANTOM C2 / CAPABILITY MATRIX
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            A closer look at the architecture.
          </h2>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            Explore the architecture, agent capabilities, infrastructure
            options, extensibility and operator experience that define
            Phantom C2.
          </p>
        </div>

        {/* Native agent comparison */}
        <div className="mb-20">
          <div className="mb-7">
            <p className="mb-2 font-mono text-xs tracking-widest text-primary">
              01 / NATIVE AGENTS
            </p>
            <h3 className="text-2xl font-semibold">
              Two native implants. Two platforms.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Two native implants. No interpreted languages, no managed
              runtimes, no framework dependencies.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-secondary/40">
                  <th className="w-[190px] px-5 py-4 font-mono text-xs text-muted-foreground">
                    AGENT
                  </th>
                  <th className="px-5 py-4 font-mono text-xs text-primary">
                    ECLIPSE
                  </th>
                  <th className="px-5 py-4 font-mono text-xs text-primary">
                    SPECTRE
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Platform", "Windows", "Linux"],
                  ["Language", "C++ / x64 NASM", "C"],
                  ["Output", "PIC shellcode, EXE, DLL, Service EXE", "ELF, raw binary"],
                  ["Linking", "Fully position-independent, zero static imports", "PIE with optional musl static linking"],
                  ["BOF engine", "COFF loader with Beacon API compatibility", "ELF loader with trampoline table resolution"],
                  ["Channels", "HTTP, DNS over HTTPS, TCP, SMB, UDC2 channel modules", "HTTP, TCP, UDC2 channel modules"],
                ].map(([label, eclipse, spectre]) => (
                  <tr key={label} className="border-b border-border last:border-0">
                    <td className="px-5 py-5 align-top text-sm font-semibold">
                      {label}
                    </td>
                    <td className="px-5 py-5 align-top text-sm leading-relaxed">
                      {eclipse}
                    </td>
                    <td className="px-5 py-5 align-top text-sm leading-relaxed">
                      {spectre}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            These are the built-ins. Any other beacon - your own implant,
            a team-specific loader, a research agent - slots in as an external
            process through the plugin SDK.
          </p>
        </div>

        {/* Full capability comparison */}
        <div>
          <div className="mb-7">
            <p className="mb-2 font-mono text-xs tracking-widest text-primary">
              02 / CAPABILITY OVERVIEW
            </p>
            <h3 className="text-2xl font-semibold">
              Phantom C2 capability comparison
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A detailed breakdown of Phantom C2 capabilities and the
              approaches commonly found in other frameworks.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[1050px] border-collapse text-left">
              <thead className="sticky top-0 z-10">
                <tr className="border-b border-border bg-[#15171c]">
                  <th className="w-[220px] px-5 py-5 font-mono text-xs tracking-wider text-muted-foreground">
                    CAPABILITY
                  </th>
                  <th className="w-[440px] px-5 py-5 font-mono text-xs tracking-wider text-primary">
                    PHANTOM C2
                  </th>
                  <th className="w-[390px] px-5 py-5 font-mono text-xs tracking-wider text-muted-foreground">
                    OTHER VENDORS
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisons.map((item, index) => (
                  <tr
                    key={item.capability}
                    className={`border-b border-border last:border-0 ${
                      index % 2 === 0
                        ? "bg-background"
                        : "bg-secondary/10"
                    }`}
                  >
                    <td className="px-5 py-6 align-top">
                      <span className="text-xs font-semibold tracking-wide">
                        {item.capability}
                      </span>
                    </td>

                    <td className="px-5 py-6 align-top">
                      <ul className="space-y-3">
                        {item.phantom.map((feature, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed"
                          >
                            <span className="mt-1 text-primary">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td className="px-5 py-6 align-top">
                      <ul className="space-y-3">
                        {item.other.map((feature, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-1 text-muted-foreground">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
            <span>PHANTOM C2 BY HERCULES SUITE</span>
            <span>
              Comparative descriptions reflect the supplied product
              comparison document.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
