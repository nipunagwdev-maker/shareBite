const header = document.getElementById("header");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Header shadow after scrolling (Tailwind reads data-scrolled)
window.addEventListener("scroll", () => {
  header.dataset.scrolled = window.scrollY > 10;
});

// Mobile menu: JS only changes aria-expanded and "hidden". Tailwind does the rest.
function setMenu(open) {
  menuBtn.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("hidden", !open);
}

menuBtn.addEventListener("click", () => {
  setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});
