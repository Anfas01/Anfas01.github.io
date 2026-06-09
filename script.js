const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // Stop observing once the animation has triggered
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1, // Trigger when 10% of the element is visible
  rootMargin: "0px 0px -100px 0px" // Similar to your -100px logic
});

reveals.forEach(section => revealObserver.observe(section));