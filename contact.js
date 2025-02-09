document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("IcUfMdnHUwehTmV41"); 

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let sendButton = document.querySelector("button");
        sendButton.innerText = "Sending...";
        sendButton.disabled = true;

        emailjs.send("service_8syisf7", "template_is7d7hr", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }).then(function (response) {
            alert("Message Sent Successfully!");
            document.getElementById("contactForm").reset();
            sendButton.innerText = "Send Message";
            sendButton.disabled = false;
        }, function (error) {
            alert("Failed to Send Message!");
            sendButton.innerText = "Send Message";
            sendButton.disabled = false;
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".container, .co-ntact, .map");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => {
        observer.observe(element);
    });
});



