
import { useState } from "react";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  LockKeyhole,
  Printer,
  ChevronRight,
} from "lucide-react";
import { PhantomBrand } from "@/components/PhantomBrand";

type DocumentId = "terms" | "eula" | "privacy";

const documents = [
  { id: "terms" as const, label: "Terms of Use", icon: FileText },
  { id: "eula" as const, label: "End User Licence Agreement", icon: ShieldCheck },
  { id: "privacy" as const, label: "Privacy Notice", icon: LockKeyhole },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-9">
      <h2 className="mb-3 text-base font-semibold tracking-wide text-foreground">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-7 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function TermsOfUse() {
  return (
    <>
      <p>
        These Terms of Use and Access Policy govern access to the Phantom C2
        website, software, documentation and associated materials. Phantom C2
        is developed and made available by Hercules Suite Limited, a company
        incorporated in the Federal Republic of Nigeria ("Hercules", "we",
        "us" or "our").
      </p>
      <p>
        By requesting, accepting or using access to Phantom C2, you agree to
        these Terms. If you act on behalf of an organisation, you represent
        that you are authorised to bind that organisation to these Terms.
      </p>

      <Section title="1. Purpose and Intended Users">
        <p>
          Phantom C2 is a command-and-control framework intended for legitimate
          cybersecurity activities, including authorised penetration testing,
          red-team exercises, security assessments and security research.
        </p>
        <p>
          Access is restricted to organisations, professional security teams
          and individuals approved through Hercules' access review process.
          Publication of information about Phantom C2 does not constitute an
          offer of unrestricted public access.
        </p>
      </Section>

      <Section title="2. Access Approval and Verification">
        <p>
          All access is subject to review and approval by Hercules. We may
          request reasonable information to verify an applicant's identity,
          organisational affiliation, intended use and authority to conduct
          security activities.
        </p>
        <p>
          Hercules reserves the right to approve or reject applications,
          designate authorised teams and users, impose access conditions,
          restrict deployments and determine the scope of each licence.
        </p>
        <p>
          Approval of an organisation does not automatically authorise every
          employee, contractor, affiliate or customer associated with it.
          Only approved users may access Phantom C2.
        </p>
      </Section>

      <Section title="3. Lawful and Authorised Use">
        <p>
          Phantom C2 may only be used for lawful activities for which the
          user or organisation has obtained appropriate permission.
        </p>
        <p>
          Before conducting an assessment or operation, the user must obtain
          valid authorisation from the owner or duly authorised controller
          of the relevant systems, networks and environments.
        </p>
        <p>
          Users are responsible for defining engagement scope, obtaining
          permissions, maintaining appropriate records and ensuring that
          all activities remain within the approved scope.
        </p>
        <p>
          Use must comply with the Cybercrimes (Prohibition, Prevention, etc.)
          Act 2015, as amended, the laws of the Federal Republic of Nigeria
          and any other applicable jurisdiction.
        </p>
      </Section>

      <Section title="4. Prohibited Conduct">
        <p>Users must not:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use Phantom C2 against systems without appropriate authorisation.</li>
          <li>Facilitate fraud, theft, extortion, unlawful surveillance or disruption.</li>
          <li>Share credentials, licence materials or access with unauthorised persons.</li>
          <li>Sell, sublicense, lease or distribute Phantom C2 without written permission.</li>
          <li>Circumvent licensing, authentication or access restrictions.</li>
          <li>Misrepresent identity, organisational affiliation or authorisation.</li>
          <li>Reverse engineer or attempt to derive proprietary source code, except where applicable law permits.</li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        <p>
          Phantom C2, including its software, source code, object code,
          architecture, interfaces, documentation, designs, trademarks and
          associated materials, remains the intellectual property of Hercules
          Suite Limited or its applicable licensors.
        </p>
        <p>
          Access does not transfer ownership or grant any rights beyond those
          expressly provided under an applicable written licence agreement.
        </p>
      </Section>

      <Section title="6. No Product or Agent Telemetry">
        <p>
          Phantom C2 is designed not to collect or transmit product usage
          telemetry, agent activity telemetry, operational telemetry or
          engagement analytics to Hercules Suite Limited.
        </p>
        <p>
          Hercules does not use Phantom C2 to remotely monitor a customer's
          internal infrastructure, endpoints, networks or security engagements.
          Transmission of agent activity or engagement telemetry to Hercules
          is not a condition of using the software.
        </p>
        <p>
          This commitment concerns Phantom C2 product and operational
          telemetry. It does not mean that no administrative information is
          processed in connection with access requests, licensing,
          correspondence or payments. Such limited processing is described
          in our Privacy Notice.
        </p>
      </Section>

      <Section title="7. Suspension and Revocation of Access">
        <p>
          Access to Phantom C2 is conditional. Hercules reserves the right to
          restrict, suspend or revoke access where there is a breach of these
          Terms, suspected unlawful use, unauthorised sharing, misrepresentation,
          failure to maintain approval conditions or a material legal,
          operational or security risk.
        </p>
        <p>
          Where immediate action is reasonably necessary to address suspected
          misuse, a security threat, unlawful activity or a legal requirement,
          Hercules may suspend or revoke access without prior notice.
        </p>
        <p>
          In other circumstances, Hercules will endeavour to provide notice
          and a reasonable opportunity to address the issue where practicable.
        </p>
        <p>
          Following revocation, users must cease using Phantom C2 and comply
          with applicable licence termination and deletion obligations.
        </p>
      </Section>

      <Section title="8. Availability and Changes">
        <p>
          Hercules may update, maintain, restrict, suspend or discontinue
          Phantom C2 or any of its features. Access may be affected by
          maintenance, infrastructure changes, third-party interruptions,
          security events or operational circumstances.
        </p>
        <p>
          Unless expressly agreed in writing, Hercules does not guarantee
          uninterrupted availability, a particular restoration date or
          indefinite access.
        </p>
      </Section>

      <Section title="9. Warranties and Liability">
        <p>
          To the maximum extent permitted by applicable law, Phantom C2 is
          provided on an as-available basis. Hercules does not warrant that
          the software will be uninterrupted, error-free or compatible with
          every environment.
        </p>
        <p>
          Hercules shall not be liable for indirect or consequential losses,
          loss of profits, revenue, goodwill or data, subject to liabilities
          that cannot lawfully be excluded or limited under applicable law.
        </p>
        <p>
          Users remain responsible for their own deployments, authorisations,
          configurations and activities.
        </p>
      </Section>

      <Section title="10. Governing Law">
        <p>
          These Terms are governed by the laws of the Federal Republic of
          Nigeria. Disputes shall first be addressed through good-faith
          discussions. Where no resolution is reached, either party may
          approach a court of competent jurisdiction in Nigeria.
        </p>
      </Section>
    </>
  );
}

function Eula() {
  return (
    <>
      <p>
        This End User Licence Agreement ("Agreement") governs the licence
        granted by Hercules Suite Limited ("Licensor") to the approved
        organisation ("Licensee") for use of Phantom C2.
      </p>
      <p>
        The Agreement applies to the organisation and its approved users.
        An organisation receiving a licence must ensure that its authorised
        representatives accept these terms before deployment or use.
      </p>

      <Section title="1. Grant of Licence">
        <p>
          Subject to this Agreement and the applicable licence approval,
          Hercules grants the Licensee a limited, non-exclusive,
          non-transferable, non-sublicensable and revocable licence to use
          Phantom C2 solely for lawful and authorised cybersecurity activities.
        </p>
        <p>
          The licence is limited to the approved organisation, authorised
          users, deployment environments, duration and permitted purposes
          stated in the relevant licence approval or schedule.
        </p>
        <p>
          No ownership of the software or its intellectual property is
          transferred to the Licensee.
        </p>
      </Section>

      <Section title="2. Authorised Users and Organisational Responsibility">
        <p>
          Only users approved under the licence may access Phantom C2.
          The Licensee must prevent unauthorised access and must not share
          credentials, software packages or licence materials with other
          organisations or individuals.
        </p>
        <p>
          The Licensee is responsible for ensuring that its authorised
          users understand and comply with this Agreement and for maintaining
          appropriate access controls around its deployment.
        </p>
      </Section>

      <Section title="3. Permitted Use and Restrictions">
        <p>
          Phantom C2 may only be used for engagements and activities for
          which the Licensee has valid legal authority and written permission
          from the relevant system owner or authorised controller.
        </p>
        <p>
          The Licensee must not use the software for unauthorised access,
          unlawful interception, fraud, theft, extortion, sabotage or other
          prohibited activity.
        </p>
        <p>
          The Licensee must not distribute, sell, sublicense, reverse engineer,
          circumvent access controls or otherwise exploit the software beyond
          the rights expressly granted, except to the extent applicable law
          provides otherwise.
        </p>
      </Section>

      <Section title="4. Ownership and Intellectual Property">
        <p>
          All rights, title and interest in Phantom C2 remain with Hercules
          Suite Limited or its applicable licensors. The Licensee receives
          a limited right of use and no ownership interest.
        </p>
        <p>
          The Licensee retains ownership of its pre-existing intellectual
          property and independently developed materials.
        </p>
      </Section>

      <Section title="5. Telemetry and Operational Data">
        <p>
          Phantom C2 is designed not to collect or transmit agent activity,
          product usage telemetry, operational telemetry or engagement
          analytics to Hercules.
        </p>
        <p>
          Hercules does not claim ownership of or unrestricted access to
          the Licensee's operational data, engagement findings, credentials,
          security reports or information obtained through the Licensee's
          authorised activities.
        </p>
        <p>
          The Licensee remains responsible for its own deployment, data
          collection, storage, security and compliance obligations.
        </p>
        <p>
          This clause does not prevent Hercules from handling limited
          administrative information necessary for access administration,
          licensing, payment records, contractual communications or legal
          compliance. Further details are in the Privacy Notice.
        </p>
      </Section>

      <Section title="6. Suspension and Revocation">
        <p>
          Hercules may suspend, restrict or revoke a licence where the
          Licensee breaches this Agreement, engages in or is reasonably
          suspected of unlawful or unauthorised use, shares access with
          unauthorised parties, misrepresents its authority or creates a
          material security, legal or operational risk.
        </p>
        <p>
          Immediate suspension without prior notice may be used where
          reasonably necessary to address an urgent security risk, suspected
          misuse or legal requirement. Where immediate action is not required,
          Hercules will endeavour to provide notice and an opportunity to
          remedy the issue where practicable.
        </p>
      </Section>

      <Section title="7. Term and Termination">
        <p>
          The licence begins on the date specified in the licence approval
          and continues for the agreed licence period, unless terminated
          earlier under this Agreement.
        </p>
        <p>
          Either party may terminate for a material breach that remains
          unremedied thirty days after written notice, where the breach is
          capable of remedy. Hercules may terminate immediately for serious
          unlawful use, material security compromise or a breach that cannot
          reasonably be remedied.
        </p>
        <p>
          On expiry or termination, the Licensee must cease use of Phantom C2
          and securely delete or remove licensed software and materials as
          required by Hercules, subject to lawful retention obligations.
        </p>
      </Section>

      <Section title="8. Support and Updates">
        <p>
          Support, maintenance, training, customisation, updates and service
          levels are not included unless expressly agreed in a separate
          written arrangement.
        </p>
      </Section>

      <Section title="9. Warranties and Liability">
        <p>
          Phantom C2 is provided on an as-available basis, subject to
          commitments expressly stated in this Agreement. Hercules does
          not guarantee uninterrupted operation, compatibility with every
          environment or a particular security assessment outcome.
        </p>
        <p>
          To the maximum extent permitted by Nigerian law, neither party
          shall be liable for indirect or consequential loss. Nothing in
          this Agreement excludes liability that cannot lawfully be excluded.
        </p>
      </Section>

      <Section title="10. Indemnity">
        <p>
          The Licensee shall be responsible for third-party claims arising
          from its unlawful or unauthorised use of Phantom C2, failure to
          obtain necessary permissions or material breach of this Agreement,
          except to the extent that the claim results from Hercules' own
          breach, negligence or wilful misconduct.
        </p>
      </Section>

      <Section title="11. Governing Law">
        <p>
          This Agreement is governed by the laws of the Federal Republic
          of Nigeria. Disputes shall be referred to the courts of competent
          jurisdiction in Nigeria after an attempt at amicable resolution.
        </p>
      </Section>

      <Section title="12. Licence Approval Schedule">
        <p>
          Each licence should be accompanied by a written schedule identifying
          the Licensee, licence reference, approved users, permitted
          environments, commencement date, expiry date, permitted purpose,
          commercial terms and any additional restrictions.
        </p>
        <p>
          The Agreement should be executed by authorised representatives
          of Hercules Suite Limited and the Licensee before access is granted.
        </p>
      </Section>
    </>
  );
}

function PrivacyNotice() {
  return (
    <>
      <p>
        This Privacy Notice explains the limited personal information that
        Hercules Suite Limited may receive and use in connection with
        Phantom C2 access enquiries, organisational vetting, licensing
        and customer communications.
      </p>

      <Section title="1. Who We Are">
        <p>
          Hercules Suite Limited is a company incorporated in the Federal
          Republic of Nigeria and is the organisation responsible for
          administering access to Phantom C2.
        </p>
        <p>
          For the limited administrative personal information described
          in this Notice, Hercules acts as an independent data controller
          because it determines the purposes and means of that processing.
        </p>
      </Section>

      <Section title="2. Information We Receive">
        <p>
          Hercules does not operate Phantom C2 as a telemetry collection
          or customer infrastructure monitoring service.
        </p>
        <p>
          In the ordinary access and licensing process, information may
          be limited to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Email addresses and information included in enquiries sent to Hercules.</li>
          <li>Names, professional roles and organisational details voluntarily included in correspondence.</li>
          <li>Information reasonably required to assess an organisation's access request and intended use.</li>
          <li>Licence administration and authorised-user information.</li>
          <li>Payment confirmation and transaction references relating to licence payments.</li>
          <li>Relevant contractual and support correspondence.</li>
        </ul>
      </Section>

      <Section title="3. How We Use This Information">
        <p>Information may be used only as reasonably necessary to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to enquiries and access requests.</li>
          <li>Verify an applicant's organisational affiliation and eligibility.</li>
          <li>Approve, administer, restrict or revoke licences.</li>
          <li>Confirm and reconcile payments.</li>
          <li>Communicate with approved organisations.</li>
          <li>Maintain contractual, financial and legal records.</li>
          <li>Protect Hercules' legitimate business and security interests.</li>
        </ul>
      </Section>

      <Section title="4. Legal Basis">
        <p>
          Depending on the circumstances, Hercules may rely on the need
          to take steps at an individual's request before entering into
          a contract, performance of a contract, compliance with legal
          obligations or legitimate interests pursued in administering
          access and protecting its business.
        </p>
        <p>
          Where consent is the appropriate legal basis, it will be requested
          separately and can be withdrawn as permitted by law.
        </p>
      </Section>

      <Section title="5. Payments">
        <p>
          Licence payments are made through legitimate and auditable bank
          transfer arrangements. Hercules may retain transaction references,
          payment confirmations and related accounting information for
          reconciliation, contractual administration and applicable legal
          record-keeping requirements.
        </p>
        <p>
          Hercules does not represent that it operates a payment-card
          processing service as part of the Phantom C2 access process.
        </p>
      </Section>

      <Section title="6. Telemetry and Customer Operational Data">
        <p>
          Phantom C2 is designed not to transmit agent activity, product
          usage telemetry, operational telemetry or engagement analytics
          to Hercules.
        </p>
        <p>
          Hercules does not routinely collect customer operational data,
          internal network activity, endpoint activity or security engagement
          findings through Phantom C2.
        </p>
        <p>
          The Licensee is responsible for information it collects and
          processes during its own authorised engagements.
        </p>
      </Section>

      <Section title="7. Disclosure and Third-Party Services">
        <p>
          Hercules does not sell personal information. Limited information
          may be disclosed where necessary to professional advisers,
          financial institutions, service providers supporting business
          communications or infrastructure, or competent authorities
          where legally required.
        </p>
        <p>
          Where a third-party provider processes personal information on
          behalf of Hercules, the relationship will be subject to
          appropriate contractual and security arrangements.
        </p>
      </Section>

      <Section title="8. Retention">
        <p>
          Hercules retains personal information only for as long as
          reasonably necessary for the purpose for which it was received,
          including access administration, contractual records, payment
          reconciliation, legal compliance and the establishment or defence
          of legal claims.
        </p>
        <p>
          Information that is no longer required will be securely deleted
          or otherwise disposed of, subject to applicable retention
          requirements.
        </p>
      </Section>

      <Section title="9. Data Subject Rights">
        <p>
          Individuals may have rights under the Nigeria Data Protection
          Act 2023, including rights to request access to, correction or
          deletion of personal information, and to object to or restrict
          certain processing, subject to applicable legal conditions.
        </p>
        <p>
          Requests can be submitted using the contact details below.
          Individuals may also lodge a complaint with the Nigeria Data
          Protection Commission.
        </p>
      </Section>

      <Section title="10. Security">
        <p>
          Hercules takes reasonable organisational and technical measures
          to protect the limited administrative information it holds against
          unauthorised access, disclosure, alteration or loss.
        </p>
      </Section>

      <Section title="11. Changes and Contact">
        <p>
          This Notice may be updated to reflect changes in our access
          arrangements, business operations or applicable law.
        </p>
        <p>
          Privacy enquiries: <strong>privacy@herculessuite.io</strong>
        </p>
        <p>
          Hercules Suite Limited, Federal Republic of Nigeria.
        </p>
      </Section>
    </>
  );
}

export default function Legal() {
  const [active, setActive] = useState<DocumentId>("terms");

  const current = documents.find((item) => item.id === active)!;

  const content = {
    terms: <TermsOfUse />,
    eula: <Eula />,
    privacy: <PrivacyNotice />,
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" aria-label="Return to Phantom C2 home">
            <PhantomBrand />
          </a>
          <a
            href="/"
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} />
            Back to website
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            Legal and Compliance
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Legal Documentation
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            The terms governing access to Phantom C2, software licensing
            and the limited administrative information handled by
            Hercules Suite Limited.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
          <aside className="h-fit lg:sticky lg:top-8">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Documents
            </p>
            <nav className="space-y-1">
              {documents.map((doc) => {
                const Icon = doc.icon;
                const selected = active === doc.id;

                return (
                  <button
                    key={doc.id}
                    onClick={() => {
                      setActive(doc.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left text-sm transition-colors ${
                      selected
                        ? "border border-primary/30 bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={16} />
                      {doc.label}
                    </span>
                    {selected && <ChevronRight size={15} />}
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">
              <p className="font-medium text-foreground">Hercules Suite Limited</p>
              <p>Federal Republic of Nigeria</p>
              <p className="mt-2">
                Effective date: 27 November 2026
              </p>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-border pb-6">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                  Phantom C2 / Legal
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {current.label}
                </h2>
                <p className="mt-2 text-xs text-muted-foreground">
                  Last updated: 27 November 2026
                </p>
              </div>

              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Printer size={14} />
                Print document
              </button>
            </div>

            <div className="legal-content max-w-3xl">
              {content[active]}
            </div>

            <div className="mt-12 border-t border-border pt-6 text-xs leading-6 text-muted-foreground">
              These documents are governed by applicable laws of the Federal
              Republic of Nigeria. The End User Licence Agreement must be
              formally accepted by an authorised representative before
              Phantom C2 is licensed for use.
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
