const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  ShadingType,
  PageBreak,
  Spacing,
  HorizontalPositionAlign,
  HorizontalPositionRelativeFrom,
  convertInchesToTwip,
  Header,
  Footer,
  ImageRun,
} = require("docx");
const fs = require("fs");

// ---------- Color Palette ----------
const COLORS = {
  primary: "1A3C5E",     // Deep navy
  accent: "00A86B",      // Emerald green
  lightBg: "F0F7F4",     // Soft mint bg
  headerBlue: "0D2B45",  // Dark header
  tableBg: "E8F4F0",
  altRow: "F7FBFA",
  white: "FFFFFF",
  textDark: "1C1C1C",
  subtleGray: "6B7280",
  gold: "B8860B",
};

// ---------- Helper Functions ----------
const makeHeading1 = (text) =>
  new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    run: {
      color: COLORS.primary,
      bold: true,
    },
  });

const makeHeading2 = (text) =>
  new Paragraph({
    children: [new TextRun({ text, bold: true, color: COLORS.primary, size: 28 })],
    spacing: { before: 320, after: 160 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORS.accent },
    },
  });

const makeHeading3 = (text) =>
  new Paragraph({
    children: [new TextRun({ text, bold: true, color: COLORS.accent, size: 24 })],
    spacing: { before: 240, after: 120 },
  });

const makeHeading4 = (text) =>
  new Paragraph({
    children: [new TextRun({ text, bold: true, color: COLORS.primary, size: 22, italics: true })],
    spacing: { before: 180, after: 80 },
  });

const makeParagraph = (text, options = {}) =>
  new Paragraph({
    children: [
      new TextRun({
        text,
        color: COLORS.textDark,
        size: 22,
        ...options,
      }),
    ],
    spacing: { before: 80, after: 100 },
  });

const makeBullet = (text, level = 0) =>
  new Paragraph({
    children: [new TextRun({ text, size: 22, color: COLORS.textDark })],
    bullet: { level },
    spacing: { before: 40, after: 60 },
  });

const makeQuote = (text) =>
  new Paragraph({
    children: [new TextRun({ text, italics: true, color: COLORS.primary, size: 22 })],
    indent: { left: convertInchesToTwip(0.4) },
    border: {
      left: { style: BorderStyle.THICK, size: 12, color: COLORS.accent },
    },
    spacing: { before: 120, after: 120 },
    shading: { type: ShadingType.SOLID, color: COLORS.lightBg },
  });

const makeSpacer = (size = 100) =>
  new Paragraph({ spacing: { before: size } });

const makeDivider = () =>
  new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent } },
    spacing: { before: 200, after: 200 },
  });

const makePageBreak = () =>
  new Paragraph({ children: [new PageBreak()] });

// ---------- Table Factory ----------
const makeTable = (headers, rows, themeColor = COLORS.primary) => {
  const headerRow = new TableRow({
    children: headers.map(
      (h) =>
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun({ text: h, bold: true, color: COLORS.white, size: 20 })],
              alignment: AlignmentType.CENTER,
            }),
          ],
          shading: { type: ShadingType.SOLID, color: themeColor },
          margins: { top: 80, bottom: 80, left: 100, right: 100 },
        })
    ),
    tableHeader: true,
  });

  const dataRows = rows.map((row, rowIdx) =>
    new TableRow({
      children: row.map(
        (cell) =>
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: cell, size: 20, color: COLORS.textDark })],
              }),
            ],
            shading: {
              type: ShadingType.SOLID,
              color: rowIdx % 2 === 0 ? COLORS.altRow : COLORS.white,
            },
            margins: { top: 60, bottom: 60, left: 100, right: 100 },
          })
      ),
    })
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [headerRow, ...dataRows],
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent },
      left: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent },
      right: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent },
      insideH: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC" },
      insideV: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC" },
    },
  });
};

// =====================================================================
// DOCUMENT BUILD
// =====================================================================
const doc = new Document({
  creator: "Steven Tanardi",
  title: "Deep Research Summary - Yunus Social Business Innovation Award",
  description: "Comprehensive research on AI Trash Scanner and BSF Composting",
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 22, color: COLORS.textDark },
        paragraph: { spacing: { line: 276 } },
      },
      heading1: {
        run: { font: "Calibri", bold: true, color: COLORS.primary, size: 36 },
        paragraph: { spacing: { before: 400, after: 200 } },
      },
      heading2: {
        run: { font: "Calibri", bold: true, color: COLORS.primary, size: 28 },
        paragraph: { spacing: { before: 300, after: 160 } },
      },
      heading3: {
        run: { font: "Calibri", bold: true, color: COLORS.accent, size: 24 },
        paragraph: { spacing: { before: 240, after: 120 } },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(1.2),
            bottom: convertInchesToTwip(1.0),
            left: convertInchesToTwip(1.2),
            right: convertInchesToTwip(1.2),
          },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "6th Taiwan Yunus Social Business Innovation Award — Deep Research Summary",
                  color: COLORS.subtleGray, size: 18, italics: true,
                }),
              ],
              border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent } },
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              children: [
                new TextRun({ text: "© 2026 Steven Tanardi — Yunus Vision Team | Confidential Submission", color: COLORS.subtleGray, size: 18 }),
              ],
              border: { top: { style: BorderStyle.SINGLE, size: 4, color: COLORS.accent } },
              alignment: AlignmentType.CENTER,
            }),
          ],
        }),
      },
      children: [

        // ─── COVER ───────────────────────────────────────────────
        makeSpacer(400),
        new Paragraph({
          children: [new TextRun({ text: "Deep Research Summary", bold: true, size: 56, color: COLORS.primary, font: "Calibri" })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
        }),
        new Paragraph({
          children: [new TextRun({ text: "6th Taiwan Yunus Social Business Innovation Award", size: 32, color: COLORS.accent, font: "Calibri" })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
        }),
        new Paragraph({
          children: [new TextRun({ text: "Projects 03 & 04: AI Trash Scanner · BSF Bio-Loop", size: 26, color: COLORS.headerBlue, italics: true })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 60 },
        }),
        makeDivider(),
        new Paragraph({
          children: [
            new TextRun({ text: "Prepared by: ", bold: true, size: 22, color: COLORS.textDark }),
            new TextRun({ text: "Steven Tanardi", size: 22, color: COLORS.primary }),
            new TextRun({ text: "  |  Date: April 2026  |  Version: 1.0", size: 22, color: COLORS.subtleGray }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
        }),
        makePageBreak(),

        // ─── EXECUTIVE SUMMARY ───────────────────────────────────
        makeHeading1("Executive Summary"),
        makeParagraph(
          "This document synthesizes comprehensive academic and industry research across two flagship social enterprise proposals submitted for the 6th Taiwan Yunus Social Business Innovation Award. Both projects address Taiwan's critical environmental gaps—the failure of 'surface-level' recycling and the urban organic waste crisis—using frontier biotechnology and AI."
        ),
        makeParagraph(
          "The AI Trash Scanner uses Near-Infrared (NIR) spectroscopy and computer vision (YOLOv8) to achieve molecular-level material identification, raising recycling purity from current contaminated levels to 99.5%+. The BSF Bio-Loop converts night market food waste into premium insect protein and organic fertilizer within 12 days, replacing imported fishmeal and eliminating incineration of wet waste."
        ),
        makeQuote(
          "Together, these projects form an integrated circular economy system where the Trash Scanner produces cleaner material streams and the BSF Bio-Loop converts residual organic waste into high-value protein and fertilizer. Synergistically, they address Yunus's three zeroes: Zero Carbon, Zero Poverty, and Zero Unemployment."
        ),
        makeDivider(),
        makePageBreak(),

        // ─── PART I ───────────────────────────────────────────────
        makeHeading1("PART I — AI Trash Scanner: Molecular Sorting System"),
        makeHeading2("1.1  The Problem: Taiwan's Recycling Illusion"),
        makeParagraph(
          "Taiwan reports a 59.6% municipal solid waste recycling rate and a 96.7% waste recovery rate in 2024 (Taiwan Ministry of Environment). However, these figures mask a critical systemic failure: molecular purity. Surface-level sorting cannot distinguish PET from PLA, or paper cups with PE-liners from plain paper napkins."
        ),
        makeHeading3("Key Statistics (2024)"),
        makeTable(
          ["Metric", "Value", "Source"],
          [
            ["Municipal Recycling Rate", "59.6%", "MoEnv Taiwan"],
            ["Industrial Waste Recycling Rate", "85.4%", "Holland Circular Hotspot"],
            ["Total Annual Waste", ">11 million tonnes", "Taipei Times"],
            ["Active Incineration Plants", "25 nationwide", "EMA Gov.tw"],
            ["Incineration plant average age", ">20 years", "EMA Gov.tw"],
          ]
        ),
        makeSpacer(200),
        makeHeading3("Root Causes of the Purity Problem"),
        makeBullet("Composite packaging — Multi-layer films (paper cups with PE liners, metallized snack bags) are nearly impossible to separate at standard facilities."),
        makeBullet("Organic contamination — Food residue degrades spectral signatures, causing mis-classification in automated sorting."),
        makeBullet("Label interference — Shrink sleeves and full-coverage metallic labels block NIR sensor readings."),
        makeBullet("Cognitive overload on sorters — Taiwan's '4-in-1' system (四合一) places excessive visual burden on workers who cannot distinguish PET (#1) from PLA bioplastic."),
        makeSpacer(100),
        makeQuote(
          "The Core Loss: Mis-sorted containers are routed to incineration rather than entering a circular material loop. Government policy now explicitly targets food waste diversion from incineration plants by end of 2027."
        ),

        makeHeading2("1.2  Technology Deep Dive: Multimodal Sensor Fusion"),
        makeHeading3("Near-Infrared (NIR) Spectroscopy — The 'Molecular Camera'"),
        makeParagraph(
          "NIR spectroscopy is the gold standard for industrial polymer identification, analyzing the unique spectral signature of different resins as they reflect infrared light (1,450–2,450 nm range). Commercial module: trinamiX PAL One (~$1,500 USD per unit)."
        ),
        makeHeading4("Performance Benchmarks (2024 Literature)"),
        makeBullet("Polymer identification accuracy: 90–97%+ under clean conditions"),
        makeBullet("Processing speed: up to 3 tonnes/hour per conveyor lane"),
        makeBullet("Key limitation: Black plastics (carbon black pigment) absorb NIR and are invisible to standard sensors"),
        makeSpacer(100),
        makeHeading4("NIR Limitation Resolution Matrix"),
        makeTable(
          ["Limitation", "Technical Cause", "Our Solution"],
          [
            ["Black/dark plastics invisible", "Carbon black absorbs NIR", "Supplement with MIR (Mid-Infrared) sensing"],
            ["Contaminated surfaces", "Organic residue distorts spectral peaks", "Pre-wash jet + CNN 'dirty' dataset training"],
            ["Label blocking readings", "Full-coverage shrink sleeves shield polymer", "Multi-angle scanning + barcode cross-reference"],
            ["High-speed degradation", "Signal window too short at fast belt speed", "Dual-camera staggered scan zones"],
          ]
        ),
        makeSpacer(200),
        makeHeading3("Computer Vision (YOLOv8/YOLOv10) — Shape & Brand Intelligence"),
        makeParagraph(
          "Modern object detection models achieve >90% accuracy in real-world recycling environments. Taiwan-specific datasets are essential for recognizing local brands (Uni-President, HeySong, TTL) that dominate waste streams. AI-powered sorting in Taiwan MRFs has demonstrated throughput increases from 2 to 10 tonnes/hour alongside 70%+ labor reduction in repetitive sorting roles (IRO Journals, 2024)."
        ),
        makeHeading4("Complete Sensor Fusion Matrix — The 'Sort-Master' System"),
        makeTable(
          ["Sensor Type", "Target Material", "Detection Logic"],
          [
            ["NIR Spectrometer (1,450–2,450 nm)", "All plastics, fiber composites", "Molecular polymer fingerprint"],
            ["4K RGB Camera + YOLOv8", "Shape, brand, color", "Visual classification + label reading"],
            ["Eddy Current Sensor", "Aluminum (non-ferrous)", "Conductivity field measurement"],
            ["Static Magnetic Sensor", "Iron/steel cans", "Ferrous detection"],
            ["Acoustic Resonance Ping", "Glass vs. thick plastic", "Vibration frequency analysis"],
            ["Moisture Sensor", "Organic/wet waste", "Humidity level threshold"],
          ],
          COLORS.accent
        ),

        makeHeading2("1.3  Market Context & Competitive Intelligence"),
        makeHeading3("Taiwan AI Sorting Landscape (2024)"),
        makeBullet("New Taipei City has deployed AI-powered robotic sorting arms in MRFs."),
        makeBullet("Taiwan's Ministry of Environment is funding industry-academia collaborations for smart circularity, indicating B2G procurement readiness."),
        makeBullet("Extended Producer Responsibility (EPR) legislation is expanding, increasing brand-owner financial incentive to fund sorting infrastructure."),
        makeSpacer(100),
        makeHeading3("Global Competitive Landscape"),
        makeTable(
          ["Company", "Technology", "Limitation vs. Our Approach"],
          [
            ["AMP Robotics (USA)", "Computer vision + robotics", "Vision-only; misses resin-level molecular ID"],
            ["Recycleye (UK)", "AI vision sorters", "No NIR spectroscopy integration"],
            ["Tomra (Norway)", "NIR sorters", "No AI federated learning or AR tools"],
            ["ZenRobotics (Finland)", "AI + robotics", "Industrial scale only; no AR worker empowerment"],
          ]
        ),
        makeSpacer(80),
        makeQuote("Our Differentiation: The only Taiwan-market system combining NIR molecular ID + YOLOv8 brand recognition + AR worker empowerment + Federated Learning for new composite materials."),

        makeHeading2("1.4  Financial Architecture"),
        makeHeading3("Revenue Streams"),
        makeTable(
          ["Revenue Model", "Description", "Margin Profile"],
          [
            ["B2B Equipment Leasing", "Sort-Master units to MRFs & property managers", "Medium"],
            ["B2G Data-as-a-Service", "Waste flow analytics to Taiwan EPA", "High"],
            ["Material Premium Revenue", "Revenue share from higher-value recyclable sales", "High"],
            ["AR Worker License", "SaaS subscription for smaller sorting hubs", "Recurring"],
          ]
        ),
        makeSpacer(120),
        makeHeading3("Unit Economics (Per Sorting Node)"),
        makeBullet("CAPEX: ~$55,000–$75,000 USD per sorting line"),
        makeBullet("Estimated payback period: 2.5–4 years"),
        makeBullet("Annual savings per hub: $120,000–$180,000 USD (labor + material value uplift)"),
        makeBullet("Government subsidies: Available via circular economy green growth funds"),

        makeHeading2("1.5  Social Impact & Yunus Alignment"),
        makeHeading3("SDG Coverage"),
        makeTable(
          ["SDG", "Goal", "Implementation"],
          [
            ["SDG 9", "Industry & Innovation", "Deploying frontier AI infrastructure for circular material flows in Taiwan"],
            ["SDG 12", "Responsible Production", "Converting 'false recycling' into genuine molecular-level material recovery"],
            ["SDG 14", "Life Below Water", "Preventing microplastic contamination from landfill leachate"],
          ],
          COLORS.accent
        ),
        makeSpacer(120),
        makeHeading3("Yunus '3-Zero' Alignment"),
        makeBullet("Zero Net Carbon: Replacing incineration (CO₂-intensive) with closed-loop material recovery"),
        makeBullet("Zero Unemployment: Shifting sorter roles from hazardous manual picking to tech-monitoring, enabling workforce upskilling"),
        makeSpacer(100),
        makeHeading3("Year 5 Impact Targets"),
        makeBullet("30 sorting nodes deployed across Taiwan"),
        makeBullet("20% reduction in Taiwan's incineration load (~2.2M tonnes/year diverted)"),
        makeBullet("99.5%+ material purity rate for PET, HDPE, and Paper streams"),
        makeBullet("30–40% increase in resale price of recycled materials"),

        makePageBreak(),

        // ─── PART II ──────────────────────────────────────────────
        makeHeading1("PART II — BSF Bio-Loop: Circular Protein System"),
        makeHeading2("2.1  The Problem: Urban Organic Waste & Protein Import Dependence"),
        makeParagraph(
          "Taiwan generates over 1,000 tonnes of food waste daily from commercial and restaurant sectors. Night markets like Shilin, Raohe, Fengjia, and Ningxia produce concentrated, high-organic-matter waste that is incompatible with traditional composting due to its high lipid and salt content."
        ),
        makeHeading3("The Dual Crisis"),
        makeBullet("Waste Crisis: Night market food waste cannot be composted (high fat/salt kills bacteria) and is currently sent to incineration plants that Taiwan's government plans to phase out for food waste by end of 2027."),
        makeBullet("Protein Import Vulnerability: Taiwan imports significant volumes of fishmeal for its major aquaculture sector, creating supply chain and price volatility risk."),

        makeHeading2("2.2  The Science of BSF Bioconversion"),
        makeParagraph(
          "Hermetia illucens (Black Soldier Fly) is nature's most efficient organic waste converter. BSF larvae can reduce organic waste volume by 70–80% in just 7–14 days while producing 40–50% crude protein biomass."
        ),
        makeHeading3("Key Biological Data"),
        makeTable(
          ["Metric", "Value", "Citation"],
          [
            ["Waste volume reduction", "70–80% in 7–14 days", "PeerJ Journals, 2024"],
            ["Larval crude protein content", "40–50% dry weight", "Texas A&M, 2024"],
            ["Lipid content", "25–35% dry weight", "BetaBugs, 2024"],
            ["Antimicrobial peptides", "Present (natural immunity benefit)", "Market.us, 2025"],
            ["Pathogen/viral load reduction", "Confirmed efficacy", "ACS Publications, 2026"],
            ["Chitin content (exoskeleton)", "5–10% dry weight", "FreezeM, 2024"],
          ]
        ),
        makeSpacer(120),
        makeHeading3("Night Market Waste Compatibility Matrix"),
        makeTable(
          ["Waste Type", "Night Market Source", "BSF Suitability"],
          [
            ["Cooked rice / noodle scraps", "All food stalls", "Excellent ✓"],
            ["Fruit peels & vegetable trim", "Produce stalls", "Excellent ✓"],
            ["Fried food residue (light oil)", "Fried chicken, donut stalls", "Good (moderate oil) ✓"],
            ["Fish / meat trimmings", "BBQ, seafood stalls", "Excellent – protein boost ✓"],
            ["Heavy salt / MSG broth", "Soup stalls", "Dilute before feeding ⚠"],
          ],
          COLORS.accent
        ),

        makeHeading2("2.3  Taiwan's BSF Ecosystem — Existing Players"),
        makeParagraph(
          "Research reveals a growing, government-supported BSF ecosystem in Taiwan with several established social enterprises and institutional pilots."
        ),
        makeHeading3("Key Organizations"),
        makeBullet("Monster Biotechnology (蟲明科技): Pioneered BSF system modules for chain restaurants. Collects food waste, produces protein and fertilizer for agriculture/livestock. (Circular Taiwan, 2024)"),
        makeBullet("Stonbo Creative (石峰生態): Founded by retired entomology professor. Operates ecological farm with patented automated BSF feeding system. (Circle Economy, 2024)"),
        makeBullet("Institutional Pilots: National Ilan University, Hsinchu County, Meishan Township (Chiayi) have all tested BSF for food waste processing. (innors-tw.com, 2024)"),
        makeSpacer(100),
        makeHeading3("Critical Regulatory Update"),
        makeQuote(
          "Since 2021, Taiwan regulations permit BSF larvae for animal feed to be raised on non-vegetarian diets (including fish/meat scraps). Taiwan's Fisheries Research Institute confirmed BSF as a fishmeal replacement for Japanese eel aquaculture with no negative impact on growth or meat quality. By end of 2027, government policy mandates food waste diversion away from incineration."
        ),

        makeHeading2("2.4  Market Intelligence & Growth Projections"),
        makeHeading3("Global BSF / Insect Protein Market Forecast"),
        makeTable(
          ["Market Segment", "2025 Estimate", "2030 Projection", "CAGR"],
          [
            ["BSF Market (conservative)", "$1.01 billion", "$2.22 billion", "17.0%"],
            ["BSF Larvae Market", "~$1.5 billion", "~$5 billion (by 2034)", "30.8%"],
            ["Insect Protein Market (broad)", "~$800 million", "~$3.6 billion", "38.6%"],
          ]
        ),
        makeSpacer(120),
        makeHeading3("BSF vs. Alternative Waste Management Methods"),
        makeTable(
          ["Comparison", "BSF", "Traditional Composting", "Incineration"],
          [
            ["Processing time", "7–14 days", "60–180 days", "<1 day"],
            ["High-lipid waste", "Handles well ✓", "Kills bacteria ✗", "Burns ✓"],
            ["Value outputs", "Protein + Fertilizer", "Compost only", "Energy only"],
            ["Urban footprint", "Container-scale ✓", "Needs large land ✗", "Plant-scale ✗"],
            ["Carbon footprint", "Low ✓", "Low", "High ✗"],
          ],
          COLORS.accent
        ),

        makeHeading2("2.5  Business Model & Financial Projections"),
        makeHeading3("Revenue Structure (Per Hub, Annualized)"),
        makeTable(
          ["Product", "Volume/Year", "Price/Tonne", "Annual Revenue"],
          [
            ["BSFL Protein Meal", "50 tonnes", "~$1,500 USD", "$75,000 USD"],
            ["BSF Frass Fertilizer", "150 tonnes", "~$300 USD", "$45,000 USD"],
            ["Tipping Fees (from markets)", "700 tonnes", "~$30 USD", "$21,000 USD"],
            ["Total Revenue per Hub", "—", "—", "~$141,000 USD"],
          ]
        ),
        makeSpacer(100),
        makeBullet("CAPEX per hub: ~$120,000–$180,000 USD"),
        makeBullet("Estimated payback period: 18–30 months"),
        makeBullet("Year 5 Target: Network of 15 hubs across Taiwan; processing 10,000 tonnes of organic waste annually"),

        makeHeading2("2.6  Social Impact & Yunus Alignment"),
        makeTable(
          ["SDG", "Goal", "Implementation"],
          [
            ["SDG 2", "Zero Hunger", "Building domestic protein independence for Taiwan's aquaculture sector"],
            ["SDG 12", "Responsible Consumption", "Eliminating commercial food waste at the source within 24 hours"],
            ["SDG 15", "Life on Land", "Reducing synthetic fertilizer dependence via BSF frass fertilizer"],
          ],
          COLORS.accent
        ),
        makeSpacer(120),
        makeHeading3("Yunus '3-Zero' Alignment"),
        makeBullet("Zero Net Carbon: BSF processing eliminates wet food waste incineration (high GHG), replacing fossil-derived fishmeal. LCA studies confirm BSF outperforms landfilling and incineration (MDPI, 2025)."),
        makeBullet("Zero Poverty: Night market associations gain sustainable waste revenue stream; small-scale urban farmers access affordable organic fertilizer, lowering their production costs."),
        makeBullet("Zero Unemployment: Creates local Bio-Hub Technician roles; supply chain jobs in protein drying, frass packaging, and delivery logistics."),

        makePageBreak(),

        // ─── PART III ─────────────────────────────────────────────
        makeHeading1("PART III — Integrated System: The Circular Synergy"),
        makeParagraph(
          "The true power of this proposal lies in the complementarity between Projects 03 and 04. They are not two separate social businesses—they are an integrated urban circular metabolism system."
        ),
        makeHeading3("Systems Integration"),
        makeParagraph("How the two projects work together:"),
        makeBullet("The Trash Scanner's sorting matrix includes Category 12 (Food Waste/Compost), which creates a pre-sorted, clean organic stream directly usable as BSF feedstock."),
        makeBullet("BSF frass is sold to urban agriculture customers who also use data from the Trash Scanner's Data-as-a-Service (DaaS) platform to report their sustainability KPIs."),
        makeBullet("Together, they provide a comprehensive circular economy social business addressing all three 'zeros' simultaneously—the hallmark of a Yunus-grade proposal."),
        makeSpacer(100),
        makeTable(
          ["Dimension", "Project 03: Trash Scanner", "Project 04: BSF Bio-Loop", "Combined Impact"],
          [
            ["Problem solved", "Recycling purity / contamination", "Organic waste & protein imports", "Full urban waste stream covered"],
            ["Technology", "NIR + AI Vision + Robotics", "Insect bioconversion + IoT", "AI + Bio-tech convergence"],
            ["Revenue model", "B2B, B2G, SaaS", "Protein + Fertilizer + Tipping Fee", "Diversified, resilient income"],
            ["SDGs covered", "9, 12, 14", "2, 12, 15", "SDG 2, 9, 12, 14, 15"],
            ["Yunus zeroes", "Zero Carbon, Zero Unemployment", "All three zeroes", "Complete '3-Zero' system"],
          ]
        ),

        makePageBreak(),

        // ─── PART IV ──────────────────────────────────────────────
        makeHeading1("PART IV — Yunus Competition Strategic Positioning"),
        makeHeading2("4.1  Evaluation Criteria Alignment"),
        makeTable(
          ["Criterion", "Our Strength", "Evidence"],
          [
            ["7 Principles of Social Business", "Zero-profit-extraction model; surplus reinvested into hub expansion", "Business model design section"],
            ["Business Model Clarity", "Dual revenue streams per project; clear unit economics table", "Financial projections in each proposal"],
            ["Social Impact & KPIs", "Quantified targets: tonnes diverted, protein produced, jobs created", "LCA data + market research citations"],
            ["Financial Sustainability", "18–36 month payback; recurring SaaS/tipping fee revenue", "Revenue model tables in this document"],
            ["SDG Alignment", "Projects 03+04 cover SDGs 2, 9, 12, 14, 15", "SDG mapping in each section"],
          ]
        ),
        makeSpacer(200),
        makeHeading2("4.2  Compelling Competition Narratives"),
        makeHeading3("For Project 03 — Trash Scanner"),
        makeQuote(
          "\"Taiwan recycles 60% of its waste—but 'recycles' much of it straight to the incinerator because of invisible molecular contamination. Our system is Taiwan's missing molecular layer: seeing what the human eye cannot, and turning every waste stream into a pure value stream.\""
        ),
        makeHeading3("For Project 04 — BSF Bio-Loop"),
        makeQuote(
          "\"Every night at Shilin Night Market, 10 tonnes of food disappears into garbage trucks, bound for incineration. Within 12 days, that same waste could be reborn as protein pellets feeding the fish on your breakfast table. This is not waste management—this is biological alchemy.\""
        ),
        makeHeading2("4.3  Key Academic Keywords for Presentations"),
        makeBullet("'Molecular Purity' (分子純度): Positions trash scanner beyond simple recycling"),
        makeBullet("'Circular Bioeconomy': Links BSF to global sustainability frameworks"),
        makeBullet("'Sensor Fusion': Technical credibility for sorting AI"),
        makeBullet("'Life Cycle Assessment (LCA)': Validates BSF's environmental superiority vs. incineration"),
        makeBullet("'Extended Producer Responsibility (EPR)': Policy alignment for Trash Scanner's B2G model"),
        makeBullet("'Decentralized Bioconversion': Differentiates BSF from centralized, high-transport-cost composting"),
        makeBullet("'Federated Learning': Differentiates AI adaptability for new composite packaging materials"),

        makePageBreak(),

        // ─── PART V ───────────────────────────────────────────────
        makeHeading1("PART V — Research Citations & References"),
        makeParagraph("All sources verified and cross-referenced as of April 2026."),
        makeBullet("Taiwan Ministry of Environment (MoEnv) — 2024 Waste Management Annual Statistics. moenv.gov.tw"),
        makeBullet("Holland Circular Hotspot — Taiwan Circular Economy Report, 2024. hollandcircularhotspot.nl"),
        makeBullet("Environmental Management Administration Taiwan (EMA) — Incineration Plant Status 2024. ema.gov.tw"),
        makeBullet("IRO Journals — 'AI-Powered Waste Sorting in Taiwan MRFs: YOLOv8 Implementation Study,' 2024."),
        makeBullet("Island Scholar — 'NIR Spectroscopy for Plastic Sorting: Limitations and ML Advances,' 2024."),
        makeBullet("MDPI Sustainability — 'Life Cycle Assessment of Black Soldier Fly Bioconversion Systems,' 2025."),
        makeBullet("Texas A&M University — BSF Larvae Nutritional Composition Database, 2024."),
        makeBullet("PeerJ Journals — 'Advanced Waste Bioconversion Using Hermetia illucens,' 2024."),
        makeBullet("ACS Publications — 'Pathogen Reduction by BSF Larvae in Organic Waste,' 2026."),
        makeBullet("OCAC Gov.tw (Taiwan Overseas Affairs) — 'BSF as Fishmeal Alternative in Aquaculture,' 2024."),
        makeBullet("Circular Taiwan Foundation — Monster Biotechnology Case Study. circular-taiwan.org"),
        makeBullet("Circle Economy — Stonbo Creative Case Study, 2024. circle-economy.com"),
        makeBullet("The Business Research Company — BSF Market Forecast 2025–2030."),
        makeBullet("Mordor Intelligence — Insect Protein Market Report: Asia-Pacific Focus, 2025."),
        makeBullet("Market.us — Black Soldier Fly Larvae Market: Global Analysis 2025–2034."),
        makeBullet("Technavio — Insect Protein Market CAGR Analysis 2025–2030."),
        makeBullet("Eco-Business.com — Taiwan EPR and Circular Economy Policy Shifts, 2024."),
        makeBullet("Foundation for Yunus Social Business Taiwan (yunustw.org) — Competition Guidelines, 2026."),
        makeBullet("innors-tw.com — BSF Regulatory Landscape in Taiwan, 2024."),
        makeBullet("BetaBugs.uk — BSFL Nutritional Data and Circular Economy Applications, 2024."),
        makeBullet("FreezeM.com — BSF Production Innovation and Billet Storage Technology, 2024."),
        makeBullet("Taipei Times — Taiwan Waste and Recycling Industry Articles (multiple), 2024."),

        makeSpacer(200),
        makeDivider(),
        new Paragraph({
          children: [
            new TextRun({
              text: "© 2026 Steven Tanardi — Yunus Vision Team. All Rights Reserved.",
              color: COLORS.subtleGray, size: 18, italics: true,
            }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { before: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "This document is prepared solely for submission to the 6th Taiwan Yunus Social Business Innovation Award.",
              color: COLORS.subtleGray, size: 18, italics: true,
            }),
          ],
          alignment: AlignmentType.CENTER,
        }),
      ],
    },
  ],
});

// ─── GENERATE FILE ───────────────────────────────────────────────────
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("Deep_Research_Summary.docx", buffer);
  console.log("✅ Successfully generated: Deep_Research_Summary.docx");
});
