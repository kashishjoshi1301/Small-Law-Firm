'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRACTICE_DATA, PracticeArea } from '@/lib/data';
import Modal from '@/components/Modal';

export default function PracticesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const filterMap: Record<string, string> = {
    catastrophic: 'aviation',
    appellate: 'appellate',
    commercial: 'commercial',
    whitecollar: 'whitecollar',
  };

  const practices = Object.values(PRACTICE_DATA).filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'catastrophic') return p.id === 'aviation' || p.id === 'trucking' || p.id === 'maritime';
    if (activeFilter === 'appellate') return p.id === 'appellate';
    if (activeFilter === 'commercial') return p.id === 'commercial';
    if (activeFilter === 'whitecollar') return p.id === 'whitecollar';
    return true;
  });

  const selectedPractice = activeModal ? PRACTICE_DATA[activeModal] : null;

  return (
    <>
      {/* Page Header */}
      <section className="page-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge">Disciplines &amp; Case Criteria</span>
          <h1 className="page-banner-title">Litigation Disciplines</h1>
          <p className="page-banner-desc">
            We deliberately decline volume personal injury and low-exposure commercial claims, reserving our trial war-chest for high-stakes matters with catastrophic damages or bet-the-company corporate exposure.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="container" style={{ marginTop: '40px', marginBottom: '10px' }}>
        <div className="filter-bar">
          {[
            { key: 'all', label: 'All Practice Disciplines' },
            { key: 'catastrophic', label: 'Catastrophic & Aviation' },
            { key: 'appellate', label: 'Appellate & Constitutional' },
            { key: 'commercial', label: 'Commercial Trials' },
            { key: 'whitecollar', label: 'White-Collar Defense' }
          ].map((btn) => (
            <button
              key={btn.key}
              className={`filter-btn practice-filter-btn ${activeFilter === btn.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Practices Cards Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="cards-grid-3">
            {practices.map((p) => (
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
                  onClick={() => setActiveModal(p.id)}
                >
                  View Practice Protocol
                </button>
              </div>
            ))}
          </div>

          <div className="section-cta-wrap">
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
            <h4 style={{ fontSize: '1.4rem', color: 'var(--primary)', margin: '8px 0 14px' }}>{selectedPractice.title}</h4>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '20px' }}>{selectedPractice.summary}</p>

            <div style={{ background: 'var(--bg-page)', border: '1px solid var(--border-light)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: 'var(--text-muted)', font-weight: 700 }}>Landmark Benchmark</div>
              <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent)', marginTop: '2px' }}>{selectedPractice.benchmark}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--secondary)', marginTop: '2px' }}>Lead Practice Partner: <strong>{selectedPractice.lead}</strong></div>
            </div>

            <h5 style={{ fontSize: '1.05rem', color: 'var(--primary)', marginBottom: '12px' }}>Core Trial Preparation Protocols</h5>
            <ul style={{ listStyle: 'none', marginBottom: '24px', padding: 0 }}>
              {selectedPractice.deliverables.map((d, i) => (
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
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{selectedPractice.feeStructure}</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <Link href="/contact" className="btn btn-primary" onClick={() => setActiveModal(null)}>
                Request Case Evaluation
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
