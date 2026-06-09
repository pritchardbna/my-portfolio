"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function InventoryAtAsurion() {
  return (
    <div className="min-h-screen bg-[#F0EDF5]">
      {/* Back nav */}
      <div className="px-6 py-4 bg-white border-b border-gray-100">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-[#4A3068] font-medium hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Case Studies
        </Link>
      </div>

      {/* Deck header */}
      <div className="px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-gray-500">All slides · 8 total</span>
          <span className="text-xs font-semibold tracking-widest text-[#4A3068] uppercase bg-purple-100 px-3 py-1 rounded-full">
            Monthly Product Review · Asurion
          </span>
        </div>

        {/* Slides grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* ── SLIDE 01 ── Title */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-start justify-between mb-8">
                <span className="text-[#5B2C8D] font-bold text-xl tracking-tight">asurion</span>
                <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">Monthly Product Review</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#5B2C8D] mb-3 bg-purple-50 inline-block px-2 py-1 rounded self-start">
                  Monthly Product Review Deep Dive
                </p>
                <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  Inventory at Asurion
                </h1>
                <p className="text-xs text-gray-500 mb-8">
                  How fulfillment systems enable visibility, accountability, and scale
                </p>
                <div className="mt-auto flex gap-8 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-gray-400 mb-0.5">Presented by</p>
                    <p className="text-xs font-semibold text-gray-700">Bryant Mayne</p>
                    <p className="text-[10px] text-gray-400">Director, D2M Fulfillment &amp; Finance</p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-widest uppercase text-gray-400 mb-0.5">Presented by</p>
                    <p className="text-xs font-semibold text-gray-700">Thays Pritchard</p>
                    <p className="text-[10px] text-gray-400">Product Management</p>
                  </div>
                </div>
              </div>
              <div className="text-right mt-4">
                <span className="text-[9px] tracking-widest uppercase text-gray-300">Confidential</span>
              </div>
            </div>
            <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">01 &nbsp; Inventory at Asurion</span>
            </div>
          </div>

          {/* ── SLIDE 02 ── Agenda */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 p-6 flex flex-col">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#5B2C8D] mb-2">
                Today&apos;s Discussion
              </p>
              <h2 className="text-2xl font-light text-gray-900 mb-5">Agenda</h2>
              <ol className="space-y-3 flex-1">
                {[
                  "Inventory Supports Every Fulfillment Motion Across Asurion's Service Network",
                  "Inventory Is Split Across Multiple Systems of Record",
                  "Fulfillment Systems Connect Inventory Movement to Financial Accountability",
                  "One Operating Model Improves Visibility, Control, and Scale",
                  "Scaling the Proven Inventory Model Across Every Program",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#5B2C8D] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">02 &nbsp; Agenda — Today&apos;s Discussion</span>
            </div>
          </div>

          {/* ── SLIDE 03 ── Scale */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 p-6 flex flex-col">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#5B2C8D] mb-2">01 · Scale</p>
              <h2 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
                Inventory supports every fulfillment motion across Asurion&apos;s service network
              </h2>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#5B2C8D] text-white rounded-lg p-3">
                  <p className="text-[9px] tracking-widest uppercase opacity-70 mb-1">Inventory Value Across Programs</p>
                  <p className="text-2xl font-bold">~$517M</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-3">
                  <p className="text-[9px] tracking-widest uppercase text-gray-400 mb-1">Locations Holding Inventory</p>
                  <p className="text-2xl font-bold text-gray-800">~890</p>
                  <p className="text-[9px] text-gray-400">locations</p>
                </div>
              </div>

              {/* Three columns */}
              <div className="grid grid-cols-3 gap-2 flex-1">
                {[
                  {
                    label: "Replacement Fulfillment",
                    items: ["Advance Exchange", "Corporate Stores", "Franchise Partners", "Recovery & Disposition"],
                  },
                  {
                    label: "Same-Unit Repair",
                    items: ["Corporate Stores", "uBreakiFix", "Mail-In Repair", "Third-Party Repair Providers"],
                  },
                  {
                    label: "Revenue Logistics",
                    items: ["Insurance Devices", "Return Parts", "Recovery & Disposition"],
                  },
                ].map((col) => (
                  <div key={col.label} className="bg-gray-50 rounded-lg p-2">
                    <p className="text-[9px] font-bold text-gray-700 mb-1.5 leading-tight">{col.label}</p>
                    <ul className="space-y-0.5">
                      {col.items.map((item) => (
                        <li key={item} className="text-[9px] text-gray-500 leading-tight">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom callout */}
              <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-2.5">
                <p className="text-[9px] text-gray-600 leading-relaxed">
                  Inventory is a material business asset — constantly moving across warehouses, field locations, stores, partners, and customer channels. Every movement requires visibility and accountability.
                </p>
              </div>
            </div>
            <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">03 &nbsp; Inventory supports every fulfillment motion</span>
            </div>
          </div>

          {/* ── SLIDE 04 ── Systems of Record */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 p-5 flex flex-col">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#5B2C8D] mb-1.5">02 · Hide</p>
              <h2 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                Inventory is split across multiple systems of record
              </h2>
              <p className="text-[9px] text-gray-500 mb-3 leading-relaxed">
                When a program&apos;s inventory and finances live in one system, every unit and dollar is traceable — $366M is already reconciled. $346 F&amp;O is remaining in Distro; $13.9M sits on legacy systems.
              </p>

              {/* Table */}
              <div className="flex-1 overflow-hidden">
                <table className="w-full text-[9px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left pb-1.5 font-semibold text-gray-500 uppercase tracking-wider">Program</th>
                      <th className="text-right pb-1.5 font-semibold text-gray-500 uppercase tracking-wider">Inv. Value</th>
                      <th className="text-right pb-1.5 font-semibold text-gray-500 uppercase tracking-wider">System</th>
                      <th className="text-right pb-1.5 font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="pt-2 pb-1">
                        <span className="text-[8px] font-bold tracking-widest uppercase text-gray-400">Replacement</span>
                      </td>
                    </tr>
                    {[
                      { name: "Advance Exchange", value: "$206.6M", system: "D365 F&O", status: "Completed", ok: true },
                      { name: "N&S3", sub: "Next Day payment delivery w/ Setup", value: "$153M", system: "D365 F&O", status: "Completed", ok: true },
                      { name: "DXO", sub: "Delivery & Export Setup", value: "$78.9M", system: "D365 F&O", status: "Completed", ok: true },
                    ].map((row) => (
                      <tr key={row.name} className="border-b border-gray-50">
                        <td className="py-1.5">
                          <p className="font-medium text-gray-800">{row.name}</p>
                          {row.sub && <p className="text-gray-400 text-[8px]">{row.sub}</p>}
                        </td>
                        <td className="text-right font-semibold text-gray-700">{row.value}</td>
                        <td className="text-right text-gray-500">{row.system}</td>
                        <td className="text-right">
                          <span className="bg-green-100 text-green-700 text-[8px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={4} className="pt-2 pb-1">
                        <span className="text-[8px] font-bold tracking-widest uppercase text-gray-400">Refurb</span>
                      </td>
                    </tr>
                    {[
                      { name: "uBreakiFix", value: "$0", system: "ServiceBench + Distro", status: "Upcoming", ok: false },
                      { name: "Same-Unit Repair", value: "$6.3M", system: "ServiceBench", status: "Upcoming", ok: false },
                    ].map((row) => (
                      <tr key={row.name} className="border-b border-gray-50">
                        <td className="py-1.5 font-medium text-gray-800">{row.name}</td>
                        <td className="text-right font-semibold text-gray-700">{row.value}</td>
                        <td className="text-right text-gray-500">{row.system}</td>
                        <td className="text-right">
                          <span className="bg-amber-100 text-amber-700 text-[8px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Gap callout */}
              <div className="mt-3 flex gap-3">
                <div className="flex-1 bg-red-50 border border-red-200 rounded-lg p-2 text-center">
                  <p className="text-[9px] text-red-400 mb-0.5">Gap / Unreconciled</p>
                  <p className="text-base font-bold text-red-600">~$390.8M</p>
                </div>
                <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-2 text-center">
                  <p className="text-[9px] text-green-500 mb-0.5">Reconciled</p>
                  <p className="text-base font-bold text-green-700">$126.3M</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">04 &nbsp; Limited traceability creates financial risk</span>
            </div>
          </div>

          {/* ── SLIDE 05 ── Mechanism */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 p-5 flex flex-col">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#5B2C8D] mb-1.5">
                03 · Mechanism · Centerpiece
              </p>
              <h2 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                Fulfillment systems connect inventory movement to financial accountability
              </h2>
              <p className="text-[9px] text-gray-500 mb-4 leading-relaxed">
                Every unit travels a single chain — from a physical movement to a financial record. The goal isn&apos;t inventory in one place; it&apos;s keeping that chain unbroken across every system it touches.
              </p>

              {/* Flow labels */}
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[8px] font-bold tracking-widest uppercase text-gray-400">Physical Inventory Movement</span>
                <span className="text-[8px] font-bold tracking-widest uppercase text-[#5B2C8D]">Financial Accountability</span>
              </div>

              {/* Flow diagram */}
              <div className="flex items-center gap-1 flex-1">
                {[
                  "Procurement",
                  "Warehouse",
                  "Field Location / Store",
                  "Customer Fulfillment",
                  "Inventory Control",
                  "Financial Accountability",
                  "Close / Billing",
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-1 flex-1 min-w-0">
                    <div
                      className={`flex-1 rounded-md p-1.5 text-center text-[8px] font-semibold leading-tight ${
                        i >= 4
                          ? "bg-[#5B2C8D] text-white"
                          : "bg-purple-50 text-[#5B2C8D] border border-purple-200"
                      }`}
                    >
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-gray-300 text-xs flex-shrink-0">→</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-[#5B2C8D] rounded-lg p-3">
                <p className="text-[9px] text-white leading-relaxed">
                  The goal is not inventory in one system — it is maintaining{" "}
                  <strong>accountability from procurement through financial close</strong>. Every inventory movement eventually becomes a financial event.
                </p>
              </div>
            </div>
            <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">05 &nbsp; Fulfillment systems connect movement to accountability</span>
            </div>
          </div>

          {/* ── SLIDE 06 ── Future State */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 p-5 flex flex-col">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#5B2C8D] mb-1.5">04 · Future State</p>
              <h2 className="text-base font-bold text-gray-900 mb-4 leading-snug">
                One operating model improves visibility, control, and scale
              </h2>

              <div className="grid grid-cols-2 gap-3 flex-1">
                {/* TODAY */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-gray-500">Today</span>
                    <span className="text-[8px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">Disconnected systems</span>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Inventory synchronization",
                      "Manual reconciliation",
                      "Billing disputes",
                      "Financial visibility gaps",
                      "Partner traceability",
                      "Custom integrations",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-[9px] text-gray-600">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FUTURE */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-[#5B2C8D]">Future</span>
                    <span className="text-[8px] bg-[#5B2C8D] text-white px-2 py-0.5 rounded-full font-medium">Unified operating model</span>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Inventory and finance move together",
                      "Near-line visibility",
                      "Sustainable inventory movement",
                      "Explainable actions",
                      "Unified fulfillment",
                      "Flexible product bundles",
                      "Better AI foundation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-[9px] text-gray-700">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-3 bg-purple-50 border border-purple-200 rounded-lg p-2.5">
                <p className="text-[9px] text-[#5B2C8D] leading-relaxed">
                  Inventory and financial records should remain{" "}
                  <strong>connected throughout the fulfillment lifecycle</strong> — reconciliation becomes a natural outcome, not a separate activity.
                </p>
              </div>
            </div>
            <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">06 &nbsp; One operating model improves visibility &amp; scale</span>
            </div>
          </div>

          {/* ── SLIDE 07 ── Roadmap */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 p-5 flex flex-col">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#5B2C8D] mb-1.5">05 · Roadmap</p>
              <h2 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                A phased path to consolidate every inventory program onto a single ERP
              </h2>
              <p className="text-[9px] text-gray-500 mb-4 leading-relaxed">
                Moving inventory and finances across separate systems creates reconciliation gaps where loss accumulates. Each phase consolidates one fragmented system into the D365 F&amp;O ERP, establishing a single source of truth that exposes financial controls and visibility across every system it touches.
              </p>

              {/* Phase headers */}
              <div className="grid grid-cols-5 gap-1 mb-2">
                <div className="col-span-1" />
                {[
                  { year: "2024", label: "Phase 1" },
                  { year: "2025", label: "Phase 2" },
                  { year: "2026", label: "Phase 3" },
                  { year: "2027", label: "Phase 4" },
                ].map((p) => (
                  <div key={p.year} className="text-center">
                    <p className="text-[8px] text-gray-400">{p.label}</p>
                    <p className="text-[10px] font-bold text-gray-800">{p.year}</p>
                  </div>
                ))}
              </div>

              {/* Phase rows */}
              <div className="flex-1 space-y-2">
                {[
                  {
                    label: "Consolidation",
                    color: "bg-[#5B2C8D]",
                    cells: [
                      "Inventory ERP for D365 / N&S3",
                      "UBIF Non-Portal Integration",
                      "Inventory ERP for SLIR",
                      "UBIF Distro Migration",
                    ],
                  },
                  {
                    label: "Delivered Benefits",
                    color: "bg-green-500",
                    cells: [
                      "$2.1M billing gap gains\n$4.8M+ trailing gains\nFoundation for the SUR repair ERP",
                      "uBreakiFix inventory moves to D365 F&O\nD365 Coord recovered by D&S",
                      "Store inventory in D365 F&O\n100% of inventory is one ERP",
                      "One platform for one ERP\nOne operating model, accountable in one ledger",
                    ],
                  },
                ].map((row) => (
                  <div key={row.label} className="grid grid-cols-5 gap-1 items-start">
                    <div className="flex items-center">
                      <span className={`text-[8px] font-bold text-white ${row.color} px-1.5 py-1 rounded text-center w-full leading-tight`}>
                        {row.label}
                      </span>
                    </div>
                    {row.cells.map((cell, i) => (
                      <div key={i} className="bg-purple-50 rounded p-1.5 text-[8px] text-gray-700 leading-relaxed whitespace-pre-line min-h-[48px]">
                        {cell}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-3 flex gap-3">
                {[
                  { color: "bg-green-400", label: "Completed" },
                  { color: "bg-[#5B2C8D]", label: "In Progress" },
                  { color: "bg-gray-200", label: "Planned" },
                ].map((l) => (
                  <div key={l.label} className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${l.color}`} />
                    <span className="text-[8px] text-gray-500">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">07 &nbsp; Scaling the proven inventory model</span>
            </div>
          </div>

          {/* ── SLIDE 08 ── Why Distro Matters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="flex-1 p-5 flex flex-col">
              <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-[#5B2C8D] mb-0.5">
                06 · Why Distro Matters
              </p>
              <p className="text-[8px] text-gray-400 tracking-wider uppercase mb-2">
                Phase 4 · UBIF Distro Migration: Slotted for 2027
              </p>
              <h2 className="text-base font-bold text-gray-900 mb-1 leading-snug">
                Distro is the last system standing — and the most strategic to retire
              </h2>
              <p className="text-[9px] text-gray-500 mb-4 leading-relaxed">
                There&apos;s no single technical blocker — Distro is stable and could run on our stack indefinitely. The case for moving in 2027 is structural: keeping the in-house warehouse platform separate cannibalizes financial, operational, and commercial risk as we scale.
              </p>

              {/* 4 pillars */}
              <div className="grid grid-cols-2 gap-2 flex-1">
                {[
                  {
                    icon: "📊",
                    title: "Financial single source of truth",
                    body: "Inventory becomes fully accessible across Portal + integrations between Portal and Distro. Inventory in Distro activates the activity that flows outside the ERP.",
                    goal: "Transactions and financials update automatically in one ledger — every dollar reconciled.",
                  },
                  {
                    icon: "🛡️",
                    title: "Designed-out loss exposure",
                    body: "Powered systems and handoffs remain integrated where inventory is handled by handoffs so that flows across the business.",
                    goal: "One platform and one ERP — a clean slate that flows across the business.",
                  },
                  {
                    icon: "⚙️",
                    title: "Operational resilience",
                    body: "Distro is a separate application optimization for being a couple of operations — the D&S tool kit for logistics from Distro—.",
                    goal: "2 partners (D365) platform our process are asking us to standardize on.",
                  },
                  {
                    icon: "🤝",
                    title: "Vendor-driven request",
                    body: "UPS as a carrier vendor is retiring all their mapping on Distro, relying on Distro's tool kit. The D&S tool is integrated with it — it's already the SDK for mobile units launching it.",
                    goal: "2 partners (D365) platform our process are asking us to standardize on.",
                  },
                ].map((pillar) => (
                  <div key={pillar.title} className="bg-purple-50 rounded-lg p-2.5 flex flex-col gap-1">
                    <div className="flex items-start gap-1.5">
                      <span className="text-sm">{pillar.icon}</span>
                      <p className="text-[9px] font-bold text-gray-800 leading-tight">{pillar.title}</p>
                    </div>
                    <p className="text-[8px] text-gray-600 leading-relaxed">{pillar.body}</p>
                    <p className="text-[8px] text-[#5B2C8D] font-semibold leading-relaxed border-t border-purple-200 pt-1 mt-auto">
                      Goal: {pillar.goal}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom callout */}
              <div className="mt-3 bg-[#5B2C8D] rounded-lg p-3">
                <p className="text-[9px] text-white leading-relaxed">
                  The end state retiring Distro puts every unit and every dollar in one ERP — explainable movement, explainable finances, a resilient team, and a client-ready foundation to scale and build AI on.
                </p>
              </div>
            </div>
            <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
              <span className="text-xs text-gray-400">08 &nbsp; Why simplifying systems matters</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
