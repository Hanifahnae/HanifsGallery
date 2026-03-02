// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Joki menu di klik
document.querySelector("#joki-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik out sidebar
const joki = document.querySelector("#joki-menu");

document.addEventListener("click", function (e) {
  if (!joki.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
