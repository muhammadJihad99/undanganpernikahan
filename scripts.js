// ===============================
// MUSIC BUTTON
// ===============================

const musicBtn = document.querySelector(".music-btn");
const musicIcon = musicBtn.querySelector("i");

// Audio
const music = new Audio("mp3/musikku.mp3");

music.loop = true;

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();

    musicIcon.classList.remove("fa-play");
    musicIcon.classList.add("fa-pause");

    musicBtn.classList.add("active");

    isPlaying = true;
  } else {
    music.pause();

    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-play");

    musicBtn.classList.remove("active");

    isPlaying = false;
  }
});

// ===============================
// ACTIVE MOBILE NAVBAR
// ===============================

const navItems = document.querySelectorAll(".mobile-navbar a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));

    item.classList.add("active");
  });
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ===============================
// AUTO ACTIVE NAVBAR ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((a) => {
    a.classList.remove("active");

    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// ===============================
// COUNTDOWN WEDDING
// ===============================

const weddingDate = new Date("May 10, 2026 08:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();

  const distance = weddingDate - now;

  // Time
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // End Countdown
  if (distance < 0) {
    clearInterval(countdown);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

// ===============================
// GALLERY MODAL
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item img");

  const galleryModal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");

  const closeGallery = document.getElementById("closeGallery");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentImageIndex = 0;

  // OPEN MODAL
  galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => {
      galleryModal.classList.add("active");

      modalImage.src = img.src;

      currentImageIndex = index;
    });
  });

  // CLOSE
  closeGallery.addEventListener("click", () => {
    galleryModal.classList.remove("active");
  });

  // NEXT
  nextBtn.addEventListener("click", () => {
    currentImageIndex++;

    if (currentImageIndex >= galleryItems.length) {
      currentImageIndex = 0;
    }

    modalImage.src = galleryItems[currentImageIndex].src;
  });

  // PREV
  prevBtn.addEventListener("click", () => {
    currentImageIndex--;

    if (currentImageIndex < 0) {
      currentImageIndex = galleryItems.length - 1;
    }

    modalImage.src = galleryItems[currentImageIndex].src;
  });

  // CLICK OUTSIDE
  galleryModal.addEventListener("click", (e) => {
    if (e.target === galleryModal) {
      galleryModal.classList.remove("active");
    }
  });
});

// ===============================
// OPENING SCREEN (FIXED)
// ===============================

const openingScreen = document.getElementById("openingScreen");
const openBtn = document.getElementById("openBtn");

// Lock scroll awal
document.body.style.overflow = "hidden";

openBtn.addEventListener("click", () => {
  // animasi keluar opening screen
  openingScreen.classList.add("hide");

  // unlock scroll
  document.body.style.overflow = "auto";

  setTimeout(() => {
    // sembunyikan opening screen
    openingScreen.style.display = "none";

    // 🔥 WAJIB: paksa balik ke HOME
    const homeSection = document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // tambahan safety reset scroll
    window.scrollTo({ top: 0, behavior: "smooth" });

    // reset active navbar biar tidak nyangkut di ucapan
    document.querySelectorAll(".mobile-navbar a").forEach((nav) => {
      nav.classList.remove("active");
    });

    const homeNav = document.querySelector(
      '.mobile-navbar a[href="#home"]'
    );

    if (homeNav) homeNav.classList.add("active");
  }, 800);
});

// ===============================
// FLOWER + GOLD PARTICLE EFFECT
// ===============================

const layer = document.querySelector(".floating-layer");

// emoji bunga (ringan & elegan)
const flowers = ["🌸", "🌺", "💮", "🌷"];

function createFlower() {
  const el = document.createElement("div");
  el.classList.add("flower");

  el.innerText = flowers[Math.floor(Math.random() * flowers.length)];

  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = 5 + Math.random() * 5 + "s";
  el.style.fontSize = 14 + Math.random() * 18 + "px";

  layer.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 10000);
}

function createGold() {
  const el = document.createElement("div");
  el.classList.add("gold");

  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = 4 + Math.random() * 6 + "s";

  el.style.width = el.style.height = 3 + Math.random() * 5 + "px";

  layer.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 10000);
}

// spawn loop
setInterval(createFlower, 500);
setInterval(createGold, 250);
