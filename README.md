# Portfolio Website - Software Engineer & Researcher

Website portofolio profesional yang modern dan responsif untuk Software Engineer, DevOps Engineer, dan Researcher di bidang Cloud & AI Systems.

## 📁 Struktur File

```
portfolio/
│
├── index.html              # Halaman utama
├── experience.html         # Halaman pengalaman kerja
├── projects.html           # Halaman project
├── publications.html       # Halaman publikasi penelitian
├── education.html          # Halaman pendidikan & sertifikasi
│
├── css/
│   └── style.css          # File CSS utama
│
└── js/
    └── main.js            # File JavaScript utama
```

## 🎨 Fitur

- ✅ **Desain Modern & Minimal** - Clean dan profesional
- ✅ **Fully Responsive** - Sempurna di desktop, tablet, dan mobile
- ✅ **Modular Structure** - Setiap halaman terpisah untuk kemudahan maintenance
- ✅ **Smooth Animations** - Fade-in effects dan smooth scrolling
- ✅ **Interactive Navigation** - Mobile-friendly hamburger menu
- ✅ **Publication Filter** - Filter publikasi berdasarkan kategori
- ✅ **Timeline View** - Visualisasi experience dan education
- ✅ **Project Showcase** - Grid layout untuk menampilkan project

## 🚀 Cara Penggunaan

### 1. Customisasi Konten

Edit file HTML sesuai dengan data Anda:

#### **index.html**
- Ganti "Your Name" dengan nama Anda
- Update deskripsi dan subtitle
- Sesuaikan link social media di footer

#### **experience.html**
- Update timeline dengan pengalaman kerja Anda
- Sesuaikan posisi, perusahaan, tanggal, dan deskripsi
- Ganti tags teknologi sesuai yang Anda gunakan

#### **projects.html**
- Tambahkan project-project Anda
- Update deskripsi, fitur, dan teknologi yang digunakan
- Tambahkan link ke GitHub dan demo (jika ada)

#### **publications.html**
- Isi dengan publikasi penelitian Anda
- Update judul, author, venue, dan abstract
- Tambahkan link ke PDF dan code repository

#### **education.html**
- Update jenjang pendidikan Anda
- Sesuaikan GPA, thesis, dan achievements
- Update sertifikasi yang Anda miliki

### 2. Customisasi Warna & Style

Edit file `css/style.css` di bagian CSS Variables:

```css
:root {
    --primary-color: #2563eb;      /* Warna utama */
    --secondary-color: #1e40af;    /* Warna sekunder */
    --text-primary: #1f2937;       /* Warna teks utama */
    --text-secondary: #6b7280;     /* Warna teks sekunder */
    /* ... dan lainnya */
}
```

### 3. Testing Lokal

Buka file `index.html` di browser untuk melihat website Anda.

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px
- **Mobile**: < 480px

## 🌐 Deployment

### Option 1: GitHub Pages (Gratis)
1. Upload semua file ke repository GitHub
2. Buka Settings > Pages
3. Pilih branch main dan folder root
4. Website akan tersedia di `https://username.github.io/repo-name`

### Option 2: Netlify (Gratis)
1. Drag & drop folder ke Netlify Drop
2. Website langsung live

### Option 3: Vercel (Gratis)
1. Import repository dari GitHub
2. Deploy otomatis

### Option 4: Hosting Tradisional
Upload semua file ke hosting via FTP/cPanel

## 🛠️ Maintenance Tips

### Menambah Halaman Baru
1. Buat file HTML baru (misal: `blog.html`)
2. Copy struktur navigation dari halaman lain
3. Tambahkan link di semua file HTML yang ada:
```html
<li><a href="blog.html">Blog</a></li>
```

### Menambah Section Baru
1. Buat div dengan class `content-section`
2. Gunakan class yang sudah ada untuk styling konsisten
3. Tambahkan custom CSS jika diperlukan

### Update Link Social Media
Edit semua footer di setiap file HTML:
```html
<a href="mailto:your.email@example.com">Email</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://scholar.google.com/yourprofile">Google Scholar</a>
```

## 📊 Best Practices

1. **Optimisasi Gambar**: Compress gambar sebelum upload
2. **SEO**: Tambahkan meta tags di `<head>` section
3. **Analytics**: Tambahkan Google Analytics jika diperlukan
4. **Performance**: Minify CSS dan JS untuk production
5. **Accessibility**: Pastikan semua link dan button accessible

## 🔧 Troubleshooting

**Problem**: Mobile menu tidak muncul
- **Solution**: Pastikan `main.js` sudah di-load dengan benar

**Problem**: Styling tidak muncul
- **Solution**: Cek path ke `style.css` apakah benar

**Problem**: Filter publikasi tidak berfungsi
- **Solution**: Pastikan setiap publication-item punya attribute `data-category`

## 📝 License

Feel free to use this template for your personal portfolio!

## 💡 Tips Customization

1. **Ganti Foto**: Tambahkan foto profil di hero section
2. **Add Blog**: Buat section blog untuk artikel Anda
3. **Add Contact Form**: Integrasikan dengan Formspree atau Netlify Forms
4. **Add Dark Mode**: Toggle untuk dark/light theme
5. **Add Resume Download**: Button untuk download CV PDF

## 📞 Support

Jika ada pertanyaan atau butuh bantuan customization, silakan hubungi atau buat issue.

---

**Happy Coding! 🚀**
