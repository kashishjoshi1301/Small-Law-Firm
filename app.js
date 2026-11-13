/**
 * Atlantic Trial Attorneys | Interactive Website Engine
 * Catastrophic Trial Advocacy & Federal Appellate Counsel
 */

// Practice Areas Deep-Dive Data
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
    feeStructure: "Contingency Basis: 0$ out of pocket."
  }
};

// Case Results Data
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

// Attorney Biographies Data
const ATTORNEY_BIOS = {
  vance: {
    name: "Robert M. Vance, Esq.",
    role: "Managing Partner & Lead Trial Counsel",
    education: "Harvard Law School (J.D., magna cum laude) • Dartmouth College (B.A.)",
    barAdmissions: "Florida Bar, New York Bar, U.S. Supreme Court, 11th & 2nd Circuits",
    achievements: "Trial Lawyers Hall of Fame • 30+ jury verdicts exceeding $10M • Former Assistant U.S. Attorney",
    bio: "Robert M. Vance has earned a reputation as one of America's fiercest trial courtroom advocates. Over three decades, he has commanded multi-million dollar jury trials across aviation catastrophes, commercial trucking fatalities, and multi-district torts. Vance served as an Assistant United States Attorney before founding Atlantic Trial Attorneys, bringing ruthless federal trial discipline to every case."
  },
  rostova: {
    name: "Elena Rostova, Esq.",
    role: "Chair of Appellate & Constitutional Practice",
    education: "Columbia Law School (J.D., Articles Editor, Columbia Law Review) • Princeton University (A.B.)",
    barAdmissions: "District of Columbia Bar, New York Bar, U.S. Supreme Court, All Federal Circuit Courts",
    achievements: "Former Law Clerk to Justice of the U.S. Supreme Court • Author of 16 SCOTUS Petitions • Chambers Band 1 Appellate Advocate",
    bio: "Elena Rostova directs the firm's appellate, constitutional, and complex motions practice. After clerking on the Supreme Court of the United States and the D.C. Circuit Court of Appeals, she has established legal precedents cited in hundreds of judicial opinions. She is regularly retained as embedded appellate counsel during high-stakes trials to craft bulletproof jury instructions and preserve appellate victory."
  },
  sterling: {
    name: "Marcus J. Sterling, Esq.",
    role: "Senior Partner, Catastrophic Injury & Commercial Trials",
    education: "Georgetown University Law Center (J.D., cum laude) • Duke University (B.S. in Economics)",
    barAdmissions: "Florida Bar, District of Columbia Bar, U.S. Court of Federal Claims",
    achievements: "AV Preeminent® 5.0/5.0 Peer Review Rated • Over $250M recovered for catastrophic injury victims and founders",
    bio: "Marcus J. Sterling combines economic mastery with electrifying courtroom storytelling. He specializes in catastrophic commercial liability, offshore maritime accidents, and complex shareholder disputes. Sterling is renowned for cross-examining opposing technical and financial experts, methodically dismantling defense narratives before juries."
  }
};

// Document Initialization
document.addEventListener('DOMContentLoaded', () => {
  initCaseResultsFilter();
  initPracticeFilter();
  initFeeCalculator();
  initConsultationWizard();
  initFAQAccordion();
  initModals();
  initQuickIntakeForm();
});

/* ==========================================================================
   Case Results Filtering & Rendering
   ========================================================================== */
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
        <span>Lead Counsel: <strong class="result-meta-lead">${r.lead}</strong></span>
        <span style="color: var(--secondary); font-weight: 600;">Verified Matter</span>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Practice Areas Filtering
   ========================================================================== */
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
   Interactive Fee & Contingency Estimator
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
      amountDisplay.textContent = "0$ Upfront Contingency";
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

  // Update step panes
  document.querySelectorAll('.wizard-step-pane').forEach((pane, idx) => {
    pane.classList.toggle('active', idx + 1 === step);
  });

  // Update step indicators
  document.querySelectorAll('.step-indicator').forEach((ind, idx) => {
    ind.classList.remove('active', 'completed');
    if (idx + 1 === step) {
      ind.classList.add('active');
    } else if (idx + 1 < step) {
      ind.classList.add('completed');
    }
  });

  // Update buttons
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
    const email = document.getElementById('wizard-email');

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

    document.querySelector('.wizard-buttons').style.display = 'none';
    showToast(`Case intake confirmed: #${refCode}`);
  }
}

/* ==========================================================================
   Quick Hero Callback Intake Form
   ========================================================================== */
function initQuickIntakeForm() {
  const form = document.getElementById('hero-quick-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('hero-client-name');
    const phoneInput = document.getElementById('hero-client-phone');

    if (!nameInput.value || !phoneInput.value) {
      showToast('Please enter your name and direct phone number.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Securing Partner Callback...';

    setTimeout(() => {
      form.innerHTML = `
        <div style="text-align: center; padding: 24px 10px;">
          <div style="color: var(--secondary); font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">✓ Priority Callback Logged</div>
          <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 16px;">
            A Senior Partner on-duty has been notified. We will call <strong>${phoneInput.value}</strong> directly.
          </p>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Protected by Attorney-Client Confidentiality</div>
        </div>
      `;
      showToast('Direct Partner Callback Requested.');
    }, 600);
  });
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Modal Dialogs (Practice Strategy & Attorney Bios)
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
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('ata-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Global Triggers for Modals
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
        <button class="btn btn-primary" onclick="closeModal(); scrollToEvaluation();">Request Direct Case Review</button>
      </div>
    </div>
  `;

  openModal("Practice Strategy & Scope", content);
};

window.openAttorneyModal = function(key) {
  const bio = ATTORNEY_BIOS[key];
  if (!bio) return;

  const content = `
    <div>
      <h4 style="font-size: 1.5rem; color: var(--primary); margin-bottom: 4px;">${bio.name}</h4>
      <div style="color: var(--accent); font-weight: 700; font-size: 0.88rem; text-transform: uppercase; margin-bottom: 20px;">${bio.role}</div>

      <div style="background: var(--bg-page); border: 1px solid var(--border-light); border-radius: 8px; padding: 18px; margin-bottom: 22px;">
        <div style="font-size: 0.85rem; margin-bottom: 6px;"><strong>Education:</strong> ${bio.education}</div>
        <div style="font-size: 0.85rem; margin-bottom: 6px;"><strong>Admissions:</strong> ${bio.barAdmissions}</div>
        <div style="font-size: 0.85rem; color: var(--secondary);"><strong>Accreditations:</strong> ${bio.achievements}</div>
      </div>

      <p style="font-size: 0.96rem; color: var(--text-main); line-height: 1.75; margin-bottom: 24px;">${bio.bio}</p>

      <div style="text-align: right;">
        <button class="btn btn-primary" onclick="closeModal(); scrollToEvaluation();">Schedule Private Case Conference</button>
      </div>
    </div>
  `;

  openModal("Senior Partner Credentials", content);
};

// Scroll Helper
window.scrollToEvaluation = function() {
  const el = document.getElementById('evaluation');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

// Toast Helper
function showToast(msg) {
  const toast = document.getElementById('ata-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
