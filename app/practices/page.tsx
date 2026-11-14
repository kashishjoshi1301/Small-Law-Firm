'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRACTICE_DATA } from '@/lib/data';
import Modal from '@/components/Modal';

export default function PracticesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const practices = Object.values(PRACTICE_DATA).filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'catastrophic') {
      return p.id === 'aviation' || p.id === 'trucking' || p.id === 'maritime';
    }
    if (activeFilter === 'appellate') return p.id === 'appellate';
    if (activeFilter === 'commercial') return p.id === 'commercial';
    if (activeFilter === 'whitecollar') return p.id === 'whitecollar';
    return true;
  });

  const selectedPractice = activeModal ? PRACTICE_DATA[activeModal] : null;

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container page-banner-content">
          <div className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent)' }}>Practice Disciplines</span>
          </div>
          <h1 className="page-banner-title">Focused Trial &amp; Appellate Disciplines</h1>
          <p className="page-banner-desc">
            We limit our practice exclusively to high-stakes federal and state courtroom litigation where the outcome commands seasoned trial mastery and constitutional appellate depth.
          </p>
        </div>
      </section>

      {/* Practice Areas Content */}
      <section className="section-padding">
        <div className="container">
          {/* Filter Bar */}
          <div className="practices-filter-bar">
            {[
              { key: 'all', label: 'All Practice Disciplines' },
              { key: 'catastrophic', label: 'Catastrophic & Aviation' },
              { key: 'appellate', label: 'Appellate & Constitutional' },
              { key: 'commercial', label: 'Commercial Trials' },
              { key: 'whitecollar', label: 'White-Collar Defense' }
            ].map((btn) => (
              <button
                key={btn.key}
                type="button"
                className={`filter-btn practice-filter-btn ${activeFilter === btn.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(btn.key)}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Practice Cards Grid */}
          <div className="cards-grid-3">
            {practices.map((p) => (
              <div key={p.id} className="practice-card">
                <div className="practice-top-row">
                  <span className="practice-category-tag">{p.category}</span>
                  <span className="practice-benchmark-pill">{p.benchmark}</span>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <img src={p.icon} alt={p.title} width={48} height={48} />
                </div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.summary}</p>
                <ul className="practice-features-list">
                  {p.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{d}</span>
                    </li>
                  ))}
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Fee Structure: {p.feeStructure.split(':')[0]}</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  style={{ marginTop: 'auto' }}
                  onClick={() => setActiveModal(p.id)}
                >
                  View Trial Strategy &amp; Scope
                </button>
              </div>
            ))}
          </div>

          {/* Action Callout */}
          <div
            style={{
              marginTop: '60px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '6px', color: 'var(--primary)' }}>
                Have a Question Regarding a Case or Trial Referral?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
                Our Senior Partners review incoming case files within two business hours under strict privilege.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary">
              Schedule Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Protocol Modal */}
      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title="Practice Strategy &amp; Scope"
      >
        {selectedPractice && (
          <div style={{ marginBottom: '20px' }}>
            <span className="section-badge">{selectedPractice.category}</span>
            <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: '8px 0 14px' }}>
              {selectedPractice.title}
            </h4>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '20px' }}>
              {selectedPractice.summary}
            </p>

            <div
              style={{
                background: 'var(--bg-page)',
                border: '1px solid var(--border-light)',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  fontSize: '0.76rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  fontWeight: 700,
                  letterSpacing: '0.05em'
                }}
              >
                Landmark Benchmark
              </div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginTop: '2px'
                }}
              >
                {selectedPractice.benchmark}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', marginTop: '4px' }}>
                Lead Practice Partner: <strong>{selectedPractice.lead}</strong>
              </div>
            </div>

            <h5 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '12px' }}>
              Core Trial Preparation Protocols
            </h5>
            <ul style={{ listStyle: 'none', marginBottom: '24px', padding: 0 }}>
              {selectedPractice.deliverables.map((d, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    marginBottom: '8px'
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    style={{ marginTop: '3px', flexShrink: 0 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '16px',
                marginBottom: '24px'
              }}
            >
              <h5 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '6px' }}>
                Fee Agreement Model
              </h5>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                {selectedPractice.feeStructure}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <Link
                href="/contact"
                className="btn btn-primary"
                onClick={() => setActiveModal(null)}
              >
                Request Case Evaluation
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
