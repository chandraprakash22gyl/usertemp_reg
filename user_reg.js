document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Basic authentication (Replace with secure authentication method)
    if (username === "example@example.com" && password === "password123") {
        alert("Registration successful!");
        // Here you can redirect or perform any other action after successful registration
    } else {
        alert("Registration failed. Invalid username or password.");
    }
});