# 📊 Perbandingan Finansial & Rencana Pilot ReLoop (Skala Kantin NQU)

Dokumen ini menyajikan analisis keuangan berbasis data dan strategi implementasi untuk layanan peralatan makan pakai ulang **ReLoop** di **Universitas Nasional Quemoy (NQU)**. Analisis ini menggunakan data siklus hidup dari studi Huang et al. (2026) tentang sistem takeaway kampus.

---

## ⚖️ Perbandingan Finansial: Sekali Pakai vs. ReLoop

### 1. Skenario Sekali Pakai (Status Quo)
Estimasi biaya untuk satu set makanan bawa pulang standar di Taiwan (Kotak kertas + tutup plastik + sumpit kayu + sendok plastik + kantong kertas).

| Item | Biaya (NTD) | Keterangan |
| :--- | :--- | :--- |
| Kotak Makan Kertas + Tutup | 2,50 | Harga grosir |
| Sumpit Kayu (bungkus) | 0,50 | Kualitas standar |
| Sendok Plastik | 0,30 | Pembelian massal |
| Kantong Kertas/Plastik | 0,20 | Biaya distribusi |
| **Total per Porsi** | **3,50** | **100% Sampah** |

**Biaya Harian (1.000 porsi): NT$ 3.500**  
**Biaya Tahunan (300 hari): NT$ 1.050.000**

---

### 2. Skenario ReLoop Pakai Ulang (Proyeksi)
Menggunakan set wadah PP berkualitas tinggi bebas BPA dengan peralatan makan stainless steel.

#### A. Investasi Awal (CAPEX)
Untuk operasi 1.000 porsi per hari, dibutuhkan cadangan 2.500 unit (sirkulasi + pencucian + penyimpanan).

| Item | Biaya Satuan (NTD) | Total Biaya (NTD) |
| :--- | :--- | :--- |
| Set Wadah Pakai Ulang | 120 | 300.000 |
| Set Alat Makan Stainless Steel | 30 | 75.000 |
| Mesin Cuci Piring Industri (Steril) | 120.000 | 120.000 |
| Kabinet Pengumpulan Pintar (2 unit) | 45.000 | 90.000 |
| **Total CAPEX Awal** | | **585.000** |

#### B. Biaya Operasional per Pemakaian (OPEX)
Berdasarkan logistik dan standar pencucian industri dari studi Huang et al. (`Identifying.pdf`).

| Kategori Biaya | Biaya (NTD) | Logika |
| :--- | :--- | :--- |
| **Sterilisasi (Panas + Kimia)** | **1,10** | **Listrik (0,044kWh) @ 82°C** + Air + Sanitizer |
| **Tenaga Kerja (Koleksi & Cuci)** | **1,20** | **6 jam/hari @ NT$190/jam** (Upah Min) / 1.000 unit |
| Dana Kehilangan/Penggantian | 0,40 | Tingkat kehilangan 1% per siklus |
| **Total per Porsi** | **2,70** | **Penghematan: NT$0,80 per porsi** |

**Biaya Harian (1.000 porsi): NT$ 2.700**  
**Biaya Tahunan (300 hari): NT$ 810.000 (+ CAPEX)**

---

## 📈 Analisis Titik Impas (Break-Even)

*   **Penghematan per Porsi**: NT$ 3,50 (Sekali pakai) - NT$ 2,70 (OPEX Sesuai Upah) = **NT$ 0,80 hemat**.
*   **Total CAPEX yang Harus Pulih**: NT$ 585.000.
*   **Jumlah Porsi untuk Impas**: 731.250 porsi.
*   **Waktu untuk Impas (pada 1.000 porsi/hari)**: **731 Hari** (~2,4 Tahun Akademik).

> [!IMPORTANT]
> **Standar Sterilisasi**: Untuk memenuhi regulasi keamanan pangan, sistem harus menggunakan bilasan akhir panas tinggi (82°C) sesuai studi `Identifying.pdf`. Meskipun konsumsi energi tinggi, ini wajib untuk kepercayaan pengguna.

---

## 🛡️ Pengendalian Mutu Operasional & Manajemen Aset

### 1. Menjaga Sterilitas (Aturan 72 Jam)
Jika stok bersih (misalnya 700 unit) tidak segera digunakan:
*   **FIFO (First-In, First-Out)**: Selalu gunakan stok "bersih" tertua terlebih dahulu untuk memastikan rotasi.
*   **Penyimpanan Tersterilisasi**: Wadah disimpan dalam **lemari UV-C** tertutup atau wadah kedap debu setelah kering.
*   **Sterilisasi Ulang**: Unit apa pun yang tidak digunakan dalam waktu 72 jam wajib menjalani "Bilas Sterilisasi" 5 menit di mesin cuci piring suhu tinggi sebelum digunakan kembali.

### 2. Melacak Masa Pakai Aset (Pencatatan RFID/QR)
Bagaimana mengetahui kapan wadah sudah terlalu tua?
*   **Aturan "Scan pada Siklus"**: Setiap wadah memiliki **kode QR unik** atau **tag RFID** tertanam.
*   **Penghitung Pemakaian**: Setiap kali wadah dipindai di mesin cuci piring, sistem menambah "Jumlah Pemakaian" di Database ReLoop.
*   **Pensiun Otomatis**: Ketika unit mencapai **400 pemakaian**, sistem menandai untuk inspeksi visual wajib. Pada **500 pemakaian**, unit otomatis dipensiunkan dan dikirim ke **loop daur ulang plastik berbantu BSF** (melengkapi sirkularitas).

---

## 🚀 Rencana Pilot Skala Kecil NQU (Fase 1)

**Target Jangkauan**: 300 porsi/hari (fokus di Kantin Mahasiswa NQU B1).

### 1. Model Subskripsi Yunus
Siswa membayar **deposit NT$200 per semester**.
*   Jika mengembalikan wadah, porsi berikutnya diberikan dalam wadah bersih.
*   **Tujuan Sosial**: Akses tanpa hambatan bagi siswa kurang mampu.

### 2. Alur Operasional (Optimasi NQU)
1.  **Distribusi**: Staf kantin menyajikan makanan dalam wadah ReLoop.
2.  **Koleksi**: Siswa mengembalikan ke bin pengumpulan pintar di Gedung Umum & Lobby Asrama.
3.  **Tenaga Kerja**: Mahasiswa kerja-paruh waktu (Work-study) mengumpulkan unit menggunakan cart elektrik.
4.  **Sanitasi**: Fasilitas pencucian pusat di Kantin B1 menggunakan mesin cuci piring temperatur tinggi.

---
*Berdasarkan temuan dari "Identifying the climate benefits of reusable takeout container systems..." Huang et al. (2026).*
