'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FeeCalculator() {
  const [category, setCategory] = useState('catastrophic');
  const [stage, setStage] = useState('preliminary');

  let estimateAmount = "$0 Upfront Contingency";
  let estimateText = (
    <>
      <strong>Performance Contingency:</strong> We front 100% of case preparation, expert witnesses, and court costs. You pay zero legal fees unless Atlantic Trial Attorneys secures a winning verdict or settlement (Standard 33.3% - 40% upon recovery).
    </>
  );

  if (category === 'catastrophic' || category === 'aviation' || category === 'trucking') {
    estimateAmount = "$0 Upfront Contingency";
    estimateText = (
      <>
        <strong>Performance Contingency:</strong> We front 100% of case preparation, expert witnesses, and court costs. You pay zero legal fees unless Atlantic Trial Attorneys secures a winning verdict or settlement (Standard 33.3% - 40% upon recovery).
      </>
    );
  } else if (category === 'appellate') {
    if (stage === 'preliminary') {
      estimateAmount = "$25,000 – $45,000 Flat Fee";
      estimateText = (
        <>
          <strong>Fixed Phased Retainer:</strong> Record review, error identification, and formal notice of appeal brief preparation. Predictable flat fee with zero hourly billable surprises.
        </>
      );
    } else {
      estimateAmount = "$50,000 – $85,000 Flat Fee";
      estimateText = (
        <>
          <strong>Full Appellate Mastery:</strong> Comprehensive opening brief, reply brief, oral argument preparation, and appearance before U.S. Circuit Court of Appeals or Supreme Court.
        </>
      );
    }
  } else {
    estimateAmount = "Structured Hybrid Retainer";
    estimateText = (
      <>
        <strong>Risk-Sharing Commercial Structure:</strong> Reduced monthly base retainer paired with an agreed performance success fee upon resolution, aligning our incentives directly with your business victory.
      </>
    );
  }

  return (
    <div className="calc-card">
      <div className="calc-header">
        <span className="section-badge">Interactive Estimator</span>
        <h3 className="calc-title">Fee Transparency &amp; Retainer Calculator</h3>
        <p className="calc-desc">Select your legal practice discipline and current litigation stage to see our transparent billing model.</p>
      </div>

      <div className="calc-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="calc-category">Litigation Discipline</label>
          <select
            id="calc-category"
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="catastrophic">Catastrophic Personal Injury &amp; Wrongful Death</option>
            <option value="aviation">Commercial Aviation &amp; Mass Disaster</option>
            <option value="trucking">Commercial Trucking Catastrophe</option>
            <option value="appellate">Federal or State Appellate Advocacy</option>
            <option value="commercial">Commercial Dispute &amp; Shareholder Litigation</option>
            <option value="whitecollar">White-Collar &amp; Government Defense</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="calc-stage">Litigation Phase</label>
          <select
            id="calc-stage"
            className="form-select"
            value={stage}
            onChange={(e) => setStage(e.target.value)}
          >
            <option value="preliminary">Pre-Filing / Pre-Trial Investigation</option>
            <option value="filed">Active Litigation / Discovery In Progress</option>
            <option value="trial">Impending Trial Docket (Within 60 Days)</option>
            <option value="appeal">Post-Verdict Notice of Appeal</option>
          </select>
        </div>
      </div>

      <div className="calc-result-box">
        <div className="calc-result-tag">Transparent Fee Structure</div>
        <div className="calc-amount">{estimateAmount}</div>
        <div className="calc-text">{estimateText}</div>
        <div style={{ marginTop: '20px' }}>
          <Link href="/contact" className="btn btn-primary">
            Confirm Retainer Terms With Senior Partner
          </Link>
        </div>
      </div>
    </div>
  );
}
