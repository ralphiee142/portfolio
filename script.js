// Highlight the nav link of the section currently in view
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
function flipProfile() {
  const profileCard = document.getElementById("profileCard");

  profileCard.classList.toggle("flipped");
}
// Midterm / Finals toggle
const termBtns = document.querySelectorAll(".term-btn");
const termPanels = document.querySelectorAll(".term-panel");
const termHint = document.getElementById("termHint");

termBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    termBtns.forEach((b) => b.classList.remove("active"));
    termPanels.forEach((p) => p.classList.remove("show"));

    btn.classList.add("active");
    document.getElementById(target).classList.add("show");
    termHint.style.display = "none";
  });
});
// ===== Scroll progress bar =====
const progressBar = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (window.scrollY / max) * 100 + "%";
});

// ===== Typing effect =====
const phrases = [
  "Aspiring Web Developer",
  "HTML • CSS • JavaScript",
  "Future IT Professional",
];
const typingEl = document.getElementById("typing");
let pIndex = 0,
  cIndex = 0,
  deleting = false;

function typeLoop() {
  const word = phrases[pIndex];
  typingEl.textContent = word.substring(0, cIndex);

  if (!deleting && cIndex < word.length) {
    cIndex++;
    setTimeout(typeLoop, 90);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1400);
  } else if (cIndex > 0) {
    cIndex--;
    setTimeout(typeLoop, 45);
  } else {
    deleting = false;
    pIndex = (pIndex + 1) % phrases.length;
    setTimeout(typeLoop, 300);
  }
}
typeLoop();

// ===== Floating bubbles in hero =====
const hero = document.querySelector(".hero");
for (let i = 0; i < 14; i++) {
  const b = document.createElement("span");
  const size = 10 + Math.random() * 40;
  b.className = "bubble";
  b.style.width = b.style.height = size + "px";
  b.style.left = Math.random() * 100 + "%";
  b.style.animationDuration = 6 + Math.random() * 8 + "s";
  b.style.animationDelay = Math.random() * 8 + "s";
  hero.appendChild(b);
}

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll(
  ".about h2, .about-intro, .about-box, .skills h2, .skill-box, .activities h2, .term-tabs, .contact h2, .contact p",
);
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealEls.forEach((el) => observer.observe(el));
