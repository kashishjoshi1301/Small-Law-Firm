import React from 'react';
import CaseIntakeWizard from '@/components/CaseIntakeWizard';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge">Strict Attorney-Client Privilege</span>
          <h1 className="page-banner-title">Direct Partner Case Intake</h1>
          <p className="page-banner-desc">
            Submit your matter for confidential evaluation directly by a Senior Trial Partner. We review case documents and trial records within two business hours.
          </p>
        </div>
      </section>

      {/* Intake Wizard Section */}
      <section className="section-padding">
        <div className="container">
          <CaseIntakeWizard />

          {/* National Office Cards */}
          <div style={{ marginTop: '72px' }}>
            <div className="section-header">
              <span className="section-badge">Corridors of Practice</span>
              <h2 className="section-title">National Trial Offices</h2>
              <p className="section-desc">
                Direct partner access across primary federal judicial hubs.
              </p>
            </div>

            <div className="offices-cards-grid">
              <div className="office-card">
                <div className="office-card-header">
                  <span className="office-tag">National Headquarters</span>
                  <h3 className="office-title">Miami, Florida</h3>
                  <div className="office-jurisdiction">U.S. District Court for the Southern District of Florida (SDFL)</div>
                </div>
                <div className="office-details">
                  <p>Brickell City Centre, Suite 3800<br />Miami, FL 33131</p>
                  <p>Telephone: <a href="tel:3055552852" style={{ color: 'var(--accent)', fontWeight: 700 }}>(305) 555-ATLA</a></p>
                  <p>Lead Resident Partner: <strong>Marcus J. Sterling, Esq.</strong></p>
                </div>
              </div>

              <div className="office-card">
                <div className="office-card-header">
                  <span className="office-tag">Appellate &amp; Constitutional</span>
                  <h3 className="office-title">Washington, D.C.</h3>
                  <div className="office-jurisdiction">Supreme Court of the United States &amp; U.S. Court of Appeals (D.C. Cir.)</div>
                </div>
                <div className="office-details">
                  <p>1775 K Street NW, Suite 900<br />Washington, D.C. 20006</p>
                  <p>Telephone: <a href="tel:2025552852" style={{ color: 'var(--accent)', fontWeight: 700 }}>(202) 555-ATLA</a></p>
                  <p>Lead Resident Partner: <strong>Elena Rostova, Esq.</strong></p>
                </div>
              </div>

              <div className="office-card">
                <div className="office-card-header">
                  <span className="office-tag">Commercial &amp; Financial</span>
                  <h3 className="office-title">New York, New York</h3>
                  <div className="office-jurisdiction">U.S. District Court for the Southern District of New York (SDNY)</div>
                </div>
                <div className="office-details">
                  <p>Rockefeller Center, 42nd Floor<br />New York, NY 10111</p>
                  <p>Telephone: <a href="tel:2125552852" style={{ color: 'var(--accent)', fontWeight: 700 }}>(212) 555-ATLA</a></p>
                  <p>Lead Resident Partner: <strong>Robert M. Vance, Esq.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
