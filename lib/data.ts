export interface Attorney {
  id: string;
  name: string;
  title: string;
  role: string;
  image: string;
  education: string;
  clerkship: string;
  admissions: string;
  bio: string;
  achievements: string[];
}

export interface PracticeArea {
  id: string;
  title: string;
  category: string;
  benchmark: string;
  lead: string;
  summary: string;
  deliverables: string[];
  feeStructure: string;
  icon: string;
}

export interface CaseResult {
  id: string;
  amount: string;
  category: string;
  categoryLabel: string;
  title: string;
  summary: string;
  lead: string;
  mandate?: string;
}

export const ATTORNEY_DATA: Record<string, Attorney> = {
  vance: {
    id: "vance",
    name: "Robert M. Vance, Esq.",
    title: "Lead Trial Counsel & Aviation Litigator",
    role: "Senior Founding Partner",
    image: "/images/attorney-vance.jpg",
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
    id: "rostova",
    name: "Elena Rostova, Esq.",
    title: "Chair, Appellate & White-Collar Practice",
    role: "Appellate Chair",
    image: "/images/attorney-rostova.jpg",
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
    id: "sterling",
    name: "Marcus J. Sterling, Esq.",
    title: "Chair, Commercial Trial & Admiralty Litigation",
    role: "Commercial Chair",
    image: "/images/attorney-sterling.jpg",
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

export const PRACTICE_DATA: Record<string, PracticeArea> = {
  aviation: {
    id: "aviation",
    title: "Aviation & Mass Catastrophe Litigation",
    category: "Catastrophic Trial",
    benchmark: "$42.5M Landmark Airline Settlement",
    lead: "Robert M. Vance, Esq.",
    icon: "/images/icon-aviation.svg",
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
    id: "appellate",
    title: "Federal & State Appellate Advocacy",
    category: "Appellate Heritage",
    benchmark: "16 U.S. Supreme Court Briefs Filed",
    lead: "Elena Rostova, Esq.",
    icon: "/images/icon-appellate.svg",
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
    id: "commercial",
    title: "High-Stakes Commercial & Partnership Litigation",
    category: "Commercial Trial",
    benchmark: "$18.7M Shareholder Arbitration Award",
    lead: "Marcus J. Sterling, Esq.",
    icon: "/images/icon-commercial.svg",
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
    id: "trucking",
    title: "Catastrophic Commercial Trucking & Transportation",
    category: "Catastrophic Trial",
    benchmark: "$28.2M Jury Verdict Against Interstate Carrier",
    lead: "Robert M. Vance, Esq.",
    icon: "/images/icon-trucking.svg",
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
    id: "whitecollar",
    title: "White-Collar Defense & Government Investigations",
    category: "Federal Practice",
    benchmark: "Complete Dismissal of Multi-Agency Securities Indictment",
    lead: "Elena Rostova, Esq.",
    icon: "/images/icon-whitecollar.svg",
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
    id: "maritime",
    title: "Maritime & Admiralty Catastrophic Injury",
    category: "Catastrophic Trial",
    benchmark: "$14.1M Offshore Rig Settlement",
    lead: "Marcus J. Sterling, Esq.",
    icon: "/images/icon-maritime.svg",
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

export const CASE_RESULTS: CaseResult[] = [
  {
    id: "aviation-settlement",
    amount: "$42,500,000",
    category: "aviation",
    categoryLabel: "Aviation Catastrophe",
    title: "Commercial Air Carrier Mass Casualty Settlement",
    summary: "Represented 14 passenger families in multi-district litigation involving dual-engine failure. Defeated federal preemption defense and negotiated historic confidential settlement prior to trial.",
    lead: "Robert M. Vance, Esq.",
    mandate: "Multi-District Litigation Settlement"
  },
  {
    id: "trucking-verdict",
    amount: "$28,200,000",
    category: "trucking",
    categoryLabel: "Catastrophic Trucking",
    title: "Interstate Freight Collision Jury Verdict",
    summary: "Secured unanimous federal jury verdict against logistics broker and carrier following traumatic brain injury collision. Proved corporate falsification of driver hours of service.",
    lead: "Robert M. Vance, Esq.",
    mandate: "Unanimous Federal Jury Verdict"
  },
  {
    id: "appellate-win",
    amount: "Defense Win",
    category: "appellate",
    categoryLabel: "Federal Appellate",
    title: "SCOTUS & 11th Circuit Antitrust Precedent",
    summary: "Overturned an emergency preliminary injunction against a national medical diagnostics group, establishing landmark precedent on federal jurisdiction and anti-competitive claims.",
    lead: "Elena Rostova, Esq.",
    mandate: "Appellate Mandate"
  },
  {
    id: "commercial-award",
    amount: "$18,700,000",
    category: "commercial",
    categoryLabel: "Commercial Arbitration",
    title: "Executive Shareholder Freeze-Out Award",
    summary: "Arbitrated contentious buyout dispute involving proprietary software equity and offshore intellectual property transfers. Secured 100% of claimed damages and attorney fees.",
    lead: "Marcus J. Sterling, Esq.",
    mandate: "Final Arbitration Award"
  },
  {
    id: "whitecollar-dismissal",
    amount: "Complete Dismissal",
    category: "whitecollar",
    categoryLabel: "Government Investigation",
    title: "SEC & DOJ Healthcare Securities Inquiry",
    summary: "Conducted internal corporate audit and presented exculpatory evidence to federal prosecutors, prompting DOJ to decline all criminal charges and close investigation without fines.",
    lead: "Elena Rostova, Esq.",
    mandate: "Complete Declination of Prosecution"
  },
  {
    id: "maritime-recovery",
    amount: "$14,100,000",
    category: "maritime",
    categoryLabel: "Admiralty Catastrophe",
    title: "Offshore Industrial Rig Wrongful Death Settlement",
    summary: "Secured multi-million dollar recovery under the Jones Act and General Maritime Law for surviving family of chief engineer following catastrophic offshore drilling rig failure.",
    lead: "Marcus J. Sterling, Esq.",
    mandate: "Jones Act & Maritime Settlement"
  }
];
