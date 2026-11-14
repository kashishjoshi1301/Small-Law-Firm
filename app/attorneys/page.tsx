'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ATTORNEY_DATA } from '@/lib/data';
import Modal from '@/components/Modal';

export default function AttorneysPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const attorneys = Object.values(ATTORNEY_DATA);
  const currentAttorney = activeModal ? ATTORNEY_DATA[activeModal] : null;

  return (
    <>
      {/* Page Header */}
      <section className="page-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-badge">Senior Courtroom Advocates</span>
          <h1 className="page-banner-title">Senior Trial Partners</h1>
          <p className="page-banner-desc">
            Former federal appellate clerks, Ivy League honors scholars, and ACTL Fellows. Every client matter is personally managed and taken to verdict by named Senior Counsel.
          </p>
        </div>
      </section>

      {/* Attorney Cards Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="cards-grid-3">
            {attorneys.map((a) => (
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
                    onClick={() => setActiveModal(a.id)}
                  >
                    View Complete Dossier &amp; Admissions
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta-wrap">
            <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              Request Confidential Partner Review
            </Link>
          </div>
        </div>
      </section>

      {/* Attorney Dossier Modal */}
      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title="Senior Partner Dossier &amp; Admissions"
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
              <Link href="/contact" className="btn btn-primary" onClick={() => setActiveModal(null)}>
                Request Private Counsel Conference
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
