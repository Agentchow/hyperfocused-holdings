"use client";
import React from "react";
import ExpandableGrid from "./ui/expandable-grid";

export default function CaseStudies() {
  const items = [
    {
      title: "CRM Automation",
      metric: "25% time reduction, 1% revenue share + equity",
      time: "6 months",
      blurb: "CRM optimization and AI-powered customer funnel automation.",
      details: [
        "Optimized CRM workflows and systemized customer funnel processes",
        "Reduced admin work by 25% (10 hours/week) through automation",
        "Integrated AI receptionist for quoting, booking, and general inquiries",
        "Deployed AI sales bot for handling sales, upselling, and intelligent escalation",
        "Compensation: Partial equity stake + 1% profit share on all sales",
      ],
    },
    {
      title: "Industrial Roll‑Up",
      metric: "2.0× MOIC, +22% EBITDA",
      time: "24 months",
      blurb: "Platform with 5 add‑ons across adjacent services.",
      details: [
        "Centralized scheduling, routing, and capacity management",
        "Standardized pricing and value‑based tiers",
        "Unified brand and shared services across add‑ons",
        "Weekly operator cadence with KPI dashboards",
      ],
    },
    {
      title: "B2B Services",
      metric: "1.7× TVPI (interim), +18% CAGR",
      time: "36 months",
      blurb: "Pricing, utilization, and GTM overhaul.",
      details: [
        "Introduced tiered pricing and packaging",
        "Utilization dashboards and workload rebalance",
        "Account expansion playbook and cross‑sell motion",
        "Pipeline reviews and win‑loss analysis",
      ],
    },
    {
      title: "SaaS Optimization",
      metric: "+12 pts gross margin",
      time: "9 months",
      blurb: "Cloud cost controls and tiered packaging.",
      details: [
        "Usage‑aware tiered packaging and annual prepay",
        "Cloud guardrails, budgets, and unit economics focus",
        "In‑product education and support deflection",
        "Sunsetted negative‑margin features",
      ],
    },
  ];

  return (
    <ExpandableGrid
      items={items}
      disclaimer="Case study details are illustrative mock examples and not guarantees of results."
    />
  );
}


