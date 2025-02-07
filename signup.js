document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("re-pass").value;
    let checkbox = document.getElementById("checkbox");
    let errorMessage = document.getElementById("error-message");
    let errorMess = document.getElementById("error-mess");
    
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        errorMessage.style.color = "red";
        return;
    }
    
    if (password !== confirmPassword) {
        errorMessage.textContent = "Password do not match.";
        errorMessage.style.color = "red";
        return;
    }
    
    if (!checkbox.checked) {
        errorMess.textContent = "You must agree to the Terms and Conditions.";
        errorMess.style.color = "red";
        return;
    }
    errorMessage.textContent = "";
    errorMess.textContent = "";
    
    // Redirect to home.html after successful sign-in
    window.location.href = "index.html";
});
