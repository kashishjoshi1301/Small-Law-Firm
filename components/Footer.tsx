import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Tier 1: Brand & Credibility Strip */}
        <div className="footer-top-row">
          <div className="footer-brand-box">
            <div className="brand-block" style={{ marginBottom: '14px' }}>
              <img
                src="/logo.svg"
                alt="Atlantic Trial Attorneys Crest"
                className="brand-emblem"
                width={46}
                height={46}
              />
              <div className="brand-text">
                <span className="brand-name">Atlantic Trial Attorneys</span>
                <span className="brand-subtitle">Catastrophic Trial &amp; Appellate Counsel</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Boutique federal trial and appellate counsel handling high-stakes catastrophic injury, mass aviation disasters, bet-the-company commercial litigation, and Supreme Court appeals nationwide.
            </p>
          </div>

          <div className="footer-badges-box">
            <div className="footer-trust-pill">
              <span>AV Preeminent® 5.0/5.0 • ACTL Fellow • Chambers USA Band 1</span>
            </div>
            <div className="footer-hotline-callout">
              <span>Emergency 24/7 Counsel Hotline: </span>
              <a href="tel:8008402852">(800) 840-ATLA</a>
            </div>
          </div>
        </div>

        {/* Tier 2: National Offices Strip (Across Full Width) */}
        <div className="footer-offices-strip">
          <div className="footer-strip-header">
            <span className="footer-strip-title">National Trial &amp; Appellate Corridors</span>
            <span className="footer-strip-sub">Direct access to Senior Partners in key federal judicial districts</span>
          </div>
          <div className="footer-offices-grid">
            <div className="footer-office-card">
              <div className="office-tag">National Headquarters</div>
              <div className="office-city">Miami, Florida</div>
              <div className="office-address">Brickell City Centre, Suite 3800 • Miami, FL 33131</div>
              <a href="tel:3055552852" className="office-phone-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (305) 555-ATLA
              </a>
            </div>

            <div className="footer-office-card">
              <div className="office-tag">Appellate &amp; Federal</div>
              <div className="office-city">Washington, D.C.</div>
              <div className="office-address">1775 K Street NW, Suite 900 • Washington, D.C. 20006</div>
              <a href="tel:2025552852" className="office-phone-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (202) 555-ATLA
              </a>
            </div>

            <div className="footer-office-card">
              <div className="office-tag">Commercial &amp; Financial</div>
              <div className="office-city">New York, New York</div>
              <div className="office-address">Rockefeller Center, 42nd Fl. • New York, NY 10111</div>
              <a href="tel:2125552852" className="office-phone-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (212) 555-ATLA
              </a>
            </div>
          </div>
        </div>

        {/* Tier 3: Symmetrical Links Row (Navigation + Disciplines) */}
        <div className="footer-links-row">
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/practices">Practice Disciplines</Link></li>
              <li><Link href="/verdicts">Landmark Verdicts ($680M+)</Link></li>
              <li><Link href="/attorneys">Senior Counsel Profiles</Link></li>
              <li><Link href="/fees">Fee Transparency Policy</Link></li>
              <li><Link href="/contact">Case Evaluation Intake</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Primary Disciplines</h4>
            <ul className="footer-links">
              <li><Link href="/practices">Aviation &amp; Mass Disasters</Link></li>
              <li><Link href="/practices">Federal &amp; State Appeals</Link></li>
              <li><Link href="/practices">Commercial Trucking Catastrophes</Link></li>
              <li><Link href="/practices">Commercial &amp; Shareholder Trials</Link></li>
              <li><Link href="/practices">White-Collar &amp; Government Defense</Link></li>
              <li><Link href="/practices">Maritime &amp; Admiralty Wrongful Death</Link></li>
            </ul>
          </div>
        </div>

        {/* Tier 4: Regulatory Disclaimer & Legal Bottom */}
        <div className="footer-disclaimer-box">
          <p>
            <strong>ATTORNEY ADVERTISING NOTICE:</strong> The information on this website is for general informational purposes only and does not constitute formal legal advice. Viewing this site or submitting an evaluation does not create an attorney-client relationship. Prior results do not guarantee a similar outcome. Every legal matter is unique and subject to court rules and evidence. Atlantic Trial Attorneys LLP practices in federal and state courts across the United States.
          </p>
          <div className="footer-bottom-row">
            <div>
              &copy; 2026 Atlantic Trial Attorneys LLP. Designed strictly under Brand Standards.
            </div>
            <div className="footer-legal-links">
              <Link href="/fees">Privacy Policy</Link>
              <Link href="/fees">Terms of Representation</Link>
              <Link href="/contact">Client Portal Access</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
