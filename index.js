document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
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

document.querySelectorAll('.section-home, .section-explore, .animated-footer').forEach(section => {
    section.classList.add('fade-in-hidden');
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Interactive Team Section Loaded!");
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Footer loaded successfully!");
});





function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
