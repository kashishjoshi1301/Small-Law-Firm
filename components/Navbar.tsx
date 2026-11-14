'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Freeze background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  // Close mobile drawer upon route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/practices', label: 'Practices' },
    { href: '/verdicts', label: 'Verdicts' },
    { href: '/attorneys', label: 'Our Counsel' },
    { href: '/fees', label: 'Fee Policy' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <Link href="/" className="brand-block">
            <img
              src="/logo.svg"
              alt="Atlantic Trial Attorneys Crest"
              className="brand-emblem"
              width={44}
              height={44}
            />
            <div className="brand-text">
              <span className="brand-name">Atlantic Trial Attorneys</span>
              <span className="brand-subtitle">Catastrophic Trial &amp; Appellate Counsel</span>
            </div>
          </Link>

          <nav>
            <ul className="nav-links">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="nav-actions">
            <Link href="/contact" className="btn btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Case Evaluation
            </Link>
            <button
              className="mobile-menu-toggle"
              id="mobile-toggle"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Off-Canvas Drawer */}
        <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`} id="mobile-drawer">
          <ul className="mobile-nav-list">
            <li>
              <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/practices" className={pathname === '/practices' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                Practice Areas
              </Link>
            </li>
            <li>
              <Link href="/verdicts" className={pathname === '/verdicts' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                Landmark Verdicts ($680M+)
              </Link>
            </li>
            <li>
              <Link href="/attorneys" className={pathname === '/attorneys' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                Senior Trial Partners
              </Link>
            </li>
            <li>
              <Link href="/fees" className={pathname === '/fees' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                Fee Transparency Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                Contact &amp; Case Evaluation
              </Link>
            </li>
          </ul>

          <div style={{ marginTop: '28px' }}>
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '12px' }}
              onClick={() => setMenuOpen(false)}
            >
              Request Confidential Review
            </Link>
            <a
              href="tel:8008402852"
              className="btn btn-outline-light"
              style={{ width: '100%' }}
              onClick={() => setMenuOpen(false)}
            >
              Emergency Hotline: (800) 840-ATLA
            </a>
          </div>
        </div>
      </header>

      {/* Dimmed backdrop when mobile menu is open */}
      <div
        className={`mobile-nav-backdrop ${menuOpen ? 'active' : ''}`}
        id="mobile-nav-backdrop"
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
