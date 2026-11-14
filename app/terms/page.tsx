import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import LegalNavHandler from '@/components/LegalNavHandler';

export const metadata: Metadata = {
  title: 'Terms of Representation & Conditions | Atlantic Trial Attorneys',
  description: 'Terms governing preliminary case evaluations, formation of attorney-client relationship, past results disclaimers, fee structures, and Florida governing law.',
};

export default function TermsPage() {
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
            <span style={{ color: 'var(--accent)' }}>Terms of Representation</span>
          </div>
          <h1 className="page-banner-title">Terms of Representation &amp; Conditions</h1>
          <p className="page-banner-desc">
            Conditions governing online interactions, the formation of legal representation, prospective client duties, and court-admitted jurisdiction standards across our trial corridors.
          </p>
        </div>
      </section>

      {/* Legal Body Content */}
      <section className="section-padding">
        <div className="container">
          <div className="legal-layout">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="legal-sidebar">
              <h3 className="legal-nav-title">Terms Outline</h3>
              <ul className="legal-nav-list">
                <li><a href="#formation" className="active">1. Attorney-Client Formation</a></li>
                <li><a href="#prospective">2. Preliminary Inquiries &amp; Duties</a></li>
                <li><a href="#advertising">3. Attorney Advertising Notices</a></li>
                <li><a href="#disclaimers">4. Verdicts &amp; Results Disclaimers</a></li>
                <li><a href="#fee-structures">5. Fee &amp; Retainer Protocol</a></li>
                <li><a href="#intellectual">6. Intellectual Property &amp; Briefs</a></li>
                <li><a href="#limitations">7. Limitations of Liability</a></li>
                <li><a href="#governing-law">8. Governing Law &amp; Dispute Forum</a></li>
              </ul>
            </aside>

            {/* Content Card */}
            <div className="legal-content-card">
              
              <div className="legal-meta-bar">
                <div>
                  <strong>Effective Date:</strong> January 1, 2026 &nbsp;|&nbsp; <strong>Jurisdiction:</strong> FL • DC • NY
                </div>
                <div className="legal-badge">Official Firm Terms</div>
              </div>

              {/* Section 1 */}
              <article className="legal-section" id="formation">
                <h2 className="legal-section-title">1. Formation of the Attorney-Client Relationship</h2>
                <p>
                  Please read these Terms of Representation carefully before accessing or using this website. By accessing or submitting any inquiry through Atlantic Trial Attorneys LLP (“the Firm”), you acknowledge and agree to be bound by these provisions.
                </p>
                <div className="legal-callout-box">
                  <p>
                    <strong>NO AUTOMATIC RETAINER:</strong> The transmission of an inquiry, completion of the Case Intake Wizard, communication via telephone hotline, or receipt of informational materials from this site <em>does not establish an attorney-client relationship</em>. An attorney-client relationship is formed exclusively through an explicit, countersigned written Legal Representation Agreement or Retainer Engagement Letter executed by an authorized Named Partner of Atlantic Trial Attorneys LLP.
                  </p>
                </div>
                <p>
                  Until such an agreement is formalized in writing, you should not act or refrain from acting on the basis of any content contained on this site, and you remain solely responsible for monitoring and meeting any applicable statute of limitations or court filing deadlines.
                </p>
              </article>

              {/* Section 2 */}
              <article className="legal-section" id="prospective">
                <h2 className="legal-section-title">2. Preliminary Inquiries &amp; Prospective Client Duties</h2>
                <p>
                  Although general website use does not create a formal attorney-client relationship, Atlantic Trial Attorneys LLP honors the strict fiduciary duties owed to prospective clients under Rule 4-1.18 of the Rules Regulating The Florida Bar and Model Rule 1.18 of the American Bar Association.
                </p>
                <p>
                  All confidential factual disclosures, accident details, medical assessments, or corporate dispute summaries transmitted for the purpose of seeking legal counsel are safeguarded under strict prospective client confidentiality. We conduct comprehensive conflict checks prior to reviewing confidential materials to prevent any ethical compromise.
                </p>
              </article>

              {/* Section 3 */}
              <article className="legal-section" id="advertising">
                <h2 className="legal-section-title">3. Attorney Advertising &amp; Jurisdictional Authority</h2>
                <p>
                  This website contains Attorney Advertising. The hiring of a catastrophic trial or federal appellate lawyer is an important decision that should not be based solely upon advertisements or website descriptions.
                </p>
                <ul>
                  <li><strong>Bar Admissions:</strong> Partners Robert M. Vance, Elena Rostova, and Marcus J. Sterling are licensed members in good standing of the Florida Bar, the District of Columbia Bar, and/or the New York State Bar.</li>
                  <li><strong>Federal Court Practice:</strong> Our senior trial partners are admitted to practice before the Supreme Court of the United States, the U.S. Courts of Appeals for the First, Second, Third, Fifth, Ninth, and Eleventh Circuits, and numerous U.S. District Courts.</li>
                  <li><strong>Specialized Certifications:</strong> Unless expressly indicated in an individual attorney dossier, attorneys are not certified as specialists by any state board of legal specialization. Fellowship in the American College of Trial Lawyers (ACTL) or rankings in Chambers USA reflect rigorous peer-review and judicial evaluations.</li>
                </ul>
              </article>

              {/* Section 4 */}
              <article className="legal-section" id="disclaimers">
                <h2 className="legal-section-title">4. Past Verdicts, Settlements &amp; Track Record Disclaimer</h2>
                <p>
                  Throughout this site, references are made to landmark jury verdicts, arbitration awards, and settlements (including $42.5M, $28.2M, $18.7M, and $14.1M recoveries). These descriptions are provided exclusively to illustrate the firm’s federal trial experience and docket capacity.
                </p>
                <div className="legal-callout-box">
                  <p>
                    <strong>PAST RESULTS DISCLAIMER:</strong> Prior case results, verdicts, or multi-million dollar settlements do not guarantee, warranty, or predict a similar outcome in any current or future legal matter. Every legal dispute involves distinct liability facts, witness credibility, applicable state and federal statutes, and jurisdictional dynamics.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article className="legal-section" id="fee-structures">
                <h2 className="legal-section-title">5. Fee Agreements &amp; Retainer Protocols</h2>
                <p>
                  Atlantic Trial Attorneys provides fee clarity across all litigation disciplines:
                </p>
                <ul>
                  <li><strong>Contingency Fee Representation:</strong> For catastrophic personal injury, commercial aviation mass disasters, and wrongful death, legal fees are contingent upon obtaining a monetary recovery through verdict or settlement. If no recovery is achieved, the client owes zero attorney fees. Case costs and litigation expenses are computed in compliance with Florida Bar Rule 4-1.5(f).</li>
                  <li><strong>Federal Appellate &amp; Commercial Retainers:</strong> Appeals before the U.S. Circuit Courts of Appeals and SCOTUS are structured via predictable fixed-phased retainers or hybrid risk-sharing agreements with full transparent budgets.</li>
                  <li><strong>Referring Co-Counsel Divisions:</strong> All attorney referral fee sharing conforms strictly to state ethics rules, requiring advance written client disclosure and formal consent.</li>
                </ul>
              </article>

              {/* Section 6 */}
              <article className="legal-section" id="intellectual">
                <h2 className="legal-section-title">6. Intellectual Property &amp; Brief Work-Product</h2>
                <p>
                  All text, graphic crests, architectural diagrams, trial protocol flowcharts, and scholarly legal commentaries published on this site are the exclusive intellectual property of Atlantic Trial Attorneys LLP and protected under U.S. Copyright law. Unauthorized reproduction, web scraping, or commercial exploitation is strictly prohibited without prior written consent from our Managing Counsel.
                </p>
              </article>

              {/* Section 7 */}
              <article className="legal-section" id="limitations">
                <h2 className="legal-section-title">7. Limitations of Liability &amp; Platform Warranty</h2>
                <p>
                  This website and all published information are provided on an “as-is” basis without express or implied warranty of any kind. Atlantic Trial Attorneys LLP expressly disclaims all liability for actions taken or not taken based on any content of this site. Under no circumstances shall the Firm be liable for indirect, incidental, or consequential damages resulting from digital platform interruptions.
                </p>
              </article>

              {/* Section 8 */}
              <article className="legal-section" id="governing-law">
                <h2 className="legal-section-title">8. Governing Law &amp; Dispute Resolution</h2>
                <p>
                  Any disputes arising out of the access or use of this website, its intake forms, or preliminary communications shall be governed by and construed in accordance with the substantive laws of the State of Florida, without regard to choice of law principles.
                </p>
                <div className="legal-callout-box">
                  <p>
                    <strong>Exclusive Jurisdiction:</strong> You irrevocably agree that the exclusive forum for any judicial proceeding arising from the use of this website shall be the state or federal courts situated in Miami-Dade County, Florida.
                  </p>
                </div>
                <p style={{ marginTop: '20px' }}>
                  For inquiries regarding these Terms of Representation, contact:<br />
                  <strong>Atlantic Trial Attorneys LLP</strong><br />
                  Managing Partner &amp; General Counsel<br />
                  Brickell City Centre, Suite 3800 • Miami, FL 33131<br />
                  Direct Legal Line: <a href="tel:8008402852" style={{ color: 'var(--secondary)', fontWeight: 700 }}>(800) 840-ATLA</a>
                </p>
              </article>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
