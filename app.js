/**
 * Atlantic Trial Attorneys | Multi-Page Interactive Engine
 */

// Mobile Navigation Engine with Background Scroll Lock
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  let backdrop = document.getElementById('mobile-backdrop');

  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'mobile-backdrop';
    backdrop.className = 'mobile-nav-backdrop';
    document.body.appendChild(backdrop);
  }

  function openMenu() {
    drawer?.classList.add('open');
    backdrop?.classList.add('open');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    backdrop.addEventListener('click', closeMenu);

    // Close when clicking any nav link in drawer
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close if resized above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && drawer.classList.contains('open')) {
        closeMenu();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();

  // Initialize Page-Specific Features
  initQuickIntakeForm();
  initFeeCalculator();
  initConsultationWizard();
  initFAQAccordion();
  initModals();
  initPracticeFilter();
  initCaseResultsFilter();
});

/* ==========================================================================
   Quick Hero Callback Intake Form
   ========================================================================== */
function initQuickIntakeForm() {
  const form = document.getElementById('hero-quick-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneInput = document.getElementById('hero-client-phone');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Securing Partner Callback...';
    }

    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align: center; padding: 24px 10px;">
          <div style="color: var(--secondary); font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">✓ Priority Callback Logged</div>
          <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 16px;">
            A Senior Trial Partner on-duty has been notified. We will call <strong>${phoneInput ? phoneInput.value : 'your number'}</strong> directly within 15 minutes.
          </p>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Protected by Attorney-Client Privilege</div>
        </div>
      `;
      showToast('Direct Partner Callback Requested.');
    }, 600);
  });
}

/* ==========================================================================
   Practice Areas Deep-Dive Modals & Filtering
   ========================================================================== */
const PRACTICE_DATA = {
  aviation: {
    title: "Aviation & Mass Catastrophe Litigation",
    category: "Catastrophic Trial",
    benchmark: "$42.5M Landmark Airline Settlement",
    lead: "Robert M. Vance, Esq.",
    summary: "Our trial attorneys represent families of passengers, commercial flight crews, and victims of general aviation disasters worldwide. We lead complex multi-district litigation (MDL) against international air carriers, aircraft manufacturers, and component suppliers.",
    deliverables: [
      "Immediate National Transportation Safety Board (NTSB) investigation coordination",
      "Retention of premier aeronautical engineering & avionics flight-data experts",
      "Warsaw & Montreal Convention treaty litigation across federal courts",
      "Trial preparation targeting punitive damages for gross manufacturing defects"
    ],
    feeStructure: "Contingency Basis: No upfront legal fees or out-of-pocket expenses unless a financial recovery is secured."
  },
  appellate: {
    title: "Federal & State Appellate Advocacy",
    category: "Appellate Heritage",
    benchmark: "16 U.S. Supreme Court Briefs Filed",
    lead: "Elena Rostova, Esq.",
    summary: "Led by former federal appellate clerks, our appellate practice is retained by trial lawyers and corporations nationwide to protect multi-million dollar jury verdicts or overturn egregious trial court errors before the U.S. Supreme Court and Federal Circuit Courts of Appeal.",
    deliverables: [
      "Preservation of trial record and emergency interlocutory appeals",
      "Post-trial motion practice and supersedeas bond negotiation",
      "Preparation of Petitions for Certiorari before the Supreme Court of the United States",
      "Amicus curiae strategy on behalf of national industry coalitions"
    ],
    feeStructure: "Predictable Flat-Fee Retainers or Structured Phased Agreements per appellate brief."
  },
  commercial: {
    title: "High-Stakes Commercial & Partnership Litigation",
    category: "Commercial Trial",
    benchmark: "$18.7M Shareholder Arbitration Award",
    lead: "Marcus J. Sterling, Esq.",
    summary: "We litigate bet-the-company business disputes when negotiation fails. Our practice encompasses partnership freeze-outs, breach of fiduciary duty, trade secret misappropriation, and multi-jurisdiction contract enforcement.",
    deliverables: [
      "Emergency Temporary Restraining Orders (TRO) and asset-freezing injunctions",
      "Forensic financial auditing and electronic discovery oversight",
      "Private AAA / JAMS / ICC commercial arbitration advocacy",
      "Jury trial presentation for high-net-worth commercial disputes"
    ],
    feeStructure: "Hybrid Retainers, Success Fees, or Traditional Structured Corporate Hourly."
  },
  trucking: {
    title: "Catastrophic Commercial Trucking & Transportation",
    category: "Catastrophic Trial",
    benchmark: "$28.2M Jury Verdict Against Interstate Carrier",
    lead: "Robert M. Vance, Esq.",
    summary: "Commercial freight carriers operate multi-ton vehicles with immense destructive potential. We aggressively uncover federal safety violations, driver fatigue, falsified electronic logs, and corporate broker liability.",
    deliverables: [
      "Rapid-response preservation of tractor electronic control module (ECM/black box) data",
      "Federal Motor Carrier Safety Administration (FMCSA) compliance audits",
      "Accident reconstruction with certified biomechanical collision experts",
      "Deposition of corporate logistics executives and freight brokers"
    ],
    feeStructure: "Contingency Basis: 100% risk assumed by the firm. Zero cost to client unless successful."
  },
  whitecollar: {
    title: "White-Collar Defense & Government Investigations",
    category: "Federal Practice",
    benchmark: "Complete Dismissal of Multi-Agency Securities Indictment",
    lead: "Elena Rostova, Esq.",
    summary: "We defend C-suite executives, healthcare organizations, and financial professionals facing DOJ, SEC, CFTC, and Congressional inquiries. We neutralize indictments before charges are filed.",
    deliverables: [
      "Internal corporate investigations and grand jury subpoena response",
      "Parallel civil enforcement and criminal defense representation",
      "Proffer negotiations with United States Attorney's Offices",
      "Federal jury trial advocacy across federal district courts"
    ],
    feeStructure: "Tailored Corporate Defense Retainers with milestone transparency."
  },
  maritime: {
    title: "Maritime & Admiralty Catastrophic Injury",
    category: "Catastrophic Trial",
    benchmark: "$14.1M Offshore Rig Settlement",
    lead: "Marcus J. Sterling, Esq.",
    summary: "Covering Jones Act claims, commercial cruise line incidents, and offshore industrial catastrophes. Atlantic Trial Attorneys navigates centuries of maritime doctrine with modern courtroom science.",
    deliverables: [
      "Jones Act, Death on the High Seas Act (DOHSA), and General Maritime Law filing",
      "Vessel seaworthiness inspections and marine casualty documentation",
      "Offshore drilling rig and maritime vessel safety protocols analysis",
      "Admiralty bench and jury trials in coastal federal districts"
    ],
    feeStructure: "Contingency Basis: $0 out of pocket."
  }
};

function initPracticeFilter() {
  const buttons = document.querySelectorAll('.practice-filter-btn');
  const cards = document.querySelectorAll('.practice-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-practice') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Case Results Filtering & Rendering (Verdicts Page)
   ========================================================================== */
const CASE_RESULTS = [
  {
    amount: "$42,500,000",
    category: "aviation",
    categoryLabel: "Aviation Catastrophe",
    title: "Commercial Air Carrier Mass Casualty Settlement",
    summary: "Represented 14 passenger families in multi-district litigation involving dual-engine failure. Defeated federal preemption defense and negotiated historic confidential settlement prior to trial.",
    lead: "Robert M. Vance, Esq."
  },
  {
    amount: "$28,200,000",
    category: "trucking",
    categoryLabel: "Catastrophic Trucking",
    title: "Interstate Freight Collision Jury Verdict",
    summary: "Secured unanimous federal jury verdict against logistics broker and carrier following traumatic brain injury collision. Proved corporate falsification of driver hours of service.",
    lead: "Robert M. Vance, Esq."
  },
  {
    amount: "Defense Win",
    category: "appellate",
    categoryLabel: "Federal Appellate",
    title: "SCOTUS & 11th Circuit Antitrust Precedent",
    summary: "Overturned an emergency preliminary injunction against a national medical diagnostics group, establishing landmark precedent on federal jurisdiction and anti-competitive claims.",
    lead: "Elena Rostova, Esq."
  },
  {
    amount: "$18,700,000",
    category: "commercial",
    categoryLabel: "Commercial Arbitration",
    title: "Executive Shareholder Freeze-Out Award",
    summary: "Arbitrated contentious buyout dispute involving proprietary software equity and offshore intellectual property transfers. Secured 100% of claimed damages and attorney fees.",
    lead: "Marcus J. Sterling, Esq."
  },
  {
    amount: "Complete Dismissal",
    category: "whitecollar",
    categoryLabel: "Government Investigation",
    title: "SEC & DOJ Healthcare Securities Inquiry",
    summary: "Conducted internal corporate audit and presented exculpatory evidence to federal prosecutors, prompting DOJ to decline all criminal charges and close investigation without fines.",
    lead: "Elena Rostova, Esq."
  },
  {
    amount: "$14,100,000",
    category: "maritime",
    categoryLabel: "Admiralty Catastrophe",
    title: "Offshore Industrial Rig Wrongful Death Settlement",
    summary: "Secured multi-million dollar recovery under the Jones Act and General Maritime Law for surviving family of chief engineer following catastrophic offshore drilling rig failure.",
    lead: "Marcus J. Sterling, Esq."
  }
];

function initCaseResultsFilter() {
  const container = document.getElementById('results-cards-container');
  if (!container) return;

  renderResults(CASE_RESULTS);

  const filterButtons = document.querySelectorAll('.results-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-category');
      if (cat === 'all') {
        renderResults(CASE_RESULTS);
      } else {
        const filtered = CASE_RESULTS.filter(r => r.category === cat);
        renderResults(filtered);
      }
    });
  });
}

function renderResults(results) {
  const container = document.getElementById('results-cards-container');
  if (!container) return;

  container.innerHTML = results.map(r => `
    <div class="result-card">
      <div class="result-amount">
        <span>${r.amount}</span>
        <span class="result-category-badge">${r.categoryLabel}</span>
      </div>
      <h3 class="result-title">${r.title}</h3>
      <p class="result-summary">${r.summary}</p>
      <div class="result-meta-row">
        <span>Lead Counsel: <strong style="color: var(--primary);">${r.lead}</strong></span>
        <span style="color: var(--secondary); font-weight: 600;">Verified Matter</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Interactive Fee Estimator
   ========================================================================== */
function initFeeCalculator() {
  const categorySelect = document.getElementById('calc-category');
  const stageSelect = document.getElementById('calc-stage');
  const amountDisplay = document.getElementById('calc-amount-display');
  const textDisplay = document.getElementById('calc-text-display');

  if (!categorySelect || !stageSelect || !amountDisplay) return;

  function updateEstimate() {
    const cat = categorySelect.value;
    const stage = stageSelect.value;

    if (cat === 'catastrophic' || cat === 'aviation' || cat === 'trucking') {
      amountDisplay.textContent = "$0 Upfront Contingency";
      textDisplay.innerHTML = "<strong>Performance Contingency:</strong> We front 100% of case preparation, expert witnesses, and court costs. You pay zero legal fees unless Atlantic Trial Attorneys secures a winning verdict or settlement (Standard 33.3% - 40% upon recovery).";
    } else if (cat === 'appellate') {
      if (stage === 'preliminary') {
        amountDisplay.textContent = "$25,000 – $45,000 Flat Fee";
        textDisplay.innerHTML = "<strong>Fixed Phased Retainer:</strong> Record review, error identification, and formal notice of appeal brief preparation. Predictable flat fee with zero hourly billable surprises.";
      } else {
        amountDisplay.textContent = "$50,000 – $85,000 Flat Fee";
        textDisplay.innerHTML = "<strong>Full Appellate Mastery:</strong> Comprehensive opening brief, reply brief, oral argument preparation, and appearance before U.S. Circuit Court of Appeals or Supreme Court.";
      }
    } else {
      amountDisplay.textContent = "Structured Hybrid Retainer";
      textDisplay.innerHTML = "<strong>Risk-Sharing Commercial Structure:</strong> Reduced monthly base retainer paired with an agreed performance success fee upon resolution, aligning our incentives directly with your business victory.";
    }
  }

  categorySelect.addEventListener('change', updateEstimate);
  stageSelect.addEventListener('change', updateEstimate);
}

/* ==========================================================================
   4-Step Interactive Case Evaluation Wizard
   ========================================================================== */
let wizardCurrentStep = 1;

function initConsultationWizard() {
  const nextBtn = document.getElementById('wizard-next-btn');
  const prevBtn = document.getElementById('wizard-prev-btn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (validateCurrentStep(wizardCurrentStep)) {
        if (wizardCurrentStep < 4) {
          goToWizardStep(wizardCurrentStep + 1);
        } else {
          submitWizardForm();
        }
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (wizardCurrentStep > 1) {
        goToWizardStep(wizardCurrentStep - 1);
      }
    });
  }
}

function goToWizardStep(step) {
  wizardCurrentStep = step;

  document.querySelectorAll('.wizard-step-pane').forEach((pane, idx) => {
    pane.classList.toggle('active', idx + 1 === step);
  });

  document.querySelectorAll('.step-indicator').forEach((ind, idx) => {
    ind.classList.remove('active', 'completed');
    if (idx + 1 === step) {
      ind.classList.add('active');
    } else if (idx + 1 < step) {
      ind.classList.add('completed');
    }
  });

  const prevBtn = document.getElementById('wizard-prev-btn');
  const nextBtn = document.getElementById('wizard-next-btn');

  if (prevBtn) prevBtn.style.display = step === 1 ? 'none' : 'inline-flex';
  if (nextBtn) {
    nextBtn.textContent = step === 4 ? 'Submit Confidential Case Evaluation' : 'Continue to Next Step';
  }
}

function validateCurrentStep(step) {
  if (step === 1) {
    const selected = document.querySelector('input[name="wizard_category"]:checked');
    if (!selected) {
      showToast('Please select your legal matter category.');
      return false;
    }
    return true;
  }
  if (step === 2) {
    const desc = document.getElementById('wizard-summary');
    if (desc && desc.value.trim().length < 8) {
      showToast('Please provide a brief outline of the matter or impending deadlines.');
      desc.focus();
      return false;
    }
    return true;
  }
  if (step === 3) {
    return true;
  }
  if (step === 4) {
    const name = document.getElementById('wizard-name');
    const phone = document.getElementById('wizard-phone');

    if (!name || name.value.trim() === '') {
      showToast('Please enter your full legal name.');
      name?.focus();
      return false;
    }
    if (!phone || phone.value.trim().length < 7) {
      showToast('Please enter a valid telephone number.');
      phone?.focus();
      return false;
    }
    return true;
  }
  return true;
}

function submitWizardForm() {
  const name = document.getElementById('wizard-name')?.value || "Client";
  const refCode = "ATA-" + Math.floor(100000 + Math.random() * 900000);

  const container = document.getElementById('wizard-pane-4');
  if (container) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px 10px;">
        <div style="width: 64px; height: 64px; background: rgba(40, 96, 92, 0.12); color: var(--secondary); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 12px;">Confidential Evaluation Submitted</h3>
        <p style="color: var(--text-main); font-size: 1.05rem; margin-bottom: 24px; max-width: 520px; margin-left: auto; margin-right: auto;">
          Thank you, <strong>${name}</strong>. Your matter has been routed directly to our Senior Trial Partners under strict Attorney-Client privilege.
        </p>
        <div style="background: var(--bg-page); border: 1px solid var(--border-light); border-radius: 8px; padding: 18px; max-width: 440px; margin: 0 auto 28px;">
          <div style="font-size: 0.8rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Intake Conflict File Reference</div>
          <div style="font-size: 1.6rem; font-family: var(--font-serif); font-weight: 700; color: var(--accent); margin-top: 4px;">#${refCode}</div>
          <div style="font-size: 0.82rem; color: var(--secondary); margin-top: 4px;">Senior Counsel Callback: Within 2 Hours</div>
        </div>
        <button class="btn btn-outline-dark" onclick="location.reload()">Start New Inquiry</button>
      </div>
    `;

    const btnRow = document.querySelector('.wizard-buttons');
    if (btnRow) btnRow.style.display = 'none';
    showToast(`Case intake confirmed: #${refCode}`);
  }
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   Modal System
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('ata-modal');
  const closeBtn = document.getElementById('ata-modal-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(title, htmlContent) {
  const modal = document.getElementById('ata-modal');
  const titleEl = document.getElementById('ata-modal-title');
  const bodyEl = document.getElementById('ata-modal-body');

  if (modal && titleEl && bodyEl) {
    titleEl.textContent = title;
    bodyEl.innerHTML = htmlContent;
    modal.classList.add('open');
    document.body.classList.add('menu-open');
  }
}

function closeModal() {
  const modal = document.getElementById('ata-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
}

window.openPracticeModal = function(key) {
  const data = PRACTICE_DATA[key];
  if (!data) return;

  const content = `
    <div style="margin-bottom: 20px;">
      <span class="section-badge">${data.category}</span>
      <h4 style="font-size: 1.4rem; color: var(--primary); margin: 8px 0 14px;">${data.title}</h4>
      <p style="font-size: 0.96rem; color: var(--text-main); line-height: 1.7; margin-bottom: 20px;">${data.summary}</p>
      
      <div style="background: var(--bg-page); border: 1px solid var(--border-light); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <div style="font-size: 0.76rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Landmark Benchmark</div>
        <div style="font-size: 1.25rem; font-family: var(--font-serif); font-weight: 700; color: var(--accent); margin-top: 2px;">${data.benchmark}</div>
        <div style="font-size: 0.82rem; color: var(--secondary); margin-top: 2px;">Lead Practice Partner: <strong>${data.lead}</strong></div>
      </div>

      <h5 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 12px;">Core Trial Preparation Protocols</h5>
      <ul style="list-style: none; margin-bottom: 24px;">
        ${data.deliverables.map(d => `
          <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.9rem; color: var(--text-main); margin-bottom: 8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" style="margin-top: 3px; flex-shrink: 0;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${d}</span>
          </li>
        `).join('')}
      </ul>

      <div style="border-top: 1px solid var(--border-light); padding-top: 16px; margin-bottom: 24px;">
        <h5 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 6px;">Fee Agreement Model</h5>
        <p style="font-size: 0.88rem; color: var(--text-muted);">${data.feeStructure}</p>
      </div>

      <div style="text-align: right;">
        <a href="contact.html" class="btn btn-primary" onclick="closeModal();">Request Case Evaluation</a>
      </div>
    </div>
  `;

  openModal("Practice Strategy & Scope", content);
};

window.openAttorneyModal = function(key) {
  const attorneys = {
    vance: {
      name: "Robert M. Vance, Esq.",
      role: "Senior Founding Partner & Lead Trial Counsel",
      image: "images/attorney-vance.jpg",
      education: "Harvard Law School, J.D. (magna cum laude) • Dartmouth College, B.A. (summa cum laude)",
      clerkship: "Law Clerk to the Hon. Gerald Bard Tjoflat, U.S. Court of Appeals for the Eleventh Circuit",
      admissions: "Supreme Court of the United States • Florida Bar • New York Bar • District of Columbia Bar • U.S. Courts of Appeals (2nd, 5th, 11th Circuits)",
      bio: "Over three decades of trial practice, Robert Vance has earned a nationwide reputation for commanding the courtroom in complex aviation crashes, multidistrict mass torts, and catastrophic transportation disasters. Fellow of the American College of Trial Lawyers (ACTL) and International Academy of Trial Lawyers.",
      achievements: [
        "$42,500,000 settlement for victims of commercial airline mechanical failure",
        "$28,200,000 unanimous federal jury verdict against interstate logistics broker",
        "Lead Liaison Counsel in two federal Multi-District Litigation (MDL) dockets",
        "Named 'Trial Lawyer of the Year' by the National Law Journal"
      ]
    },
    rostova: {
      name: "Elena Rostova, Esq.",
      role: "Partner & Chair, Appellate & Constitutional Practice",
      image: "images/attorney-rostova.jpg",
      education: "Columbia Law School, J.D. (Articles Editor, Columbia Law Review) • Princeton University, A.B. (Woodrow Wilson School)",
      clerkship: "Supreme Court of the United States • Law Clerk to the Hon. Pierre N. Leval, U.S. Court of Appeals for the Second Circuit",
      admissions: "Supreme Court of the United States • New York Bar • District of Columbia Bar • U.S. Courts of Appeals (1st, 2nd, 3rd, 9th, 11th, D.C. Circuits)",
      bio: "Elena Rostova directs Atlantic Trial Attorneys' appellate and white-collar defense groups. Recognized as one of the country's preeminent brief-writers and oral advocates, she has argued or authored briefs in 16 matters before the Supreme Court of the United States and dozens of federal circuit arguments.",
      achievements: [
        "Authored winning merits brief in landmark 11th Circuit antitrust appeal",
        "Complete declination of prosecution in DOJ/SEC healthcare securities investigation",
        "Special Appellate Counsel to trial firms seeking to preserve 8-figure jury verdicts",
        "Member of the American Law Institute (ALI)"
      ]
    },
    sterling: {
      name: "Marcus J. Sterling, Esq.",
      role: "Partner & Chair, Commercial Trial & Admiralty Litigation",
      image: "images/attorney-sterling.jpg",
      education: "Georgetown University Law Center, J.D. (cum laude) • United States Naval Academy, B.S. (with Distinction)",
      clerkship: "Law Clerk to the Hon. Edward B. Davis, Chief Judge, U.S. District Court for the Southern District of Florida",
      admissions: "Supreme Court of the United States • Florida Bar • New York Bar • U.S. Court of Appeals (5th and 11th Circuits) • U.S. District Courts (SDNY, EDNY, SDFL, MDFL)",
      bio: "A former naval officer and seasoned commercial litigator, Marcus Sterling brings rigorous tactical precision to high-stakes shareholder freeze-outs, trade secret espionage, maritime casualties, and offshore energy disasters. He acts as lead trial counsel in federal courts and international arbitrations.",
      achievements: [
        "$18,700,000 final arbitration award in technology partnership freeze-out",
        "$14,100,000 recovery under the Jones Act & General Maritime Law for offshore blowout",
        "Emergency TRO securing proprietary source code against foreign corporate adversary",
        "Chambers USA Band 1 in General Commercial Litigation"
      ]
    }
  };

  const a = attorneys[key];
  if (!a) return;

  const content = `
    <div style="margin-bottom: 20px;">
      <div style="display: flex; gap: 20px; align-items: center; margin-bottom: 20px;">
        <img src="${a.image}" alt="${a.name}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; object-position: center top; border: 3px solid var(--accent); flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
        <div>
          <span class="section-badge" style="margin-bottom: 6px;">${a.role}</span>
          <h4 style="font-size: 1.4rem; color: var(--primary); margin: 4px 0 0 0;">${a.name}</h4>
        </div>
      </div>
      <p style="font-size: 0.94rem; color: var(--text-main); line-height: 1.7; margin-bottom: 20px;">${a.bio}</p>
      
      <div style="background: var(--bg-page); border: 1px solid var(--border-light); border-radius: 8px; padding: 18px; margin-bottom: 20px;">
        <div style="margin-bottom: 12px;">
          <strong style="display: block; font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">Education</strong>
          <span style="font-size: 0.9rem; color: var(--primary); font-weight: 600;">${a.education}</span>
        </div>
        <div style="margin-bottom: 12px;">
          <strong style="display: block; font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">Judicial Clerkship</strong>
          <span style="font-size: 0.9rem; color: var(--text-main);">${a.clerkship}</span>
        </div>
        <div>
          <strong style="display: block; font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted); letter-spacing: 0.05em;">Bar & Court Admissions</strong>
          <span style="font-size: 0.88rem; color: var(--secondary);">${a.admissions}</span>
        </div>
      </div>

      <h5 style="font-size: 1.05rem; color: var(--primary); margin-bottom: 12px;">Landmark Matters & Recognition</h5>
      <ul style="list-style: none; margin-bottom: 24px;">
        ${a.achievements.map(ach => `
          <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.9rem; color: var(--text-main); margin-bottom: 8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" style="margin-top: 3px; flex-shrink: 0;"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${ach}</span>
          </li>
        `).join('')}
      </ul>

      <div style="text-align: right; display: flex; gap: 12px; justify-content: flex-end;">
        <button class="btn btn-outline-dark" onclick="closeModal();">Close</button>
        <a href="contact.html" class="btn btn-primary" onclick="closeModal();">Consult With Senior Counsel</a>
      </div>
    </div>
  `;

  openModal("Senior Counsel Profile & Credentials", content);
};

// Toast
function showToast(msg) {
  const toast = document.getElementById('ata-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
