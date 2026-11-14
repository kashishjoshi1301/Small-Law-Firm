'use client';

import { useEffect } from 'react';

export default function LegalNavHandler() {
  useEffect(() => {
    const legalNavLinks = document.querySelectorAll<HTMLAnchorElement>('.legal-nav-list a');
    const legalSections = document.querySelectorAll<HTMLElement>('.legal-section');

    if (legalNavLinks.length === 0 || legalSections.length === 0) return;

    // Smooth scroll handler on sidebar links
    const handleLinkClick = (e: MouseEvent) => {
      const link = (e.currentTarget as HTMLAnchorElement);
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      legalNavLinks.forEach((a) => a.classList.remove('active'));
      link.classList.add('active');

      const header = document.querySelector('.site-header') || document.querySelector('.navbar');
      const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
      const targetRect = targetEl.getBoundingClientRect();
      const targetTop = window.pageYOffset + targetRect.top - headerHeight - 20;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    };

    legalNavLinks.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    // IntersectionObserver scroll spy
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              if (id) {
                legalNavLinks.forEach((link) => {
                  if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                  } else {
                    link.classList.remove('active');
                  }
                });
              }
            }
          });
        },
        {
          root: null,
          rootMargin: '-80px 0px -55% 0px',
          threshold: 0
        }
      );

      legalSections.forEach((section) => observer?.observe(section));
    }

    // Scroll to initial hash if present in URL
    if (window.location.hash) {
      const hashTarget = document.getElementById(window.location.hash.substring(1));
      if (hashTarget) {
        setTimeout(() => {
          const header = document.querySelector('.site-header') || document.querySelector('.navbar');
          const headerHeight = header ? (header as HTMLElement).offsetHeight : 80;
          const targetRect = hashTarget.getBoundingClientRect();
          const targetTop = window.pageYOffset + targetRect.top - headerHeight - 20;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth'
          });
          const activeLink = document.querySelector(`.legal-nav-list a[href="${window.location.hash}"]`);
          if (activeLink) {
            legalNavLinks.forEach(a => a.classList.remove('active'));
            activeLink.classList.add('active');
          }
        }, 150);
      }
    }

    return () => {
      legalNavLinks.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return null;
}
