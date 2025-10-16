# 🧮 Kalkulator BMI (Body Mass Index)

Aplikasi web sederhana untuk menghitung **BMI** dan menampilkan **kategori** (dewasa) serta **estimasi persentase lemak tubuh** menggunakan rumus **Deurenberg**. Dibuat dengan **HTML, CSS, dan JavaScript** — cocok untuk dipublikasikan melalui GitHub Pages.

---

## ✨ Fitur

- Hitung **BMI** dari berat (kg) dan tinggi (cm)
- Tampilkan **kategori BMI dewasa**: Kurus / Normal / Gemuk / Obesitas  
  > Catatan: kategori dewasa berlaku untuk **usia ≥ 20 tahun**
- Estimasi **% lemak tubuh** (rumus Deurenberg) berdasarkan **BMI + umur + jenis kelamin**
- Validasi input dasar + tombol **Reset**
- Opsional: **paksa tampilkan kategori dewasa** untuk usia < 20 th (checkbox)
- Desain sederhana dan responsif

---

## 🗂 Struktur Proyek

```
kalkulator-bmi/
├─ index.html      # Halaman utama
├─ style.css       # Gaya tampilan
├─ script.js       # Logika perhitungan
└─ README.md       # Dokumen ini
```

---

## 🚀 Menjalankan Secara Lokal

1. Clone repo ini:
   ```bash
   git clone https://github.com/divofajrianto24/kalkulator-bmi.git
   cd kalkulator-bmi
   ```
2. Buka `index.html` langsung di browser (double click).

Tidak perlu server atau dependency tambahan.

---

## 🌐 Deploy ke GitHub Pages

1. Push kode ke branch `main` repo kamu.
2. Buka **Settings → Pages**.
3. **Source:** pilih `Deploy from a branch` → `main` → `/ (root)`.
4. Simpan. Link akan muncul seperti:  
   `https://divofajrianto24.github.io/kalkulator-bmi/`

Tambahkan URL tersebut di bagian **About** repo agar mudah diakses.

---

## 🧠 Cara Pakai

1. Masukkan **Berat (kg)** dan **Tinggi (cm)**.
2. Masukkan **Umur (tahun)** dan pilih **Jenis Kelamin**.
3. Klik **Hitung**.
4. Hasil:
   - **BMI** (angka)
   - **Kategori BMI** (jika usia ≥ 20 th, atau jika checkbox “paksa dewasa” aktif)
   - **Estimasi % Lemak Tubuh** + kategori umum (Athlete/Fit/Sehat/Tinggi)

> Untuk **usia < 20 th**, aplikasi akan memberi catatan **BMI-for-age** (kurva pertumbuhan WHO).  
> Jika ingin tetap melihat kategori dewasa, centang **“Tampilkan kategori (dewasa) meski < 20 th”**.

---

## 🧮 Rumus yang Dipakai

- **BMI:**
  BMI = berat (kg) / (tinggi (m))²

- **Estimasi % Lemak Tubuh (Deurenberg, dewasa):**
  %Lemak = 1.20 × BMI + 0.23 × Umur − 10.8 × SexMale − 5.4  
  Keterangan: `SexMale = 1` untuk laki-laki, `0` untuk perempuan.

### Ambang Kategori BMI (Dewasa)

| Kategori | Rentang BMI |
|---------|--------------|
| Kurus (Underweight) | < 18.5 |
| Normal | 18.5 – 24.9 |
| Gemuk (Overweight) | 25.0 – 29.9 |
| Obesitas | ≥ 30.0 |

> Ambang ini **khusus dewasa (≥ 20 th)**. Untuk anak & remaja, gunakan **BMI-for-age** (percentile).

---

## 🎯 Contoh

- Berat: **72 kg**, Tinggi: **182 cm** → **BMI 21.7** → **Normal (dewasa)**  
- Umur: **16 th**, Laki-laki → Kategori dewasa **disembunyikan** (default), tampil catatan **BMI-for-age**.  
  Centang opsi “paksa dewasa” jika ingin melihat kategorinya.

---

## ⚠️ Batasan & Catatan Akurasi

- **% lemak tubuh** adalah **estimasi**, akurasi untuk individu bisa bervariasi (lebih baik gunakan alat khusus seperti DEXA/Skinfold untuk pengukuran klinis).
- Tidak cocok untuk **atlet** (massa otot tinggi bisa membuat BMI tampak tinggi).
- Kategori dewasa **tidak berlaku** untuk **usia < 20 th** tanpa kurva BMI-for-age.

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (DOM API)

---

## 🤝 Kontribusi

Pull request dipersilakan! Untuk perubahan besar, buat issue terlebih dahulu untuk mendiskusikan apa yang ingin diubah.

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi **MIT**. Silakan gunakan, modifikasi, dan distribusikan dengan bebas.
