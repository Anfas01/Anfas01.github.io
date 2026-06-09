const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navLinksSectionsEl = document.querySelectorAll(".nav-links__section");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1, // Trigger when 10% of the element is visible
  rootMargin: "0px 0px -100px 0px" // Similar to your -100px logic
});


navLinksSectionsEl.forEach(section => {
  section.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    }
  });
});



reveals.forEach(section => revealObserver.observe(section));