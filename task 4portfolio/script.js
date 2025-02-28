// Mobile Menu Toggle
let hamburger = document.getElementById("hamburger");
let menu = document.querySelector(".menu");

hamburger.onclick = function () {
    menu.classList.toggle("active");
    hamburger.classList.toggle("open");
};

// Close menu when a link is clicked (for mobile)
document.querySelectorAll(".menu-list-items a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        hamburger.classList.remove("open");
    });
});

// Scroll Reveal Animations
ScrollReveal({
    distance: "60px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".hero .intro", { origin: "top" });
ScrollReveal().reveal(".portfolio-heading, .about-text, .services-heading, .contact-heading", { origin: "left" });
ScrollReveal().reveal(".portfolio-content, .about-image, .services-content, .contact-form-container", { origin: "right" });
ScrollReveal().reveal(".footer", { origin: "bottom" });

// Optional: Typing Animation
const typedText = document.querySelector(".my-heading");
if (typedText) {
    new Typed(".my-heading", {
        strings: ["Hi, I'm"],
        typeSpeed: 400,
        backSpeed: 400,
        backDelay: 1500,
        loop: true,
    });
}
