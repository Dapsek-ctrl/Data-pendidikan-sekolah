// 1. Data Sekolah (Pastikan link gambar valid)
const dataSekolah = [
    { 
        nama: "SMA Negeri 1 Jakarta", 
        akreditasi: "A", 
        lokasi: "Jakarta Pusat", 
        gambar: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG5wBdd_9n4GC8oW4l6DR67TSOX18FhDpo3eoiBZ6kgWeFskx_70I1zl7HoxQqnNRxvC-bexRw17x7oAt9EJz3aLGHeJHcR3XUeaahJ7oqqNThxMSKlVV1BwRxm_A78T8XS9Ebd=s1360-w1360-h1020-rw",
        web: "https://sman1jkt.sch.id"
    },
    { 
        nama: "SMP Harapan Bangsa Periuk", 
        akreditasi: "B", 
        lokasi: "Kota Tangerang, Banten", 
        gambar: "https://file.data.kemendikdasmen.go.id/sekolahkita/69/6989/69892278-6.jpg",
        web: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/80819D24-7905-4BD9-BDF6-9E6796F8BE82"
    },
    { 
        nama: "SD NEGERI MANGKURA III", 
        akreditasi: "A", 
        lokasi: "Makassar, Sulawesi selatan", 
        gambar: "https://file.data.kemendikdasmen.go.id/sekolahkita/40/4030/40307291-4.jpg",
        web: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/50B7EEC4-0D26-E111-B2E3-FDCDD121E450"
    },
    { 
        nama: "SMP KREATIF HARAPAN BANGSA", 
        akreditasi: "C", 
        lokasi: "Cimahi, Jawa Barat", 
        gambar: "https://file.data.kemendikdasmen.go.id/sekolahkita/20/2025/20254076-3.jpg",
        web: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/C0E74906-2DF5-E011-A084-355EC20EEB6E"
    },
    { 
        nama: "SMPN 14 Tangerang", 
        akreditasi: "B", 
        lokasi: "Tangerang, Banten", 
        gambar: "https://smpn14tangerang.sch.id/wp-content/uploads/2022/10/WhatsApp-Image-2023-11-15-at-14.51.06-300x169.jpeg",
        web: "https://smpn14tangerang.sch.id/"
    },
    { 
        nama: "SMA Negeri 3 Depok", 
        akreditasi: "A", 
        lokasi: "Depok, Jawa Barat", 
        gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqB3G50uCP51eaxJQv5L4t5GouwTaFA8Xdng&s",
        web: "https://sman3depok.sch.id/"
    },
    // --- TAMBAHAN BARU AGAR JADI 10 ---
    { 
        nama: "SMK Negeri 2 Bandung", 
        akreditasi: "A", 
        lokasi: "Bandung, Jawa Barat", 
        gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SMKN_2_Bandung_2.jpg/1280px-SMKN_2_Bandung_2.jpg",
        web: "https://smkn2bandung.sch.id/"
    },
    { 
        nama: "SMA Kristen Petra 1", 
        akreditasi: "A", 
        lokasi: "Surabaya, Jawa Timur", 
        gambar: "https://sma1.pppkpetra.sch.id/wp-content/uploads/2023/08/pppkpetra_DSC09730.jpg",
        web: "https://sma1.pppkpetra.sch.id/"
    },
    { 
        nama: "SMP Al-Azhar Pusat", 
        akreditasi: "A", 
        lokasi: "Jakarta Selatan", 
        gambar: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAES8_D90SX27YVwKqeTbMbt9BN5-wziEcw_at4o77yxPs2RZKXfWLQ6NaukxB7IQxx63XdlKTOJNOfFiuEpmA6nel1dLwZGhJA7UuRwx6Wpw9HS0yHGMJ0fJt-MwbDBUMsHOyc9=s1360-w1360-h1020-rw",
        web: "https://smpialazhar1.sch.id/"
    },
    { 
        nama: "SD LabSchool Jakarta", 
        akreditasi: "A", 
        lokasi: "Rawamangun, Jakarta Timur", 
        gambar: "https://lh3.googleusercontent.com/p/AF1QipMzp0RIgzqfbE9LEQu-XhzlIZv0u25DQWg3XIUR=s1360-w1360-h1020-rw",
        web: "https://labschoolfipumj.sch.id/sd-labschool-fipumj/"
    }
];

const schoolGrid = document.getElementById('schoolGrid');
const searchInput = document.getElementById('searchInput');
const filterAkreditasi = document.getElementById('filterAkreditasi');

// 2. Fungsi Menampilkan Sekolah
function tampilkanSekolah(daftar) {
    schoolGrid.innerHTML = "";

    if (daftar.length === 0) {
        schoolGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <p style="color: #888;">Maaf, sekolah tidak ditemukan...</p>
            </div>
        `;
        return;
    }

    daftar.forEach(sekolah => {
        const badgeClass = `badge-${sekolah.akreditasi.toLowerCase()}`;
        
        const cardHTML = `
            <div class="card">
                <img src="${sekolah.gambar}" alt="${sekolah.nama}" class="card-img" onerror="this.src='https://placehold.co/400x200?text=Gambar+Tidak+Tersedia'">
                <div class="card-content">
                    <span class="badge ${badgeClass}">Akreditasi ${sekolah.akreditasi}</span>
                    <h3>${sekolah.nama}</h3>
                    <p>📍 ${sekolah.lokasi}</p>
                </div>
                <div class="card-footer">
                    <a href="${sekolah.web}" target="_blank" class="btn-detail">Lihat Detail Sekolah →</a>
                </div>
            </div>
        `;
        schoolGrid.innerHTML += cardHTML;
    });
}

// 3. Fungsi Logika Filter
function filterData() {
    const teksCari = searchInput.value.toLowerCase();
    const nilaiAkreditasi = filterAkreditasi.value;

    const hasilFilter = dataSekolah.filter(sekolah => {
        const cocokNama = sekolah.nama.toLowerCase().includes(teksCari) || 
                          sekolah.lokasi.toLowerCase().includes(teksCari);
        const cocokAkreditasi = nilaiAkreditasi === "all" || sekolah.akreditasi === nilaiAkreditasi;
        
        return cocokNama && cocokAkreditasi;
    });

    tampilkanSekolah(hasilFilter);
}

// 4. Event Listeners
searchInput.addEventListener('input', filterData);
filterAkreditasi.addEventListener('change', filterData);

// Inisialisasi awal
tampilkanSekolah(dataSekolah);