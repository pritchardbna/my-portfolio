import PptxGenJS from "pptxgenjs";

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE"; // 13.33 × 7.5 in

// ── Palette ────────────────────────────────────────────────────────────────
const P  = "5B2C8D";   // Asurion purple
const PL = "EDE8F5";   // light purple bg
const PM = "C4AEED";   // medium purple border
const W  = "FFFFFF";
const G9 = "111111";
const G6 = "555555";
const G4 = "888888";
const G2 = "DDDDDD";
const GB = "F5F4F8";   // light bg
const GN = "1B6B2B";   // green
const GL = "E6F4EA";   // green light
const RD = "B71C1C";   // red
const RL = "FDECEA";   // red light
const AM = "E65100";   // amber
const AL = "FFF3E0";   // amber light

const SW = 13.33;  // slide width
const SH = 7.5;    // slide height
const ML = 0.5;    // margin left
const MR = 0.5;    // margin right
const CW = SW - ML - MR; // content width = 12.33

// ── Helpers ────────────────────────────────────────────────────────────────
const H1 = (s, txt, y, w = CW) =>
  s.addText(txt, { x: ML, y, w, h: 0.9, fontSize: 26, bold: true, color: G9, fontFace: "Calibri Light", valign: "top" });

const H2 = (s, txt, y, w = CW) =>
  s.addText(txt, { x: ML, y, w, h: 1.1, fontSize: 22, bold: true, color: G9, fontFace: "Calibri Light", valign: "top" });

const chip = (s, txt, x, y, bgColor = PL, txtColor = P, w = 3.0) => {
  s.addShape(pptx.ShapeType.roundRect, { x, y, w, h: 0.26, fill: { color: bgColor }, line: { color: bgColor }, rectRadius: 0.05 });
  s.addText(txt, { x: x + 0.1, y: y + 0.02, w: w - 0.2, h: 0.22, fontSize: 7.5, bold: true, color: txtColor, charSpacing: 1.5, fontFace: "Calibri", valign: "middle" });
};

const sectionLabel = (s, txt, y) =>
  s.addText(txt, { x: ML, y, w: 6, h: 0.18, fontSize: 7.5, bold: true, color: P, charSpacing: 3, fontFace: "Calibri", valign: "middle" });

const callout = (s, txt, y, h = 0.6, bgColor = P, txtColor = W, fontSize = 10) => {
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y, w: CW, h, fill: { color: bgColor }, line: { color: bgColor }, rectRadius: 0.05 });
  s.addText(txt, { x: ML + 0.2, y: y + 0.05, w: CW - 0.4, h: h - 0.1, fontSize, color: txtColor, fontFace: "Calibri", valign: "middle" });
};

const footer = (s, num, title) => {
  s.addShape(pptx.ShapeType.rect, { x: 0, y: SH - 0.32, w: SW, h: 0.32, fill: { color: GB }, line: { color: G2, width: 0.5 } });
  s.addText(`${String(num).padStart(2, "0")}   ${title}`, {
    x: 0.4, y: SH - 0.28, w: SW - 0.8, h: 0.22,
    fontSize: 7.5, color: G4, fontFace: "Calibri",
  });
};

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 01 — Title
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  // Header bar
  s.addText("asurion", { x: ML, y: 0.28, w: 2.5, h: 0.4, fontSize: 22, bold: true, color: P, fontFace: "Calibri" });
  s.addText("MONTHLY PRODUCT REVIEW", { x: SW - 3.8, y: 0.32, w: 3.5, h: 0.24, fontSize: 7.5, color: G4, bold: true, charSpacing: 1.5, fontFace: "Calibri", align: "right" });
  s.addShape(pptx.ShapeType.line, { x: ML, y: 0.78, w: CW, h: 0, line: { color: G2, width: 0.75 } });

  // Label
  chip(s, "MONTHLY PRODUCT REVIEW DEEP DIVE", ML, 1.05, PL, P, 3.2);

  // Main title
  s.addText("Inventory at Asurion", { x: ML, y: 1.5, w: 10, h: 1.6, fontSize: 48, bold: true, color: G9, fontFace: "Calibri Light", valign: "middle" });
  s.addText("How fulfillment systems enable visibility, accountability, and scale", {
    x: ML, y: 3.15, w: 9, h: 0.4,
    fontSize: 14, color: G6, fontFace: "Calibri", valign: "middle",
  });

  // Divider
  s.addShape(pptx.ShapeType.line, { x: ML, y: 3.75, w: 5.5, h: 0, line: { color: G2, width: 0.75 } });

  // Presenters
  const presX = [ML, 4.0];
  const names = ["Bryant Mayne", "Thays Pritchard"];
  const titles = ["Director, D2M Fulfillment & Finance", "Product Management"];
  presX.forEach((x, i) => {
    s.addText("PRESENTED BY", { x, y: 3.95, w: 3.5, h: 0.2, fontSize: 7, color: G4, bold: true, charSpacing: 2, fontFace: "Calibri" });
    s.addText(names[i],  { x, y: 4.18, w: 3.5, h: 0.3, fontSize: 13, bold: true, color: G9, fontFace: "Calibri" });
    s.addText(titles[i], { x, y: 4.5,  w: 3.5, h: 0.24, fontSize: 9.5, color: G6, fontFace: "Calibri" });
  });

  s.addText("CONFIDENTIAL", { x: SW - 2.0, y: SH - 0.55, w: 1.8, h: 0.22, fontSize: 7, color: G4, bold: true, charSpacing: 2, fontFace: "Calibri", align: "right" });

  footer(s, 1, "Inventory at Asurion");
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 02 — Agenda
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "TODAY'S DISCUSSION", 0.38);
  s.addText("Agenda", { x: ML, y: 0.62, w: 8, h: 1.0, fontSize: 44, color: G9, fontFace: "Calibri Light", valign: "top" });

  const items = [
    "Inventory Supports Every Fulfillment Motion Across Asurion's Service Network",
    "Inventory Is Split Across Multiple Systems of Record",
    "Fulfillment Systems Connect Inventory Movement to Financial Accountability",
    "One Operating Model Improves Visibility, Control, and Scale",
    "Scaling the Proven Inventory Model Across Every Program",
  ];

  items.forEach((text, i) => {
    const y = 1.85 + i * 0.88;
    // Number bullet
    s.addShape(pptx.ShapeType.ellipse, { x: ML, y, w: 0.36, h: 0.36, fill: { color: P }, line: { color: P } });
    s.addText(String(i + 1), { x: ML, y: y + 0.02, w: 0.36, h: 0.32, fontSize: 11, bold: true, color: W, align: "center", fontFace: "Calibri", valign: "middle" });
    s.addText(text, { x: 1.05, y: y + 0.02, w: 11.5, h: 0.36, fontSize: 13, color: G9, fontFace: "Calibri", valign: "middle" });
  });

  footer(s, 2, "Agenda — Today's Discussion");
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 03 — Scale
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "01 · SCALE", 0.38);
  H2(s, "Inventory supports every fulfillment motion across\nAsurion's service network", 0.6);

  // Stat cards
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: 1.88, w: 3.6, h: 1.35, fill: { color: P }, line: { color: P }, rectRadius: 0.06 });
  s.addText("INVENTORY VALUE ACROSS PROGRAMS", { x: ML + 0.15, y: 1.96, w: 3.3, h: 0.22, fontSize: 7, color: PM, bold: true, charSpacing: 1, fontFace: "Calibri" });
  s.addText("~$517M", { x: ML + 0.1, y: 2.18, w: 3.4, h: 0.9, fontSize: 36, bold: true, color: W, fontFace: "Calibri Light", valign: "middle" });

  s.addShape(pptx.ShapeType.roundRect, { x: 4.4, y: 1.88, w: 3.2, h: 1.35, fill: { color: GB }, line: { color: G2, width: 0.75 }, rectRadius: 0.06 });
  s.addText("LOCATIONS HOLDING INVENTORY", { x: 4.55, y: 1.96, w: 3.0, h: 0.22, fontSize: 7, color: G4, bold: true, charSpacing: 1, fontFace: "Calibri" });
  s.addText("~890", { x: 4.5, y: 2.16, w: 3.0, h: 0.7, fontSize: 36, bold: true, color: G9, fontFace: "Calibri Light", valign: "middle" });
  s.addText("locations", { x: 4.5, y: 2.9, w: 3.0, h: 0.24, fontSize: 11, color: G6, fontFace: "Calibri", valign: "middle" });

  // Three columns
  const cols = [
    { title: "Replacement Fulfillment", items: ["Advance Exchange", "Corporate Stores", "Franchise Partners", "Recovery & Disposition"] },
    { title: "Same-Unit Repair",        items: ["Corporate Stores", "uBreakiFix", "Mail-In Repair", "Third-Party Repair Providers"] },
    { title: "Revenue Logistics",       items: ["Insurance Devices", "Return Parts", "Recovery & Disposition"] },
  ];
  const colW3 = (CW - 0.2) / 3;
  cols.forEach((col, i) => {
    const x = ML + i * (colW3 + 0.1);
    s.addShape(pptx.ShapeType.roundRect, { x, y: 3.4, w: colW3, h: 2.55, fill: { color: GB }, line: { color: G2, width: 0.75 }, rectRadius: 0.06 });
    s.addText(col.title, { x: x + 0.15, y: 3.5, w: colW3 - 0.3, h: 0.32, fontSize: 10.5, bold: true, color: G9, fontFace: "Calibri", valign: "middle" });
    s.addShape(pptx.ShapeType.line, { x: x + 0.15, y: 3.85, w: colW3 - 0.3, h: 0, line: { color: G2, width: 0.5 } });
    s.addText(col.items.map(it => `•  ${it}`).join("\n"), {
      x: x + 0.15, y: 3.95, w: colW3 - 0.3, h: 1.85,
      fontSize: 9.5, color: G6, fontFace: "Calibri", paraSpaceBefore: 5, valign: "top",
    });
  });

  // Callout
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: 6.1, w: CW, h: 0.62, fill: { color: GB }, line: { color: G2, width: 0.75 }, rectRadius: 0.05 });
  s.addText("Inventory is a material business asset — constantly moving across warehouses, field locations, stores, partners, and customer channels. Every movement requires visibility and accountability.", {
    x: ML + 0.2, y: 6.15, w: CW - 0.4, h: 0.52,
    fontSize: 9, color: G6, fontFace: "Calibri", valign: "middle",
  });

  footer(s, 3, "Inventory supports every fulfillment motion");
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 04 — Systems of Record
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "02 · HIDE", 0.35);
  H2(s, "Inventory is split across multiple systems of record", 0.56);
  s.addText("When a program's inventory and finances live in one system, every unit and dollar is traceable — $366M is already reconciled. $346 F&O is remaining in Distro; $13.9M sits on legacy systems.", {
    x: ML, y: 1.55, w: CW, h: 0.38,
    fontSize: 9.5, color: G6, fontFace: "Calibri", valign: "top",
  });

  // Table header
  const hY = 2.05;
  s.addShape(pptx.ShapeType.rect, { x: ML, y: hY, w: CW, h: 0.3, fill: { color: GB }, line: { color: G2, width: 0.5 } });
  [["Program", 0.6, 4.5], ["Inv. Value", 6.0, 1.8], ["System of Record", 8.0, 3.0], ["Status", 11.4, 1.2]].forEach(([t, x, w]) =>
    s.addText(t, { x, y: hY + 0.05, w, h: 0.2, fontSize: 8, bold: true, color: G4, charSpacing: 1, fontFace: "Calibri", valign: "middle" })
  );

  const rows = [
    { section: "REPLACEMENT" },
    { name: "Advance Exchange", sub: "",                                value: "$206.6M", system: "D365 F&O",             ok: true  },
    { name: "N&S3",             sub: "Next Day payment delivery w/ Setup", value: "$153M",   system: "D365 F&O",             ok: true  },
    { name: "DXO",              sub: "Delivery & Export Setup",         value: "$78.9M",  system: "D365 F&O",             ok: true  },
    { section: "REFURB" },
    { name: "uBreakiFix",       sub: "",                                value: "$0",      system: "ServiceBench + Distro", ok: false },
    { name: "Same-Unit Repair", sub: "",                                value: "$6.3M",   system: "ServiceBench",          ok: false },
  ];

  let rY = hY + 0.32;
  rows.forEach((row) => {
    if (row.section) {
      s.addText(row.section, { x: 0.6, y: rY + 0.02, w: 3, h: 0.22, fontSize: 7.5, bold: true, color: G4, charSpacing: 2, fontFace: "Calibri", valign: "middle" });
      rY += 0.28;
      return;
    }
    const rowH = row.sub ? 0.54 : 0.42;
    s.addShape(pptx.ShapeType.line, { x: ML, y: rY + rowH, w: CW, h: 0, line: { color: G2, width: 0.3 } });
    s.addText(row.name, { x: 0.6, y: rY + 0.04, w: 5.2, h: 0.24, fontSize: 10.5, bold: true, color: G9, fontFace: "Calibri", valign: "middle" });
    if (row.sub) s.addText(row.sub, { x: 0.6, y: rY + 0.29, w: 5.2, h: 0.2, fontSize: 8.5, color: G4, fontFace: "Calibri", valign: "middle" });
    s.addText(row.value, { x: 6.0, y: rY + 0.08, w: 1.8, h: 0.28, fontSize: 11, bold: true, color: G9, fontFace: "Calibri", valign: "middle" });
    s.addText(row.system, { x: 8.0, y: rY + 0.08, w: 3.2, h: 0.28, fontSize: 9.5, color: G6, fontFace: "Calibri", valign: "middle" });
    const [sc, bg] = row.ok ? [GN, GL] : [AM, AL];
    s.addShape(pptx.ShapeType.roundRect, { x: 11.4, y: rY + 0.09, w: 1.25, h: 0.26, fill: { color: bg }, line: { color: bg }, rectRadius: 0.04 });
    s.addText(row.ok ? "Completed" : "Upcoming", { x: 11.4, y: rY + 0.09, w: 1.25, h: 0.26, fontSize: 8, bold: true, color: sc, align: "center", fontFace: "Calibri", valign: "middle" });
    rY += rowH;
  });

  // Gap / Reconciled summary
  const gY = 5.62;
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: gY, w: 5.9, h: 0.96, fill: { color: RL }, line: { color: "FFCDD2", width: 0.75 }, rectRadius: 0.06 });
  s.addText("Gap / Unreconciled", { x: ML + 0.18, y: gY + 0.08, w: 5.5, h: 0.22, fontSize: 9, color: RD, fontFace: "Calibri", valign: "middle" });
  s.addText("~$390.8M", { x: ML + 0.12, y: gY + 0.3, w: 5.5, h: 0.56, fontSize: 28, bold: true, color: RD, fontFace: "Calibri Light", valign: "middle" });

  s.addShape(pptx.ShapeType.roundRect, { x: 6.6, y: gY, w: 6.2, h: 0.96, fill: { color: GL }, line: { color: "C8E6C9", width: 0.75 }, rectRadius: 0.06 });
  s.addText("Reconciled", { x: 6.78, y: gY + 0.08, w: 5.8, h: 0.22, fontSize: 9, color: GN, fontFace: "Calibri", valign: "middle" });
  s.addText("$126.3M", { x: 6.72, y: gY + 0.3, w: 5.8, h: 0.56, fontSize: 28, bold: true, color: GN, fontFace: "Calibri Light", valign: "middle" });

  footer(s, 4, "Limited traceability creates financial risk");
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 05 — Mechanism / Centerpiece
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "03 · MECHANISM · CENTERPIECE", 0.35);
  H2(s, "Fulfillment systems connect inventory movement\nto financial accountability", 0.56);
  s.addText("Every unit travels a single chain — from a physical movement to a financial record. The goal isn't inventory in one place; it's keeping that chain unbroken across every system it touches.", {
    x: ML, y: 1.72, w: CW, h: 0.44,
    fontSize: 10, color: G6, fontFace: "Calibri", valign: "top",
  });

  // Axis labels
  s.addText("PHYSICAL INVENTORY MOVEMENT", { x: ML, y: 2.35, w: 5.5, h: 0.2, fontSize: 7.5, bold: true, color: G4, charSpacing: 2, fontFace: "Calibri" });
  s.addText("FINANCIAL ACCOUNTABILITY", { x: 7.5, y: 2.35, w: 5.3, h: 0.2, fontSize: 7.5, bold: true, color: P, charSpacing: 2, fontFace: "Calibri", align: "right" });
  s.addShape(pptx.ShapeType.line, { x: ML, y: 2.58, w: CW, h: 0, line: { color: G2, width: 0.75 } });

  // Flow diagram
  const steps = [
    { label: "Procurement",   purple: false },
    { label: "Warehouse",     purple: false },
    { label: "Field Location\n/ Store", purple: false },
    { label: "Customer\nFulfillment", purple: false },
    { label: "Inventory\nControl", purple: true },
    { label: "Financial\nAccountability", purple: true },
    { label: "Close /\nBilling", purple: true },
  ];
  const bW = 1.56;
  const bG = (CW - steps.length * bW) / (steps.length - 1);
  const bY = 2.72;
  const bH = 1.1;

  steps.forEach((step, i) => {
    const x = ML + i * (bW + bG);
    const bg = step.purple ? P : PL;
    const border = step.purple ? P : PM;
    const tc = step.purple ? W : P;
    s.addShape(pptx.ShapeType.roundRect, { x, y: bY, w: bW, h: bH, fill: { color: bg }, line: { color: border, width: 0.75 }, rectRadius: 0.06 });
    s.addText(step.label, { x, y: bY + 0.1, w: bW, h: bH - 0.2, fontSize: 9.5, bold: true, color: tc, align: "center", fontFace: "Calibri", valign: "middle" });
    if (i < steps.length - 1) {
      s.addText(">", { x: x + bW + 0.02, y: bY + 0.38, w: bG, h: 0.34, fontSize: 14, bold: true, color: G4, align: "center", fontFace: "Calibri", valign: "middle" });
    }
  });

  // Callout
  callout(s, "The goal is not inventory in one system — it is maintaining accountability from procurement through financial close. Every inventory movement eventually becomes a financial event.", 4.08, 0.72, P, W, 11);

  footer(s, 5, "Fulfillment systems connect movement to accountability");
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 06 — Future State
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "04 · FUTURE STATE", 0.35);
  H2(s, "One operating model improves visibility, control, and scale", 0.56);

  const colW2 = (CW - 0.3) / 2;

  // TODAY
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: 1.68, w: colW2, h: 4.72, fill: { color: GB }, line: { color: G2, width: 0.75 }, rectRadius: 0.06 });
  s.addText("TODAY", { x: ML + 0.2, y: 1.8, w: 2, h: 0.26, fontSize: 9, bold: true, color: G4, charSpacing: 2, fontFace: "Calibri", valign: "middle" });
  chip(s, "Disconnected systems", ML + 2.4, 1.8, G2, G6, 2.5);

  ["Inventory synchronization", "Manual reconciliation", "Billing disputes", "Financial visibility gaps", "Partner traceability", "Custom integrations"].forEach((item, i) => {
    const iy = 2.26 + i * 0.55;
    s.addShape(pptx.ShapeType.roundRect, { x: ML + 0.2, y: iy + 0.05, w: 0.26, h: 0.26, fill: { color: RL }, line: { color: RL }, rectRadius: 0.04 });
    s.addText("x", { x: ML + 0.2, y: iy + 0.05, w: 0.26, h: 0.26, fontSize: 9, bold: true, color: RD, align: "center", fontFace: "Calibri", valign: "middle" });
    s.addText(item, { x: ML + 0.6, y: iy + 0.04, w: colW2 - 0.75, h: 0.3, fontSize: 11, color: G9, fontFace: "Calibri", valign: "middle" });
  });

  // FUTURE
  const fx = ML + colW2 + 0.3;
  s.addShape(pptx.ShapeType.roundRect, { x: fx, y: 1.68, w: colW2, h: 4.72, fill: { color: PL }, line: { color: PM, width: 0.75 }, rectRadius: 0.06 });
  s.addText("FUTURE", { x: fx + 0.2, y: 1.8, w: 2, h: 0.26, fontSize: 9, bold: true, color: P, charSpacing: 2, fontFace: "Calibri", valign: "middle" });
  chip(s, "Unified operating model", fx + 2.4, 1.8, P, W, 2.7);

  ["Inventory and finance move together", "Near-line visibility", "Sustainable inventory movement", "Explainable actions", "Unified fulfillment", "Flexible product bundles", "Better AI foundation"].forEach((item, i) => {
    const iy = 2.26 + i * 0.48;
    s.addShape(pptx.ShapeType.roundRect, { x: fx + 0.2, y: iy + 0.04, w: 0.26, h: 0.26, fill: { color: GL }, line: { color: GL }, rectRadius: 0.04 });
    s.addText("v", { x: fx + 0.2, y: iy + 0.04, w: 0.26, h: 0.26, fontSize: 9, bold: true, color: GN, align: "center", fontFace: "Calibri", valign: "middle" });
    s.addText(item, { x: fx + 0.6, y: iy + 0.03, w: colW2 - 0.75, h: 0.3, fontSize: 11, color: G9, fontFace: "Calibri", valign: "middle" });
  });

  // Bottom callout
  callout(s, "Inventory and financial records should remain connected throughout the fulfillment lifecycle — reconciliation becomes a natural outcome, not a separate activity.", 6.52, 0.58, PL, P, 9.5);

  footer(s, 6, "One operating model improves visibility & scale");
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 07 — Roadmap
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "05 · ROADMAP", 0.35);
  H2(s, "A phased path to consolidate every inventory program onto a single ERP", 0.56);
  s.addText("Moving inventory and finances across separate systems creates reconciliation gaps where loss accumulates. Each phase consolidates one fragmented system into D365 F&O, establishing a single source of truth that exposes financial controls and visibility across every program.", {
    x: ML, y: 1.55, w: CW, h: 0.45, fontSize: 9.5, color: G6, fontFace: "Calibri", valign: "top",
  });

  // Column grid: row label (2.1) + 4 phase cols
  const labelW = 2.0;
  const phaseW = (CW - labelW - 0.3) / 4;
  const phaseX = (i) => ML + labelW + 0.1 + i * (phaseW + 0.08);

  // Phase headers
  [{ year: "2024", lbl: "Phase 1" }, { year: "2025", lbl: "Phase 2" }, { year: "2026", lbl: "Phase 3" }, { year: "2027", lbl: "Phase 4" }].forEach((p, i) => {
    const x = phaseX(i);
    s.addText(p.lbl, { x, y: 2.18, w: phaseW, h: 0.2, fontSize: 8, color: G4, align: "center", fontFace: "Calibri", valign: "middle" });
    s.addText(p.year, { x, y: 2.38, w: phaseW, h: 0.3, fontSize: 15, bold: true, color: G9, align: "center", fontFace: "Calibri Light", valign: "middle" });
  });

  // Consolidation row
  const cY = 2.82;
  const cH = 0.75;
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: cY, w: labelW, h: cH, fill: { color: P }, line: { color: P }, rectRadius: 0.05 });
  s.addText("Consolidation", { x: ML, y: cY, w: labelW, h: cH, fontSize: 10, bold: true, color: W, align: "center", fontFace: "Calibri", valign: "middle" });

  ["Inventory ERP\nD365 / N&S3", "UBIF Non-Portal\nIntegration", "Inventory ERP\nfor SLIR", "UBIF Distro\nMigration"].forEach((txt, i) => {
    const x = phaseX(i);
    s.addShape(pptx.ShapeType.roundRect, { x, y: cY, w: phaseW, h: cH, fill: { color: PL }, line: { color: PM, width: 0.5 }, rectRadius: 0.05 });
    s.addText(txt, { x, y: cY + 0.06, w: phaseW, h: cH - 0.12, fontSize: 9, bold: true, color: P, align: "center", fontFace: "Calibri", valign: "middle" });
  });

  // Benefits row
  const bY = 3.66;
  const bH = 2.5;
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: bY, w: labelW, h: bH, fill: { color: GN }, line: { color: GN }, rectRadius: 0.05 });
  s.addText("Delivered\nBenefits", { x: ML, y: bY, w: labelW, h: bH, fontSize: 10, bold: true, color: W, align: "center", fontFace: "Calibri", valign: "middle" });

  [
    "$2.1M billing gap gains\n$4.8M+ trailing gains\nFoundation for SUR repair ERP",
    "uBreakiFix inventory moves to D365 F&O\nD365 Coord recovered by D&S",
    "Store inventory in D365 F&O\n100% of inventory in one ERP",
    "One platform for one ERP\nOne operating model, accountable in one ledger",
  ].forEach((txt, i) => {
    const x = phaseX(i);
    s.addShape(pptx.ShapeType.roundRect, { x, y: bY, w: phaseW, h: bH, fill: { color: GL }, line: { color: "C8E6C9", width: 0.5 }, rectRadius: 0.05 });
    s.addText(txt, { x: x + 0.1, y: bY + 0.1, w: phaseW - 0.2, h: bH - 0.2, fontSize: 9, color: G9, fontFace: "Calibri", valign: "top", paraSpaceBefore: 5 });
  });

  // Legend
  [{ color: GN, lbl: "Completed" }, { color: P, lbl: "In Progress" }, { color: G4, lbl: "Planned" }].forEach((l, i) => {
    const lx = ML + i * 2.2;
    s.addShape(pptx.ShapeType.ellipse, { x: lx, y: 6.46, w: 0.2, h: 0.2, fill: { color: l.color }, line: { color: l.color } });
    s.addText(l.lbl, { x: lx + 0.28, y: 6.46, w: 1.8, h: 0.22, fontSize: 8.5, color: G6, fontFace: "Calibri", valign: "middle" });
  });

  footer(s, 7, "Scaling the proven inventory model");
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 08 — Why Distro Matters
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "06 · WHY DISTRO MATTERS", 0.3);
  s.addText("PHASE 4 · UBIF DISTRO MIGRATION: SLOTTED FOR 2027", { x: ML, y: 0.5, w: CW, h: 0.2, fontSize: 7.5, color: G4, charSpacing: 1.5, bold: true, fontFace: "Calibri", valign: "middle" });
  H2(s, "Distro is the last system standing — and the most strategic to retire", 0.72);
  s.addText("There's no single technical blocker — Distro is stable and could run on our stack indefinitely. The case for moving in 2027 is structural: keeping the in-house warehouse platform separate cannibalizes financial, operational, and commercial risk as we scale.", {
    x: ML, y: 1.72, w: CW, h: 0.45, fontSize: 9.5, color: G6, fontFace: "Calibri", valign: "top",
  });

  const pillars = [
    { icon: "#", title: "Financial single\nsource of truth",
      body: "Inventory becomes fully accessible across Portal + integrations between Portal and Distro. Inventory in Distro activates the activity that flows outside the ERP.",
      goal: "Transactions and financials update automatically in one ledger — every dollar reconciled." },
    { icon: "S", title: "Designed-out\nloss exposure",
      body: "Powered systems and handoffs remain integrated where inventory is handled so that flows across the business are protected and traceable.",
      goal: "One platform and one ERP — a clean slate that flows across the business." },
    { icon: "O", title: "Operational\nresilience",
      body: "Distro is a separate application optimized for a couple of operations. The D&S toolkit for logistics already runs on D365.",
      goal: "2 partners (D365) whose platform our processes are standardizing on." },
    { icon: "H", title: "Vendor-driven\nrequest",
      body: "UPS as a carrier vendor is retiring all mapping on Distro. The D&S tool is integrated with it — it's already the SDK for mobile units.",
      goal: "2 partners (D365) whose platform our processes are standardizing on." },
  ];

  const pW = (CW - 0.3) / 4;
  pillars.forEach((p, i) => {
    const x = ML + i * (pW + 0.1);
    s.addShape(pptx.ShapeType.roundRect, { x, y: 2.35, w: pW, h: 3.5, fill: { color: PL }, line: { color: PM, width: 0.75 }, rectRadius: 0.06 });
    // Icon circle
    s.addShape(pptx.ShapeType.ellipse, { x: x + pW / 2 - 0.22, y: 2.45, w: 0.44, h: 0.44, fill: { color: P }, line: { color: P } });
    // Title
    s.addText(p.title, { x: x + 0.1, y: 3.0, w: pW - 0.2, h: 0.6, fontSize: 10, bold: true, color: G9, fontFace: "Calibri", valign: "top", align: "left" });
    // Body
    s.addText(p.body, { x: x + 0.1, y: 3.65, w: pW - 0.2, h: 1.05, fontSize: 8.5, color: G6, fontFace: "Calibri", valign: "top", paraSpaceBefore: 2 });
    // Divider + goal
    s.addShape(pptx.ShapeType.line, { x: x + 0.1, y: 4.72, w: pW - 0.2, h: 0, line: { color: PM, width: 0.5 } });
    s.addText(`Goal: ${p.goal}`, { x: x + 0.1, y: 4.78, w: pW - 0.2, h: 0.95, fontSize: 8.5, bold: true, color: P, fontFace: "Calibri", valign: "top", paraSpaceBefore: 2 });
  });

  callout(s, "The end state retiring Distro puts every unit and every dollar in one ERP — explainable movement, explainable finances, a resilient team, and a client-ready foundation to scale and build AI on.", 6.04, 0.72, P, W, 11);

  footer(s, 8, "Why simplifying systems matters");
}

// ── Write ──────────────────────────────────────────────────────────────────
await pptx.writeFile({ fileName: "public/Inventory-at-Asurion.pptx" });
console.log("✅  public/Inventory-at-Asurion.pptx generated");
