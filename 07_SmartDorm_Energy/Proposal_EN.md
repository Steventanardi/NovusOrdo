# ⚡ 6th Taiwan Yunus Innovation Award — Project Proposal (07)
## WattWatch: Smart Dorm Energy Auditor — Shared Savings IoT+SaaS for University Dormitories

[![Language - 中文繁體](https://img.shields.io/badge/Language%20-%20中文繁體-000000?style=for-the-badge&logo=google-translate&logoColor=white)](Proposal_CH.md) [![Language - Indonesia](https://img.shields.io/badge/Language%20-%20Indonesia-red?style=for-the-badge&logo=google-translate&logoColor=white)](Proposal_ID.md) [![Home - README](https://img.shields.io/badge/Home%20-%20README-000000?style=for-the-badge&logo=home&logoColor=white)](../README.md)

| Team Name | Yunus Vision Team |
| :--- | :--- |
| **Project Name** | **WattWatch: Smart Dorm Energy Auditor (SaaS + IoT)** |
| **Lead Designer** | **Steven Tanardi** |
| **Category** | Climate Tech Social Enterprise |

---

## 🚨 Context: Taiwan's Grid Is Still 70% Fossil Fuel — And Dorms Are Invisible Energy Wasters

Taiwan completed its nuclear phase-out in early 2025. Its energy mix now consists of **~50% natural gas, ~31% coal, and only ~19% renewables**. Every watt of electricity saved in a dorm directly reduces demand from a grid that emits **0.474 kg CO₂/kWh** (2024 Taipower official figure).

University dormitories are uniquely problematic:
- **Students pay a flat fee or subsidized rate** → zero financial incentive to conserve.
- **"Invisible" consumption** — AC left on while sleeping, chargers drawing phantom load, old appliances running 24/7.
- **No real-time feedback** — students can't see their energy use, so they can't change behavior.

Studies at Taiwanese universities confirm: **top 20% of "heavy users" consume a disproportionate share** of total dorm electricity. A targeted behavioral nudge system could reduce campus electricity consumption by **10–20% with zero capital upgrade** to the building.

---

## 🏛️ 1. Social Problem Analysis

### ⚠️ The Invisible Drain — Why Dorm Energy Waste is Structural

| Problem Layer | Description | Scale |
| :--- | :--- | :--- |
| **Subsidized pricing** | Most Taiwan university dorms charge below-market electricity rates, removing conservation incentive | ~300+ universities and colleges |
| **Collective action problem** | Individual students feel powerless — "I alone can't make a difference" | 8,500 residents at NTU alone |
| **Invisible phantom loads** | Chargers, extension strips, old fridges, AC standby: each small, collectively massive | Est. 15–25% of total residential load |
| **No feedback loop** | No real-time display → no behavior change → waste continues month after month | Proven by behavioral economics research |
| **Old appliance infrastructure** | Aging dorm AC units (10–15+ years old) consume 30–50% more power than modern inverter models | Applies to 80%+ of Taiwan public university dorms |

**Taiwan's Context**:
- **NTU**: ~8,500 dorm residents
- **NTHU**: ~5,000 dorm residents across 18 buildings
- **NCKU**: Thousands across Tainan campus
- Estimated **200,000+ students** live in university dorms nationally
- Average dorm electricity consumption: **9–24 kWh/person/month** (108–288 kWh/year) — highly variable, with heavy users 3–5× the median

### The Baseline Math: What One Dorm Floor Wastes

> A 20-room dorm floor × 2 residents × 150 kWh avg/month = **6,000 kWh/month**
> At Taiwan's Taipower residential rate tier (~NT$4.5/kWh avg): **NT$27,000/month in electricity spend**
> A 15% behavioral reduction = **NT$4,050 in monthly savings** — significant for student budgets.

---

## 🚀 2. Company Mission & Solution

> **"You can't save what you can't see. WattWatch makes the invisible visible — and makes saving rewarding."**

### Vision
By 2030, deploy WattWatch in **500 university dormitory buildings** across Taiwan, reducing dorm electricity consumption by an average of **15%** — saving **120,000 tonnes CO₂/year** and returning value directly to students through the Shared Savings model.

### The Solution: WattWatch = IoT Hardware + SaaS Dashboard + Shared Savings Engine

#### Layer 1 — WattWatch Smart Plug (Hardware)
A low-cost, purpose-built energy monitoring device:
- **MCU**: Tuya-compatible BK7231 chipset (proven mass-manufacturing; $4–6 USD BOM at 1,000+ units)
- **Measurement IC**: BL0942 energy monitoring chip — measures real-time Watts, kWh, voltage, current
- **Connectivity**: Wi-Fi 2.4GHz (works with existing dorm networks, no new infrastructure)
- **Form factor**: Taiwan Type B plug compatible; compact body with LED status indicator
- **Data push**: Every 10 seconds → WattWatch cloud → Dashboard
- **Retail target cost**: NT$350–450/unit (sub-NT$500 = impulse-buy price point for students)

#### Layer 2 — WattWatch Dashboard (SaaS Web + LINE Bot)
Real-time, beautiful, and socially designed:

| Feature | How It Works |
| :--- | :--- |
| **My Room** | Live wattage, daily/monthly kWh, estimated NT$ cost in real-time |
| **Floor Comparison** | Anonymous peer comparison — "Your room uses 20% less than the floor average" |
| **Appliance Detective** | AI pattern recognition: "Your AC seems to run 6h/night — turning it to 26°C could save NT$180/month" |
| **Green Score** | Gamified weekly score: earn points for conservation streaks; redeemable at campus stores |
| **Savings Pot** | Real-time running total of floor/building collective savings this month |
| **Carbon Counter** | kg CO₂ avoided this week — displayed as "= X minutes of not running a coal plant" |

#### Layer 3 — Shared Savings Engine (The Business Model)
The core Yunus innovation: **WattWatch makes money only when students save money**.

```
Baseline established (Month 1–2 of data)
↓
Each month: Actual bill measured against AI-projected baseline
↓
Savings = (Baseline kWh − Actual kWh) × NT$/kWh
↓
Split: 80% stays with dorm/students/university | 20% = WattWatch service fee
```

**Example for one dorm floor (40 students)**:
- Baseline: 6,000 kWh/month → NT$27,000 bill
- After WattWatch: 5,100 kWh/month → NT$22,950 bill
- **Savings: NT$4,050**
- University/students keep: **NT$3,240**
- **WattWatch fee: NT$810/floor/month** — zero upfront cost to university

---

## 📊 3. Business Model & Innovation

### Why "Shared Savings" is the Perfect Yunus Model

| Traditional SaaS | WattWatch Shared Savings |
| :--- | :--- |
| Fixed monthly fee regardless of performance | **Zero fee if no savings** |
| University takes all financial risk | **Risk shared — WattWatch only earns if it works** |
| Students have no stake | **Students see direct reward in Savings Pot** |
| Hard to sell to cash-strapped universities | **Zero CapEx, guaranteed ROI message** |

This is a **performance-based contract** (similar to ESCO models used globally) made accessible to a single dorm floor — the "micro-ESCO."

### Revenue Model (Per 100-Room Dorm Building)

| Scenario | Monthly Saving | WattWatch 20% Fee |
| :--- | :--- | :--- |
| Conservative (10% reduction) | NT$27,000 | **NT$5,400/month** |
| Target (15% reduction) | NT$40,500 | **NT$8,100/month** |
| Optimistic (20% reduction) | NT$54,000 | **NT$10,800/month** |

### Unit Economics

| Item | Cost |
| :--- | :--- |
| Hardware (WattWatch Plug per unit, at 1,000-unit MOQ) | NT$180–220/unit (BOM + assembly) |
| WattWatch installed per room (1–2 plugs) | NT$360–440/room |
| SaaS infrastructure (cloud, dashboard, LINE Bot) | NT$5,000/month fixed (serves all buildings) |
| Payback period per dorm building (200 plugs) | **< 3 months** from first savings fee |

### Innovation: The "Appliance Passport" Feature

Every plug tracks an appliance's energy fingerprint. WattWatch AI builds a **nationwide anonymized dataset** of appliance energy efficiency:
- "Your AC model (2012 vintage Daikin) averages 1.8 kW — 40% more than a modern equivalent"
- Universities can use this data to prioritize which appliances to replace for maximum impact
- Government procurement can use it to set minimum energy efficiency standards

This **data-as-a-service** layer (sold to universities' facilities departments and government energy agencies) becomes a high-margin B2G revenue stream.

---

## 🌍 4. SDG Alignment & Impact

| SDG | Goal | WattWatch Implementation |
| :---: | :--- | :--- |
| **7** | **Affordable & Clean Energy** | Reduces demand from a 70% fossil-fuel grid; each kWh saved = 0.474 kg CO₂ avoided |
| **4** | **Quality Education** | Gamified energy literacy; students learn sustainability behaviors they carry for life |
| **11** | **Sustainable Cities** | Smart building data feeds city-level energy efficiency planning |
| **13** | **Climate Action** | Direct measurable CO₂ reduction with Taipower carbon factor verification |

**Yunus "3-Zero" Alignment:**
- 🌿 **Zero Net Carbon**: 15% reduction × 200,000 dorm students × 150 kWh/month = 45,000,000 kWh saved/year = **~21,300 tonnes CO₂/year** avoided at national scale. Every building enrolled compounds this impact.
- 💚 **Zero Poverty**: Shared Savings returns NT$3,240/floor/month to students — equivalent to partial scholarship relief for lower-income students. Universities with tight budgets receive guaranteed net-positive results.
- 👷 **Zero Unemployment**: Creates IoT technician installation roles (1 per 5 dorm buildings); data analyst positions; student "Energy Ambassador" program with stipend (campus employment).

---

## 📈 5. Financial & Strategic Sustainability

### The "Zero-Risk University" Pitch

WattWatch's go-to-market is designed to eliminate every objection:

| University Objection | WattWatch Answer |
| :--- | :--- |
| "We have no budget" | Zero upfront cost — WattWatch installs hardware for free during pilot |
| "We need IT approval" | Operates on existing Wi-Fi; no server installation; data stored in Taiwan-region cloud |
| "Students won't participate" | LINE integration — no app download; peer comparison is viral in student communities |
| "How do we verify savings?" | Measured & Verified (M&V) protocol — actual Taipower bill compared to AI baseline |

### Strategic Roadmap

- **Year 1 (Pilot)**: 3 dorm buildings at 1 university (target: NTHU or NTU). 600 smart plugs deployed. Establish baseline and prove 12–18% savings. Gain USR (University Social Responsibility) report endorsement.
- **Year 2**: Expand to 10 universities via university sustainability office partnerships. Deploy 5,000 plugs. Launch "Energy Passport" B2G data product with Ministry of Education.
- **Year 3**: National university tender for Ministry of Education's green campus initiative. 50+ universities.
- **Year 5**: **500 dorm buildings** equipped. **100,000 smart plugs** deployed. NT$40M+ annual shared savings revenue. Licensed to Southeast Asian university markets (Indonesia, Vietnam, Philippines — same dorm infrastructure challenges).

### The "Student Energy Ambassador" Social Layer
Each enrolled building appoints 2 student ambassadors:
- Manage floor-level savings competitions
- Earn NT$500/month stipend from WattWatch's share
- Become trained in energy literacy — a marketable sustainability skill
- Create peer accountability for conservation behavior

---

## 🔗 Synergy With Other Yunus Projects

| Project | Integration |
| :--- | :--- |
| **Project 03 — AI Trash Scanner** | Share IoT firmware and dashboard infrastructure; cross-sell to universities already using Trash Scanner in cafeterias |
| **Project 04 — BSF Bio-Loop** | WattWatch data on appliance runtime feeds into campus carbon accounting that BSF project offset certificates validate |
| **Project 05 — ReLoop** | University dorms are primary ReLoop target — combined pitch creates "Sustainable Campus Package" |

---

## 🛠️ The Team
- **Steven Tanardi (Project Lead)**: IoT firmware development, SaaS dashboard architecture, shared savings contract design.
- **Hardware Partner**: Shenzhen-based OEM manufacturer for CPET plugs at Taiwan CNS safety certification level.
- **University Partnership Lead**: Liaison with university USR offices and Ministry of Education green campus program.

---
© 2026 Steven Tanardi. All Rights Reserved.
