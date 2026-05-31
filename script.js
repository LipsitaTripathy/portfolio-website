// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
  ".stat-card, .about-card, .skill-card, .hire-card, .project-card, .build-card, .contact-card"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
      element.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// NAVBAR EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background =
      "rgba(20,9,11,0.95)";

    navbar.style.boxShadow =
      "0 8px 25px rgba(0,0,0,0.25)";

  } else {

    navbar.style.background =
      "rgba(0,0,0,0.25)";

    navbar.style.boxShadow =
      "none";
  }

});

// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (
      pageYOffset >= sectionTop &&
      pageYOffset < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${current}`
    ) {
      link.classList.add("active");
    }

  });

});

// ===============================
// COUNTER ANIMATION
// ===============================

const statNumbers = document.querySelectorAll(".stat-card h3");

let counterStarted = false;

function runCounters() {

  if (counterStarted) return;

  const statsSection =
    document.querySelector(".stats");

  const sectionTop =
    statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {

    counterStarted = true;

    statNumbers.forEach((counter) => {

      const originalText =
        counter.innerText;

      const value =
        parseFloat(originalText);

      if (isNaN(value)) return;

      let start = 0;

      const duration = 1500;

      const increment =
        value / (duration / 20);

      const updateCounter = () => {

        start += increment;

        if (start < value) {

          counter.innerText =
            start.toFixed(1);

          requestAnimationFrame(
            updateCounter
          );

        } else {

          counter.innerText =
            originalText;
        }

      };

      updateCounter();

    });

  }

}

window.addEventListener(
  "scroll",
  runCounters
);

window.addEventListener(
  "load",
  runCounters
);

// ===============================
// SMOOTH BUTTON HOVER GLOW
// ===============================

const buttons =
  document.querySelectorAll(
    ".btn, .project-buttons a"
  );

buttons.forEach((button) => {

  button.addEventListener(
    "mouseenter",
    () => {

      button.style.boxShadow =
        "0 10px 25px rgba(212,163,115,0.4)";

    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.boxShadow =
        "none";

    }
  );

});

// ===============================
// HERO IMAGE FLOAT EFFECT
// ===============================

const profileImage =
  document.querySelector(".hero-image img");

if (profileImage) {

  let position = 0;

  setInterval(() => {

    position =
      position === 0 ? -8 : 0;

    profileImage.style.transform =
      `translateY(${position}px)`;

  }, 2000);

}

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
  "%cWelcome Recruiter 👋",
  "font-size:20px;color:#d4a373;font-weight:bold;"
);

console.log(
  "Portfolio designed and developed by Lipsita Tripathy."
);