# ⚡ Penghargaan Inovasi Yunus Taiwan ke-6 — Proposal Proyek (07)
## WattWatch: Auditor Energi Asrama Cerdas — Berbagi Penghematan IoT+SaaS untuk Asrama Universitas

[![Language - English](https://img.shields.io/badge/Language%20-%20English-000000?style=for-the-badge&logo=google-translate&logoColor=white)](Proposal_EN.md) [![Language - 中文繁體](https://img.shields.io/badge/Language%20-%20中文繁體-000000?style=for-the-badge&logo=google-translate&logoColor=white)](Proposal_CH.md) [![Home - README](https://img.shields.io/badge/Home%20-%20README-000000?style=for-the-badge&logo=home&logoColor=white)](../README_ID.md)

| Nama Tim | Tim Visi Yunus |
| :--- | :--- |
| **Nama Proyek** | **WattWatch: Auditor Energi Asrama Cerdas (SaaS + IoT)** |
| **Ketua Proyek** | **Steven Tanardi** |
| **Kategori** | Perusahaan Sosial Teknologi Iklim |

---

## 🚨 Konteks: Jaringan Taiwan Masih 70% Bahan Bakar Fosil — Asrama adalah Pemborosan Energi yang Tak Terlihat

Taiwan menyelesaikan penghapusan nuklir pada awal 2025. Bauran energinya kini terdiri dari **~50% gas alam, ~31% batu bara, dan hanya ~19% energi terbarukan**. Faktor emisi karbon listrik adalah **0,474 kg CO₂/kWh** (angka resmi Taipower 2024). Setiap watt yang dihemat di asrama langsung mengurangi permintaan dari jaringan yang didominasi bahan bakar fosil.

Asrama universitas sangat bermasalah:
- **Mahasiswa membayar tarif flat atau bersubsidi** → tidak ada insentif finansial untuk hemat.
- **Konsumsi "tak terlihat"** — AC menyala saat tidur, pengisi daya menarik beban phantom, peralatan lama berjalan 24/7.
- **Tanpa umpan balik real-time** — mahasiswa tidak bisa melihat penggunaan energi mereka, sehingga tidak bisa mengubah perilaku.

Studi di universitas-universitas Taiwan mengkonfirmasi: **20% teratas "pengguna berat" mengkonsumsi porsi tidak proporsional dari total listrik asrama**. Sistem umpan balik perilaku yang ditargetkan dapat mengurangi konsumsi listrik kampus sebesar **10–20% tanpa renovasi bangunan**.

---

## 🏛️ 1. Analisis Masalah Sosial

### ⚠️ Pemborosan Tak Terlihat — Mengapa Pemborosan Energi Asrama Bersifat Struktural

| Lapisan Masalah | Deskripsi | Skala |
| :--- | :--- | :--- |
| **Harga bersubsidi** | Sebagian besar asrama universitas Taiwan mengenakan tarif listrik di bawah pasar, menghilangkan insentif konservasi | 300+ universitas dan perguruan tinggi |
| **Masalah aksi kolektif** | Mahasiswa individual merasa tidak berdaya — "Sendirian saya tidak bisa membuat perbedaan" | 8.500 penghuni di NTU saja |
| **Beban phantom tak terlihat** | Pengisi daya, stop kontak, lemari es lama, AC standby: masing-masing kecil, kolektif besar | Est. 15–25% dari total beban residensial |
| **Tidak ada putaran umpan balik** | Tidak ada tampilan real-time → tidak ada perubahan perilaku → pemborosan berlanjut | Terbukti oleh penelitian ekonomi perilaku |
| **Infrastruktur peralatan tua** | AC asrama tua (10–15+ tahun) mengkonsumsi 30–50% lebih banyak dari model inverter modern | Berlaku untuk 80%+ asrama universitas negeri Taiwan |

**Konteks Taiwan**:
- **NTU**: ~8.500 penghuni asrama
- **NTHU**: ~5.000 mahasiswa di 18 gedung
- **NCKU**: Ribuan di kampus Tainan
- Diperkirakan **200.000+ mahasiswa** tinggal di asrama universitas secara nasional
- Konsumsi listrik asrama rata-rata: **9–24 kWh/orang/bulan** (108–288 kWh/tahun)

### Matematika Dasar: Yang Terbuang di Satu Lantai Asrama

> 20 kamar per lantai × 2 penghuni × rata-rata 150 kWh/bulan = **6.000 kWh/bulan**
> Pada tarif listrik Taipower (~NT$4,5/kWh rata-rata): **tagihan NT$27.000/bulan**
> Pengurangan perilaku 15% = **penghematan NT$4.050/bulan** — signifikan untuk anggaran mahasiswa.

---

## 🚀 2. Misi Perusahaan & Solusi

> **"Anda tidak bisa menghemat apa yang tidak bisa Anda lihat. WattWatch membuat yang tak terlihat menjadi terlihat — dan membuat penghematan menjadi rewarding."**

### Visi
Pada tahun 2030, pasang WattWatch di **500 gedung asrama universitas** di seluruh Taiwan, mengurangi konsumsi listrik asrama rata-rata **15%** — menghemat **120.000 ton CO₂/tahun** dan mengembalikan nilai langsung kepada mahasiswa melalui model Berbagi Penghematan.

### Solusi: WattWatch = Hardware IoT + Dashboard SaaS + Mesin Berbagi Penghematan

#### Lapisan 1 — Colokan Cerdas WattWatch (Hardware)
Perangkat pemantau energi berbiaya rendah dan bertujuan khusus:
- **MCU**: Chipset Tuya-kompatibel BK7231 (manufaktur massal terbukti; BOM $4–6 USD untuk 1.000+ unit)
- **IC Pengukuran**: Chip pemantau energi BL0942 — mengukur Watt, kWh, tegangan, arus real-time
- **Konektivitas**: Wi-Fi 2,4GHz (berfungsi dengan jaringan asrama yang ada, tidak perlu infrastruktur baru)
- **Desain**: Kompatibel dengan colokan Taiwan Tipe B; bodi kompak dengan indikator LED
- **Pengiriman data**: Setiap 10 detik → cloud WattWatch → Dashboard
- **Target harga eceran**: NT$350–450/unit

#### Lapisan 2 — Dashboard WattWatch (Web SaaS + LINE Bot)
Real-time, indah, dan dirancang secara sosial:

| Fitur | Cara Kerja |
| :--- | :--- |
| **Kamar Saya** | Wattage langsung, kWh harian/bulanan, estimasi biaya NT$ real-time |
| **Perbandingan Lantai** | Perbandingan rekan anonim — "Kamar Anda menggunakan 20% lebih sedikit dari rata-rata lantai" |
| **Detektif Peralatan** | AI kenali pola: "AC Anda tampaknya berjalan 6 jam/malam — mengaturnya ke 26°C bisa hemat NT$180/bulan" |
| **Skor Hijau** | Skor mingguan gamifikasi: dapatkan poin untuk streak konservasi; dapat ditukar di toko kampus |
| **Pot Tabungan** | Total berjalan real-time dari penghematan kolektif lantai/gedung bulan ini |
| **Penghitung Karbon** | kg CO₂ dihindari minggu ini — ditampilkan sebagai "= X menit tidak menjalankan pembangkit batu bara" |

#### Lapisan 3 — Mesin Berbagi Penghematan (Model Bisnis)

```
Baseline ditetapkan (Bulan 1–2 data)
↓
Setiap bulan: Tagihan aktual diukur vs. baseline proyeksi AI
↓
Penghematan = (kWh Baseline − kWh Aktual) × NT$/kWh
↓
Pembagian: 80% tetap dengan asrama/mahasiswa/universitas | 20% = biaya layanan WattWatch
```

**Contoh untuk satu lantai asrama (40 mahasiswa)**:
- Baseline: 6.000 kWh/bulan → tagihan NT$27.000
- Setelah WattWatch: 5.100 kWh/bulan → tagihan NT$22.950
- **Penghematan: NT$4.050**
- Universitas/mahasiswa menyimpan: **NT$3.240**
- **Biaya WattWatch: NT$810/lantai/bulan** — tanpa biaya di muka untuk universitas

---

## 📊 3. Model Bisnis & Inovasi

### Mengapa "Berbagi Penghematan" adalah Model Yunus yang Sempurna

| SaaS Tradisional | Berbagi Penghematan WattWatch |
| :--- | :--- |
| Biaya bulanan tetap terlepas dari kinerja | **Tanpa biaya jika tidak ada penghematan** |
| Universitas mengambil semua risiko keuangan | **Risiko dibagi — WattWatch hanya mendapat penghasilan jika berhasil** |
| Mahasiswa tidak memiliki kepentingan | **Mahasiswa melihat hadiah langsung di Pot Tabungan** |
| Sulit dijual ke universitas dengan anggaran terbatas | **Tanpa CapEx, pesan ROI terjamin** |

### Model Pendapatan (Per Gedung Asrama 100 Kamar)

| Skenario | Penghematan Bulanan | Biaya 20% WattWatch |
| :--- | :--- | :--- |
| Konservatif (pengurangan 10%) | NT$27.000 | **NT$5.400/bulan** |
| Target (pengurangan 15%) | NT$40.500 | **NT$8.100/bulan** |
| Optimis (pengurangan 20%) | NT$54.000 | **NT$10.800/bulan** |

### Inovasi: Fitur "Paspor Peralatan"

Setiap colokan melacak sidik jari energi peralatan. WattWatch AI membangun **dataset anonim nasional** efisiensi energi peralatan — memberikan universitas data untuk memprioritaskan penggantian peralatan tua, dan pemerintah data untuk menetapkan standar efisiensi minimum.

---

## 🌍 4. Penyelarasan SDG & Dampak

| SDG | Tujuan | Implementasi WattWatch |
| :---: | :--- | :--- |
| **7** | **Energi Terjangkau & Bersih** | Mengurangi permintaan dari jaringan 70% bahan bakar fosil; setiap kWh dihemat = 0,474 kg CO₂ dihindari |
| **4** | **Pendidikan Berkualitas** | Pendidikan melek energi yang digamifikasi; mahasiswa belajar kebiasaan keberlanjutan |
| **11** | **Kota Berkelanjutan** | Data bangunan cerdas memberi makan perencanaan efisiensi energi tingkat kota |
| **13** | **Tindakan Iklim** | Pengurangan CO₂ terukur langsung dengan verifikasi faktor karbon Taipower |

**Keselarasan "3-Zero" Yunus:**
- 🌿 **Nol Emisi Karbon**: 15% pengurangan × 200.000 mahasiswa asrama × 150 kWh/bulan = 45 juta kWh hemat/tahun = **~21.300 ton CO₂/tahun** dihindari secara nasional.
- 💚 **Nol Kemiskinan**: Berbagi penghematan mengembalikan NT$3.240/lantai/bulan kepada mahasiswa — setara dengan bantuan beasiswa parsial bagi mahasiswa berpenghasilan rendah.
- 👷 **Nol Pengangguran**: Menciptakan peran teknisi instalasi IoT; posisi analis data; program "Duta Energi" mahasiswa dengan tunjangan NT$500/bulan.

---

## 📈 5. Keberlanjutan Finansial & Strategis

### Pitch "Universitas Tanpa Risiko"

| Keberatan Universitas | Jawaban WattWatch |
| :--- | :--- |
| "Kami tidak punya anggaran" | Tanpa biaya di muka — WattWatch memasang hardware gratis selama pilot |
| "Kami perlu persetujuan IT" | Beroperasi di Wi-Fi yang ada; tidak ada instalasi server; data disimpan di cloud wilayah Taiwan |
| "Mahasiswa tidak akan berpartisipasi" | Integrasi LINE — tidak perlu unduh aplikasi; perbandingan rekan bersifat viral di komunitas mahasiswa |
| "Bagaimana kami memverifikasi penghematan?" | Protokol Measured & Verified (M&V) — tagihan Taipower aktual dibandingkan dengan baseline AI |

### Peta Jalan Strategis

- **Tahun 1 (Percontohan)**: 3 gedung asrama di 1 universitas (target: NTHU atau NTU). 600 smart plug dipasang. Buktikan penghematan 12–18%.
- **Tahun 2**: Ekspansi ke 10 universitas melalui kemitraan kantor keberlanjutan. 5.000 colokan. Luncurkan produk data "Paspor Peralatan" B2G dengan Kementerian Pendidikan.
- **Tahun 3**: Tender nasional universitas untuk inisiatif kampus hijau Kementerian Pendidikan. 50+ universitas.
- **Tahun 5**: **500 gedung asrama** dipasang. **100.000 smart plug** beroperasi. Pendapatan berbagi penghematan tahunan NT$40M+. Dilisensikan ke pasar universitas Asia Tenggara.

---

### 🛠️ Tim
- **Steven Tanardi (Ketua Proyek)**: Pengembangan firmware IoT, arsitektur dashboard SaaS, desain kontrak berbagi penghematan.
- **Mitra Hardware**: Produsen OEM berbasis di Shenzhen untuk colokan berstandar keselamatan CNS Taiwan.
- **Pimpinan Kemitraan Universitas**: Penghubung dengan kantor USR universitas dan program kampus hijau Kementerian Pendidikan.

---
© 2026 Steven Tanardi. Hak Cipta Dilindungi Undang-Undang.
