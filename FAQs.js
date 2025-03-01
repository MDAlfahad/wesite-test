document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        let icon = item.querySelector('.icon');
        
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            answer.style.opacity = '0';
            icon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            setTimeout(() => answer.style.opacity = '1', 10);
            icon.style.transform = 'rotate(90deg)';
        }
    });
});


// contact section

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

