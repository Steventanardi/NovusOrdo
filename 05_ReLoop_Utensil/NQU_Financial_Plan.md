# 📊 ReLoop Financial Comparison & Pilot Plan (NQU Pilot Scale - 300 Meals)

This document provides a data-driven financial analysis and implementation strategy for the **ReLoop** reusable utensil service at **National Quemoy University (NQU)**, optimized for a 300-meal-per-day pilot.

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

**Daily Cost (300 meals): NT$ 1,050**  
**Annual Cost (300 days): NT$ 315,000**

---

### 2. ReLoop Reusable Scenario (Projected - 300 Units)

#### A. Initial Investment (CAPEX)
For 300 meals/day, we need a buffer of 750 units (circulation + cleaning + storage).

| Item | Unit Cost (NTD) | Total Cost (NTD) |
| :--- | :--- | :--- |
| Reusable Container Set | 120 | 90,000 |
| Stainless Steel Utensil Set | 30 | 22,500 |
| Industrial Hood Dishwasher | 95,000 | 95,000 |
| Smart Collection Cabinets (2) | 30,000 | 60,000 |
| **Total Initial CAPEX** | | **267,500** |

#### B. Operating Cost per Use (OPEX)
Calculated based on 300 units/day using Taiwan's minimum wage and utility rates.

| Expense Category | Cost (NTD) | Logic |
| :--- | :--- | :--- |
| **Sterilization (Utilities)** | **0.40** | Water + Electricity (0.044kWh/unit) |
| **Rent (Mini-HUB)** | **0.50** | NT$4,500/month for a canteen corner |
| **Logistics (Cart & LINE)** | **0.10** | Electric cart charging + LINE API fees |
| **Labor (3hrs/day)** | **1.90** | 3 hours @ NT$190/hr / 300 units |
| Loss/Replacement Fund | 0.40 | 1% loss rate per cycle |
| **Total per Meal** | **3.30** | **Saves NT$0.20 per meal** |

**Daily Cost (300 meals): NT$ 990**  
**Annual Cost (300 days): NT$ 297,000 (+ CAPEX)**

---

## 📈 Break-Even Analysis

*   **Savings per Meal**: NT$ 3.50 (Single-use) - NT$ 3.30 (Real OPEX) = **NT$ 0.20 savings**.
*   **Total CAPEX to Recover**: NT$ 267,500.
*   **Break-even Meals**: 1,337,500 meals.
*   **Annual ROI**: At 300 meals/day, the financial payback is slow. 

> [!TIP]
> **The Yunus Social Business Pivot**: Instead of relying only on cost-savings, ReLoop charges a **NT$10 "Eco-Service Surcharge"** per meal. This transforms the business into a high-profit engine:
> *   **Daily Revenue (Surcharge)**: 300 * NT$10 = **NT$3,000/day**.
> *   **Net Daily Profit**: NT$3,000 - NT$990 (OPEX) = **NT$2,010/day**.
> *   **New Payback Period**: 267,500 / 2,010 = **133 Days** (Short and sustainable!).

---

## 🛡️ Operational Quality Control & Asset Management

### 1. Maintaining Sterility
*   **FIFO**: Use oldest stock first via the **LINE Group Inventory Tracking**.
*   **Sanitized Storage**: Store in enclosed **UV-C cabinets**.

### 2. Tracking Asset Lifespan
*   **QR Logging**: Scanned via the ReLoop Team **LINE Group** during collection.
*   **Decommissioning**: At **500 uses**, the unit is retired and ground down into BSF rearing trays.

---

## 🚀 NQU Small-Scale Pilot Plan (Phase 1)

1.  **LINE Group Coordination**: 
    *   **"ReLoop Logistics" Group**: For student workers to manage bin alerts.
    *   **"ReLoop Users" Group**: For students to track their carbon rank.
2.  **Shared Rent**: Partner with the NQU Student Association to share an existing office space as the "Washing Hub" to lower rent.

---
*Based on findings from "Identifying the climate benefits of reusable takeout container systems..." Huang et al. (2026).*
