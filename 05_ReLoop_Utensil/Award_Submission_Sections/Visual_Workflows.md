# 🔄 Novus Ordo Patera: Operational & Financial Workflows

This document visualizes the "Self-Sustaining" circular model of **Novus Ordo Patera**. All steps are designed with financial viability in mind, adhering to the principle that every operational component is fully funded and accounted for.

---

## 🏗️ 1. The Operational Cycle (Circular Hub)
This cycle shows the high-intensity movement of assets across the campus.

```mermaid
graph TD
    subgraph "Canteen Point (B2B)"
    A[<b>Canteen Vendor</b><br/>Pays Subscription Fee] --> B[<b>Patera Issued</b><br/>RFID Scanned]
    end

    subgraph "User Experience (C2C)"
    B --> C[<b>Student Takeaway</b><br/>Pay NT$10 Eco-Fee + NT$150 Deposit]
    C --> D[<b>Consumption</b><br/>Dorms / Outdoors]
    D --> E[<b>Smart Return Bin</b><br/>Scan & Drop]
    end

    subgraph "Reverse Logistics (Back-End)"
    E --> F[<b>Collection</b><br/>Paid Logistics Staff]
    F --> G[<b>Sanitization Hub</b><br/>High-Temp & UV Wash]
    G --> H[<b>QA & Hygiene Check</b><br/>Digital Traceability]
    H --> A
    end
```

---

## 💰 2. Financial Value Flow (The "Paid" Model)
Every operation is backed by a specific revenue stream to ensure independence from subsidies.

```mermaid
graph LR
    subgraph "Revenue Inflows"
    R1[Vendor Subscriptions]
    R2[Student Service Fees]
    R3[Deposit Interest/Forfeits]
    R4[Corporate Branding]
    end

    R1 & R2 & R3 & R4 --> Pool((<b>Capital Pool</b>))

    subgraph "Operational Outflows"
    Pool --> E1[<b>Staff Salaries</b><br/>Fair Market Wage]
    Pool --> E2[<b>Market Rent</b><br/>Leased Facility]
    Pool --> E3[<b>Replacement Stock</b><br/>Asset Buffer]
    Pool --> E4[<b>Utilities & Detergent</b><br/>ISO-Standard Logic]
    end

    E1 & E2 & E3 & E4 --> S[<b>Surplus</b><br/>Reinvested for Social Expansion]
```

---

## 🖼️ 3. Visual Infographic
![Novus Ordo Patera Circular Workflow](C:\Users\prisc\.gemini\antigravity\brain\23d7bc50-aaa2-496c-af99-faee045c4e91\reloop_circular_workflow_infographic_1775716435959.png)

---

## 🌍 Language Descriptions

### [EN] Workflow Explanation
The **Novus Ordo Patera** workflow is a closed-loop system where every transition is tracked. Revenue from vendors and students covers the paid labor and market-rate rent. Digital hygiene traceability allows users to verify the sanitization status of their dish in real-time.

### [ID] Penjelasan Alur Kerja
Alur kerja **Novus Ordo Patera** adalah sistem loop tertutup di mana setiap transisi dilacak. Pendapatan dari vendor dan mahasiswa mencakup upah tenaga kerja dan sewa pasar. Pelacakan higienitas digital memungkinkan pengguna untuk memverifikasi status sanitasi wadah mereka secara real-time.

### [ZH] 工作流程說明
**Novus Ordo Patera** 的工作流程是一個閉環系統，每一步移動皆受數位追蹤。來自商家與學生的收益足以支應支付給員工的薪資與市場化租金。數位衛生可追溯性讓用戶能即時驗證餐具的消毒檢查狀態。
