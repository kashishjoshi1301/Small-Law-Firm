'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ATTORNEY_DATA, PRACTICE_DATA, CASE_RESULTS } from '@/lib/data';
import Modal from '@/components/Modal';

export default function HomePage() {
  const [activeAttorneyModal, setActiveAttorneyModal] = useState<string | null>(null);
  const [activePracticeModal, setActivePracticeModal] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Quick evaluation card form state
  const [heroFormSubmitted, setHeroFormSubmitted] = useState(false);
  const [heroFormName, setHeroFormName] = useState('');
  const [heroFormPhone, setHeroFormPhone] = useState('');
  const [heroFormMatter, setHeroFormMatter] = useState('aviation');

  const faqs = [
    {
      q: "What types of catastrophic matters does Atlantic Trial Attorneys handle?",
      a: "We concentrate exclusively on high-stakes litigation with significant financial or corporate exposure: commercial aviation mass casualty, interstate trucking fatalities, multi-district litigation (MDL), bet-the-company commercial shareholder disputes, and federal appeals before U.S. Circuit Courts and the Supreme Court of the United States."
    },
    {
      q: "How does the $0 Upfront Contingency Fee model work?",
      a: "In catastrophic injury, wrongful death, and aviation matters, we assume 100% of the litigation and financial risk. We front all trial expenses, expert witness honorariums, accident reconstruction, and flight data forensic costs. If we do not secure a winning financial verdict or settlement, you owe us nothing."
    },
    {
      q: "Will my matter be delegated to associate attorneys?",
      a: "Never. Unlike volume settlement mills and mega-firms that intake cases and hand them off to first-year associates, every case at Atlantic Trial Attorneys is prepared and personally tried by named Senior Partners who have decades of courtroom pedigree."
    },
    {
      q: "Do you collaborate with or accept referrals from other trial lawyers?",
      a: "Yes. Over 60% of our catastrophic trial and appellate dockets are referred by attorneys nationwide who need our courtroom war-chest, expert witness bench, or federal appellate counsel. We honor client relationships and share co-counsel fees in full compliance with applicable State Bar rules."
    },
    {
      q: "How quickly can senior counsel review our court record or impending deadline?",
      a: "Our rapid-response team reviews records within two business hours under strict attorney-client privilege. For impending trial dates, statutes of limitations, or emergency notices of appeal within 14 days, contact our 24/7 hotline at (800) 840-ATLA immediately."
    }
  ];

  const currentAttorney = activeAttorneyModal ? ATTORNEY_DATA[activeAttorneyModal] : null;
  const currentPractice = activePracticeModal ? PRACTICE_DATA[activePracticeModal] : null;

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="hero-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="hero-pill-part">Nationally Recognized Trial Advocates</span>
              <span className="hero-pill-dot">•</span>
              <span className="hero-pill-part">AV Preeminent® 5.0/5.0</span>
            </div>

            <h1 className="hero-title">
              Trial-Tested Power.<br />
              <span className="highlight">Uncompromising Advocacy.</span>
            </h1>

            <p className="hero-subhead">
              When catastrophic air disasters, commercial betrayal, or landmark federal appeals demand relentless courtroom mastery, Fortune 500 executives, referring trial counsel, and families nationwide turn to Atlantic Trial Attorneys.
            </p>

            <div className="hero-cta-row">
              <Link href="/contact" className="btn btn-primary">
                Request Confidential Partner Review
              </Link>
              <Link href="/verdicts" className="btn btn-outline-light">
                Explore $680M+ Verdicts
              </Link>
            </div>

            <div className="hero-trust-bar">
              <div className="hero-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Zero Junior Delegation</span>
              </div>
              <div className="hero-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Contingency &amp; Flat Fees</span>
              </div>
              <div className="hero-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Direct Partner Access</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Direct Partner Case Evaluation Card */}
          <div className="hero-intake-card">
            <div className="intake-card-header">
              <div className="intake-badge">Priority Expedited Intake</div>
              <h3 className="intake-title">Direct Partner Case Review</h3>
              <p className="intake-sub">Direct confidential review by a Named Partner within 2 business hours.</p>
            </div>

            {heroFormSubmitted ? (
              <div style={{ textAlign: 'center', padding: '24px 8px' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(40, 96, 92, 0.1)', color: 'var(--secondary)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>Review Request Received</h4>
                <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '16px' }}>
                  Thank you, <strong>{heroFormName}</strong>. Our Senior Partner on duty has received your priority file.
                </p>
                <div style={{ background: 'var(--bg-page)', padding: '10px 14px', borderRadius: '6px', fontSize: '0.82rem', color: 'var(--secondary)', fontWeight: 600 }}>
                  Callback Target: Within 2 Hours
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (heroFormName && heroFormPhone) setHeroFormSubmitted(true); }}>
                <div className="form-group">
                  <label className="form-label">Full Legal Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. David Vance, Esq. or Sarah Jenkins"
                    required
                    value={heroFormName}
                    onChange={(e) => setHeroFormName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Direct Contact Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="(555) 000-0000"
                    required
                    value={heroFormPhone}
                    onChange={(e) => setHeroFormPhone(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Nature of Litigation Matter</label>
                  <select
                    className="form-select"
                    value={heroFormMatter}
                    onChange={(e) => setHeroFormMatter(e.target.value)}
                  >
                    <option value="aviation">Commercial Aviation Disaster</option>
                    <option value="trucking">Commercial Trucking Collision</option>
                    <option value="appellate">Federal / State Court Appeal</option>
                    <option value="commercial">Commercial Dispute &amp; Litigation</option>
                    <option value="whitecollar">White-Collar &amp; DOJ Defense</option>
                    <option value="maritime">Maritime &amp; Admiralty Claim</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                  Request Confidential Case Review
                </button>

                <div className="intake-security-note">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>256-Bit Encrypted • Strict Attorney-Client Privilege</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Credibility Metrics Bar */}
      <section className="credibility-strip">
        <div className="container">
          <div className="credibility-grid">
            <div className="credibility-item">
              <div className="credibility-number">$680M+</div>
              <div className="credibility-label">Verdicts, Settlements &amp; Arbitrations</div>
            </div>
            <div className="credibility-item">
              <div className="credibility-number">34+</div>
              <div className="credibility-label">Years of Federal Courtroom Advocacy</div>
            </div>
            <div className="credibility-item">
              <div className="credibility-number">16</div>
              <div className="credibility-label">Briefs in U.S. Supreme Court</div>
            </div>
            <div className="credibility-item">
              <div className="credibility-number">100%</div>
              <div className="credibility-label">Senior Partner Case Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Box with High-End Illustration */}
      <section className="section-padding" style={{ paddingBottom: '20px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Courtroom Authority</span>
            <h2 className="section-title">Built for the Most Demanding Legal Battles</h2>
            <p className="section-desc">
              From federal multi-district litigation to oral arguments at the U.S. Supreme Court, Atlantic Trial Attorneys brings relentless preparation, financial war-chest capital, and seasoned trial advocacy.
            </p>
          </div>

          <div className="showcase-illustration-box">
            <img src="/images/courtroom-hero.jpg" alt="United States Federal District Courtroom &amp; Judicial Bench" className="showcase-img" />
            <div className="showcase-overlay-bar">
              <span className="showcase-overlay-text">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                Federal Courtroom &amp; Supreme Court Practice Docket • Admitted Nationwide
              </span>
              <span className="showcase-overlay-tag">Federal Trial Authority</span>
            </div>
          </div>
        </div>
      </section>

      {/* Headline Landmark Verdicts Showcase ($680M+ Track Record) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Proven Results</span>
            <h2 className="section-title">Headline Landmark Verdicts &amp; Settlements</h2>
            <p className="section-desc">
              When opponents realize Atlantic Trial Attorneys has accepted a case, settlement dynamics fundamentally shift.
            </p>
          </div>

          <div className="results-cards-grid">
            {CASE_RESULTS.slice(0, 4).map((r) => (
              <div key={r.id} className="result-card">
                <div className="result-amount">
                  <span>{r.amount}</span>
                  <span className="result-category-badge">{r.categoryLabel}</span>
                </div>
                <h3 className="result-title">{r.title}</h3>
                <p className="result-summary">{r.summary}</p>
                <div className="result-meta-row">
                  <span>Lead Counsel: <strong style={{ color: 'var(--primary)' }}>{r.lead}</strong></span>
                  <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>{r.mandate}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta-wrap">
            <Link href="/verdicts" className="btn btn-primary">
              View Complete $680M+ Case Results Record
            </Link>
          </div>
        </div>
      </section>

      {/* Core Practice Disciplines Section */}
      <section className="section-padding" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Practice Areas</span>
            <h2 className="section-title">Catastrophic Trial Disciplines</h2>
            <p className="section-desc">
              We concentrate exclusively in fields where courtroom mastery, technical engineering acumen, and federal appellate foresight determine life-changing outcomes.
            </p>
          </div>

          <div className="cards-grid-3">
            {Object.values(PRACTICE_DATA).map((p) => (
              <div key={p.id} className="feature-card">
                <div className="card-icon-box" style={{ background: 'rgba(40, 96, 92, 0.1)', color: 'var(--secondary)' }}>
                  <img src={p.icon} alt={p.title} width={28} height={28} />
                </div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.summary}</p>
                <ul className="card-features">
                  {p.deliverables.slice(0, 2).map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                  <li>Benchmark: {p.benchmark}</li>
                </ul>
                <button
                  className="btn btn-outline-dark"
                  style={{ marginTop: 'auto' }}
                  onClick={() => setActivePracticeModal(p.id)}
                >
                  View Practice Protocol
                </button>
              </div>
            ))}
          </div>

          <div className="section-cta-wrap">
            <Link href="/practices" className="btn btn-outline-dark">
              Explore Practice Disciplines &amp; Case Criteria
            </Link>
          </div>
        </div>
      </section>

      {/* Senior Trial Partners Spotlight */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Senior Advocacy</span>
            <h2 className="section-title">The Partners Who Stand Beside You in Court</h2>
            <p className="section-desc">
              Former federal judicial clerks, Ivy League honors graduates, and Fellows of the American College of Trial Lawyers. We never assign your case to associate trainees.
            </p>
          </div>

          <div className="cards-grid-3">
            {Object.values(ATTORNEY_DATA).map((a) => (
              <div key={a.id} className="attorney-card">
                <div className="attorney-portrait-wrap">
                  <img src={a.image} alt={a.name} className="attorney-portrait-img" />
                  <span className="attorney-role-badge">{a.role}</span>
                </div>
                <div className="attorney-card-body">
                  <h3 className="attorney-name">{a.name}</h3>
                  <div className="attorney-title">{a.title}</div>
                  <p className="attorney-bio-short">{a.bio}</p>
                  <div className="attorney-meta-list">
                    <div className="attorney-meta-item">
                      <span className="meta-label">Education:</span>
                      <span className="meta-val">{a.education}</span>
                    </div>
                    <div className="attorney-meta-item">
                      <span className="meta-label">Judicial Clerkship:</span>
                      <span className="meta-val">{a.clerkship}</span>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline-dark"
                    style={{ width: '100%', marginTop: 'auto' }}
                    onClick={() => setActiveAttorneyModal(a.id)}
                  >
                    View Complete Dossier &amp; Admissions
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta-wrap">
            <Link href="/attorneys" className="btn btn-primary">
              Meet Senior Partners &amp; Scholarly Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* The 4-Pillar Trial Protocol Flow */}
      <section className="section-padding" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">The Courtroom Advantage</span>
            <h2 className="section-title">The Anatomy of a Winning Jury Verdict</h2>
            <p className="section-desc">
              How Atlantic Trial Attorneys prepares for courtroom victory from the hour we are retained.
            </p>
          </div>

          <div className="protocol-grid">
            <div className="protocol-card">
              <div className="protocol-num">01</div>
              <h3 className="protocol-title">24-Hour Forensic Evidence Lockdown</h3>
              <p className="protocol-desc">
                Immediate dispatch of rapid-response investigators, securing aircraft flight data recorders (FDR), commercial truck electronic control modules (ECM), and issuing preservation subpoenas before evidence is destroyed.
              </p>
            </div>

            <div className="protocol-card">
              <div className="protocol-num">02</div>
              <h3 className="protocol-title">Mock Juries &amp; High-Impact Visuals</h3>
              <p className="protocol-desc">
                We test every opening statement, liability theory, and damages calculation before simulated community panels. We produce 3D accident reconstruction animations that juries understand in minutes.
              </p>
            </div>

            <div className="protocol-card">
              <div className="protocol-num">03</div>
              <h3 className="protocol-title">Elite Expert Witness War-Chest</h3>
              <p className="protocol-desc">
                We retain world-renowned aeronautical engineers, life-care planners, forensic toxicologists, and forensic accountants. We invest whatever resources are required to out-prepare multi-billion dollar adversaries.
              </p>
            </div>

            <div className="protocol-card">
              <div className="protocol-num">04</div>
              <h3 className="protocol-title">Embedded Appellate Bench Strength</h3>
              <p className="protocol-desc">
                Former Supreme Court and federal circuit clerks sit beside our trial counsel in court to draft dispositive motions, preserve objections, and ensure verdicts survive all post-trial challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix & Firm Advantage (Responsive Cards on Mobile) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">The Atlantic Difference</span>
            <h2 className="section-title">Why Demanding Clients Choose Atlantic Trial Attorneys</h2>
            <p className="section-desc">
              How our boutique trial-ready model outperforms high-volume settlement mills and bloated mega-firms.
            </p>
          </div>

          <div className="matrix-scroll-wrapper">
            <div className="comparison-matrix">
              <div className="matrix-header">
                <div className="matrix-header-cell standard">Litigation Dimension</div>
                <div className="matrix-header-cell standard">Mega-Firm / Settlement Mills</div>
                <div className="matrix-header-cell featured">Atlantic Trial Attorneys</div>
              </div>

              {[
                {
                  dim: "Counsel Handling Depositions & Trial",
                  competitor: "First-to-third year junior associates",
                  our: "Senior Trial Partners with 20+ years pedigree"
                },
                {
                  dim: "Willingness to Take Cases to Verdict",
                  competitor: "Settles at discount before courtroom phase",
                  our: "Trial-ready with full mock juries & focus groups"
                },
                {
                  dim: "Billing Transparency",
                  competitor: "Inflated billable hours & opaque retainers",
                  our: "100% Contingency ($0 Upfront) or Flat Phased Retainers"
                },
                {
                  dim: "Direct Client Access",
                  competitor: "Filtered through paralegals and case managers",
                  our: "Direct mobile and calendar access to lead counsel"
                }
              ].map((row, i) => (
                <div key={i} className="matrix-row">
                  <div className="matrix-cell feature-name">{row.dim}</div>
                  <div className="matrix-cell standard">{row.competitor}</div>
                  <div className="matrix-cell featured">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{row.our}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Peer Endorsements */}
      <section className="section-padding" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Client &amp; Co-Counsel Recognition</span>
            <h2 className="section-title">Endorsements from the Trial Bar &amp; Clients</h2>
            <p className="section-desc">
              Trusted by corporate leaders, catastrophic injury victims, and esteemed referring trial lawyers across America.
            </p>
          </div>

          <div className="cards-grid-3">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "When our family lost our brother in a commercial air disaster, two international mega-firms wanted us to sign quick low-dollar settlement releases. Robert Vance took over, dismantled the airline's maintenance records, and obtained a settlement that permanently provides for my nieces."
              </p>
              <div className="testimonial-client">
                <div>
                  <div className="client-name">Marcus Thornton</div>
                  <div className="client-tag">Commercial Aviation Disaster Client</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "As referring counsel with a catastrophic trucking case against a $4B logistics broker, I needed a trial team with immense capital and federal trial pedigree. Robert and Marcus tried the case to a unanimous $28.2M verdict. Their co-counsel ethics and trial preparation are the finest I have witnessed in 35 years of practice."
              </p>
              <div className="testimonial-client">
                <div>
                  <div className="client-name">Arthur Pendelton, Esq.</div>
                  <div className="client-tag">Referring Trial Attorney • Chicago, IL</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "Elena Rostova's appellate oral argument before the 11th Circuit was a masterclass in federal statutory interpretation. She overturned an erroneous preliminary injunction that would have extinguished our 400-employee biotechnology enterprise. Simply unmatched appellate bench strength."
              </p>
              <div className="testimonial-client">
                <div>
                  <div className="client-name">Dr. Claire Hennessy, CEO</div>
                  <div className="client-tag">BioDiagnostics Global Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Frequently Asked Questions</span>
            <h2 className="section-title">Questions Referring Counsel &amp; Clients Ask</h2>
            <p className="section-desc">
              Answers regarding our contingency fee structure, federal trial protocol, and emergency intake review.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((f, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  >
                    <span>{f.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Time-Sensitive Call To Action Banner */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-badge" style={{ background: 'rgba(189, 150, 126, 0.2)', color: 'var(--accent)' }}>
            Time-Sensitive Court Deadlines
          </span>
          <h2 style={{ fontSize: '2.6rem', color: '#FFFFFF', margin: '16px 0 20px' }}>
            Facing an Impending Trial or Notice of Appeal?
          </h2>
          <p style={{ color: '#D1DEDB', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '36px' }}>
            Our rapid-response trial and appellate team reviews case records within two business hours under strict privilege.
          </p>
          <div className="cta-banner-actions">
            <Link href="/contact" className="btn btn-primary">
              Start Confidential Evaluation
            </Link>
            <a href="tel:8008402852" className="btn btn-outline-light">
              Call 24/7 Hotline: (800) 840-ATLA
            </a>
          </div>
        </div>
      </section>

      {/* Attorney Dossier Modal */}
      <Modal
        isOpen={!!activeAttorneyModal}
        onClose={() => setActiveAttorneyModal(null)}
        title="Senior Partner Dossier &amp; Credentials"
      >
        {currentAttorney && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
              <img
                src={currentAttorney.image}
                alt={currentAttorney.name}
                style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 10%', border: '3px solid var(--accent)', flexShrink: 0 }}
              />
              <div>
                <span className="section-badge" style={{ marginBottom: '6px' }}>{currentAttorney.role}</span>
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: '4px 0 0 0' }}>{currentAttorney.name}</h4>
              </div>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '20px' }}>{currentAttorney.bio}</p>

            <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '18px', marginBottom: '20px' }}>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Education</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>{currentAttorney.education}</span>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Judicial Clerkship</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{currentAttorney.clerkship}</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Bar &amp; Court Admissions</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--secondary)' }}>{currentAttorney.admissions}</span>
              </div>
            </div>

            <h5 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '12px' }}>Landmark Matters &amp; Recognition</h5>
            <ul style={{ listStyle: 'none', marginBottom: '24px', padding: 0 }}>
              {currentAttorney.achievements.map((ach, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ marginTop: '3px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>

            <div style={{ textAlign: 'right' }}>
              <Link href="/contact" className="btn btn-primary" onClick={() => setActiveAttorneyModal(null)}>
                Request Private Counsel Conference
              </Link>
            </div>
          </div>
        )}
      </Modal>

      {/* Practice Protocol Modal */}
      <Modal
        isOpen={!!activePracticeModal}
        onClose={() => setActivePracticeModal(null)}
        title="Practice Strategy &amp; Scope"
      >
        {currentPractice && (
          <div style={{ marginBottom: '20px' }}>
            <span className="section-badge">{currentPractice.category}</span>
            <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: '8px 0 14px' }}>{currentPractice.title}</h4>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '20px' }}>{currentPractice.summary}</p>

            <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>Landmark Benchmark</div>
              <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent)', marginTop: '2px' }}>{currentPractice.benchmark}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', marginTop: '2px' }}>Lead Practice Partner: <strong>{currentPractice.lead}</strong></div>
            </div>

            <h5 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '12px' }}>Core Trial Preparation Protocols</h5>
            <ul style={{ listStyle: 'none', marginBottom: '24px', padding: 0 }}>
              {currentPractice.deliverables.map((d, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ marginTop: '3px', flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px', marginBottom: '24px' }}>
              <h5 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '6px' }}>Fee Agreement Model</h5>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{currentPractice.feeStructure}</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <Link href="/contact" className="btn btn-primary" onClick={() => setActivePracticeModal(null)}>
                Request Case Evaluation
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
