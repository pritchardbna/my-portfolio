import PptxGenJS from "pptxgenjs";

const pptx = new PptxGenJS();

// ── Theme ──────────────────────────────────────────────────────────────────
const PURPLE   = "5B2C8D";
const PURPLE_L = "EDE8F5";
const PURPLE_M = "C4AEED";
const WHITE    = "FFFFFF";
const GRAY_9   = "111111";
const GRAY_6   = "555555";
const GRAY_4   = "999999";
const GRAY_2   = "DDDDDD";
const GRAY_BG  = "F8F7FA";
const GREEN    = "2E7D32";
const GREEN_L  = "E8F5E9";
const RED      = "C62828";
const RED_L    = "FFEBEE";
const AMBER_L  = "FFF8E1";
const AMBER    = "F57F17";

pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 in

const W = 13.33;
const H = 7.5;

function label(slide, text, x, y) {
  slide.addText(text, {
    x, y, w: 4, h: 0.2,
    fontSize: 7, bold: true, color: PURPLE,
    charSpacing: 3,
    fontFace: "Arial",
  });
}

function slideFooter(slide, num, title) {
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: H - 0.35, w: W, h: 0.35,
    fill: { color: GRAY_BG },
    line: { color: GRAY_2, width: 0.5 },
  });
  slide.addText(`${String(num).padStart(2, "0")}  ${title}`, {
    x: 0.3, y: H - 0.3, w: W - 0.6, h: 0.25,
    fontSize: 8, color: GRAY_4, fontFace: "Arial",
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 01 — Title
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  // Top bar
  s.addText("asurion", { x: 0.4, y: 0.3, w: 2, h: 0.35, fontSize: 20, bold: true, color: PURPLE, fontFace: "Arial" });
  s.addText("MONTHLY PRODUCT REVIEW", { x: W - 3.5, y: 0.35, w: 3.2, h: 0.2, fontSize: 7, color: GRAY_4, bold: true, charSpacing: 2, fontFace: "Arial", align: "right" });

  // Divider
  s.addShape(pptx.ShapeType.line, { x: 0.4, y: 0.85, w: W - 0.8, h: 0, line: { color: GRAY_2, width: 0.5 } });

  // Label chip
  s.addShape(pptx.ShapeType.rect, { x: 0.4, y: 1.1, w: 2.8, h: 0.28, fill: { color: PURPLE_L }, rounding: true });
  s.addText("MONTHLY PRODUCT REVIEW DEEP DIVE", { x: 0.42, y: 1.12, w: 2.76, h: 0.24, fontSize: 7, bold: true, color: PURPLE, charSpacing: 1.5, fontFace: "Arial" });

  // Title
  s.addText("Inventory at Asurion", { x: 0.4, y: 1.6, w: 9, h: 1.4, fontSize: 52, bold: true, color: GRAY_9, fontFace: "Georgia" });
  s.addText("How fulfillment systems enable visibility, accountability, and scale", {
    x: 0.4, y: 3.1, w: 8, h: 0.4,
    fontSize: 14, color: GRAY_6, fontFace: "Arial",
  });

  // Divider
  s.addShape(pptx.ShapeType.line, { x: 0.4, y: 4.0, w: 5, h: 0, line: { color: GRAY_2, width: 0.5 } });

  // Presenters
  s.addText("PRESENTED BY", { x: 0.4, y: 4.15, w: 3, h: 0.2, fontSize: 7, color: GRAY_4, bold: true, charSpacing: 2, fontFace: "Arial" });
  s.addText("Bryant Mayne", { x: 0.4, y: 4.4, w: 3, h: 0.26, fontSize: 12, bold: true, color: GRAY_9, fontFace: "Arial" });
  s.addText("Director, D2M Fulfillment & Finance", { x: 0.4, y: 4.68, w: 3.5, h: 0.2, fontSize: 9, color: GRAY_6, fontFace: "Arial" });

  s.addText("PRESENTED BY", { x: 4.0, y: 4.15, w: 3, h: 0.2, fontSize: 7, color: GRAY_4, bold: true, charSpacing: 2, fontFace: "Arial" });
  s.addText("Thays Pritchard", { x: 4.0, y: 4.4, w: 3, h: 0.26, fontSize: 12, bold: true, color: GRAY_9, fontFace: "Arial" });
  s.addText("Product Management", { x: 4.0, y: 4.68, w: 3, h: 0.2, fontSize: 9, color: GRAY_6, fontFace: "Arial" });

  s.addText("CONFIDENTIAL", { x: W - 1.8, y: H - 0.65, w: 1.6, h: 0.2, fontSize: 7, color: GRAY_4, bold: true, charSpacing: 2, fontFace: "Arial", align: "right" });

  slideFooter(s, 1, "Inventory at Asurion");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 02 — Agenda
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  s.addText("TODAY'S DISCUSSION", { x: 0.5, y: 0.4, w: 4, h: 0.2, fontSize: 8, bold: true, color: PURPLE, charSpacing: 3, fontFace: "Arial" });
  s.addText("Agenda", { x: 0.5, y: 0.7, w: 8, h: 0.9, fontSize: 44, color: GRAY_9, fontFace: "Georgia" });

  const items = [
    "Inventory Supports Every Fulfillment Motion Across Asurion's Service Network",
    "Inventory Is Split Across Multiple Systems of Record",
    "Fulfillment Systems Connect Inventory Movement to Financial Accountability",
    "One Operating Model Improves Visibility, Control, and Scale",
    "Scaling the Proven Inventory Model Across Every Program",
  ];

  items.forEach((text, i) => {
    const y = 1.9 + i * 0.9;
    // Number circle
    s.addShape(pptx.ShapeType.ellipse, { x: 0.5, y: y, w: 0.38, h: 0.38, fill: { color: PURPLE } });
    s.addText(String(i + 1), { x: 0.5, y: y + 0.02, w: 0.38, h: 0.34, fontSize: 11, bold: true, color: WHITE, align: "center", fontFace: "Arial" });
    s.addText(text, { x: 1.1, y: y + 0.03, w: 10, h: 0.32, fontSize: 13, color: GRAY_9, fontFace: "Arial" });
  });

  slideFooter(s, 2, "Agenda — Today's Discussion");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 03 — Scale
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  label(s, "01 · SCALE", 0.5, 0.4);
  s.addText("Inventory supports every fulfillment motion\nacross Asurion's service network", {
    x: 0.5, y: 0.65, w: 12, h: 1.1, fontSize: 28, bold: true, color: GRAY_9, fontFace: "Georgia",
  });

  // Big stats
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.9, w: 3.5, h: 1.3, fill: { color: PURPLE }, rounding: true });
  s.addText("INVENTORY VALUE ACROSS PROGRAMS", { x: 0.55, y: 1.95, w: 3.4, h: 0.25, fontSize: 7, color: "C4AEED", bold: true, charSpacing: 1.5, fontFace: "Arial" });
  s.addText("~$517M", { x: 0.55, y: 2.2, w: 3.4, h: 0.85, fontSize: 38, bold: true, color: WHITE, fontFace: "Georgia" });

  s.addShape(pptx.ShapeType.rect, { x: 4.3, y: 1.9, w: 3.5, h: 1.3, fill: { color: GRAY_BG }, line: { color: GRAY_2, width: 0.5 }, rounding: true });
  s.addText("LOCATIONS HOLDING INVENTORY", { x: 4.35, y: 1.95, w: 3.4, h: 0.25, fontSize: 7, color: GRAY_4, bold: true, charSpacing: 1.5, fontFace: "Arial" });
  s.addText("~890", { x: 4.35, y: 2.2, w: 3.4, h: 0.65, fontSize: 38, bold: true, color: GRAY_9, fontFace: "Georgia" });
  s.addText("locations", { x: 4.35, y: 2.85, w: 3.4, h: 0.2, fontSize: 10, color: GRAY_6, fontFace: "Arial" });

  // Three columns
  const cols = [
    { title: "Replacement Fulfillment", items: ["Advance Exchange", "Corporate Stores", "Franchise Partners", "Recovery & Disposition"] },
    { title: "Same-Unit Repair",        items: ["Corporate Stores", "uBreakiFix", "Mail-In Repair", "Third-Party Repair Providers"] },
    { title: "Revenue Logistics",       items: ["Insurance Devices", "Return Parts", "Recovery & Disposition"] },
  ];

  cols.forEach((col, i) => {
    const x = 0.5 + i * 4.27;
    s.addShape(pptx.ShapeType.rect, { x, y: 3.45, w: 4.0, h: 2.2, fill: { color: GRAY_BG }, line: { color: GRAY_2, width: 0.5 }, rounding: true });
    s.addText(col.title, { x: x + 0.15, y: 3.55, w: 3.7, h: 0.3, fontSize: 10, bold: true, color: GRAY_9, fontFace: "Arial" });
    s.addText(col.items.map(it => `• ${it}`).join("\n"), {
      x: x + 0.15, y: 3.92, w: 3.7, h: 1.6,
      fontSize: 9, color: GRAY_6, fontFace: "Arial", paraSpaceBefore: 4,
    });
  });

  // Bottom callout
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 5.8, w: 12.3, h: 0.55, fill: { color: GRAY_BG }, line: { color: GRAY_2, width: 0.5 }, rounding: true });
  s.addText("Inventory is a material business asset — constantly moving across warehouses, field locations, stores, partners, and customer channels. Every movement requires visibility and accountability.", {
    x: 0.65, y: 5.85, w: 12.0, h: 0.44,
    fontSize: 8.5, color: GRAY_6, fontFace: "Arial",
  });

  slideFooter(s, 3, "Inventory supports every fulfillment motion");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 04 — Systems of Record
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  label(s, "02 · HIDE", 0.5, 0.4);
  s.addText("Inventory is split across multiple systems of record", {
    x: 0.5, y: 0.65, w: 12, h: 0.8, fontSize: 26, bold: true, color: GRAY_9, fontFace: "Georgia",
  });
  s.addText("When a program's inventory and finances live in one system, every unit and dollar is traceable — $366M is already reconciled. $346 F&O is remaining in Distro; $13.9M sits on legacy systems.", {
    x: 0.5, y: 1.5, w: 12, h: 0.4, fontSize: 9, color: GRAY_6, fontFace: "Arial",
  });

  // Table header
  const hdrY = 2.05;
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: hdrY, w: 12.3, h: 0.28, fill: { color: GRAY_BG }, line: { color: GRAY_2, width: 0.5 } });
  [["Program", 0.6], ["Inventory Value", 6.1], ["Systems of Record", 8.5], ["Status", 11.2]].forEach(([txt, x]) => {
    s.addText(txt, { x, y: hdrY + 0.04, w: 2.5, h: 0.2, fontSize: 7.5, bold: true, color: GRAY_4, charSpacing: 1, fontFace: "Arial" });
  });

  const rows = [
    { section: "REPLACEMENT", name: "Advance Exchange", sub: "", value: "$206.6M", system: "D365 F&O", status: "Completed", ok: true },
    { name: "N&S3", sub: "Next Day payment delivery w/ Setup", value: "$153M", system: "D365 F&O", status: "Completed", ok: true },
    { name: "DXO", sub: "Delivery & Export Setup", value: "$78.9M", system: "D365 F&O", status: "Completed", ok: true },
    { section: "REFURB" },
    { name: "uBreakiFix", sub: "", value: "$0", system: "ServiceBench + Distro", status: "Upcoming", ok: false },
    { name: "Same-Unit Repair", sub: "", value: "$6.3M", system: "ServiceBench", status: "Upcoming", ok: false },
  ];

  let rowY = hdrY + 0.32;
  rows.forEach((row) => {
    if (row.section) {
      s.addText(row.section, { x: 0.6, y: rowY, w: 3, h: 0.22, fontSize: 7.5, bold: true, color: GRAY_4, charSpacing: 2, fontFace: "Arial" });
      rowY += 0.25;
      return;
    }
    s.addShape(pptx.ShapeType.line, { x: 0.5, y: rowY + 0.44, w: 12.3, h: 0, line: { color: GRAY_2, width: 0.3 } });
    s.addText(row.name, { x: 0.6, y: rowY + 0.02, w: 5, h: 0.22, fontSize: 10, bold: true, color: GRAY_9, fontFace: "Arial" });
    if (row.sub) s.addText(row.sub, { x: 0.6, y: rowY + 0.22, w: 5, h: 0.18, fontSize: 8, color: GRAY_4, fontFace: "Arial" });
    s.addText(row.value, { x: 6.1, y: rowY + 0.1, w: 2, h: 0.22, fontSize: 11, bold: true, color: GRAY_9, fontFace: "Arial" });
    s.addText(row.system, { x: 8.5, y: rowY + 0.1, w: 2.5, h: 0.22, fontSize: 9, color: GRAY_6, fontFace: "Arial" });
    const sc = row.ok ? GREEN : AMBER;
    const bg = row.ok ? GREEN_L : AMBER_L;
    s.addShape(pptx.ShapeType.rect, { x: 11.2, y: rowY + 0.06, w: 1.4, h: 0.28, fill: { color: bg }, rounding: true });
    s.addText(row.status, { x: 11.2, y: rowY + 0.1, w: 1.4, h: 0.2, fontSize: 8, bold: true, color: sc, align: "center", fontFace: "Arial" });
    rowY += 0.48;
  });

  // Bottom gap row
  const gapY = 5.65;
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: gapY, w: 5.9, h: 0.9, fill: { color: RED_L }, line: { color: "FFCDD2", width: 0.5 }, rounding: true });
  s.addText("Gap / Unreconciled", { x: 0.65, y: gapY + 0.1, w: 5.6, h: 0.22, fontSize: 8, color: RED, fontFace: "Arial" });
  s.addText("~$390.8M", { x: 0.65, y: gapY + 0.3, w: 5.6, h: 0.5, fontSize: 28, bold: true, color: RED, fontFace: "Georgia" });

  s.addShape(pptx.ShapeType.rect, { x: 6.8, y: gapY, w: 6.0, h: 0.9, fill: { color: GREEN_L }, line: { color: "C8E6C9", width: 0.5 }, rounding: true });
  s.addText("Reconciled", { x: 6.95, y: gapY + 0.1, w: 5.6, h: 0.22, fontSize: 8, color: GREEN, fontFace: "Arial" });
  s.addText("$126.3M", { x: 6.95, y: gapY + 0.3, w: 5.6, h: 0.5, fontSize: 28, bold: true, color: GREEN, fontFace: "Georgia" });

  slideFooter(s, 4, "Limited traceability creates financial risk");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 05 — Mechanism / Centerpiece
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  label(s, "03 · MECHANISM · CENTERPIECE", 0.5, 0.4);
  s.addText("Fulfillment systems connect inventory movement\nto financial accountability", {
    x: 0.5, y: 0.65, w: 12, h: 1.1, fontSize: 28, bold: true, color: GRAY_9, fontFace: "Georgia",
  });
  s.addText("Every unit travels a single chain — from a physical movement to a financial record. The goal isn't inventory in one place; it's keeping that chain unbroken across every system it touches.", {
    x: 0.5, y: 1.82, w: 12, h: 0.5, fontSize: 10, color: GRAY_6, fontFace: "Arial",
  });

  // Flow axis labels
  s.addText("PHYSICAL INVENTORY MOVEMENT", { x: 0.5, y: 2.5, w: 5, h: 0.2, fontSize: 7, bold: true, color: GRAY_4, charSpacing: 2, fontFace: "Arial" });
  s.addText("FINANCIAL ACCOUNTABILITY", { x: 8.5, y: 2.5, w: 4.3, h: 0.2, fontSize: 7, bold: true, color: PURPLE, charSpacing: 2, fontFace: "Arial", align: "right" });
  s.addShape(pptx.ShapeType.line, { x: 0.5, y: 2.72, w: 12.3, h: 0, line: { color: GRAY_2, width: 0.4 } });

  // Flow boxes
  const steps = [
    { label: "Procurement", purple: false },
    { label: "Warehouse", purple: false },
    { label: "Field Location\n/ Store", purple: false },
    { label: "Customer\nFulfillment", purple: false },
    { label: "Inventory\nControl", purple: true },
    { label: "Financial\nAccountability", purple: true },
    { label: "Close /\nBilling", purple: true },
  ];

  const totalW = 12.3;
  const boxW = 1.6;
  const gap = (totalW - steps.length * boxW) / (steps.length - 1);
  const boxY = 2.85;

  steps.forEach((step, i) => {
    const x = 0.5 + i * (boxW + gap);
    s.addShape(pptx.ShapeType.rect, {
      x, y: boxY, w: boxW, h: 0.9,
      fill: { color: step.purple ? PURPLE : PURPLE_L },
      line: { color: step.purple ? PURPLE : PURPLE_M, width: 0.5 },
      rounding: true,
    });
    s.addText(step.label, {
      x, y: boxY + 0.1, w: boxW, h: 0.7,
      fontSize: 9.5, bold: true, color: step.purple ? WHITE : PURPLE,
      align: "center", fontFace: "Arial",
    });
    if (i < steps.length - 1) {
      s.addText("→", { x: x + boxW + 0.03, y: boxY + 0.3, w: gap, h: 0.3, fontSize: 12, color: GRAY_4, align: "center", fontFace: "Arial" });
    }
  });

  // Bottom callout
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 4.3, w: 12.3, h: 0.9, fill: { color: PURPLE }, rounding: true });
  s.addText("The goal is not inventory in one system — it is maintaining accountability from procurement through financial close. Every inventory movement eventually becomes a financial event.", {
    x: 0.7, y: 4.38, w: 11.9, h: 0.74,
    fontSize: 11, color: WHITE, fontFace: "Arial",
  });

  slideFooter(s, 5, "Fulfillment systems connect movement to accountability");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 06 — Future State
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  label(s, "04 · FUTURE STATE", 0.5, 0.4);
  s.addText("One operating model improves visibility, control, and scale", {
    x: 0.5, y: 0.65, w: 12, h: 0.9, fontSize: 28, bold: true, color: GRAY_9, fontFace: "Georgia",
  });

  // TODAY column
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 1.75, w: 5.9, h: 4.5, fill: { color: GRAY_BG }, line: { color: GRAY_2, width: 0.5 }, rounding: true });
  s.addText("TODAY", { x: 0.7, y: 1.9, w: 2, h: 0.25, fontSize: 9, bold: true, color: GRAY_4, charSpacing: 2, fontFace: "Arial" });
  s.addShape(pptx.ShapeType.rect, { x: 2.8, y: 1.88, w: 2.2, h: 0.28, fill: { color: GRAY_2 }, rounding: true });
  s.addText("Disconnected systems", { x: 2.82, y: 1.9, w: 2.16, h: 0.22, fontSize: 8, color: GRAY_6, align: "center", bold: true, fontFace: "Arial" });

  const todayItems = ["Inventory synchronization", "Manual reconciliation", "Billing disputes", "Financial visibility gaps", "Partner traceability", "Custom integrations"];
  todayItems.forEach((item, i) => {
    s.addText("✕", { x: 0.7, y: 2.35 + i * 0.52, w: 0.3, h: 0.3, fontSize: 10, color: RED, fontFace: "Arial" });
    s.addText(item, { x: 1.1, y: 2.37 + i * 0.52, w: 5.0, h: 0.28, fontSize: 10.5, color: GRAY_9, fontFace: "Arial" });
  });

  // FUTURE column
  s.addShape(pptx.ShapeType.rect, { x: 7.0, y: 1.75, w: 5.8, h: 4.5, fill: { color: PURPLE_L }, line: { color: PURPLE_M, width: 0.5 }, rounding: true });
  s.addText("FUTURE", { x: 7.2, y: 1.9, w: 2, h: 0.25, fontSize: 9, bold: true, color: PURPLE, charSpacing: 2, fontFace: "Arial" });
  s.addShape(pptx.ShapeType.rect, { x: 9.3, y: 1.88, w: 2.8, h: 0.28, fill: { color: PURPLE }, rounding: true });
  s.addText("Unified operating model", { x: 9.32, y: 1.9, w: 2.76, h: 0.22, fontSize: 8, color: WHITE, align: "center", bold: true, fontFace: "Arial" });

  const futureItems = ["Inventory and finance move together", "Near-line visibility", "Sustainable inventory movement", "Explainable actions", "Unified fulfillment", "Flexible product bundles", "Better AI foundation"];
  futureItems.forEach((item, i) => {
    s.addText("✓", { x: 7.2, y: 2.35 + i * 0.48, w: 0.3, h: 0.28, fontSize: 10, color: GREEN, fontFace: "Arial" });
    s.addText(item, { x: 7.6, y: 2.37 + i * 0.48, w: 5.0, h: 0.26, fontSize: 10.5, color: GRAY_9, fontFace: "Arial" });
  });

  // Bottom callout
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 6.4, w: 12.3, h: 0.65, fill: { color: PURPLE_L }, line: { color: PURPLE_M, width: 0.5 }, rounding: true });
  s.addText("Inventory and financial records should remain connected throughout the fulfillment lifecycle — reconciliation becomes a natural outcome, not a separate activity.", {
    x: 0.7, y: 6.47, w: 11.9, h: 0.5, fontSize: 9.5, color: PURPLE, fontFace: "Arial",
  });

  slideFooter(s, 6, "One operating model improves visibility & scale");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 07 — Roadmap
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  label(s, "05 · ROADMAP", 0.5, 0.4);
  s.addText("A phased path to consolidate every inventory\nprogram onto a single ERP", {
    x: 0.5, y: 0.65, w: 12, h: 1.0, fontSize: 26, bold: true, color: GRAY_9, fontFace: "Georgia",
  });
  s.addText("Moving inventory and finances across separate systems creates reconciliation gaps where loss accumulates. Each phase consolidates one fragmented system into D365 F&O, establishing a single source of truth that exposes financial controls and visibility across every program.", {
    x: 0.5, y: 1.72, w: 12, h: 0.5, fontSize: 9, color: GRAY_6, fontFace: "Arial",
  });

  const phases = [
    { year: "2024", label: "Phase 1" },
    { year: "2025", label: "Phase 2" },
    { year: "2026", label: "Phase 3" },
    { year: "2027", label: "Phase 4" },
  ];
  const colX = [2.6, 4.75, 7.0, 9.25];
  const colW = 2.0;

  // Phase headers
  phases.forEach((p, i) => {
    s.addText(p.label, { x: colX[i], y: 2.35, w: colW, h: 0.2, fontSize: 8, color: GRAY_4, align: "center", fontFace: "Arial" });
    s.addText(p.year, { x: colX[i], y: 2.55, w: colW, h: 0.3, fontSize: 14, bold: true, color: GRAY_9, align: "center", fontFace: "Georgia" });
  });

  // Row label
  s.addText("PHASE", { x: 0.5, y: 2.35, w: 2.0, h: 0.5, fontSize: 8, bold: true, color: GRAY_4, charSpacing: 1.5, fontFace: "Arial" });

  const consolidation = [
    "Inventory ERP for\nD365 / N&S3",
    "UBIF Non-Portal\nIntegration",
    "Inventory ERP\nfor SLIR",
    "UBIF Distro\nMigration",
  ];
  const benefits = [
    "$2.1M billing gap gains\n$4.8M+ trailing gains\nFoundation for SUR repair ERP",
    "uBreakiFix inventory\nmoves to D365 F&O\nD365 Coord recovered by D&S",
    "Store inventory in D365 F&O\n100% of inventory in one ERP",
    "One platform for one ERP\nOne operating model,\naccountable in one ledger",
  ];

  // Consolidation row
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 3.0, w: 2.0, h: 0.7, fill: { color: PURPLE }, rounding: true });
  s.addText("Consolidation", { x: 0.5, y: 3.05, w: 2.0, h: 0.6, fontSize: 9.5, bold: true, color: WHITE, align: "center", fontFace: "Arial" });
  consolidation.forEach((txt, i) => {
    s.addShape(pptx.ShapeType.rect, { x: colX[i], y: 3.0, w: colW, h: 0.7, fill: { color: PURPLE_L }, line: { color: PURPLE_M, width: 0.3 }, rounding: true });
    s.addText(txt, { x: colX[i] + 0.05, y: 3.02, w: colW - 0.1, h: 0.66, fontSize: 8.5, color: PURPLE, bold: true, align: "center", fontFace: "Arial" });
  });

  // Benefits row
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 3.85, w: 2.0, h: 2.3, fill: { color: GREEN }, rounding: true });
  s.addText("Delivered\nBenefits", { x: 0.5, y: 4.4, w: 2.0, h: 0.7, fontSize: 9.5, bold: true, color: WHITE, align: "center", fontFace: "Arial" });
  benefits.forEach((txt, i) => {
    s.addShape(pptx.ShapeType.rect, { x: colX[i], y: 3.85, w: colW, h: 2.3, fill: { color: GREEN_L }, line: { color: "C8E6C9", width: 0.3 }, rounding: true });
    s.addText(txt, { x: colX[i] + 0.1, y: 3.95, w: colW - 0.2, h: 2.1, fontSize: 8.5, color: GRAY_9, fontFace: "Arial", paraSpaceBefore: 3 });
  });

  // Legend
  [{ color: GREEN, label: "Completed" }, { color: PURPLE, label: "In Progress" }, { color: GRAY_4, label: "Planned" }].forEach((l, i) => {
    const lx = 0.5 + i * 2.0;
    s.addShape(pptx.ShapeType.ellipse, { x: lx, y: 6.52, w: 0.18, h: 0.18, fill: { color: l.color } });
    s.addText(l.label, { x: lx + 0.24, y: 6.5, w: 1.6, h: 0.22, fontSize: 8, color: GRAY_6, fontFace: "Arial" });
  });

  slideFooter(s, 7, "Scaling the proven inventory model");
}

// ═══════════════════════════════════════════════════════════════════════════
// SLIDE 08 — Why Distro Matters
// ═══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: WHITE };

  label(s, "06 · WHY DISTRO MATTERS", 0.5, 0.3);
  s.addText("PHASE 4 · UBIF DISTRO MIGRATION: SLOTTED FOR 2027", { x: 0.5, y: 0.52, w: 9, h: 0.2, fontSize: 7.5, color: GRAY_4, charSpacing: 1.5, bold: true, fontFace: "Arial" });
  s.addText("Distro is the last system standing —\nand the most strategic to retire", {
    x: 0.5, y: 0.76, w: 12, h: 1.1, fontSize: 26, bold: true, color: GRAY_9, fontFace: "Georgia",
  });
  s.addText("There's no single technical blocker — Distro is stable and could run on our stack indefinitely. The case for moving in 2027 is structural: keeping the in-house warehouse platform separate cannibalizes financial, operational, and commercial risk as we scale.", {
    x: 0.5, y: 1.92, w: 12, h: 0.5, fontSize: 9, color: GRAY_6, fontFace: "Arial",
  });

  const pillars = [
    { icon: "📊", title: "Financial single source of truth",
      body: "Inventory becomes fully accessible across Portal + integrations between Portal and Distro. Inventory in Distro activates the activity that flows outside the ERP.",
      goal: "Transactions and financials update automatically in one ledger — every dollar reconciled." },
    { icon: "🛡️", title: "Designed-out loss exposure",
      body: "Powered systems and handoffs remain integrated where inventory is handled by handoffs so that flows across the business.",
      goal: "One platform and one ERP — a clean slate that flows across the business." },
    { icon: "⚙️", title: "Operational resilience",
      body: "Distro is a separate application optimized for a couple of operations — the D&S tool kit for logistics from Distro.",
      goal: "2 partners (D365) platform our processes are asking us to standardize on." },
    { icon: "🤝", title: "Vendor-driven request",
      body: "UPS as a carrier vendor is retiring all their mapping on Distro. The D&S tool is integrated with it — it's already the SDK for mobile units.",
      goal: "2 partners (D365) platform our processes are asking us to standardize on." },
  ];

  pillars.forEach((p, i) => {
    const x = 0.5 + i * 3.2;
    s.addShape(pptx.ShapeType.rect, { x, y: 2.6, w: 3.0, h: 3.3, fill: { color: PURPLE_L }, line: { color: PURPLE_M, width: 0.5 }, rounding: true });
    s.addText(p.icon, { x, y: 2.7, w: 3.0, h: 0.4, fontSize: 18, align: "center", fontFace: "Segoe UI Emoji" });
    s.addText(p.title, { x: x + 0.12, y: 3.15, w: 2.76, h: 0.55, fontSize: 9.5, bold: true, color: GRAY_9, fontFace: "Arial" });
    s.addText(p.body, { x: x + 0.12, y: 3.73, w: 2.76, h: 1.05, fontSize: 8, color: GRAY_6, fontFace: "Arial", paraSpaceBefore: 2 });
    s.addShape(pptx.ShapeType.line, { x: x + 0.12, y: 4.8, w: 2.76, h: 0, line: { color: PURPLE_M, width: 0.4 } });
    s.addText(`Goal: ${p.goal}`, { x: x + 0.12, y: 4.86, w: 2.76, h: 0.85, fontSize: 8, bold: true, color: PURPLE, fontFace: "Arial", paraSpaceBefore: 2 });
  });

  // Bottom callout
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 6.1, w: 12.3, h: 0.95, fill: { color: PURPLE }, rounding: true });
  s.addText("The end state retiring Distro puts every unit and every dollar in one ERP — explainable movement, explainable finances, a resilient team, and a client-ready foundation to scale and build AI on.", {
    x: 0.7, y: 6.18, w: 11.9, h: 0.8, fontSize: 11, color: WHITE, fontFace: "Arial",
  });

  slideFooter(s, 8, "Why simplifying systems matters");
}

// ── Write file ──────────────────────────────────────────────────────────────
await pptx.writeFile({ fileName: "public/Inventory-at-Asurion.pptx" });
console.log("✅  public/Inventory-at-Asurion.pptx generated");
