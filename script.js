document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-kontak');
    const emailDisplay = document.getElementById('email-display');
    const phoneDisplay = document.getElementById('phone-display');
    const lokasiDisplay = document.getElementById('lokasi-display');

    // Data kontak sensitif (disembunyikan di awal)
    const hiddenEmail = 'andi.jaringan.tkjt@gmail.com'; // Ganti dengan email asli
    const hiddenPhone = '0812-3456-7890'; // Ganti dengan nomor telepon asli
    const hiddenLokasi = 'Jl. Protokol No. 123, Jakarta'; // Ganti dengan alamat asli

    // Tampilkan hanya format umum di awal
    emailDisplay.textContent = 'Email: jawab.pertanyaanku.ini@.com';
    phoneDisplay.textContent = 'No.Telp: 0851-8371-3436';
    lokasiDisplay.textContent = 'Alamat: Cilacap, Jawa Tengah';


    // Opsional: Tambahkan efek hover pada bagian tertentu jika diperlukan
    // const sections = document.querySelectorAll('.section');
    // sections.forEach(section => {
    //     section.addEventListener('mouseenter', () => {
    //         section.style.backgroundColor = '#f9f9f9';
    //     });
    //     section.addEventListener('mouseleave', () => {
    //         section.style.backgroundColor = 'white';
    //     });
    // });
});
