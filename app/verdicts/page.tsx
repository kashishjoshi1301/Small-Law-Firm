'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CASE_RESULTS } from '@/lib/data';

export default function VerdictsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredResults = activeCategory === 'all'
    ? CASE_RESULTS
    : CASE_RESULTS.filter((r) => r.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="page-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge">$680M+ Track Record</span>
          <h1 className="page-banner-title">Landmark Verdicts &amp; Precedents</h1>
          <p className="page-banner-desc">
            A representative record of multi-million dollar jury verdicts, commercial arbitration awards, and federal appellate opinions achieved by the partners of Atlantic Trial Attorneys.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="container" style={{ marginTop: '40px', marginBottom: '10px' }}>
        <div className="filter-bar">
          {[
            { key: 'all', label: 'All Verdicts & Precedents' },
            { key: 'aviation', label: 'Aviation Disasters' },
            { key: 'trucking', label: 'Commercial Trucking' },
            { key: 'appellate', label: 'Federal Appeals' },
            { key: 'commercial', label: 'Commercial Arbitration' },
            { key: 'whitecollar', label: 'White-Collar Defense' },
            { key: 'maritime', label: 'Admiralty & Maritime' }
          ].map((btn) => (
            <button
              key={btn.key}
              className={`filter-btn results-filter-btn ${activeCategory === btn.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Results Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="results-cards-grid">
            {filteredResults.map((r) => (
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

          {/* Referral Notice Box */}
          <div className="referral-notice-box">
            <div className="referral-notice-inner">
              <div className="referral-notice-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="referral-notice-content">
                <h3 className="referral-notice-title">Notice for Referring Trial Counsel &amp; Co-Counsel</h3>
                <p className="referral-notice-text">
                  Over 60% of our catastrophic trial and federal appellate matters are referred by esteemed trial lawyers across the United States who require our trial war-chest, specialized aviation/engineering experts, and appellate bench strength. We strictly respect client relationships and share co-counsel fees in full compliance with applicable State Bar Rules of Professional Conduct.
                </p>
                <Link href="/contact" className="btn btn-secondary">
                  Submit Co-Counsel Referral File
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
