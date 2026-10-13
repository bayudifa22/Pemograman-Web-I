# 🌸 Momen Bareng — Undangan Digital Personal & Berkesan

> **Website Company Profile & Katalog Undangan Digital Interaktif**  
> Dibuat dengan HTML5, Tailwind CSS, dan JavaScript Modern (ES6+). Desain elegan, estetis, dan **100% responsif** di smartphone (mobile), tablet, hingga laptop/desktop.

---

## 📌 Daftar Isi
1. [Tentang Proyek](#-tentang-proyek)
2. [Fitur Utama](#-fitur-utama)
3. [Struktur File](#-struktur-file)
4. [Cara Menjalankan Website (Metode Langsung / CDN)](#-cara-menjalankan-website-metode-langsung--cdn)
5. [Panduan Instalasi Tailwind CSS Secara Lokal (Node.js / CLI)](#-panduan-instalasi-tailwind-css-secara-lokal-nodejs--cli)
6. [Langkah-Langkah Upload Proyek ke GitHub](#-langkah-langkah-upload-proyek-ke-github)
7. [Deploy Gratis ke GitHub Pages](#-deploy-gratis-ke-github-pages)
8. [Panduan Kustomisasi](#-panduan-kustomisasi)

---

## 📖 Tentang Proyek

**Momen Bareng** adalah landing page profil bisnis layanan pembuatan undangan digital untuk berbagai acara:
- 💍 Undangan Pernikahan (*Wedding*)
- 💐 Undangan Lamaran & Pertunangan (*Engagement*)
- 🎂 Undangan Ulang Tahun (*Birthday & Sweet 17*)
- 👶 Undangan Aqiqah & Tasyakuran Kelahiran
- 🕌 Undangan Khitanan
- 🎉 Undangan Acara Spesial (*Bridal Shower, Gathering, Reuni*)

Website ini menggunakan palet warna hangat dan tipografi editorial mewah:
- **Font Utama:** *Cormorant Garamond* (Serif Editorial) & *Plus Jakarta Sans* (Sans-serif Modern)
- **Palet Warna:** Ivory (`#FAF7F2`), Deep Brown (`#49372F`), Dusty Rose (`#C99D96`), Soft Beige (`#E9DFD3`), & Muted Gold (`#B69A67`).

---

## ✨ Fitur Utama

- 📱 **100% Responsif:** Tampilan otomatis menyesuaikan layar iPhone, Android, iPad/Tablet, dan Layar Laptop/Monitor lebar.
- 📂 **Kode Terpisah & Bersih:** Struktur HTML di `index.html` dan seluruh logika interaktif dipisah ke `script.js`.
- 🍔 **Mobile Drawer Navigation:** Menu navigasi khusus mobile yang mulus dengan tombol toggle hamburger yang berubah menjadi ikon `X`.
- 🎨 **Filter Katalog Koleksi:** Filter kategori dinamis (Semua, Classic, Minimalist, Floral, Heritage, Luxury, Pastel) tanpa reload halaman.
- 🔍 **Modal Pratinjau Desain:** Pratinjau detail template lengkap dengan foto beresolusi tinggi dan tombol order langsung ke WhatsApp.
- ❓ **Interactive FAQ Accordion:** Tanya jawab interaktif dengan animasi buka/tutup dan ikon plus/minus.
- 💬 **Integrasi WhatsApp Otomatis:** Seluruh tombol pesan otomatis membuka obrolan WhatsApp dengan pesan kustom sesuai konteks yang diklik.
- ⬆️ **Floating Back-to-Top:** Tombol kembali ke atas yang otomatis muncul saat halaman digulir ke bawah.
- ⚡ **Intersection Observer Reveal:** Animasi konten muncul secara halus saat pengguna melakukan *scroll*.

---

## 📁 Struktur File

```plaintext
Company-Profile/
├── index.html        # Halaman utama landing page
├── script.js         # Logika interaktif JavaScript (modular)
├── README.md         # Dokumentasi panduan pemakaian
```

---

## 🚀 Cara Menjalankan Website (Metode Langsung / CDN)

Website ini sudah siap dijalankan **langsung tanpa instalasi apa pun**, karena sudah menggunakan Tailwind CSS dan Lucide Icons via CDN:

### Opsi A: Buka Langsung di Browser
1. Buka File Explorer di komputer Anda.
2. Klik dua kali (*double click*) file **`index.html`**.
3. Website akan otomatis terbuka di browser favorit Anda (Chrome, Edge, Firefox, dll.).

### Opsi B: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder proyek ini di **Visual Studio Code**.
2. Pasang ekstensi **Live Server** dari marketplace VS Code (oleh Ritwick Dey).
3. Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.
4. Website akan berjalan di `http://127.0.0.1:5500`.

---

## 🛠 Panduan Instalasi Tailwind CSS Secara Lokal (Node.js / CLI)

Jika Anda ingin mengompilasi Tailwind CSS sendiri secara lokal (misalnya untuk keperluan produksi atau tugas kuliah yang melarang penggunaan CDN), ikuti langkah-langkah berikut:

### Prasyarat
- Pastikan komputer sudah terpasang **Node.js** (cek dengan `node -v` di terminal). Jika belum, unduh di [nodejs.org](https://nodejs.org/).

---

### Langkah 1: Inisialisasi Proyek Node.js
Buka Terminal / PowerShell di folder proyek (`Company-Profile`), lalu jalankan:

```bash
npm init -y
```

Perintah ini akan membuat file `package.json`.

---

### Langkah 2: Install Tailwind CSS via NPM
Jalankan perintah berikut untuk mengunduh Tailwind CSS CLI:

```bash
npm install -D tailwindcss
```

---

### Langkah 3: Inisialisasi Konfigurasi Tailwind
Buat file `tailwind.config.js` dengan perintah:

```bash
npx tailwindcss init
```

---

### Langkah 4: Sesuaikan `tailwind.config.js`
Buka file `tailwind.config.js` yang baru terbuat, lalu sesuaikan isinya dengan tema proyek ini:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        'deep-brown': '#49372F',
        'dusty-rose': '#C99D96',
        'soft-beige': '#E9DFD3',
        'muted-gold': '#B69A67',
        'warm-card': '#F4EFEA',
        'subtle-border': 'rgba(73, 55, 47, 0.12)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 10px 30px -5px rgba(73, 55, 47, 0.05), 0 4px 12px -2px rgba(73, 55, 47, 0.03)',
        'hover-card': '0 20px 35px -10px rgba(73, 55, 47, 0.1), 0 8px 16px -4px rgba(73, 55, 47, 0.06)',
        'nav-scrolled': '0 4px 20px -2px rgba(73, 55, 47, 0.06)',
      }
    },
  },
  plugins: [],
}
```

---

### Langkah 5: Buat Berkas Input CSS
Buat folder `src` dan berkas `input.css` di dalamnya (`src/input.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Utilities */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

---

### Langkah 6: Tambahkan Script di `package.json`
Buka `package.json` dan ubah bagian `"scripts"` menjadi:

```json
"scripts": {
  "dev": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch",
  "build": "tailwindcss -i ./src/input.css -o ./dist/output.css --minify"
}
```

---

### Langkah 7: Jalankan Proses Build
- Untuk mode pengembangan (*auto-compile* saat ada perubahan):
  ```bash
  npm run dev
  ```
- Untuk menghasilkan CSS produksi yang terkompresi:
  ```bash
  npm run build
  ```

File CSS hasil kompilasi akan otomatis dibuat di `dist/output.css`.

---

### Langkah 8: Hubungkan ke `index.html`
Jika Anda menggunakan hasil build lokal di atas, Anda dapat menghapus `<script src="https://cdn.tailwindcss.com"></script>` pada `index.html` dan menggantinya dengan:

```html
<link rel="stylesheet" href="dist/output.css">
```

---

## 🐙 Langkah-Langkah Upload Proyek ke GitHub

Ikuti langkah demi langkah di bawah ini untuk mengunggah proyek ini ke akun GitHub Anda:

### 1. Buat File `.gitignore`
Pastikan folder `node_modules` tidak ikut ter-upload. Buat file bernama `.gitignore` di folder utama proyek dan isi dengan:

```plaintext
node_modules/
.DS_Store
Thumbs.db
```

---

### 2. Buka Terminal di Folder Proyek
Buka PowerShell / Terminal di folder `Company-Profile`.

---

### 3. Inisialisasi Git dan Commit Perubahan
Ketikkan perintah berikut satu per satu:

```bash
# 1. Inisialisasi Git (jika belum ada)
git init

# 2. Tambahkan semua berkas ke staging area
git add .

# 3. Buat commit pertama
git commit -m "feat: company profile momen bareng responsif mobile dan laptop"
```

---

### 4. Buat Repositori Baru di GitHub
1. Buka [github.com](https://github.com) dan masuk ke akun Anda.
2. Klik tombol **"+"** di pojok kanan atas, lalu pilih **"New repository"**.
3. Beri nama repositori, misalnya: `company-profile-momen-bareng` atau `Company-Profile`.
4. Pilih **Public**.
5. **Jangan centang** opsi *"Add a README file"* (karena kita sudah punya README lokal).
6. Klik tombol **"Create repository"**.

---

### 5. Hubungkan Repositori Lokal ke GitHub & Push
Salin perintah dari halaman GitHub Anda, lalu jalankan di terminal:

```bash
# Ganti URL di bawah dengan URL repositori Anda
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPOSITORI.git
git push -u origin main
```

*(Ganti `USERNAME` dan `NAMA-REPOSITORI` sesuai akun Anda).*

Setelah proses selesai, buka kembali halaman repositori GitHub Anda dan refresh, semua file telah berhasil ter-upload! 🎉

---

## 🌐 Deploy Gratis ke GitHub Pages

Agar website ini dapat diakses secara online oleh siapa saja:

1. Buka halaman repositori Anda di GitHub.
2. Masuk ke menu **Settings** (ikon gerigi).
3. Pada bilah navigasi kiri, pilih **Pages** (di bagian *Code and automation*).
4. Di bagian **Build and deployment**:
   - **Source:** Pilih `Deploy from a branch`
   - **Branch:** Pilih `main` dan folder `/(root)`
5. Klik **Save**.
6. Tunggu sekitar 1–2 menit, refresh halaman tersebut.
7. Anda akan mendapatkan URL publik website Anda, contohnya:  
   `https://USERNAME.github.io/NAMA-REPOSITORI/`

---

## ⚙️ Panduan Kustomisasi

### Mengubah Nomor WhatsApp Bisnis
Buka file [script.js](file:///c:/Users/bayud/kuliah/pemro%20web/Company-Profile/script.js) dan ubah nilai pada objek `CONFIG`:

```javascript
const CONFIG = {
  whatsappNumber: '6281234567890', // Format nomor internasional tanpa tanda '+'
  defaultGreeting: 'Halo Momen Bareng, saya ingin konsultasi mengenai pembuatan undangan digital.'
};
```

### Mengubah Konten Pesan WhatsApp pada Tombol
Pada elemen HTML yang memiliki atribut `data-wa-trigger`, Anda dapat langsung mengganti teks pesannya di file [index.html](file:///c:/Users/bayud/kuliah/pemro%20web/Company-Profile/index.html):

```html
<button data-wa-trigger="Halo Momen Bareng, saya ingin bertanya tentang paket pernikahan.">
  Pesan Undangan
</button>
```

### Menambah Desain Baru di Galeri Koleksi
Cukup tambahkan elemen kartu baru di dalam kontainer `<div id="collection-grid">` pada file `index.html` dengan menyertakan atribut `data-category`, `data-title`, `data-desc`, dan `data-img`.
