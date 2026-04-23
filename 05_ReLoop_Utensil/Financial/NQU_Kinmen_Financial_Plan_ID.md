# 📊 ReLoop Utensil — Rencana Keuangan Komprehensif NQU Kinmen
## Penerapan di Kampus National Quemoy University

**Disusun oleh:** Steven Tanardi | **Tanggal:** April 2026  
**Lokasi:** National Quemoy University (國立金門大學), Kinmen, Taiwan

---

## 📌 Ringkasan Eksekutif

Dokumen ini adalah rencana keuangan yang **jujur dan apa adanya** untuk menjalankan layanan peralatan makan dapat dipakai ulang ReLoop di National Quemoy University (NQU) di Kinmen. Mencakup semua biaya nyata, pendapatan realistis, dan memberitahu Anda secara persis berapa harga yang harus dikenakan untuk mencapai surplus harian.

**Kenyataan Pahit:** NQU memiliki ~3.660 mahasiswa. Ini adalah kampus kecil di pulau — bukan pasar perkotaan besar. Volume harian yang dapat Anda raih terbatas. Anda BISA mencapai surplus harian, tetapi hanya jika Anda menetapkan harga dengan benar dan menjaga biaya sangat ramping.

---

## 🏫 Bagian 1: Ukuran Pasar — Realita NQU

| Parameter | Nilai | Sumber / Dasar |
| :--- | ---: | :--- |
| Total mahasiswa NQU (2025/2026) | 3.660 | Data Kementerian Pendidikan Taiwan |
| Dosen & staf (estimasi) | ~400 | Rasio umum |
| Total populasi kampus | ~4.060 | |
| Mahasiswa makan di/dekat kampus per hari | ~2.500 (68%) | Tidak termasuk akhir pekan, masak di asrama |
| Makanan menggunakan wadah bawa pulang (makan siang) | ~1.500 | ~60% pengguna kantin bawa pulang |
| Makanan menggunakan wadah bawa pulang (makan malam) | ~800 | Lalu lintas makan malam lebih rendah |
| **Total wadah yang bisa dijangkau/hari** | **~2.300** | Maksimum teoritis |
| **Tingkat penetrasi realistis (Tahun 1)** | **15-25%** | Konservatif untuk layanan baru |
| **Volume harian realistis (Tahun 1)** | **345 – 575** | Ini adalah kisaran kerja Anda |

---

## 💰 Bagian 2: Struktur Biaya Lengkap (Khusus Kinmen)

### 2A. Biaya Awal Satu Kali (CAPEX)

| Item | Jml | Biaya Satuan (NT$) | Total (NT$) | Keterangan |
| :--- | :---: | ---: | ---: | :--- |
| Wadah Pintar CPET | 1.000 | 120 | 120.000 | Dilengkapi RFID, umur 500 siklus |
| Mesin Cuci Piring Komersial | 1 | 35.000 | 35.000 | Sanitasi 85°C+ |
| Kabinet Pengering UV-C | 1 | 15.000 | 15.000 | Sterilisasi food-grade |
| Stasiun Pengembalian IoT | 3 | 8.000 | 24.000 | Penempatan di kampus |
| Sistem Pemindai RFID | 1 | 12.000 | 12.000 | Pelacakan inventaris |
| Pengembangan LINE Bot | 1 | 20.000 | 20.000 | Sistem pengembalian QR |
| Rak & Troli Penyimpanan | 4 | 2.000 | 8.000 | Baja tahan karat |
| Setup & Instalasi | 1 | 15.000 | 15.000 | ~6% kontingensi |
| **TOTAL CAPEX** | | | **249.000** | |

### 2B. Biaya Tetap Bulanan (OPEX — Tetap)

Biaya ini dibayar baik Anda mencuci 0 atau 1.000 wadah.

| Pengeluaran | Bulanan (NT$) | Harian (÷30) | Catatan Kinmen |
| :--- | ---: | ---: | :--- |
| Sewa (ruang kecil dekat NQU) | 6.000 | 200 | Kinmen lebih murah dari Taipei; ~10m² |
| Listrik (dasar + mesin) | 2.500 | 83 | Tarif rata-rata ~3,78 NT$/kWh |
| Air (dasar + pencucian) | 800 | 27 | Kinmen mengikuti tarif nasional + surcharge |
| Software / Cloud / LINE API | 1.500 | 50 | Hosting, database, API |
| Perawatan Peralatan | 1.000 | 33 | Preventif bulanan |
| Pemasaran & Promosi | 1.000 | 33 | Poster kampus, stiker LINE |
| Lain-lain / Asuransi | 500 | 17 | Perlindungan dasar |
| **TOTAL TETAP BULANAN** | **13.300** | **443** | |

### 2C. Biaya Variabel (Per 100 Wadah Diproses)

| Pengeluaran | Per 100 unit (NT$) | Per 1 unit (NT$) | Perhitungan |
| :--- | ---: | ---: | :--- |
| **Tenaga Kerja** | 392 | 3,92 | 2 jam × NT$196/jam |
| **Sabun Ramah Lingkungan** | 30 | 0,30 | Sabun komersial konsentrat |
| **Air (variabel)** | 20 | 0,20 | ~15L per 100 wadah |
| **Listrik (variabel)** | 15 | 0,15 | Biaya operasi mesin |
| **Kehilangan Aset (penggantian 2%)** | 240 | 2,40 | 2 wadah hilang × NT$120 |
| **Transportasi / E-cart** | 50 | 0,50 | Jarak kampus pendek di Kinmen |
| **Depresiasi Bohlam UV** | 10 | 0,10 | Amortisasi penggantian |
| **TOTAL VARIABEL** | **757** | **7,57** | |

---

## 📈 Bagian 3: Pendapatan — Berapa Harga yang Harus Dikenakan

### 3A. Perhitungan: Berapa Harga Agar Surplus Harian?

**Rumus:**  
`Surplus Harian = (Harga × Volume) − Biaya Tetap − (Biaya Variabel × Volume)`  
`Surplus Harian = Volume × (Harga − 7,57) − 443`  
`Agar Surplus > 0: Harga > 7,57 + (443 ÷ Volume)`

| Volume Harian | Harga Minimum untuk Surplus (NT$) | Harga Rekomendasi (NT$) | Surplus Harian pada Harga Rekomendasi |
| :---: | ---: | ---: | ---: |
| 100 | 12,00 | 13,00 | NT$ 100 |
| 200 | 9,79 | 11,00 | NT$ 243 |
| 300 | 9,05 | 10,00 | NT$ 286 |
| 400 | 8,68 | 9,50 | NT$ 329 |
| 500 | 8,46 | 9,00 | NT$ 272 |

### 3B. Model Harga yang Direkomendasikan untuk NQU

| Sumber Pendapatan | Harga | Siapa yang Bayar | Pendapatan Harian |
| :--- | ---: | :--- | ---: |
| **Biaya langganan vendor** | NT$ 3,00 / wadah | Vendor kantin (menggantikan biaya sekali pakai) | Volume × 3 |
| **Biaya layanan mahasiswa** | NT$ 5,00 / pakai | Mahasiswa (ditambahkan ke harga makanan) | Volume × 5 |
| **Denda keterlambatan** | NT$ 10 / kejadian | Mahasiswa (setelah 3 hari) | ~NT$ 50/hari |
| **Deposit (dapat dikembalikan)** | NT$ 150 / wadah | Mahasiswa (dikembalikan saat wadah dikembalikan) | Buffer arus kas |

**Pendapatan gabungan per wadah = NT$ 8,00** (NT$3 vendor + NT$5 mahasiswa)

> **Dengan NT$8,00/wadah, Anda perlu minimum 1.028 wadah/hari untuk impas.**  
> **Ini TERLALU TINGGI untuk kampus kecil NQU.**

### 3C. ⚠️ Penyesuaian Jujur

Pada NT$8,00 per wadah, Anda tidak bisa mencapai surplus harian dengan volume realistis NQU (300-500/hari). Ada dua opsi:

**Opsi A — Naikkan harga ke NT$10/wadah:**

| Komponen | Nilai |
| :--- | ---: |
| Pendapatan per wadah | NT$ 10,00 |
| Biaya variabel per wadah | NT$ 7,57 |
| Margin kontribusi | NT$ 2,43 |
| Biaya tetap harian | NT$ 443 |
| **Volume impas** | **183 wadah/hari** ✅ Dapat dicapai |

**Opsi B — Pangkas biaya dengan bermitra dengan NQU (direkomendasikan):**

Jika universitas menyediakan ruang gratis (inisiatif keberlanjutan), biaya tetap turun drastis:

| Biaya Tetap Revisi (tanpa sewa) | Bulanan | Harian |
| :--- | ---: | ---: |
| Listrik | 2.500 | 83 |
| Air | 800 | 27 |
| Software | 1.500 | 50 |
| Perawatan | 1.000 | 33 |
| Pemasaran | 500 | 17 |
| Lain-lain | 500 | 17 |
| **TOTAL (tanpa sewa)** | **6.800** | **227** |

Dengan sewa gratis + harga NT$10/wadah:
- **Titik impas = 94 wadah/hari** ✅ Sangat dapat dicapai!

---

## 📊 Bagian 4: Proyeksi Profitabilitas (Skenario Rekomendasi)

**Setup rekomendasi: NT$10/wadah + kemitraan universitas (sewa gratis)**

| Volume Harian | Pendapatan | Biaya Tetap | Biaya Variabel | Total Biaya | **Harian** | **Bulanan** | **Tahunan** |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 50 | 500 | 227 | 379 | 606 | 📉 **(106)** | 📉 **(3.180)** | 📉 **(38.160)** |
| 94 | 940 | 227 | 712 | 939 | ⚖️ **1** | ⚖️ **30** | ⚖️ **365** |
| 150 | 1.500 | 227 | 1.136 | 1.363 | 📈 **137** | 📈 **4.110** | 📈 **49.320** |
| 300 | 3.000 | 227 | 2.271 | 2.498 | 📈 **502** | 📈 **15.060** | 📈 **180.720** |
| 500 | 5.000 | 227 | 3.785 | 4.012 | 📈 **988** | 📈 **29.640** | 📈 **355.680** |

### Periode Pengembalian CAPEX

| Skenario | Volume Harian | Profit Bulanan | Periode Pengembalian |
| :--- | ---: | ---: | :--- |
| Awal lambat | 150/hari | NT$ 4.110 | ~61 bulan (5 tahun) ❌ Terlalu lama |
| Moderat | 300/hari | NT$ 15.060 | ~17 bulan ✅ Bagus |
| Kuat | 500/hari | NT$ 29.640 | ~8 bulan ✅ Sangat baik |

---

## 🆚 Bagian 5: Perbandingan — ReLoop vs. Peralatan Sekali Pakai

### 5A. Yang Saat Ini Dibayar Vendor (Sekali Pakai)

| Barang Sekali Pakai | Biaya per Set (NT$) | Sumber |
| :--- | ---: | :--- |
| Sumpit bambu (grosir) | 0,30 – 0,80 | Pasar grosir |
| Sendok/garpu plastik | 0,20 – 0,60 | Pasar grosir |
| Kotak makan PP plastik | 3,00 – 5,00 | Pasar grosir |
| Kotak makan kertas + PE | 2,00 – 4,00 | Pasar grosir |
| Kantong plastik | 0,50 – 1,00 | Pasar grosir |
| **TOTAL per makan (sekali pakai)** | **NT$ 3,50 – 7,00** | Rata-rata ~NT$ 5,00 |

### 5B. Perbandingan Biaya (Per Makan untuk Vendor)

| Item Biaya | Sekali Pakai (NT$) | ReLoop (NT$) | Selisih |
| :--- | ---: | ---: | :--- |
| Biaya wadah untuk vendor | 5,00 | 3,00 (langganan) | **Vendor hemat NT$2,00** |
| Biaya pembuangan sampah | 0,50 | 0,00 | **Vendor hemat NT$0,50** |
| **Total biaya vendor per makan** | **5,50** | **3,00** | **Vendor hemat NT$2,50/makan** ✅ |

### 5C. Perbandingan Biaya Mahasiswa

| | Sekali Pakai | ReLoop |
| :--- | ---: | ---: |
| Biaya tambahan untuk mahasiswa | NT$ 0 (tersembunyi dalam harga makanan) | NT$ 5 (biaya layanan transparan) |
| Deposit diperlukan | Tidak | NT$ 150 (dapat dikembalikan) |
| Dampak lingkungan | ~35g sampah plastik per makan | Nol sampah |

**Penawaran untuk mahasiswa:** "Anda membayar NT$5 ekstra, tetapi Anda menghilangkan 35g sampah plastik. Selama satu semester (~100 kali makan), Anda secara pribadi mencegah 3,5 kg sampah plastik."

---

## 🎯 Bagian 6: Rangkuman Titik Impas (BEP)

| Skenario | Harga/Unit | Biaya Tetap/Hari | Variabel/Unit | **BEP (unit/hari)** |
| :--- | ---: | ---: | ---: | ---: |
| Biaya penuh, harga NT$8 | 8,00 | 443 | 7,57 | **1.028** ❌ Mustahil di NQU |
| Biaya penuh, harga NT$10 | 10,00 | 443 | 7,57 | **183** ✅ Dapat dicapai |
| Sewa gratis, harga NT$8 | 8,00 | 227 | 7,57 | **528** ⚠️ Batas |
| **Sewa gratis, harga NT$10** | **10,00** | **227** | **7,57** | **94** ✅ **Skenario terbaik** |

---

## 📋 Bagian 7: Rekomendasi Akhir

1. **Bermitra dengan NQU** untuk ruang gratis atau bersubsidi — kerangkakan sebagai pilot keberlanjutan kampus.
2. **Kenakan NT$10/wadah** (NT$3 vendor + NT$5 mahasiswa + NT$2 subsidi ESG universitas).
3. **Targetkan 300 wadah/hari** — ini memberikan profit NT$15.060/bulan dan mengembalikan CAPEX dalam 17 bulan.
4. **Mulai dengan 3 mitra vendor** di kantin NQU untuk membuktikan model sebelum ekspansi.

---

© 2026 Steven Tanardi. All Rights Reserved.
