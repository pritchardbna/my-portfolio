import PptxGenJS from "pptxgenjs";

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE"; // 13.33 × 7.5 in

// ── Palette ────────────────────────────────────────────────────────────────
const P   = "5B2C8D";  // Asurion purple
const PL  = "EDE8F5";  // light purple bg
const PM  = "C4AEED";  // medium purple
const PD  = "4A2478";  // dark purple (flow boxes)
const W   = "FFFFFF";
const G9  = "111111";
const G7  = "333333";
const G6  = "555555";
const G4  = "888888";
const G3  = "AAAAAA";
const G2  = "DDDDDD";
const GB  = "F5F4F8";  // light bg
const GBB = "F9F9F9";  // very light bg
const GN  = "1B6B2B";  // green
const GL  = "E6F4EA";  // green light
const AM  = "7B3FA0";  // purple for migrating

const SW = 13.33;
const SH = 7.5;
const ML = 0.4;
const MR = 0.4;
const CW = SW - ML - MR; // 12.53

// ── Helpers ────────────────────────────────────────────────────────────────
const t = (s, txt, x, y, w, h, opts = {}) =>
  s.addText(txt, { x, y, w, h, fontFace: "Calibri", valign: "top", ...opts });

const sectionLabel = (s, txt, y = 0.32) =>
  t(s, txt, ML, y, 8, 0.2, { fontSize: 8, bold: true, color: P, charSpacing: 2, valign: "middle" });

// Left-border callout (purple left accent line style from original)
const accentCallout = (s, parts, y, h = 0.65) => {
  // Left purple bar
  s.addShape(pptx.ShapeType.rect, { x: ML, y, w: 0.05, h, fill: { color: P }, line: { color: P } });
  // Text
  s.addText(parts, { x: ML + 0.2, y: y + 0.05, w: CW - 0.25, h: h - 0.1, fontFace: "Calibri", fontSize: 11, color: G7, valign: "middle" });
};

// Filled purple callout box
const purpleCallout = (s, parts, y, h = 0.75) => {
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y, w: CW, h, fill: { color: P }, line: { color: P }, rectRadius: 0.06 });
  s.addText(parts, { x: ML + 0.25, y: y + 0.06, w: CW - 0.5, h: h - 0.12, fontFace: "Calibri", fontSize: 10.5, color: W, valign: "middle", align: "center" });
};

const footer = (s, centerTxt, num) => {
  s.addShape(pptx.ShapeType.line, { x: 0, y: SH - 0.42, w: SW, h: 0, line: { color: G2, width: 0.5 } });
  t(s, "asurion", ML, SH - 0.38, 1.5, 0.32, { fontSize: 11, bold: true, color: P, valign: "middle" });
  t(s, centerTxt, 0, SH - 0.38, SW, 0.32, { fontSize: 8, color: G4, charSpacing: 2, align: "center", valign: "middle" });
  t(s, String(num).padStart(2, "0"), SW - 0.7, SH - 0.38, 0.5, 0.32, { fontSize: 11, color: G4, align: "right", valign: "middle" });
};

const footnote = (s, txt, y = SH - 0.62) =>
  t(s, txt, ML, y, CW, 0.18, { fontSize: 6.5, color: G3, valign: "top" });

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 01 — Title
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  t(s, "asurion", ML, 0.28, 2.5, 0.38, { fontSize: 22, bold: true, color: P });
  t(s, "MONTHLY PRODUCT REVIEW", SW - 3.8, 0.32, 3.5, 0.24, { fontSize: 7.5, color: G4, bold: true, charSpacing: 1.5, align: "right" });
  s.addShape(pptx.ShapeType.line, { x: ML, y: 0.76, w: CW, h: 0, line: { color: G2, width: 0.75 } });

  // Label chip
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: 1.05, w: 3.2, h: 0.26, fill: { color: PL }, line: { color: PL }, rectRadius: 0.04 });
  t(s, "MONTHLY PRODUCT REVIEW DEEP DIVE", ML + 0.12, 1.07, 3.0, 0.22, { fontSize: 7.5, bold: true, color: P, charSpacing: 1, valign: "middle" });

  t(s, "Inventory at Asurion", ML, 1.48, 10, 1.55, { fontSize: 48, bold: true, color: G9, fontFace: "Calibri Light" });
  t(s, "How fulfillment systems enable visibility, accountability, and scale", ML, 3.1, 9, 0.38, { fontSize: 14, color: G6, fontFace: "Calibri Light" });

  s.addShape(pptx.ShapeType.line, { x: ML, y: 3.65, w: 5.5, h: 0, line: { color: G2, width: 0.75 } });

  [[ML, "Bryant Mayne", "Director, D2M Fulfillment & Finance"], [4.2, "Thays Pritchard", "Product Management"]].forEach(([x, name, role]) => {
    t(s, "PRESENTED BY", x, 3.82, 3.5, 0.2, { fontSize: 7, color: G4, bold: true, charSpacing: 2 });
    t(s, name,  x, 4.06, 3.5, 0.28, { fontSize: 13, bold: true, color: G9 });
    t(s, role,  x, 4.36, 3.5, 0.24, { fontSize: 9.5, color: G6 });
  });

  t(s, "CONFIDENTIAL", SW - 2.0, SH - 0.62, 1.8, 0.22, { fontSize: 7, color: G4, bold: true, charSpacing: 2, align: "right" });

  footer(s, "", 1);
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 02 — Agenda
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "TODAY'S DISCUSSION", 0.35);
  t(s, "Agenda", ML, 0.6, 8, 1.0, { fontSize: 44, color: G9, fontFace: "Calibri Light" });

  // 2-column card layout: cards [0,2,4] on left, [1,3] on right
  const cards = [
    { num: 1, title: "Inventory Supports Every Fulfillment Motion Across Asurion's Service Network", sub: "What inventory is, where it lives, and the service motions it enables" },
    { num: 2, title: "Inventory Is Split Across Multiple Systems of Record",                          sub: "Why consolidating into one source of truth is a financial control, not just an operational one" },
    { num: 3, title: "Fulfillment Systems Connect Inventory Movement to Financial Accountability",     sub: "How systems tie each physical move to a financial record" },
    { num: 4, title: "One Operating Model Improves Visibility, Control, and Scale",                   sub: "Moving from fragmented tools to a single, governed operating model" },
    { num: 5, title: "Scaling the Proven Inventory Model Across Every Program",                       sub: "The DES single-source-of-truth playbook, extended phase by phase" },
  ];

  const cardW = (CW - 0.3) / 2;
  const leftX  = ML;
  const rightX = ML + cardW + 0.3;

  // Left column: cards 1, 3, 5
  // Right column: cards 2, 4
  const leftCards  = [cards[0], cards[2], cards[4]];
  const rightCards = [cards[1], cards[3]];

  const drawCard = (card, x, y, h) => {
    s.addShape(pptx.ShapeType.roundRect, { x, y, w: cardW, h, fill: { color: W }, line: { color: G2, width: 0.75 }, rectRadius: 0.06 });
    // Number badge
    s.addShape(pptx.ShapeType.roundRect, { x: x + 0.16, y: y + h / 2 - 0.28, w: 0.5, h: 0.5, fill: { color: P }, line: { color: P }, rectRadius: 0.08 });
    t(s, String(card.num), x + 0.16, y + h / 2 - 0.28, 0.5, 0.5, { fontSize: 13, bold: true, color: W, align: "center", valign: "middle" });
    // Title
    t(s, card.title, x + 0.82, y + 0.14, cardW - 0.98, h * 0.48, { fontSize: 11, bold: true, color: G9, valign: "top" });
    // Subtitle
    t(s, card.sub,   x + 0.82, y + h * 0.52, cardW - 0.98, h * 0.4, { fontSize: 9, color: G4, valign: "top" });
  };

  leftCards.forEach((card, i)  => drawCard(card, leftX,  1.82 + i * 0.94, 0.84));
  rightCards.forEach((card, i) => drawCard(card, rightX, 1.82 + i * 0.94, 0.84));

  footer(s, "AGENDA", 2);
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 03 — Scale
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "01 — SCALE");
  t(s, "Inventory supports every fulfillment motion across\nAsurion's service network", ML, 0.55, CW, 1.15, { fontSize: 28, bold: false, color: G9, fontFace: "Calibri Light" });

  // Left column: two stat boxes stacked
  const lx = ML;
  const lw = 4.4;

  // Purple $517M box
  s.addShape(pptx.ShapeType.roundRect, { x: lx, y: 1.88, w: lw, h: 1.3, fill: { color: P }, line: { color: P }, rectRadius: 0.07 });
  t(s, "INVENTORY VALUE ACROSS PROGRAMS", lx + 0.18, 1.96, lw - 0.3, 0.22, { fontSize: 7.5, color: PM, bold: true, charSpacing: 1, valign: "middle" });
  t(s, "~$517M", lx + 0.14, 2.16, lw - 0.28, 0.85, { fontSize: 38, bold: true, color: W, fontFace: "Calibri Light", valign: "middle" });

  // Gray locations box
  s.addShape(pptx.ShapeType.roundRect, { x: lx, y: 3.28, w: lw, h: 2.6, fill: { color: GBB }, line: { color: G2, width: 0.75 }, rectRadius: 0.07 });
  t(s, "LOCATIONS HOLDING INVENTORY ACROSS\nFULFILLMENTS", lx + 0.18, 3.38, lw - 0.3, 0.38, { fontSize: 7.5, color: G4, bold: true, charSpacing: 1, valign: "top" });
  // ~890 locations — big number + word
  t(s, "~890", lx + 0.14, 3.76, 1.55, 0.68, { fontSize: 38, bold: true, color: G9, fontFace: "Calibri Light", valign: "middle" });
  t(s, "locations", lx + 1.7, 3.85, 1.8, 0.5, { fontSize: 22, color: G3, fontFace: "Calibri Light", valign: "middle" });

  // Location breakdown
  const locItems = [
    ["~700", "UBIF & 3rd-party repair locations"],
    ["97",   "Forward Stocking Locations (FSLs)"],
    ["~90",  "3rd-party repair vendors"],
    ["2",    "Main inventory distribution centers"],
    ["1",    "UROC mail-in repair location"],
  ];
  // Two-column layout for location items
  const lcols = [[locItems[0], locItems[2], locItems[4]], [locItems[1], locItems[3]]];
  lcols.forEach((col, ci) => {
    col.forEach((item, ri) => {
      const ix = lx + 0.16 + ci * 2.1;
      const iy = 4.56 + ri * 0.5;
      t(s, item[0], ix, iy, 0.42, 0.22, { fontSize: 9.5, bold: true, color: P, valign: "middle" });
      t(s, item[1], ix + 0.44, iy, 1.55, 0.38, { fontSize: 8.5, color: G6, valign: "top" });
    });
  });

  // Right: 3 service cards
  const cards = [
    {
      title: "Replacement\nFulfillment",
      items: ["Advance Exchange (mail fulfillment)", "Delivery & Expert Setup (DES)", "Central Warehouses", "Field Stocking Locations (~97)", "Asurion-Owned & Consigned Inventory"],
    },
    {
      title: "Same-Unit Repair",
      items: ["Distribution Centers", "Corporate Stores", "Franchise Partners", "Mail-In Repair", "Third-Party Repair Providers\n(~6% of volume)"],
    },
    {
      title: "Reverse Logistics",
      items: ["Returned Devices", "Returned Parts", "Recovery & Disposition"],
    },
  ];

  const cardStart = lx + lw + 0.3;
  const cardW = (CW - lw - 0.3 - 0.2) / 3;
  cards.forEach((card, i) => {
    const cx = cardStart + i * (cardW + 0.1);
    s.addShape(pptx.ShapeType.roundRect, { x: cx, y: 1.88, w: cardW, h: 4.0, fill: { color: W }, line: { color: G2, width: 0.75 }, rectRadius: 0.07 });
    // Icon placeholder circle
    s.addShape(pptx.ShapeType.ellipse, { x: cx + 0.18, y: 2.0, w: 0.44, h: 0.44, fill: { color: PL }, line: { color: PL } });
    t(s, card.title, cx + 0.16, 2.56, cardW - 0.32, 0.55, { fontSize: 11.5, bold: true, color: G9, valign: "top" });
    s.addShape(pptx.ShapeType.line, { x: cx + 0.16, y: 3.14, w: cardW - 0.32, h: 0, line: { color: G2, width: 0.4 } });
    card.items.forEach((item, j) => {
      s.addShape(pptx.ShapeType.ellipse, { x: cx + 0.16, y: 3.25 + j * 0.5 + 0.08, w: 0.09, h: 0.09, fill: { color: P }, line: { color: P } });
      t(s, item, cx + 0.32, 3.23 + j * 0.5, cardW - 0.48, 0.45, { fontSize: 9, color: G6, valign: "top" });
    });
  });

  // Accent callout
  accentCallout(s, [
    { text: "Inventory is a material business asset", bold: true, color: G7 },
    { text: " — constantly moving across warehouses, field locations, stores, partners, and customer channels. Every movement requires visibility and accountability.", color: G7 },
  ], 6.02, 0.55);

  footnote(s, "Inventory value figures reflect total across replacement, same-unit repair, and reverse logistics programs.\nInventory is held across ~890 locations: ~700 UBIF & 3rd-party repair locations, 97 Forward Stocking Locations (FSLs), ~90 third-party repair vendors (~6% of repair volume), 2 main distribution centers, and 1 UROC mail-in repair location.", 6.64);
  footer(s, "SCALE & RELEVANCE", 3);
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 04 — Risk / Systems of Record
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "02 — RISK");
  t(s, "Inventory is split across multiple systems of record", ML, 0.55, CW, 0.95, { fontSize: 32, color: G9, fontFace: "Calibri Light" });

  // Subtitle with inline bold/color
  s.addText([
    { text: "When a program's inventory and financials live in one system, every unit and dollar is traceable. ", options: { color: G7 } },
    { text: "~$390.6M is already reconciled in D365 F&O", options: { color: G9, bold: true } },
    { text: " — the remaining ", options: { color: G7 } },
    { text: "$126.3M sits on legacy systems.", options: { color: P, bold: true } },
  ], { x: ML, y: 1.55, w: CW, h: 0.52, fontSize: 11, fontFace: "Calibri", valign: "top" });

  // Table container
  const tY = 2.18;
  const tH = 3.6;
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: tY, w: CW, h: tH, fill: { color: W }, line: { color: G2, width: 0.75 }, rectRadius: 0.06 });

  // Header row
  const hY = tY + 0.08;
  [["PROGRAM", ML + 0.25, 5.5], ["INVENTORY VALUE", 6.2, 2.0], ["SYSTEM OF RECORD", 8.4, 3.0], ["STATUS", 11.8, 1.1]].forEach(([lbl, x, w]) =>
    t(s, lbl, x, hY, w, 0.24, { fontSize: 7.5, bold: true, color: G4, charSpacing: 1, valign: "middle" })
  );
  s.addShape(pptx.ShapeType.line, { x: ML + 0.1, y: hY + 0.26, w: CW - 0.2, h: 0, line: { color: G2, width: 0.5 } });

  // Section: REPLACEMENT
  let rY = tY + 0.42;
  t(s, "REPLACEMENT", ML + 0.25, rY, 3, 0.26, { fontSize: 9, bold: true, color: P, valign: "middle" });
  t(s, "$390.6M", 6.2, rY, 2, 0.26, { fontSize: 10, color: G6, valign: "middle" });
  rY += 0.3;

  const replacementRows = [
    { name: "Advance Exchange", sub: "Mail replacement",                                  val: "$296.4M", sys: "D365 F&O", ok: true  },
    { name: "NDES",             sub: "Next-Day Expert Delivery & Setup",                  val: "$15.3M",  sys: "D365 F&O", ok: true  },
    { name: "DES",              sub: "Delivery & Expert Setup — replacement via Expert",  val: "$78.9M",  sys: "D365 F&O", ok: true  },
  ];
  replacementRows.forEach((row) => {
    s.addShape(pptx.ShapeType.line, { x: ML + 0.1, y: rY, w: CW - 0.2, h: 0, line: { color: G2, width: 0.3 } });
    t(s, row.name, ML + 0.25, rY + 0.06, 5.5, 0.24, { fontSize: 11, bold: true, color: G9, valign: "middle" });
    t(s, row.sub,  ML + 0.25, rY + 0.3,  5.5, 0.2,  { fontSize: 8.5, color: G4, valign: "middle" });
    t(s, row.val,  6.2,  rY + 0.12, 2.0, 0.26, { fontSize: 11.5, bold: true, color: G9, valign: "middle" });
    t(s, row.sys,  8.4,  rY + 0.12, 3.0, 0.26, { fontSize: 10, color: G6, valign: "middle" });
    // Completed badge
    s.addShape(pptx.ShapeType.roundRect, { x: 11.6, y: rY + 0.1, w: 1.3, h: 0.26, fill: { color: GL }, line: { color: GL }, rectRadius: 0.04 });
    t(s, "✓  Completed", 11.6, rY + 0.1, 1.3, 0.26, { fontSize: 8, bold: true, color: GN, align: "center", valign: "middle" });
    rY += 0.56;
  });

  // Section: REPAIR
  s.addShape(pptx.ShapeType.line, { x: ML + 0.1, y: rY, w: CW - 0.2, h: 0, line: { color: G2, width: 0.5 } });
  rY += 0.06;
  t(s, "REPAIR", ML + 0.25, rY, 3, 0.26, { fontSize: 9, bold: true, color: P, valign: "middle" });
  t(s, "$126.3M", 6.2, rY, 2, 0.26, { fontSize: 10, color: G6, valign: "middle" });
  rY += 0.3;

  const repairRows = [
    { name: "uBreakiFix",       sub: "Stores & distribution center", val: "$120.0M", sys: "ServiceBench + Distro", purple: true },
    { name: "Same-Unit Repair", sub: "3rd-party repair vendors",      val: "$6.3M",  sys: "ServiceBench",          purple: true },
  ];
  repairRows.forEach((row) => {
    s.addShape(pptx.ShapeType.line, { x: ML + 0.1, y: rY, w: CW - 0.2, h: 0, line: { color: G2, width: 0.3 } });
    t(s, row.name, ML + 0.25, rY + 0.06, 5.5, 0.24, { fontSize: 11, bold: true, color: G9, valign: "middle" });
    t(s, row.sub,  ML + 0.25, rY + 0.3,  5.5, 0.2,  { fontSize: 8.5, color: G4, valign: "middle" });
    t(s, row.val,  6.2, rY + 0.12, 2.0, 0.26, { fontSize: 11.5, bold: true, color: G9, valign: "middle" });
    t(s, row.sys,  8.4, rY + 0.12, 3.0, 0.26, { fontSize: 10, color: P, valign: "middle" });
    // Migrating badge
    s.addShape(pptx.ShapeType.roundRect, { x: 11.6, y: rY + 0.1, w: 1.3, h: 0.26, fill: { color: PL }, line: { color: PL }, rectRadius: 0.04 });
    t(s, "⏱  Migrating", 11.6, rY + 0.1, 1.3, 0.26, { fontSize: 8, bold: true, color: AM, align: "center", valign: "middle" });
    rY += 0.56;
  });

  // Total row
  s.addShape(pptx.ShapeType.line, { x: ML + 0.1, y: rY, w: CW - 0.2, h: 0, line: { color: G2, width: 0.5 } });
  t(s, "Total inventory value", ML + 0.25, rY + 0.1, 5.5, 0.28, { fontSize: 11, bold: true, color: G9, valign: "middle" });
  t(s, "~$516.9M", 6.2, rY + 0.1, 2.0, 0.28, { fontSize: 11.5, bold: true, color: G9, valign: "middle" });
  t(s, "Across all programs", 8.4, rY + 0.1, 4.5, 0.28, { fontSize: 10, color: G4, valign: "middle" });

  // Summary cards
  const cY = tY + tH + 0.12;
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: cY, w: 6.1, h: 0.82, fill: { color: GL }, line: { color: "C8E6C9", width: 0.5 }, rectRadius: 0.06 });
  s.addShape(pptx.ShapeType.ellipse, { x: ML + 0.16, y: cY + 0.24, w: 0.34, h: 0.34, fill: { color: GN }, line: { color: GN } });
  t(s, "✓", ML + 0.16, cY + 0.24, 0.34, 0.34, { fontSize: 10, bold: true, color: W, align: "center", valign: "middle" });
  t(s, "~$390.6M", ML + 0.62, cY + 0.06, 2.5, 0.4, { fontSize: 22, bold: true, color: GN, fontFace: "Calibri Light" });
  t(s, "Already in D365 F&O", ML + 0.62, cY + 0.46, 5.2, 0.22, { fontSize: 9, color: G6 });

  s.addShape(pptx.ShapeType.roundRect, { x: ML + 6.3, y: cY, w: 6.2, h: 0.82, fill: { color: PL }, line: { color: PM, width: 0.5 }, rectRadius: 0.06 });
  s.addShape(pptx.ShapeType.ellipse, { x: ML + 6.46, y: cY + 0.24, w: 0.34, h: 0.34, fill: { color: P }, line: { color: P } });
  t(s, "⏱", ML + 6.46, cY + 0.22, 0.34, 0.36, { fontSize: 10, color: W, align: "center", valign: "middle" });
  t(s, "$126.3M", ML + 6.92, cY + 0.06, 2.5, 0.4, { fontSize: 22, bold: true, color: P, fontFace: "Calibri Light" });
  t(s, "The remaining migration (~24%)", ML + 6.92, cY + 0.46, 5.2, 0.22, { fontSize: 9, color: G6 });

  footnote(s, "Advance Exchange is mail replacement; NDES is Next-Day Expert Delivery & Setup; DES is Delivery & Expert Setup (replacement via Expert). Inventory totals ~$516.9M across all programs.", SH - 0.6);
  footer(s, "FINANCIAL RISK", 4);
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 05 — Mechanism / Centerpiece
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "03 — MECHANISM · CENTERPIECE");
  t(s, "Fulfillment systems connect inventory movement to\nfinancial accountability", ML, 0.55, CW, 1.2, { fontSize: 30, color: G9, fontFace: "Calibri Light" });
  t(s, "Every unit travels a single chain — from a physical movement to a financial record. The goal isn't inventory in one place; it's keeping that chain unbroken across every system it touches.", ML, 1.82, CW, 0.44, { fontSize: 10.5, color: G6 });

  // Axis labels
  t(s, "PHYSICAL INVENTORY MOVEMENT", ML, 2.48, 5.5, 0.22, { fontSize: 8, bold: true, color: G4, charSpacing: 2, valign: "middle" });
  t(s, "BECOMES  →", 6.0, 2.48, 2.5, 0.22, { fontSize: 8, bold: true, color: G4, charSpacing: 2, valign: "middle", align: "center" });
  t(s, "FINANCIAL ACCOUNTABILITY", 9.5, 2.48, 3.8, 0.22, { fontSize: 8, bold: true, color: P, charSpacing: 2, valign: "middle", align: "right" });
  s.addShape(pptx.ShapeType.line, { x: ML, y: 2.74, w: CW, h: 0, line: { color: G2, width: 0.75 } });

  // Flow boxes — 7 steps, progressive purple
  const steps = [
    { label: "Procurement",             light: true,  mid: false, dark: false },
    { label: "Warehouse",               light: true,  mid: false, dark: false },
    { label: "Field Location\n/ Store", light: true,  mid: false, dark: false },
    { label: "Customer\nFulfillment",   light: true,  mid: false, dark: false },
    { label: "Inventory\nConsumption",  light: false, mid: true,  dark: false },
    { label: "Financial\nReconciliation", light: false, mid: false, dark: true  },
    { label: "Client Billing",          light: false, mid: false, dark: true  },
  ];

  const bW = 1.56;
  const bGap = (CW - steps.length * bW) / (steps.length - 1);
  const bY = 2.86;
  const bH = 1.24;

  steps.forEach((step, i) => {
    const x = ML + i * (bW + bGap);
    const bg = step.dark ? P : step.mid ? "7B4FBA" : PL;
    const border = step.dark ? P : step.mid ? "7B4FBA" : PM;
    const tc = (step.dark || step.mid) ? W : P;
    s.addShape(pptx.ShapeType.roundRect, { x, y: bY, w: bW, h: bH, fill: { color: bg }, line: { color: border, width: 0.75 }, rectRadius: 0.08 });
    // Icon circle placeholder
    s.addShape(pptx.ShapeType.ellipse, { x: x + bW / 2 - 0.2, y: bY + 0.14, w: 0.4, h: 0.4, fill: { color: step.dark ? "7B4FBA" : step.mid ? "9B72CC" : PL }, line: { color: step.dark ? "7B4FBA" : step.mid ? "9B72CC" : PM } });
    t(s, step.label, x, bY + 0.62, bW, bH - 0.68, { fontSize: 9.5, bold: true, color: tc, align: "center", valign: "middle" });
    if (i < steps.length - 1) {
      t(s, "→", x + bW + 0.02, bY + 0.46, bGap, 0.32, { fontSize: 14, bold: true, color: G3, align: "center", valign: "middle" });
    }
  });

  // Below-flow note
  t(s, "Every arrow is a system handoff. When those systems are fragmented, the chain breaks at the seams — and that's where inventory and dollars go unaccounted for.",
    ML, bY + bH + 0.18, CW, 0.4, { fontSize: 9.5, color: G6, align: "center" });

  // Purple callout
  purpleCallout(s, [
    { text: "The goal is not inventory in one system — it is maintaining ", options: { color: W } },
    { text: "accountability from procurement through financial close.", options: { color: W, bold: true } },
    { text: " Every inventory movement eventually becomes a financial event.", options: { color: W } },
  ], 5.42, 0.88);

  footnote(s, "Key message: Every inventory movement eventually becomes a financial event — accountability must hold across every system handoff.", SH - 0.6);
  footer(s, "THE MECHANISM", 5);
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 06 — Future State
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "04 — FUTURE STATE");
  t(s, "One operating model improves visibility,\ncontrol, and scale", ML, 0.55, CW, 1.25, { fontSize: 30, color: G9, fontFace: "Calibri Light" });

  const colW = 5.8;
  const todayX = ML;
  const futureX = SW - MR - colW;
  const colY = 1.95;
  const colH = 4.3;

  // TODAY column
  s.addShape(pptx.ShapeType.roundRect, { x: todayX, y: colY, w: colW, h: colH, fill: { color: GBB }, line: { color: G2, width: 0.75 }, rectRadius: 0.07 });
  t(s, "TODAY", todayX + 0.22, colY + 0.2, 1.5, 0.26, { fontSize: 9, bold: true, color: G4, charSpacing: 2, valign: "middle" });
  s.addShape(pptx.ShapeType.roundRect, { x: todayX + 2.0, y: colY + 0.17, w: 3.55, h: 0.3, fill: { color: G2 }, line: { color: G2 }, rectRadius: 0.04 });
  t(s, "Multiple disconnected systems", todayX + 2.05, colY + 0.17, 3.45, 0.3, { fontSize: 9, color: G6, align: "center", valign: "middle" });

  const todayItems = ["Inventory synchronization", "Manual reconciliation", "Billing disputes", "Delayed visibility", "Platform maintenance", "Custom integrations"];
  todayItems.forEach((item, i) => {
    const iy = colY + 0.64 + i * 0.58;
    if (i > 0) s.addShape(pptx.ShapeType.line, { x: todayX + 0.16, y: iy - 0.06, w: colW - 0.32, h: 0, line: { color: G2, width: 0.35 } });
    t(s, item, todayX + 0.22, iy, colW - 0.4, 0.3, { fontSize: 11, color: G7, valign: "middle" });
  });

  // Arrow circle between columns
  const arrowX = todayX + colW + 0.22;
  s.addShape(pptx.ShapeType.ellipse, { x: arrowX, y: colY + colH / 2 - 0.28, w: 0.56, h: 0.56, fill: { color: P }, line: { color: P } });
  t(s, "→", arrowX, colY + colH / 2 - 0.28, 0.56, 0.56, { fontSize: 14, bold: true, color: W, align: "center", valign: "middle" });

  // FUTURE column
  s.addShape(pptx.ShapeType.roundRect, { x: futureX, y: colY, w: colW, h: colH, fill: { color: PL }, line: { color: PM, width: 0.75 }, rectRadius: 0.07 });
  t(s, "FUTURE", futureX + 0.22, colY + 0.2, 1.5, 0.26, { fontSize: 9, bold: true, color: P, charSpacing: 2, valign: "middle" });
  s.addShape(pptx.ShapeType.roundRect, { x: futureX + 2.1, y: colY + 0.17, w: 3.45, h: 0.3, fill: { color: P }, line: { color: P }, rectRadius: 0.04 });
  t(s, "Unified operating model", futureX + 2.15, colY + 0.17, 3.35, 0.3, { fontSize: 9, color: W, align: "center", valign: "middle" });

  const futureItems = ["Inventory and finance move together", "Real-time visibility", "Explainable inventory movement", "Explainable dollars", "Unified fulfillment", "Faster product launches", "Better AI foundation"];
  futureItems.forEach((item, i) => {
    const iy = colY + 0.64 + i * 0.52;
    if (i > 0) s.addShape(pptx.ShapeType.line, { x: futureX + 0.16, y: iy - 0.06, w: colW - 0.32, h: 0, line: { color: PM, width: 0.35 } });
    t(s, item, futureX + 0.22, iy, colW - 0.4, 0.3, { fontSize: 11, color: G7, valign: "middle" });
  });

  // Accent callout
  accentCallout(s, [
    { text: "Inventory and financial records should remain ", options: { color: G7 } },
    { text: "connected throughout the fulfillment lifecycle", options: { color: G7, bold: true } },
    { text: " — reconciliation becomes a natural outcome, not a separate activity.", options: { color: G7 } },
  ], 6.4, 0.52);

  footnote(s, "Key message: Inventory accountability and financial accountability should be inseparable.", SH - 0.58);
  footer(s, "FUTURE STATE", 6);
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 07 — Roadmap
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "05 — ROADMAP");
  t(s, "A phased path to consolidate every inventory\nprogram onto a single ERP", ML, 0.55, 9.5, 1.15, { fontSize: 28, color: G9, fontFace: "Calibri Light" });

  // Legend top right
  const legItems = [
    { color: GN, bg: GL, label: "Completed" },
    { color: P,  bg: P,  label: "In progress" },
    { color: G4, bg: W,  label: "Planned", border: true },
  ];
  legItems.forEach((l, i) => {
    const lx = 9.8 + i * 1.18;
    if (l.border) {
      s.addShape(pptx.ShapeType.ellipse, { x: lx, y: 0.62, w: 0.22, h: 0.22, fill: { color: W }, line: { color: G3, width: 1 } });
    } else {
      s.addShape(pptx.ShapeType.ellipse, { x: lx, y: 0.62, w: 0.22, h: 0.22, fill: { color: l.bg }, line: { color: l.bg } });
      if (l.color === GN) t(s, "✓", lx, 0.62, 0.22, 0.22, { fontSize: 8, bold: true, color: W, align: "center", valign: "middle" });
    }
    t(s, l.label, lx + 0.28, 0.62, 1.0, 0.22, { fontSize: 8.5, color: G6, valign: "middle" });
  });

  t(s, "Managing inventory and financials across separate systems creates reconciliation gaps where loss accumulates. Each phase consolidates another fragmented system into Dynamics 365 F&O, establishing a single source of truth that improves financial control and visibility across every program.",
    ML, 1.72, CW, 0.44, { fontSize: 9.5, color: G6 });

  // Table
  const tableY = 2.26;
  const labelColW = 1.55;
  const phaseColW = (CW - labelColW - 0.1) / 4;
  const phaseX = (i) => ML + labelColW + 0.1 + i * phaseColW;

  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: tableY, w: CW, h: 4.5, fill: { color: W }, line: { color: G2, width: 0.75 }, rectRadius: 0.06 });

  const phases = [
    { year: "2024", label: "Phase 1", name: "Inventory SSoT for DES / NDES",      done: true,  inprog: false },
    { year: "2026", label: "Phase 2", name: "UBIF Next Gen Portal migration",       done: false, inprog: true  },
    { year: "2026", label: "Phase 3", name: "Inventory SSoT for SUR",               done: false, inprog: true, depends: "Depends on Next Gen Portal migration" },
    { year: "2027", label: "Phase 4", name: "UBIF Distro migration",                done: false, inprog: false },
  ];

  // Phase header row
  const phHY = tableY + 0.1;
  t(s, "PHASE", ML + 0.2, phHY, labelColW - 0.2, 0.56, { fontSize: 8.5, bold: true, color: G4, charSpacing: 1, valign: "middle" });
  phases.forEach((p, i) => {
    const x = phaseX(i);
    const iconBg = p.done ? GN : p.inprog ? P : W;
    const iconBorder = p.done ? GN : p.inprog ? P : G3;
    s.addShape(pptx.ShapeType.ellipse, { x: x + 0.1, y: phHY + 0.04, w: 0.28, h: 0.28, fill: { color: iconBg }, line: { color: iconBorder, width: p.done || p.inprog ? 0 : 1 } });
    if (p.done) t(s, "✓", x + 0.1, phHY + 0.04, 0.28, 0.28, { fontSize: 9, bold: true, color: W, align: "center", valign: "middle" });
    t(s, p.year, x + 0.46, phHY + 0.02, 0.65, 0.3, { fontSize: 13, bold: true, color: G9, fontFace: "Calibri Light", valign: "middle" });
    t(s, p.label, x + 1.12, phHY + 0.05, 1.1, 0.24, { fontSize: 8.5, color: G4, valign: "middle" });
    t(s, p.name, x + 0.1, phHY + 0.34, phaseColW - 0.16, 0.3, { fontSize: 9.5, bold: true, color: G9, valign: "middle" });
    if (p.depends) {
      s.addShape(pptx.ShapeType.roundRect, { x: x + 0.1, y: phHY + 0.65, w: phaseColW - 0.16, h: 0.24, fill: { color: PL }, line: { color: PL }, rectRadius: 0.04 });
      t(s, "⇄  " + p.depends, x + 0.14, phHY + 0.65, phaseColW - 0.24, 0.24, { fontSize: 7.5, color: P, valign: "middle" });
    }
  });

  s.addShape(pptx.ShapeType.line, { x: ML + 0.1, y: tableY + 0.98, w: CW - 0.2, h: 0, line: { color: G2, width: 0.5 } });

  // CONSOLIDATION row
  const conY = tableY + 1.02;
  const conH = 2.1;
  t(s, "CONSOLIDATION", ML + 0.12, conY, labelColW - 0.18, conH, { fontSize: 8.5, bold: true, color: G4, charSpacing: 1, valign: "middle", align: "center" });

  const consolidations = [
    { chip: "DAX + ServiceBench + KitKat → D365 F&O", body: "Mobility Warehouse (DAX) and DES/NDES field inventory (ServiceBench, incl. the KitKat FSL UI) consolidated into the D365 F&O ERP." },
    { chip: "BAU Portal → D365 F&O",                  body: "uBreakiFix store inventory moves from the BAU Portal into the D365 F&O ERP, giving stores visibility of inventory order and management in one system." },
    { chip: "ServiceBench + SBX → D365 F&O",          body: "Moves inventory management configurations supporting repair claims and fulfillment from ServiceBench into D365 F&O, and replaces SBX Cycle Count with DAX WMA." },
    { chip: "Distro → D365 F&O",                      body: "Store warehouse inventory moves from the in-house Distro platform into D365 F&O — the last system outside the single source of truth." },
  ];
  consolidations.forEach((c, i) => {
    const x = phaseX(i);
    s.addShape(pptx.ShapeType.roundRect, { x: x + 0.06, y: conY + 0.1, w: phaseColW - 0.12, h: 0.26, fill: { color: PL }, line: { color: PL }, rectRadius: 0.04 });
    t(s, c.chip, x + 0.1, conY + 0.1, phaseColW - 0.2, 0.26, { fontSize: 7.5, bold: true, color: P, valign: "middle" });
    t(s, c.body, x + 0.1, conY + 0.44, phaseColW - 0.2, conH - 0.5, { fontSize: 8.5, color: G6, valign: "top" });
  });

  s.addShape(pptx.ShapeType.line, { x: ML + 0.1, y: conY + conH, w: CW - 0.2, h: 0, line: { color: G2, width: 0.5 } });

  // DELIVERED BENEFITS row
  const benY = conY + conH + 0.04;
  const benH = 1.92;
  t(s, "DELIVERED\nBENEFITS", ML + 0.12, benY, labelColW - 0.18, benH, { fontSize: 8.5, bold: true, color: G4, charSpacing: 1, valign: "middle", align: "center" });

  const benefits = [
    ["$5.7M better than forecast", "$2.4M/yr AT&T billing gain", "138k fewer manual touches"],
    ["Store inventory in D365 F&O", "uBreakiFix under one source of truth", "Foundation for the SUR repair SSoT"],
    ["Repair-claim & fulfillment configs in D365 F&O", "SBX Cycle Count replaced by DAX WMA", "Removes ServiceBench from inventory management"],
    ["100% of inventory in one ERP", "One operating model, warehouse to store"],
  ];
  benefits.forEach((items, i) => {
    const x = phaseX(i);
    items.forEach((item, j) => {
      t(s, "✓  " + item, x + 0.1, benY + 0.16 + j * 0.52, phaseColW - 0.2, 0.48, { fontSize: 8.5, color: P, valign: "top" });
    });
  });

  footnote(s, "Per the UBIF inventory SSoT roadmap: each phase consolidates a legacy source system (Mobility Warehouse DAX, DES/NDES & SUR field inventory in ServiceBench, Store Inventory BAU Portal, in-house Distro) into the Dynamics 365 F&O ERP as the single source of truth. Phases 2 (SUR) and 3 (UBIF Next Gen Portal) run in parallel in 2026; Phase 4 (UBIF Distro) is slotted for 2027 and completes warehouse-to-store traceability.", SH - 0.6);
  footer(s, "ROADMAP", 7);
}

// ══════════════════════════════════════════════════════════════════════════
// SLIDE 08 — Why Distro Matters
// ══════════════════════════════════════════════════════════════════════════
{
  const s = pptx.addSlide();
  s.background = { color: W };

  sectionLabel(s, "06 — WHY DISTRO MATTERS", 0.3);
  t(s, "PHASE 4 — UBIF DISTRO MIGRATION, SLOTTED FOR 2027", ML, 0.52, CW, 0.2, { fontSize: 8, color: P, bold: true, charSpacing: 1.5, valign: "middle" });
  t(s, "Distro is the last system standing — and the most\nstrategic to retire", ML, 0.74, CW, 1.3, { fontSize: 28, color: G9, fontFace: "Calibri Light" });

  // Top callout box (gray border, no fill)
  s.addShape(pptx.ShapeType.roundRect, { x: ML, y: 2.08, w: CW, h: 0.78, fill: { color: W }, line: { color: G2, width: 1.0 }, rectRadius: 0.06 });
  s.addText([
    { text: "There's ", options: { color: G7 } },
    { text: "no single technical blocker", options: { color: G7, bold: true } },
    { text: " — Distro is stable and could run on our stack indefinitely. The case for moving it in 2027 is ", options: { color: G7 } },
    { text: "structural", options: { color: G7, bold: true } },
    { text: ": keeping the in-house warehouse platform separate compounds ", options: { color: G7 } },
    { text: "financial", options: { color: G7, bold: true } },
    { text: ", ", options: { color: G7 } },
    { text: "operational", options: { color: G7, bold: true } },
    { text: ", and ", options: { color: G7 } },
    { text: "commercial", options: { color: G7, bold: true } },
    { text: " risk as we scale.", options: { color: G7 } },
  ], { x: ML + 0.2, y: 2.12, w: CW - 0.4, h: 0.68, fontSize: 10.5, fontFace: "Calibri", valign: "middle" });

  // 4 pillars
  const pillars = [
    {
      title: "Financial single source of truth",
      today: "Intercompany transfers across Portal → Next-Gen Portal → Distro aren't unified, and we pay stores for activity that lives outside the ERP.",
      goal:  "Transfers and financials settle automatically in one ledger — every dollar reconciled.",
    },
    {
      title: "Designed-out loss exposure",
      today: "Inventory losses surface in the integrations between Portal, Next-Gen Portal and Distro — latent risk that grows with volume.",
      goal:  "Fewer systems and handoffs means no integration seams for inventory to disappear in.",
    },
    {
      title: "Operational resilience",
      today: "Distro is a separate application maintained by only a couple of specialists — the skill set isn't fungible (key-person risk).",
      goal:  "One platform and one skill base — a team that flexes across the business.",
    },
    {
      title: "Vendor-driven request",
      today: "UPS, an Asurion vendor, is moving off their legacy platform; staying on Distro forces them to re-integrate with it — they already run D365 for mobility pick/pack/ship.",
      goal:  "A common D365 platform our vendors are asking us to standardize on.",
    },
  ];

  const pW = (CW - 0.3) / 4;
  const pY = 3.04;
  const pH = 2.8;

  pillars.forEach((p, i) => {
    const x = ML + i * (pW + 0.1);
    s.addShape(pptx.ShapeType.roundRect, { x, y: pY, w: pW, h: pH, fill: { color: W }, line: { color: G2, width: 0.75 }, rectRadius: 0.07 });
    // Icon circle
    s.addShape(pptx.ShapeType.ellipse, { x: x + 0.14, y: pY + 0.16, w: 0.42, h: 0.42, fill: { color: PL }, line: { color: PL } });
    t(s, p.title, x + 0.14, pY + 0.68, pW - 0.28, 0.52, { fontSize: 10.5, bold: true, color: G9, valign: "top" });
    t(s, "TODAY", x + 0.14, pY + 1.26, pW - 0.28, 0.2, { fontSize: 7.5, bold: true, color: G4, charSpacing: 1, valign: "middle" });
    t(s, p.today, x + 0.14, pY + 1.48, pW - 0.28, 0.72, { fontSize: 8.5, color: G6, valign: "top" });
    s.addShape(pptx.ShapeType.line, { x: x + 0.14, y: pY + 2.24, w: pW - 0.28, h: 0, line: { color: G2, width: 0.5 } });
    t(s, "END GOAL", x + 0.14, pY + 2.3, pW - 0.28, 0.2, { fontSize: 7.5, bold: true, color: P, charSpacing: 1, valign: "middle" });
    t(s, p.goal, x + 0.14, pY + 2.52, pW - 0.28, 0.5, { fontSize: 8.5, bold: true, color: P, valign: "top" });
  });

  // Purple callout
  purpleCallout(s, [
    { text: "The end state: ", options: { color: W, bold: true } },
    { text: "retiring Distro puts every unit and every dollar in one ERP — explainable movement, explainable finances, a resilient team, and a client-ready foundation to scale and build AI on.", options: { color: W } },
  ], 6.0, 0.72);

  footnote(s, "Distro review: no single technical blocker — Distro's tech stack is stable and could run on Asurion infrastructure. The 2027 migration case is structural, not a stability fire drill.\nDrivers surfaced in review: intercompany financial reconciliation, inter-system inventory loss, key-person operational risk, and vendor (UPS) request for a common platform.", SH - 0.62);
  footer(s, "WHY DISTRO MATTERS", 8);
}

// ── Write ──────────────────────────────────────────────────────────────────
await pptx.writeFile({ fileName: "public/Inventory-at-Asurion.pptx" });
console.log("✅  public/Inventory-at-Asurion.pptx generated");
