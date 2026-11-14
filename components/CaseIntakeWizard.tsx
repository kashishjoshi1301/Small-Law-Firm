'use client';

import React, { useState } from 'react';

export default function CaseIntakeWizard() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('aviation');
  const [summary, setSummary] = useState('');
  const [adverseParty, setAdverseParty] = useState('');
  const [forum, setForum] = useState('federal');
  const [deadline, setDeadline] = useState('days14');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredCounsel, setPreferredCounsel] = useState('any');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [error, setError] = useState('');

  const handleNext = () => {
    setError('');
    if (step === 1 && !category) {
      setError('Please select a litigation discipline.');
      return;
    }
    if (step === 2 && summary.trim().length < 8) {
      setError('Please provide a brief outline of the legal matter (at least 8 characters).');
      return;
    }
    if (step === 4) {
      if (!name.trim()) {
        setError('Please enter your full legal name.');
        return;
      }
      if (!phone.trim() || phone.trim().length < 7) {
        setError('Please enter a valid phone number.');
        return;
      }
      const code = 'ATA-' + Math.floor(100000 + Math.random() * 900000);
      setRefCode(code);
      setIsSubmitted(true);
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setError('');
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setCategory('aviation');
    setSummary('');
    setAdverseParty('');
    setForum('federal');
    setDeadline('days14');
    setName('');
    setPhone('');
    setEmail('');
    setPreferredCounsel('any');
    setIsSubmitted(false);
    setError('');
  };

  return (
    <div className="wizard-container">
      {/* Sidebar */}
      <div className="wizard-sidebar">
        <span className="section-badge" style={{ background: 'rgba(189, 150, 126, 0.25)', color: 'var(--accent)' }}>
          Direct Partner Intake
        </span>
        <h3 className="wizard-sidebar-title">Confidential Case Intake</h3>
        <p className="wizard-sidebar-desc">
          Evaluated strictly by Senior Trial Partners within 2 business hours. Protected by nationwide federal attorney-client privilege.
        </p>

        <div className="wizard-steps-nav">
          <div className={`step-indicator ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>
            <div className="step-num">01</div>
            <div>
              <div className="step-title">Litigation Discipline</div>
              <div className="step-sub">Select matter practice area</div>
            </div>
          </div>

          <div className={`step-indicator ${step === 2 ? 'active' : step > 2 ? 'completed' : ''}`}>
            <div className="step-num">02</div>
            <div>
              <div className="step-title">Factual Summary</div>
              <div className="step-sub">Parties &amp; damages overview</div>
            </div>
          </div>

          <div className={`step-indicator ${step === 3 ? 'active' : step > 3 ? 'completed' : ''}`}>
            <div className="step-num">03</div>
            <div>
              <div className="step-title">Court &amp; Deadlines</div>
              <div className="step-sub">Jurisdiction &amp; timeline</div>
            </div>
          </div>

          <div className={`step-indicator ${step === 4 ? 'active' : ''}`}>
            <div className="step-num">04</div>
            <div>
              <div className="step-title">Contact &amp; Privileged Review</div>
              <div className="step-sub">Partner callback verification</div>
            </div>
          </div>
        </div>

        <div className="wizard-guarantee-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: 700, fontSize: '0.86rem', marginBottom: '4px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Strict Attorney Privilege</span>
          </div>
          <p style={{ margin: 0, fontSize: '0.78rem', color: '#D1DEDB' }}>
            Information submitted is held in full confidence under ABA Rule 1.6 and attorney work-product protections.
          </p>
        </div>
      </div>

      {/* Form Content */}
      <div className="wizard-form-col">
        {error && (
          <div style={{ background: '#FFF1F0', border: '1px solid #FFCCC7', color: '#CF1322', padding: '10px 14px', borderRadius: '6px', fontSize: '0.88rem', marginBottom: '18px' }}>
            {error}
          </div>
        )}

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(40, 96, 92, 0.12)', color: 'var(--secondary)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '12px' }}>
              Confidential Evaluation Submitted
            </h3>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '24px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
              Thank you, <strong>{name}</strong>. Your matter has been routed directly to our Senior Trial Partners under strict Attorney-Client privilege.
            </p>
            <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '18px', maxWidth: '440px', margin: '0 auto 28px' }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700 }}>
                Intake Conflict File Reference
              </div>
              <div style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent)', marginTop: '4px' }}>
                #{refCode}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', marginTop: '4px' }}>
                Senior Counsel Callback: Within 2 Hours
              </div>
            </div>
            <button className="btn btn-outline-dark" onClick={handleReset}>
              Start New Inquiry
            </button>
          </div>
        ) : (
          <>
            {/* Step 1 */}
            {step === 1 && (
              <div className="wizard-step-pane active">
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '8px' }}>
                  What category of legal matter are you facing?
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Choose the primary legal discipline that best reflects your case or corporate exposure.
                </p>

                <div className="radio-cards-grid">
                  {[
                    { val: 'aviation', title: 'Aviation & Mass Casualty', desc: 'Commercial airline or general aviation crash.' },
                    { val: 'trucking', title: 'Commercial Trucking Disaster', desc: 'Catastrophic collision involving 18-wheelers.' },
                    { val: 'appellate', title: 'Federal or Supreme Court Appeal', desc: 'Preserving or reversing a trial judgment.' },
                    { val: 'commercial', title: 'Bet-The-Company Commercial', desc: 'Shareholder freeze-out, trade secrets, breach.' },
                    { val: 'whitecollar', title: 'White-Collar / DOJ Inquiry', desc: 'Subpoenas, grand jury, SEC or DOJ investigation.' },
                    { val: 'maritime', title: 'Maritime / Admiralty Disaster', desc: 'Jones Act claims, offshore drilling blowout.' }
                  ].map((item) => (
                    <label
                      key={item.val}
                      className={`radio-card ${category === item.val ? 'selected' : ''}`}
                      onClick={() => setCategory(item.val)}
                    >
                      <input
                        type="radio"
                        name="wizard_category"
                        value={item.val}
                        checked={category === item.val}
                        onChange={() => setCategory(item.val)}
                      />
                      <div className="radio-card-content">
                        <div className="radio-card-title">{item.title}</div>
                        <div className="radio-card-desc">{item.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="wizard-step-pane active">
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '8px' }}>
                  Summary of Facts &amp; Adverse Parties
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Provide key events, injuries, financial losses, or adverse corporate entities involved.
                </p>

                <div className="form-group">
                  <label className="form-label">Factual Description of the Matter *</label>
                  <textarea
                    className="form-textarea"
                    rows={4}
                    placeholder="Describe the incident, crash location, dates, injuries, or commercial dispute..."
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Adverse Entity or Defendant(s) (For Conflict Check)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Major Airline, Logistics Corp, Federal Agency..."
                    value={adverseParty}
                    onChange={(e) => setAdverseParty(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="wizard-step-pane active">
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '8px' }}>
                  Jurisdiction &amp; Time-Sensitive Deadlines
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Court procedural deadlines dictate trial strategy. Let us know your status.
                </p>

                <div className="form-group">
                  <label className="form-label">Court Forum / Proposed Jurisdiction</label>
                  <select
                    className="form-select"
                    value={forum}
                    onChange={(e) => setForum(e.target.value)}
                  >
                    <option value="federal">U.S. Federal District Court</option>
                    <option value="circuit">U.S. Circuit Court of Appeals</option>
                    <option value="scotus">Supreme Court of the United States</option>
                    <option value="state">State Supreme or Superior Court</option>
                    <option value="arbitration">Commercial Arbitration (AAA, JAMS, ICC)</option>
                    <option value="unfiled">Not Yet Filed / Pre-Filing Investigation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Impending Statute of Limitations or Hearing Date</label>
                  <select
                    className="form-select"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  >
                    <option value="days14">Urgent: Within 14 Days (Notice of Appeal / Emergency TRO)</option>
                    <option value="days30">Within 30 Days (Statute of Limitations / Motion)</option>
                    <option value="days90">Within 90 Days</option>
                    <option value="none">No Imminent Court Deadlines Known</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="wizard-step-pane active">
                <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '8px' }}>
                  Contact Information &amp; Direct Partner Review
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Enter your direct contact details so our Senior Partners can coordinate a confidential conference.
                </p>

                <div className="form-group">
                  <label className="form-label">Full Legal Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Eleanor Roosevelt, Esq. or John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Direct Telephone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="(555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Confidential Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="client@corporate.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Request Specific Senior Partner (Optional)</label>
                  <select
                    className="form-select"
                    value={preferredCounsel}
                    onChange={(e) => setPreferredCounsel(e.target.value)}
                  >
                    <option value="any">First Available Senior Partner</option>
                    <option value="vance">Robert M. Vance, Esq. (Catastrophic &amp; Aviation)</option>
                    <option value="rostova">Elena Rostova, Esq. (Appellate &amp; Constitutional)</option>
                    <option value="sterling">Marcus J. Sterling, Esq. (Commercial &amp; Admiralty)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Button Controls */}
            <div className="wizard-buttons">
              {step > 1 && (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNext}
                style={{ marginLeft: 'auto' }}
              >
                {step === 4 ? 'Submit Confidential Case Evaluation' : 'Continue to Next Step'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
