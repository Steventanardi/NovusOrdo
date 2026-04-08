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
  Header,
  Footer,
  convertInchesToTwip,
} = require("docx");
const fs = require("fs");

// ---------- Formatting Constants ----------
const FONT_CH = "DFKai-SB"; // BiauKai
const FONT_EN = "Calibri";
const SPACING_15 = 360; // 1.5 lines (240 * 1.5)

const COLORS = {
  primary: "1A3C5E",
  accent: "00A86B",
  textDark: "1C1C1C",
  subtleGray: "6B7280",
  white: "FFFFFF",
  altRow: "F7FBFA",
};

// ---------- Helper Functions ----------
const makeHeading = (text, level = HeadingLevel.HEADING_1, font = FONT_EN) =>
  new Paragraph({
    children: [new TextRun({ text, bold: true, size: level === HeadingLevel.HEADING_1 ? 32 : 28, font })],
    heading: level,
    spacing: { before: 240, after: 120, line: SPACING_15 },
  });

const makeText = (text, options = {}) =>
  new Paragraph({
    children: [new TextRun({ text, size: 24, font: options.font || FONT_EN, ...options })],
    spacing: { before: 80, after: 80, line: SPACING_15 },
    alignment: options.alignment || AlignmentType.LEFT,
  });

const makeBullet = (text, options = {}) =>
  new Paragraph({
    children: [new TextRun({ text, size: 24, font: options.font || FONT_EN })],
    bullet: { level: options.level || 0 },
    spacing: { before: 40, after: 40, line: SPACING_15 },
  });

const makeTable = (headers, rows, font = FONT_EN) => {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: headers.map(h => new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 20, font })], alignment: AlignmentType.CENTER })],
          shading: { type: ShadingType.SOLID, color: COLORS.primary },
        })),
      }),
      ...rows.map((row, idx) => new TableRow({
        children: row.map(c => new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text: c, size: 20, font })] })],
          shading: { type: ShadingType.SOLID, color: idx % 2 === 0 ? COLORS.altRow : COLORS.white },
        })),
      })),
    ],
  });
};

const makePageBreak = () => new Paragraph({ children: [new PageBreak()] });

// =====================================================================
// 1. CHINESE VERSION BUILDER
// =====================================================================
const buildCHContent = () => [
  // COVER
  new Paragraph({ children: [new TextRun({ text: "第六屆台灣尤努斯創新獎", bold: true, size: 48, font: FONT_CH })], alignment: AlignmentType.CENTER, spacing: { before: 1000, after: 200 } }),
  new Paragraph({ children: [new TextRun({ text: "創業計畫書 — ReLoop 循環餐具系統", bold: true, size: 36, font: FONT_CH })], alignment: AlignmentType.CENTER, spacing: { after: 1000 } }),
  makeText("團隊名稱：[請填寫團隊名稱]", { font: FONT_CH, alignment: AlignmentType.CENTER }),
  makeText("計畫名稱：ReLoop 循環餐飲服務系統", { font: FONT_CH, alignment: AlignmentType.CENTER }),
  makeText("團隊成員：Steven Tanardi [及其餘成員]", { font: FONT_CH, alignment: AlignmentType.CENTER }),
  makeText("報名組別：學生組 (Student Group)", { font: FONT_CH, alignment: AlignmentType.CENTER }),
  makePageBreak(),

  // CONTENT
  makeHeading("一、社會問題 (Social Problem)", HeadingLevel.HEADING_1, FONT_CH),
  makeText("1.1 台灣與金門的便當垃圾危機", { font: FONT_CH, bold: true }),
  makeText("台灣每年消耗約 80 億個一次性餐盒。在金門，由於缺乏焚化爐，所有廢棄物皆需船運回台，造成極高的物流成本與碳排放。根據現狀，學餐購買一次性餐具成本約為 NT$4-6/份。", { font: FONT_CH }),

  makeHeading("二、公司目標、願景與服務內容", HeadingLevel.HEADING_1, FONT_CH),
  makeText("願景：讓每一個便當盒都能回家，並再次出發。", { font: FONT_CH }),
  makeText("我們提供「餐具即服務 (UaaS)」模式，透過 Airtight CPET 耐用餐具與智慧歸還網絡，徹底取代一次性包材。", { font: FONT_CH }),

  makeHeading("三、計畫可行性及其商業模式 (BMC)", HeadingLevel.HEADING_1, FONT_CH),
  makeText("核心商業模式為「服務費制」。下表顯示 ReLoop 在小規模試點與大規模運作下，皆能為學餐節省成本：", { font: FONT_CH }),
  makeTable(
    ["日服務量", "一次性餐盒總成本", "ReLoop 服務成本", "每日節省額"],
    [
      ["100 份 (試點)", "NT$520", "NT$400", "NT$120 💰"],
      ["1,000 份 (規模)", "NT$5,200", "NT$4,000", "NT$1,200 🚀"],
      ["年節省 (300天)", "NT$1,560,000", "NT$1,200,000", "NT$360,000 🥇"]
    ], FONT_CH
  ),
  makeText("在 NQU 試點（100 份/日）的規模下，每餐運作成本約 NT$3.3，具備高度經濟可行性與財務自給自足能力。", { font: FONT_CH }),

  makeHeading("四、計畫創新性與獨特性", HeadingLevel.HEADING_1, FONT_CH),
  makeText("本專案具備「甲借乙還」的 YouBike 模式，並與校內 [03 智慧垃圾掃描器] 連動。若資產被誤丟入一般垃圾桶，系統將自動觸發救援機制，大幅降低資產流失率。", { font: FONT_CH }),

  makeHeading("五、預期社會效益與社會影響力", HeadingLevel.HEADING_1, FONT_CH),
  makeText("預計年減 30,000+ 一次性餐盒，減少 1,950kg 二氧化碳。並優先聘任經濟弱勢學生，落實尤努斯零貧窮與零失業願景。", { font: FONT_CH }),

  makeHeading("六、財務永續性規劃", HeadingLevel.HEADING_1, FONT_CH),
  makeText("Phase 0 試點預計內部報酬率 (IRR) 達 42%，淨現值 (NPV) 為正值。財務體質健全，具備跨校複製潛力。", { font: FONT_CH }),

  makeHeading("七、人力規畫", HeadingLevel.HEADING_1, FONT_CH),
  makeText("負責人：Steven Tanardi 負責策略與財務學面。另設有技術總監負責 IoT 系統，及營運主管負責物流行動。", { font: FONT_CH }),
];

// =====================================================================
// 2. ENGLISH VERSION BUILDER
// =====================================================================
const buildENContent = () => [
  new Paragraph({ children: [new TextRun({ text: "6th Taiwan Yunus Innovation Award", bold: true, size: 48, font: FONT_EN })], alignment: AlignmentType.CENTER, spacing: { before: 1000, after: 200 } }),
  new Paragraph({ children: [new TextRun({ text: "Official Proposal — ReLoop System", bold: true, size: 36, font: FONT_EN })], alignment: AlignmentType.CENTER, spacing: { after: 1000 } }),
  makeText("Team Name: [Please fill team name]", { alignment: AlignmentType.CENTER }),
  makeText("Proposal Name: ReLoop Reusable Utensil System", { alignment: AlignmentType.CENTER }),
  makeText("Team Members: Steven Tanardi & Team", { alignment: AlignmentType.CENTER }),
  makeText("Category: Student Group", { alignment: AlignmentType.CENTER }),
  makePageBreak(),

  makeHeading("1. Social Problem Analysis", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Taiwan consumes 8 billion disposable boxes annually. Canteens currently spend NT$4-6 per serving on single-use packaging, which is a 100% sunk cost.", { font: FONT_EN }),

  makeHeading("2. Vision & Service Content", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Vision: 'A campus where every box comes home, and starts again.'", { font: FONT_EN }),
  makeText("We provide a UaaS model using airtight CPET containers and a smart return network to replace disposables.", { font: FONT_EN }),

  makeHeading("3. Business Model & Feasibility", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Our dual-scale model ensures immediate feasibility and future scalability:", { font: FONT_EN }),
  makeTable(
    ["Servings / Day", "Disposable (Total)", "ReLoop (Total)", "Savings / Day"],
    [
      ["100 (Pilot)", "NT$520", "NT$400", "NT$120 💰"],
      ["1,000 (Scale)", "NT$5,200", "NT$4,000", "NT$1,200 🚀"],
      ["Annual (300d)", "NT$1.56M", "NT$1.2M", "NT$360k 🥇"]
    ]
  ),
  makeText("Phase 0 pilot at NQU shows a 107-day payback period.", { font: FONT_EN }),

  makeHeading("4. Innovation & Uniqueness", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Implementing the 'YouBike for Bento' model with AI Trash Scanner synergy to prevent asset loss. This creates a secure, closed-loop urban metabolism.", { font: FONT_EN }),

  makeHeading("5. Social Impact", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Projected savings of 30,000+ units annually. Addressing Yunus's Zero Poverty & Zero Unemployment by hiring local disadvantaged students.", { font: FONT_EN }),

  makeHeading("6. Financial Sustainability", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Phase 0 IRR predicted at 42%. Net Present Value (NPV) remains positive, proving strong financial resilience.", { font: FONT_EN }),

  makeHeading("7. HR Planning", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Lead: Steven Tanardi (Strategy/Finance). Tech: IoT and Backend lead. Ops: Logistics fleet manager.", { font: FONT_EN }),
];

// =====================================================================
// 3. INDONESIAN VERSION BUILDER
// =====================================================================
const buildIDContent = () => [
  new Paragraph({ children: [new TextRun({ text: "6th Taiwan Yunus Innovation Award", bold: true, size: 48, font: FONT_EN })], alignment: AlignmentType.CENTER, spacing: { before: 1000, after: 200 } }),
  new Paragraph({ children: [new TextRun({ text: "Draf Proposal Resmi — Sistem ReLoop", bold: true, size: 36, font: FONT_EN })], alignment: AlignmentType.CENTER, spacing: { after: 1000 } }),
  makeText("Nama Tim: [Isi nama tim]", { alignment: AlignmentType.CENTER }),
  makeText("Nama Proposal: Sistem Peralatan Makan ReLoop", { alignment: AlignmentType.CENTER }),
  makeText("Anggota Tim: Steven Tanardi & Tim", { alignment: AlignmentType.CENTER }),
  makeText("Kategori: Grup Mahasiswa", { alignment: AlignmentType.CENTER }),
  makePageBreak(),

  makeHeading("1. Analisis Masalah Sosial", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Meskipun tingkat daur ulang tinggi, kotak bento tetap menjadi pendorong utama limbah. Di Kinmen, krisis ini diperbesar karena semua sampah harus dikirim kembali ke Taiwan dengan kapal.", { font: FONT_EN }),

  makeHeading("2. Visi & Konten Layanan", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Visi: 'Setiap kotak bento berhak pulang, dan mulai kembali.'", { font: FONT_EN }),
  makeText("Kami menyediakan wadah CPET kedap udara dan jaringan pengembalian pintar asrama.", { font: FONT_EN }),

  makeHeading("3. Model Bisnis & Kelayakan", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Model skala ganda kami memastikan kelayakan segera dan skalabilitas masa depan:", { font: FONT_EN }),
  makeTable(
    ["Porsi / Hari", "Sekali Pakai (Total)", "Layanan ReLoop", "Penghematan Harian"],
    [
      ["100 (Uji Coba)", "NT$520", "NT$400", "NT$120 💰"],
      ["1.000 (Skala)", "NT$5.200", "NT$4.000", "NT$1.200 🚀"],
      ["Tahunan (300h)", "NT$1,56jt", "NT$1,2jt", "NT$360rb 🥇"]
    ]
  ),
  makeText("Proyek pilot Fase 0 di NQU menunjukkan periode balik modal 107 hari.", { font: FONT_EN }),

  makeHeading("4. Inovasi & Keunikan", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Model 'YouBike untuk Bento' dengan sinergi AI Trash Scanner untuk mencegah kehilangan aset bento.", { font: FONT_EN }),

  makeHeading("5. Dampak Sosial", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Menghindari 30.000+ kotak sekali pakai per tahun. Fokus pada visi 3-Zero Yunus dengan mempekerjakan mahasiswa kurang mampu.", { font: FONT_EN }),

  makeHeading("6. Keberlanjutan Keuangan", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Internal Rate of Return (IRR) sebesar 42%. Strategi ekspansi bertahap dari Fase 0 ke Fase 1.", { font: FONT_EN }),

  makeHeading("7. Rencana Sumber Daya Manusia (HR)", HeadingLevel.HEADING_1, FONT_EN),
  makeText("Lead: Steven Tanardi (Strategi/Keuangan). Tim Teknologi: Pengembangan IoT/LINE. Operasional: Manajemen logistik.", { font: FONT_EN }),
];
// =====================================================================
// GENERATION
// =====================================================================
const generateDoc = (content, title, filename) => {
  const doc = new Document({
    sections: [{
      properties: { page: { margin: { top: convertInchesToTwip(1.2), bottom: convertInchesToTwip(1.0), left: convertInchesToTwip(1.2), right: convertInchesToTwip(1.2) } } },
      headers: { default: new Header({ children: [new Paragraph({ text: title, alignment: AlignmentType.RIGHT })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ text: "© 2026 Steven Tanardi | Yunus Vision Team", alignment: AlignmentType.CENTER })] }) },
      children: content,
    }],
  });

  Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync(filename, buffer);
    console.log(`✅ Generated: ${filename}`);
  });
};

generateDoc(buildCHContent(), "第六屆台灣尤努斯創新獎 - 計畫書", "ReLoop_Official_Proposal_CH.docx");
generateDoc(buildENContent(), "6th Taiwan Yunus Innovation Award - Proposal", "ReLoop_Official_Proposal_EN.docx");
generateDoc(buildIDContent(), "Penghargaan Inovasi Yunus Taiwan ke-6 - Proposal", "ReLoop_Official_Proposal_ID.docx");
