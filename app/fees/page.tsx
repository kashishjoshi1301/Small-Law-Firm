import React from 'react';
import Link from 'next/link';
import FeeCalculator from '@/components/FeeCalculator';

export default function FeesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge">Billing Integrity</span>
          <h1 className="page-banner-title">Fee Transparency Policy</h1>
          <p className="page-banner-desc">
            We reject the traditional mega-firm model of endless billable hours. We align our financial incentives with client victory through pure contingency, flat phased retainers, or risk-sharing hybrid models.
          </p>
        </div>
      </section>

      {/* Fee Models Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="fee-models-grid">
            {/* Model 1 */}
            <div className="fee-card featured">
              <span className="fee-tier-badge">Catastrophic &amp; Aviation</span>
              <h3 className="fee-title">100% Contingency ($0 Out of Pocket)</h3>
              <p className="fee-desc">
                For commercial airline disasters, catastrophic trucking collisions, and maritime casualties, we assume 100% of financial risk. We advance all litigation costs, expert fees, and accident reconstruction expenses.
              </p>
              <div className="fee-highlight">$0 Upfront Retainer</div>
              <ul className="fee-features">
                <li>Zero out-of-pocket costs to client or referring counsel</li>
                <li>Standard 33.3% - 40% only upon successful recovery</li>
                <li>If we do not obtain a recovery, you owe nothing</li>
                <li>Full monthly accounting of advanced litigation costs</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: 'auto' }}>
                Inquire About Contingency
              </Link>
            </div>

            {/* Model 2 */}
            <div className="fee-card">
              <span className="fee-tier-badge">Appellate Advocacy</span>
              <h3 className="fee-title">Predictable Flat-Fee Retainers</h3>
              <p className="fee-desc">
                For federal circuit appeals, emergency petitions for writ of certiorari, and amicus curiae briefing, we quote fixed phased retainers. You receive clear financial predictability before any work commences.
              </p>
              <div className="fee-highlight">Fixed Phased Milestone Retainers</div>
              <ul className="fee-features">
                <li>Fixed fee for record review and error assessment</li>
                <li>Structured phase pricing for opening, reply, and oral argument</li>
                <li>No vague billable-hour bloat or duplicate associate staffing</li>
                <li>Direct authoring by former Supreme Court and circuit clerks</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark" style={{ marginTop: 'auto' }}>
                Request Appellate Flat Quote
              </Link>
            </div>

            {/* Model 3 */}
            <div className="fee-card">
              <span className="fee-tier-badge">Commercial Trials</span>
              <h3 className="fee-title">Risk-Sharing Hybrid &amp; Success Fees</h3>
              <p className="fee-desc">
                For bet-the-company commercial arbitration, shareholder freeze-outs, and trade secret disputes, we offer hybrid structures pairing reduced base retainers with agreed performance success fees upon winning resolution.
              </p>
              <div className="fee-highlight">Performance-Aligned Structures</div>
              <ul className="fee-features">
                <li>Substantially discounted monthly baseline fees</li>
                <li>Pre-negotiated incentive bonus tied to trial victory or buyout value</li>
                <li>Eliminates conflicting incentives between client and legal team</li>
                <li>Monthly budget oversight directly by Senior Partners</li>
              </ul>
              <Link href="/contact" className="btn btn-outline-dark" style={{ marginTop: 'auto' }}>
                Explore Commercial Options
              </Link>
            </div>
          </div>

          {/* Interactive Estimator Component */}
          <div style={{ marginTop: '64px' }}>
            <FeeCalculator />
          </div>
        </div>
      </section>
    </>
  );
}
