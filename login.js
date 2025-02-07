document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("pass").value.trim();
    let errorMessage = document.getElementById("error-message");
    
    if (password === "") {
        errorMessage.textContent = "Password required.";
        errorMessage.style.color = "red";
        return;
    }
    
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        errorMessage.style.color = "red";
        return;
    }
    
    errorMessage.textContent = ""; 
    
    window.location.href = "index.html";
});