# 🔄 ReLoop: Operational & Financial Workflows

This document visualizes the "Self-Sustaining" circular model of ReLoop. All steps are designed with financial viability in mind, adhering to the principle that every operational component is fully funded and accounted for.

---

## 🏗️ 1. The Operational Cycle (Circular Hub)
This cycle shows the high-intensity movement of assets across the campus.

```mermaid
graph TD
    subgraph "Canteen Point (B2B)"
    A[<b>Canteen Vendor</b><br/>Pays Subscription Fee] --> B[<b>Container Issued</b><br/>RFID Scanned]
    end

    subgraph "User Experience (C2C)"
    B --> C[<b>Student Takeaway</b><br/>Pay NT$10 Eco-Fee + NT$150 Deposit]
    C --> D[<b>Consumption</b><br/>Dorms / Outdoors]
    D --> E[<b>Smart Return Bin</b><br/>Scan & Drop]
    end

    subgraph "Reverse Logistics (Back-End)"
    E --> F[<b>Collection</b><br/>Paid Logistics Staff]
    F --> G[<b>Sanitization Hub</b><br/>High-Temp & UV Wash]
    G --> H[<b>QA & Hygiene Check</b><br/>Traceability Audit]
    H --> A
    end

    %% Recovery Loop
    D -.->|Mis-sorted| I[<b>Project 03: AI Scanner</b><br/>Alerts Logistics Team]
    I -.-> F
```

---

## 💰 2. Financial Value Flow (The "Paid" Model)
Every operation is backed by a specific revenue stream to ensure independence from subsidies.

```mermaid
graph LR
    subgraph "Revenue Inflows"
    R1[Canteen Subscriptions]
    R2[Student Service Fees]
    R3[Deposit Interest/Forfeits]
    R4[Corporate Branding]
    end

    R1 & R2 & R3 & R4 --> Pool((<b>ReLoop Working Capital</b>))

    subgraph "Operational Outflows"
    Pool --> E1[<b>Staff Salaries</b><br/>Fair Market Wage]
    Pool --> E2[<b>Market Rent</b><br/>Leased Washing Hub]
    Pool --> E3[<b>Replacement Stock</b><br/>Asset Buffer]
    Pool --> E4[<b>Utilities & Detergent</b><br/>ISO-Standard Logic]
    end

    E1 & E2 & E3 & E4 --> S[<b>Surplus</b><br/>Reinvested for Social Expansion]
```

---

## 🖼️ 3. Visual Infographic
![ReLoop Circular Workflow](C:\Users\prisc\.gemini\antigravity\brain\23d7bc50-aaa2-496c-af99-faee045c4e91\reloop_circular_workflow_infographic_1775716435959.png)

---

## 🌍 Language Descriptions

### [EN] Workflow Explanation
The ReLoop workflow is a closed-loop system where every transition is tracked. Revenue from vendors and students covers the paid labor and market-rate rent. The integration with Project 03 (AI Scanner) ensures that lost assets are recovered, maintaining a high-integrity asset pool.

### [ID] Penjelasan Alur Kerja
Alur kerja ReLoop adalah sistem loop tertutup di mana setiap transisi dilacak. Pendapatan dari vendor dan mahasiswa mencakup upah tenaga kerja dan sewa pasar. Integrasi dengan Proyek 03 (Pemindai AI) memastikan bahwa aset yang hilang dipulihkan, menjaga ketersediaan aset yang berintegritas tinggi.

### [ZH] 工作流程說明
ReLoop 的工作流程是一個閉環系統，每一步移動皆受數位追蹤。來自商家與學生的收益足以支應支付給員工的薪資與市場化租金。透過與 Project 03 (AI 分類器) 的串接，遺失的餐具能被精準回收，維持資產池的高效率運轉。
