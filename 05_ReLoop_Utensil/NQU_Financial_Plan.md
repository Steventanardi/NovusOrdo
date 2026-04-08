# 📊 ReLoop Financial Comparison & Pilot Plan (NQU Canteen Scale)

This document provides a data-driven financial analysis and implementation strategy for the **ReLoop** reusable utensil service at **National Quemoy University (NQU)**. It utilizes lifecycle data from the 2026 Huang et al. study on campus takeaway systems.

---

## ⚖️ Financial Comparison: Single-Use vs. ReLoop

### 1. Single-Use Scenario (Status Quo)
Estimated cost for a standard takeout set in Taiwan (Paper box + plastic lid + wooden chopsticks + plastic spoon + paper bag).

| Item | Cost (NTD) | Remarks |
| :--- | :--- | :--- |
| Paper Lunch Box + Lid | 2.50 | Wholesale price |
| Wooden Chopsticks (wrapped) | 0.50 | Standard grade |
| Plastic Spoon | 0.30 | Bulk purchase |
| Paper/Plastic Bag | 0.20 | Distribution cost |
| **Total per Meal** | **3.50** | **100% Waste** |

**Daily Cost (1,000 meals): NT$ 3,500**  
**Annual Cost (300 days): NT$ 1,050,000**

---

### 2. ReLoop Reusable Scenario (Projected)
Assuming a set of high-quality, BPA-free PP containers with stainless steel utensils.

#### A. Initial Investment (CAPEX)
For a 1,000-meal-per-day operation, we need a buffer of 2,500 units (circulation + cleaning + storage).

| Item | Unit Cost (NTD) | Total Cost (NTD) |
| :--- | :--- | :--- |
| Reusable Container Set | 120 | 300,000 |
| Stainless Steel Utensil Set | 30 | 75,000 |
| Industrial Dishwasher (Sterilization Grade) | 120,000 | 120,000 |
| Smart Collection Cabinets (2) | 45,000 | 90,000 |
| **Total Initial CAPEX** | | **585,000** |

#### B. Operating Cost per Use (OPEX)
Based on logistics and industrial cleaning standards from the Huang et al. study (`Identifying.pdf`).

| Expense Category | Cost (NTD) | Logic |
| :--- | :--- | :--- |
| **Sterilization (Heat + Chem)** | **1.10** | **Electricity (0.044kWh) @ 82°C** + Water + Sanitizer |
| Labor (Collection & Machine Loading) | 0.70 | Part-time student labor (NQU USR program) |
| Loss/Replacement Fund | 0.40 | 1% loss rate per cycle |
| **Total per Meal** | **2.20** | **Total savings: NT$1.30 per meal** |

**Daily Cost (1,000 meals): NT$ 1,900**  
**Annual Cost (300 days): NT$ 570,000 (+ CAPEX)**

---

## 📈 Break-Even Analysis

*   **Savings per Meal**: NT$ 3.50 (Single-use) - NT$ 2.20 (Safe OPEX) = **NT$ 1.30 savings**.
*   **Total CAPEX to Recover**: NT$ 585,000 (Includes Dishwasher).
*   **Break-even Meals**: 585,000 / 1.30 = **450,000 meals**.
*   **Time to Break-even (at 1,000 meals/day)**: **450 Days** (~1.5 Academic Years).

> [!IMPORTANT]
> **Sterilization standard**: To meet food safety regulations for reusables, the system must utilize a high-heat final rinse (82°C / 180°F) or a chemical sanitizer. The `Identifying.pdf` study notes that the **cleaning/disinfection stage** is the largest energy hotspot (51.7% of operational carbon), but is mandatory for user trust and safety.

---

## 🚀 NQU Small-Scale Pilot Plan (Phase 1)

**Target Scope**: 300 meals/day (focused on the NQU Student Canteen B1).

### 1. The "Yunus Subscription" Model
Instead of charging for each use, students pay a **NT$200 semester deposit**.
*   If they return the container, their next meal is served in a clean one.
*   If they hold the container, they lose the ability to use the service until returned.
*   **Social Goal**: Zero-barrier access for low-income students.

### 2. Operational Workflow (Optimized for NQU)
1.  **Distribution**: Canteen staff serves food in ReLoop containers.
2.  **Consumption**: Students eat anywhere on campus.
3.  **Return**: Students drop containers into smart collection bins located at:
    *   General Building (綜合大樓) Entrance.
    *   Male/Female Dormitory Lobbies.
4.  **Collection**: NQU student workers (Work-Study) collect bins twice daily using electric carts.
5.  **Sanitization**: Central washing facility at Canteen B1 using industrial high-heat dishwashers.

### 3. Financial Sustainability (Zero-Profit Surplus)
*   Revenue comes from **Carbon Credits** (B2G) and **Canteen Subsidy** (since the canteen saves on trash removal costs).
*   Any surplus is used to sponsor **Free Nutritious Meals** for underprivileged students at NQU, aligning with the "Zero Poverty" Yunus goal.

---

### 📝 Next Steps
1.  **Draft MOU**: Secure agreement with NQU General Affairs Office (總務處) to pilot in Canteen B1.
2.  **Procurement**: Select hardware for the QR-coded collection bins.
3.  **App Development**: Create a simple LINE Bot for students to track their "Carbon Savings Points."

---
*Based on findings from "Identifying the climate benefits of reusable takeout container systems..." Huang et al. (2026).*
