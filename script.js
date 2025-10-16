function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('login-msg');
  if (email === 'admin@mtsazzuhriyyah.sch.id' && password === 'admin123') {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    msg.textContent = 'Email atau password salah!';
  }
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'admin.html';
}

if (window.location.pathname.includes('dashboard.html')) {
  if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'admin.html';
  }
}

function tambahBerita() {
  const judul = document.getElementById('judul-berita').value;
  const isi = document.getElementById('isi-berita').value;
  if (judul && isi) {
    const berita = JSON.parse(localStorage.getItem('berita')) || [];
    berita.push({ judul, isi });
    localStorage.setItem('berita', JSON.stringify(berita));
    alert('Berita berhasil ditambahkan!');
  }
}

function tambahMateri() {
  const judul = document.getElementById('judul-materi').value;
  const link = document.getElementById('link-materi').value;
  if (judul && link) {
    const materi = JSON.parse(localStorage.getItem('materi')) || [];
    materi.push({ judul, link });
    localStorage.setItem('materi', JSON.stringify(materi));
    alert('Materi berhasil ditambahkan!');
  }
}

window.onload = function() {
  if (document.getElementById('berita-list')) {
    const berita = JSON.parse(localStorage.getItem('berita')) || [];
    const beritaList = document.getElementById('berita-list');
    beritaList.innerHTML = berita.map(b => `<div><h3>${b.judul}</h3><p>${b.isi}</p></div>`).join('');

    const materi = JSON.parse(localStorage.getItem('materi')) || [];
    const materiList = document.getElementById('materi-list');
    materiList.innerHTML = materi.map(m => `<li><a href="${m.link}" target="_blank">${m.judul}</a></li>`).join('');
  }
};
