document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navbar links (Only for same-page links)
    document.querySelectorAll(".nav-links a, .logo a").forEach(link => {
        if (link.getAttribute("href").startsWith("#")) {
            link.addEventListener("click", event => {
                event.preventDefault();
                const section = document.querySelector(link.getAttribute("href"));
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    });

    // Mobile menu toggle
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    },
    { threshold: 0.3 }
);

document.querySelectorAll('.section-home, .section-explore, .animated-footer').forEach(section => {
    section.classList.add('fade-in-hidden');
    observer.observe(section);
});

// Logging messages for debugging
console.log("Interactive Team Section Loaded!");
console.log("Footer loaded successfully!");

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");
    const leftImages = document.querySelectorAll(".hidden-left");
    const rightImages = document.querySelectorAll(".hidden-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    const leftObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-left");
            }
        });
    }, { threshold: 0.3 });

    const rightObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-right");
            }
        });
    }, { threshold: 0.3 });

    elements.forEach((el) => observer.observe(el));
    leftImages.forEach((img) => leftObserver.observe(img));
    rightImages.forEach((img) => rightObserver.observe(img));
});
