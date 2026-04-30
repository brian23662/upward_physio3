/**
 * About DJ — single source of truth for bio copy.
 * Editing here updates the /about page.
 *
 * Bracketed values like [Service Area] are placeholders DJ should fill
 * before launch — left in deliberately so they're easy to grep.
 */

export interface AboutContent {
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  paragraphs: string[];
  credentials: { label: string; value: string }[];
  philosophy: string;
}

export const ABOUT: AboutContent = {
  eyebrow: "About DJ",
  headingLead: "A clinician who",
  headingItalic: "trains alongside you.",

  paragraphs: [
    "I'm Daniel — DJ to most people. Doctor of Physical Therapy out of Washington University in St. Louis, Certified Strength and Conditioning Specialist, and seven years into a career that's deliberately straddled clinical orthopedics, in-home concierge care, and large-scale occupational health.",
    "I've spent four years in a busy outpatient orthopedic practice, three years running one-on-one in-home and gym-based sessions for adult patients across the DC area, and a year building the first preventative physical therapy program for a major metropolitan transit agency — bus and rail crews, operators, dispatchers, and transit police.",
    "These days I run an occupational health center in the Denver area by day and take on concierge clients through partner gyms in the evenings. Upward Physio is the practice I'm building toward full-time — bringing those modes under one roof.",
    "I work cash-pay so I can give you the time and attention the work actually requires. No 15-minute evaluations, no surprise insurance denials, no hand-offs to a tech.",
  ],

  credentials: [
    { label: "Doctorate", value: "DPT — Washington University in St. Louis, 2020" },
    { label: "Certification", value: "CSCS (NSCA) — Strength & Conditioning" },
    { label: "Experience", value: "7 years across orthopedic, concierge & occupational care" },
    { label: "Currently", value: "Denver Metro — in-home & partner gyms" },
  ],

  philosophy:
    "The goal isn't to graduate you from physical therapy. It's to hand you a body — and an understanding of it — that doesn't need me anymore.",
};

export interface HowItWorksStep {
  number: string;
  title: string;
  body: string;
}

export interface HowItWorksDetail {
  label: string;
  value: string;
}

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  headingLead: "Concierge care,",
  headingItalic: "no clinic required.",
  intro:
    "Most physical therapy is built around the clinic's schedule. Upward Physio is built around yours — sessions happen where you already train, work, or live.",

  steps: [
    {
      number: "01",
      title: "Reach out",
      body: "Send a note through the contact form or email DJ directly. Tell him a little about what's going on — an injury, a goal, a question. He reads every message himself.",
    },
    {
      number: "02",
      title: "Free intro call",
      body: "A 20-minute conversation to make sure this is the right fit. You'll walk through your history, what you're trying to do, and how the work would actually look. No pressure, no pitch.",
    },
    {
      number: "03",
      title: "First session, on your turf",
      body: "DJ comes to your home or meets you at a partner gym. You'll do a thorough movement assessment, build the first version of your plan, and leave with something concrete to work on.",
    },
  ] as HowItWorksStep[],

  details: [
    {
      label: "Where",
      value: "In-home and partner gyms across the Denver metro area. Telehealth available for follow-ups.",
    },
    {
      label: "Pricing",
      value: "Cash-pay, transparent rates. Request a quote during your intro call.",
    },
    {
      label: "Insurance",
      value: "Out-of-network. Superbill provided on request — many plans reimburse a portion.",
    },
    {
      label: "Sessions",
      value: "60–75 minutes, one-on-one. Packages available for longer engagements.",
    },
  ] as HowItWorksDetail[],
};
