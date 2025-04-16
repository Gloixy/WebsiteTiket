document.addEventListener("DOMContentLoaded", function () {
  let akunButton = document.querySelector(".akun-button");
  let formAkun = document.getElementById("formAkun");

  // Hover efek: Form akun muncul saat tombol akun dihover
  akunButton.addEventListener("mouseenter", function () {
    formAkun.style.display = "block";
  });

  formAkun.addEventListener("mouseenter", function () {
    formAkun.style.display = "block";
  });

  // Hilangkan form jika kursor keluar dari tombol akun dan form akun
  formAkun.addEventListener("mouseleave", function () {
    formAkun.style.display = "none";
  });

  akunButton.addEventListener("mouseleave", function () {
    setTimeout(function () {
      if (!formAkun.matches(":hover")) {
        formAkun.style.display = "none";
      }
    }, 200);
  });

  // Klik tombol akun tetap bisa mengontrol tampilan form
  akunButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Cegah event klik dari menyebar ke elemen lain
    if (formAkun.style.display === "block") {
      formAkun.style.display = "none";
    } else {
      formAkun.style.display = "block";
    }
  });

  // Klik di luar form akun akan menutupnya
  document.addEventListener("click", function (event) {
    if (
      !formAkun.contains(event.target) &&
      !akunButton.contains(event.target)
    ) {
      formAkun.style.display = "none";
    }
  });
  function tampilkanDetail(
    judul,
    poster,
    genre,
    durasi,
    sutradara,
    rating,
    jadwal
  ) {
    const url = `detail.html?judul=${encodeURIComponent(
      judul
    )}&poster=${encodeURIComponent(poster)}&genre=${encodeURIComponent(
      genre
    )}&durasi=${encodeURIComponent(durasi)}&sutradara=${encodeURIComponent(
      sutradara
    )}&rating=${encodeURIComponent(rating)}&jadwal=${encodeURIComponent(
      jadwal
    )}`;

    console.log("Navigasi ke:", url); // Debugging di Console
    window.location.href = url;
  }
  function kembaliKeBeranda() {
    window.location.href = "index.html"; // Sesuaikan jika file ada di folder berbeda
  }

  function selectTime(time) {
    selectedTime = time;
    document.getElementById("selectedTime").textContent = time;

    // Reset all buttons before highlighting the selected one
    document.querySelectorAll(".time-btn").forEach((btn) => {
      btn.style.backgroundColor = "#ffb400"; // Default color
    });

    // Change only the selected button color
    event.target.style.backgroundColor = "#ff9500";
  }
});
