# 📊 ReLoop Utensil — NQU Kinmen Comprehensive Financial Plan
## National Quemoy University Campus Deployment

**Prepared by:** Steven Tanardi | **Date:** April 2026  
**Location:** National Quemoy University (國立金門大學), Kinmen, Taiwan

---

## 📌 Executive Summary

This document is a **brutally honest** financial plan for deploying ReLoop's reusable utensil service at National Quemoy University (NQU) in Kinmen. It covers all real costs, realistic revenue, and tells you exactly what price you need to charge to achieve a daily surplus.

**The Hard Truth:** NQU has ~3,660 students. This is a small, island campus — not a massive urban market. Your addressable daily volume is limited. You CAN achieve a daily surplus, but only if you price correctly and keep costs extremely lean.

---

## 🏫 Section 1: Market Size — NQU Reality

| Parameter | Value | Source / Basis |
| :--- | ---: | :--- |
| Total NQU students (2025/2026) | 3,660 | Ministry of Education data |
| Faculty & staff (estimate) | ~400 | Typical ratio |
| Total campus population | ~4,060 | |
| Students eating on/near campus daily | ~2,500 (68%) | Excludes weekends, cooking at dorm |
| Meals using takeout containers (lunch) | ~1,500 | ~60% of campus eaters use takeout |
| Meals using takeout containers (dinner) | ~800 | Lower dinner traffic |
| **Total addressable containers/day** | **~2,300** | Theoretical maximum |
| **Realistic capture rate (Year 1)** | **15-25%** | Conservative for new service |
| **Realistic daily volume (Year 1)** | **345 – 575** | This is your working range |

---

## 💰 Section 2: Complete Cost Structure (Kinmen-Specific)

### 2A. One-Time Startup Costs (CAPEX)

| Item | Qty | Unit Cost (NT$) | Total (NT$) | Notes |
| :--- | :---: | ---: | ---: | :--- |
| CPET Smart Containers | 1,000 | 120 | 120,000 | RFID-enabled, 500-cycle lifespan |
| Compact Dishwasher (commercial) | 1 | 35,000 | 35,000 | 85°C+ sanitization |
| UV-C Drying Cabinet | 1 | 15,000 | 15,000 | Food-grade sterilization |
| IoT Return Stations | 3 | 8,000 | 24,000 | Campus placement |
| RFID Scanner System | 1 | 12,000 | 12,000 | Inventory tracking |
| LINE Bot Development | 1 | 20,000 | 20,000 | QR return system |
| Storage Racks & Carts | 4 | 2,000 | 8,000 | Stainless steel |
| Setup & Installation | 1 | 15,000 | 15,000 | ~6% contingency |
| **TOTAL CAPEX** | | | **249,000** | |

### 2B. Monthly Fixed Costs (OPEX — Fixed)

These costs are paid whether you wash 0 or 1,000 containers.

| Expense | Monthly (NT$) | Daily (÷30) | Kinmen Notes |
| :--- | ---: | ---: | :--- |
| Rent (small space near NQU) | 6,000 | 200 | Kinmen is cheaper than Taipei; ~10m² near campus |
| Electricity (base + machine) | 2,500 | 83 | Avg rate ~3.78 NT$/kWh; dishwasher ~500W×2hrs |
| Water (base + washing) | 800 | 27 | Kinmen follows national rates + NT$4.5/m³ surcharge |
| Software / Cloud / LINE API | 1,500 | 50 | Hosting, database, API |
| Equipment Maintenance | 1,000 | 33 | Monthly preventive |
| Marketing & Promotion | 1,000 | 33 | Campus posters, LINE stickers |
| Miscellaneous / Insurance | 500 | 17 | Basic coverage |
| **TOTAL FIXED MONTHLY** | **13,300** | **443** | |

### 2C. Variable Costs (Per 100 Containers Processed)

| Expense | Per 100 units (NT$) | Per 1 unit (NT$) | Calculation |
| :--- | ---: | ---: | :--- |
| **Labor** | 392 | 3.92 | 2 hrs × NT$196/hr (collect, wash, pack, manage) |
| **Eco-detergent** | 30 | 0.30 | Concentrated commercial soap |
| **Water (variable)** | 20 | 0.20 | ~15L per 100 containers |
| **Electricity (variable)** | 15 | 0.15 | Machine run cost |
| **Asset loss (2% replacement)** | 240 | 2.40 | 2 containers lost × NT$120 each |
| **Transport / E-cart** | 50 | 0.50 | Short campus distances in Kinmen |
| **UV bulb depreciation** | 10 | 0.10 | Replacement amortized |
| **TOTAL VARIABLE** | **757** | **7.57** | |

---

## 📈 Section 3: Revenue — How Much to Charge

### 3A. The Math: What Price Creates a Daily Surplus?

**Formula:**  
`Daily Surplus = (Price × Volume) − Fixed Cost − (Variable Cost × Volume)`  
`Daily Surplus = Volume × (Price − 7.57) − 443`  
`For Surplus > 0: Price > 7.57 + (443 ÷ Volume)`

| Daily Volume | Minimum Price for Surplus (NT$) | Recommended Price (NT$) | Daily Surplus at Recommended Price |
| :---: | ---: | ---: | ---: |
| 100 | 12.00 | 13.00 | NT$ 100 |
| 200 | 9.79 | 11.00 | NT$ 243 |
| 300 | 9.05 | 10.00 | NT$ 286 |
| 400 | 8.68 | 9.50 | NT$ 329 |
| 500 | 8.46 | 9.00 | NT$ 272 |
| 600 | 8.31 | 9.00 | NT$ 415 |

### 3B. Recommended Pricing Model for NQU

| Revenue Source | Price | Who Pays | Expected Daily Revenue |
| :--- | ---: | :--- | ---: |
| **Vendor subscription fee** | NT$ 3.00 / container | Canteen vendor (replaces their disposable cost) | Volume × 3 |
| **Student service fee** | NT$ 5.00 / use | Student (added to meal price) | Volume × 5 |
| **Late return penalty** | NT$ 10 / incident | Student (after 3-day window) | ~NT$ 50/day avg |
| **Deposit (refundable)** | NT$ 150 / container | Student (returned on container return) | Cash flow buffer |

**Combined revenue per container = NT$ 8.00** (NT$3 vendor + NT$5 student)

> **With NT$8.00/container, you need a minimum of 1,028 containers/day to break even.**  
> **This is TOO HIGH for NQU's small campus.**

### 3C. ⚠️ The Honest Adjustment

At NT$8.00 per container, you cannot achieve daily surplus with realistic NQU volumes (300-500/day). You have two options:

**Option A — Raise price to NT$10/container:**

| Component | Value |
| :--- | ---: |
| Revenue per container | NT$ 10.00 |
| Variable cost per container | NT$ 7.57 |
| Contribution margin | NT$ 2.43 |
| Daily fixed cost | NT$ 443 |
| **Break-even volume** | **183 containers/day** ✅ Achievable |

**Option B — Cut costs by partnering with NQU (recommended):**

If the university provides free space (sustainability initiative), fixed costs drop dramatically:

| Revised Fixed Costs (with free rent) | Monthly | Daily |
| :--- | ---: | ---: |
| Electricity | 2,500 | 83 |
| Water | 800 | 27 |
| Software | 1,500 | 50 |
| Maintenance | 1,000 | 33 |
| Marketing | 500 | 17 |
| Misc | 500 | 17 |
| **TOTAL (no rent)** | **6,800** | **227** |

With free rent + NT$8/container price:
- **Break-even = 528 containers/day** — still borderline.

With free rent + NT$10/container price:
- **Break-even = 94 containers/day** ✅ Very achievable!

---

## 📊 Section 4: Profitability Projections (Recommended Scenario)

**Recommended setup: NT$10/container + University partnership (free rent)**

| Daily Volume | Revenue | Fixed Cost | Variable Cost | Total Cost | **Daily P/L** | **Monthly P/L** | **Annual P/L** |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 50 | 500 | 227 | 379 | 606 | 📉 **(106)** | 📉 **(3,180)** | 📉 **(38,160)** |
| 94 | 940 | 227 | 712 | 939 | ⚖️ **1** | ⚖️ **30** | ⚖️ **365** |
| 150 | 1,500 | 227 | 1,136 | 1,363 | 📈 **137** | 📈 **4,110** | 📈 **49,320** |
| 300 | 3,000 | 227 | 2,271 | 2,498 | 📈 **502** | 📈 **15,060** | 📈 **180,720** |
| 500 | 5,000 | 227 | 3,785 | 4,012 | 📈 **988** | 📈 **29,640** | 📈 **355,680** |

### CAPEX Payback Period

| Scenario | Daily Volume | Monthly Profit | Payback Period |
| :--- | ---: | ---: | :--- |
| Slow start | 150/day | NT$ 4,110 | ~61 months (5 years) ❌ Too slow |
| Moderate | 300/day | NT$ 15,060 | ~17 months ✅ Good |
| Strong | 500/day | NT$ 29,640 | ~8 months ✅ Excellent |

---

## 🆚 Section 5: Comparison — ReLoop vs. One-Time-Use Utensils

### 5A. What Vendors Currently Pay (Disposable)

| Disposable Item | Cost per Set (NT$) | Source |
| :--- | ---: | :--- |
| Bamboo chopsticks (bulk) | 0.30 – 0.80 | Wholesale market |
| Plastic spoon/fork | 0.20 – 0.60 | Wholesale market |
| PP plastic bento box | 3.00 – 5.00 | Wholesale market |
| Paper + PE bento box | 2.00 – 4.00 | Wholesale market |
| Plastic bag | 0.50 – 1.00 | Wholesale market |
| **TOTAL per meal (disposable)** | **NT$ 3.50 – 7.00** | Average ~NT$ 5.00 |

### 5B. Side-by-Side Cost Comparison (Per Meal for Vendor)

| Cost Item | Disposable (NT$) | ReLoop (NT$) | Difference |
| :--- | ---: | ---: | :--- |
| Container cost to vendor | 5.00 | 3.00 (subscription) | **Vendor saves NT$2.00** |
| Waste disposal cost | 0.50 | 0.00 | **Vendor saves NT$0.50** |
| **Total vendor cost per meal** | **5.50** | **3.00** | **Vendor saves NT$2.50/meal** ✅ |

### 5C. Student Cost Comparison

| | Disposable | ReLoop |
| :--- | ---: | ---: |
| Extra cost to student | NT$ 0 (hidden in meal price) | NT$ 5 (transparent service fee) |
| Deposit required | No | NT$ 150 (refundable) |
| Environmental impact | ~35g plastic waste per meal | Zero waste |

**The pitch to students:** "You pay NT$5 extra, but you eliminate 35g of plastic waste. Over one semester (~100 meals), you personally prevent 3.5 kg of plastic waste."

---

## 🎯 Section 6: Break-Even Point (BEP) Summary

| Scenario | Price/Unit | Fixed Cost/Day | Variable/Unit | **BEP (units/day)** |
| :--- | ---: | ---: | ---: | ---: |
| Full cost, NT$8 price | 8.00 | 443 | 7.57 | **1,028** ❌ Impossible at NQU |
| Full cost, NT$10 price | 10.00 | 443 | 7.57 | **183** ✅ Achievable |
| Free rent, NT$8 price | 8.00 | 227 | 7.57 | **528** ⚠️ Borderline |
| **Free rent, NT$10 price** | **10.00** | **227** | **7.57** | **94** ✅ **Best scenario** |

---

## 📋 Section 7: Final Recommendation

1. **Partner with NQU** for free or subsidized space — frame it as a sustainability pilot.
2. **Charge NT$10/container** (NT$3 vendor + NT$5 student + NT$2 university ESG subsidy).
3. **Target 300 containers/day** — this gives you NT$15,060/month profit and pays back CAPEX in 17 months.
4. **Start with 3 vendor partners** in the NQU cafeteria to prove the model before expanding.

---

© 2026 Steven Tanardi. All Rights Reserved.
