# Taiwan Smart Recycling: Detailed Research & System Design

[<img src="https://img.shields.io/badge/Home%20-%20README-000000?style=for-the-badge&logo=home&logoColor=white">](../README.md)


# Taiwan Smart Recycling: Detailed Research & System Design

[<img src="https://img.shields.io/badge/Home%20-%20README-000000?style=for-the-badge&logo=home&logoColor=white">](../README.md)


## 1. The Taiwan Recycling Landscape (13+ Categories)
Taiwan uses a "Unified Recycling" system, but the industrial sorting is highly granular. To build a machine for this, we must categorize items by **Chemical Ingredients** and **Texture (Tactile/Spectral Density)**.

### Master Category Table
| Category | Item Type | Texture/Nuance | Machine Detection Logic |
| :--- | :--- | :--- | :--- |
| **01** | **Paper (Pure)** | Rough, porous | Vision (Logo) + NIR (Cellulose) |
| **02** | **Paper Containers** | Smooth, glossy LDPE layer | NIR (Plastic lining) + Vision (Paper cup shape) |
| **03** | **Aluminum Cans** | Lightweight, non-magnetic | Magnetic Field Resistance (Eddy Current) |
| **04** | **Iron Cans** | Rigid, magnetic | Static Magnetic Sensor |
| **05** | **PET Bottles (#1)** | Clear, high-density | NIR (Polyethylene Terephthalate signature) |
| **06** | **HDPE/LDPE Bottles** | Opaque, semi-flexible | NIR (Polyethylene signature) |
| **07** | **PP/PVC containers** | Hard, heat-resistant | NIR (Specific polymer peaks) |
| **08** | **Glass (Clear)** | Transparent, heavy | Vision (Transparency) + Acoustic resonance |
| **09** | **Glass (Brown/Green)** | Pigmented, heavy | Vision (Color filter) + Weight check |
| **10** | **Batteries** | Small, heavy, metallic | Weight + Vision (Shape) |
| **11** | **E-Waste (Phones/IT)** | Multi-material, screen | Vision (3C object detection) |
| **12** | **Food Waste (Compost)** | Organic, wet | Moisture sensor + Vision (Food color) |
| **13** | **Clothing/Textiles** | Soft, fiber-based | NIR (Natural vs Synthetic fiber) |

---

## 2. Machine Components (The "Sort-Master" v1.0)
To handle the **Texture and Ingredient** requirement, the machine uses **Sensor Fusion**.

### A. The Input Stage (Cleaning)
Taiwan's "4-in-1" policy emphasizes **purity**.
- **Self-Cleaning Jet:** A high-pressure air/water nozzle inside the intake to remove residual liquids (Milk, Tea).
- **Centrifuge:** Prevents the "Paper Container" vs. "Normal Paper" error due to wetness.

### 2. Physical Components & Market Costs
To handle the "Hidden Ingredient" requirement (PLA/PE coatings), the Sort-Master leverages **Multimodal Sensor Fusion**.
- **NIR Intelligence**: **trinamiX PAL One** module (1,450–2,450 nm) for molecular polymer ID (~$1,500 USD).
- **Vision Hardware**: **Basler ace 2** or **FLIR Blackfly S** 8MP-12MP industrial cameras (~$1,000 USD).
- **Sorting Robotics**: **Fanuc M-2iA** or **ABB IRB 360 FlexPicker** Delta arms (150 picks/min, $35k USD).
- **Total Integrated Cost**: ~$55,000 - $75,000 USD per processing line.

### B. The Detection Suite
1.  **Near-Infrared (NIR) Spectrometer:** 
    - **Function:** Scans the molecular vibration of the surface. 
    - **Ingredient Detection:** This is how we distinguish a **Paper cup (with plastic liner)** from a **Napkin (pure paper)**. They look the same to a camera, but NIR sees the plastic molecules.
2.  **Computer Vision (YOLOv8/10):**
    - **Function:** Real-time object detection.
    - **Texture Detection:** Distinguishes "Crumpled Paper" from "Crumpled Plastic Bag" based on edge-detection and surface sheen patterns.
3.  **Inductive/Eddy Current Sensors:**
    - **Function:** Distinguishes between Aluminum (highly conductive but non-ferrous) and Iron (magnetic).
4.  **Acoustic Ping:**
    - **Function:** A small mechanical "hammer" strikes the object. The vibration frequency distinguishes a thick plastic bottle from a thin glass bottle.

### C. The Sorting Mechanism
- **Pneumatic Flippers:** Fast air-jets blow light items (Paper, PET) into bins.
- **Delta Robotic Arm:** Uses a suction/gripper for heavy/fragile items (Glass, Batteries).

---

## 3. Explaining the "Ingredient" Nuance
The key challenge in Taiwan is the **"Specialized Containers"**. 
A standard paper box (like a pizza box) is **Paper**. 
An IKEA paper coffee cup is NOT Paper; it is a **Paper Container**. 
- **The Difference:** The coffee cup has a thin **PE (Polyethylene) film** melted onto the paper. In Taiwan, these go into a different processing stream because the plastic must be stripped off first. 
- **Machine Logic:** If NIR detects **Polyethylene + Cellulose**, the motor-belt directs it to the "Contained Paper" bin.

---

## 4. Implementation Strategy
1.  **Phase 1:** Build a 4K image dataset of specific Taiwanese brands (Uni-President, HeySong, etc.).
2.  **Phase 2:** Train the AI on the NIR spectrum of different plastic resin codes (1-7).
3.  **Phase 3:** Integrate a weight-to-volume ratio check to detect "Hidden Waste" (trash inside bottles).

---

## 5. Advantages & Disadvantages

### Advantages:
1.  **Industrial Multimodal Module**: **trinamiX NIR** (molecular ID) + **Basler/FLIR 4K RGB** (shape/brand vision).
2.  **Delta Robotic Sorter**: **Fanuc/ABB** Delta arms with 120-150 picks-per-minute throughput.
3.  **PLA/PE Discrimination**: Specialized spectral libraries for Taiwan's complex 4-in-1 recycling containers.
- **Worker Assistance**: Reduces the mental load on recycling center workers by color-coding or automated sorting.
- **Clean Stream**: Produces high-purity recycled raw materials, which sell for a higher price on the commodities market.

### Disadvantages:
- **Initial Setup Cost**: Specialized sensors like NIR spectrometers and industrial Delta arms require high capital investment.
- **Maintenance**: Sticky food residues can cloud vision cameras and NIR lenses, requiring automatic cleaning or manual upkeep.
- **Power Consumption**: 24/7 scanning and pneumatic air-knives use a significant amount of electricity.

---
© 2026 Steven Tanardi. All Rights Reserved.