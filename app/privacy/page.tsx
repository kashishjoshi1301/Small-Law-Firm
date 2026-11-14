import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import LegalNavHandler from '@/components/LegalNavHandler';

export const metadata: Metadata = {
  title: 'Privacy & Client Confidentiality Policy | Atlantic Trial Attorneys',
  description: 'Institutional-grade confidentiality protocols, prospective client privilege protections under Rule 4-1.18, and 256-bit encryption safeguards.',
};

export default function PrivacyPage() {
  return (
    <>
      <LegalNavHandler />
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container page-banner-content">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>Legal</span>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>Privacy Policy</span>
          </div>
          <h1 className="page-banner-title">Privacy &amp; Client Confidentiality Policy</h1>
          <p className="page-banner-desc">
            Atlantic Trial Attorneys LLP maintains institutional-grade confidentiality protocols. All prospective case evaluations and electronic filings are managed under strict federal work-product and legal ethics canons.
          </p>
        </div>
      </section>

      {/* Legal Body Content */}
      <section className="section-padding">
        <div className="container">
          <div className="legal-layout">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="legal-sidebar">
              <h3 className="legal-nav-title">Privacy Sections</h3>
              <ul className="legal-nav-list">
                <li><a href="#scope" className="active">1. Scope &amp; Professional Duty</a></li>
                <li><a href="#collection">2. Information We Collect</a></li>
                <li><a href="#privilege">3. Prospective Client Privilege</a></li>
                <li><a href="#security">4. Data Encryption &amp; Security</a></li>
                <li><a href="#sharing">5. Non-Disclosure &amp; Third Parties</a></li>
                <li><a href="#telemetry">6. Cookies &amp; Tracking Policy</a></li>
                <li><a href="#retention">7. Record Retention &amp; Archival</a></li>
                <li><a href="#contact-dpo">8. Compliance &amp; Legal Inquiries</a></li>
              </ul>
            </aside>

            {/* Content Card */}
            <div className="legal-content-card">
              
              <div className="legal-meta-bar">
                <div>
                  <strong>Effective Date:</strong> January 1, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> November 2026
                </div>
                <div className="legal-badge">ABA &amp; State Bar Compliant</div>
              </div>

              {/* Section 1 */}
              <article className="legal-section" id="scope">
                <h2 className="legal-section-title">1. Scope &amp; Professional Fiduciary Duty</h2>
                <p>
                  Atlantic Trial Attorneys LLP (“the Firm,” “we,” “us,” or “our”) is a boutique catastrophic trial and appellate law practice organized under the laws of the State of Florida, the District of Columbia, and the State of New York.
                </p>
                <p>
                  This Privacy &amp; Client Confidentiality Policy applies to all interactions with our digital platforms, including website evaluations, intake wizard submissions, telephone inquiries, document transmissions, and client portal engagements. We hold client privacy to the paramount standard dictated by Rule 4-1.6 of the Rules Regulating The Florida Bar, Rule 1.6 of the District of Columbia Rules of Professional Conduct, and New York RPC Rule 1.6.
                </p>
              </article>

              {/* Section 2 */}
              <article className="legal-section" id="collection">
                <h2 className="legal-section-title">2. Information We Collect</h2>
                <p>
                  We collect information solely to assess the viability of prospective legal claims, conduct conflict-of-interest checks, and prosecute client litigation:
                </p>
                <ul>
                  <li><strong>Contact Identifiers:</strong> Full legal name, professional organization, email address, direct telephone number, and physical mailing address.</li>
                  <li><strong>Litigation Intake Details:</strong> Date and jurisdiction of incident, opposing corporate entities, case narrative, injury documentation, police/NTSB reports, and court docket numbers.</li>
                  <li><strong>Referring Attorney Information:</strong> Originating law firm credentials, bar license numbers, and requested fee division structures.</li>
                  <li><strong>Technical Telemetry:</strong> Anonymized server logs, browser type, and operating system metrics necessary to ensure web platform uptime and cybersecurity defenses.</li>
                </ul>
              </article>

              {/* Section 3 */}
              <article className="legal-section" id="privilege">
                <h2 className="legal-section-title">3. Prospective Client Privilege Safeguards</h2>
                <p>
                  When you submit a confidential case evaluation via this website, you are transmitting information for the sole purpose of seeking legal representation from Atlantic Trial Attorneys LLP.
                </p>
                <div className="legal-callout-box">
                  <p>
                    <strong>Prospective Client Protection (Rule 4-1.18):</strong> Even when no formal attorney-client relationship is ultimately consummated, all preliminary facts, incident descriptions, and liability documents transmitted to our firm remain strictly protected by the duty of confidentiality under Rule 4-1.18 and the common law Attorney-Client Privilege.
                  </p>
                </div>
                <p>
                  We do not represent adverse parties using confidential information acquired during preliminary intake, and our litigation docket software automatically logs incoming submissions to enforce immediate conflict-of-interest screens.
                </p>
              </article>

              {/* Section 4 */}
              <article className="legal-section" id="security">
                <h2 className="legal-section-title">4. 256-Bit Data Encryption &amp; Infrastructure Security</h2>
                <p>
                  We employ military-grade technical, physical, and administrative defenses designed specifically for high-stakes litigation dockets:
                </p>
                <ul>
                  <li><strong>In-Transit Encryption:</strong> All website traffic is forced over HTTPS with modern TLS 1.3 cryptographic suites and 256-bit AES encryption.</li>
                  <li><strong>At-Rest Storage:</strong> Case materials uploaded to our secure servers are stored with dedicated hardware-level encryption keys conforming to NIST SP 800-53 standards.</li>
                  <li><strong>Restricted Senior Partner Access:</strong> Preliminary intake files are routed exclusively to named trial partners and dedicated intake counsel; unauthorized clerical personnel cannot view prospective case evaluations.</li>
                </ul>
              </article>

              {/* Section 5 */}
              <article className="legal-section" id="sharing">
                <h2 className="legal-section-title">5. Non-Disclosure &amp; Third-Party Non-Sale Guarantee</h2>
                <p>
                  Atlantic Trial Attorneys operates exclusively as a premier courtroom advocacy practice. We strictly uphold the following non-negotiable guarantees:
                </p>
                <ul>
                  <li><strong>Never Sold or Marketed:</strong> We do not sell, rent, monetize, or barter client or prospective client data to lead generation brokers, marketing agencies, or data aggregators.</li>
                  <li><strong>Litigation Expert Disclosures:</strong> Information is only shared with retained forensic investigators, engineering experts, or medical specialists after a formal retainer agreement is executed and a non-disclosure protocol is secured.</li>
                  <li><strong>Compelled Judicial Process:</strong> In the extraordinary event of a subpoena or court order targeting intake records, we aggressively assert all applicable privileges, work-product protections, and constitutional defenses to the fullest extent permitted by law.</li>
                </ul>
              </article>

              {/* Section 6 */}
              <article className="legal-section" id="telemetry">
                <h2 className="legal-section-title">6. Cookies &amp; Tracking Policy</h2>
                <p>
                  Our website does not utilize cross-site tracking cookies, third-party advertising pixels (such as Meta Pixel or Google Remarketing), or biometric surveillance mechanisms. We use strictly necessary session cookies required for intake form validation and CSRF cybersecurity protection.
                </p>
              </article>

              {/* Section 7 */}
              <article className="legal-section" id="retention">
                <h2 className="legal-section-title">7. Record Retention &amp; Archival</h2>
                <p>
                  Preliminary evaluations for matters our firm declines to accept are retained only for the duration required to maintain accurate ethical conflict records (customarily 5 years pursuant to Bar licensing canons), after which they are permanently expunged via secure cryptographic deletion.
                </p>
              </article>

              {/* Section 8 */}
              <article className="legal-section" id="contact-dpo">
                <h2 className="legal-section-title">8. Compliance &amp; Legal Inquiries</h2>
                <p>
                  For questions concerning this Privacy Policy, your confidential case file, or to request the destruction of preliminary prospective client submissions, contact our Managing Counsel:
                </p>
                <div className="legal-callout-box">
                  <p>
                    <strong>Atlantic Trial Attorneys LLP</strong><br />
                    Attention: Ethics &amp; Compliance Officer<br />
                    Brickell City Centre, Suite 3800 • Miami, FL 33131<br />
                    Direct Legal Line: <a href="tel:8008402852" style={{ color: 'var(--secondary)', fontWeight: 700 }}>(800) 840-ATLA</a><br />
                    Secure Compliance Email: <a href="mailto:privacy@atlantictrial.com" style={{ color: 'var(--secondary)', fontWeight: 700 }}>privacy@atlantictrial.com</a>
                  </p>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
