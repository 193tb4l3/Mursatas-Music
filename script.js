// script.js

// Ambil elemen tombol dan navigasi
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

// Tambahkan event listener untuk tombol hamburger
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active'); // Toggle class 'active'
});

