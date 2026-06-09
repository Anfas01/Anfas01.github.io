const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();