document.addEventListener("DOMContentLoaded", function () {
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
});


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

document.querySelectorAll('.animated-footer').forEach(section => {
    section.classList.add('fade-in-hidden');
    observer.observe(section);
});

// nav to footter

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLink =document.querySelectorAll('header nav a');

// what we do section
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



// how work section animation

document.addEventListener("DOMContentLoaded", function () {
    const workItems = document.querySelectorAll(".wor-ks");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    workItems.forEach(item => {
        observer.observe(item);
    });
});
