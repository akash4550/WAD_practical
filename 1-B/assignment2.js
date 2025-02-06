document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear any previous error messages
    document.getElementById("error-message").innerHTML = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation for name (non-empty)
    if (name === "") {
        showError("Name is required.");
        return;
    }

    // Validation for email (simple pattern check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showError("Please enter a valid email address.");
        return;
    }

    // Validation for password (min length of 6)
    if (password.length < 6) {
        showError("Password must be at least 6 characters long.");
        return;
    }

    // If all validations pass, store the data and redirect to the next page
    localStorage.setItem("userDetails", JSON.stringify({ name, email, password }));

    // Redirect to the "other" page to show the details
    window.location.href = "registration-success.html";
});

function showError(message) {
    const errorMessageDiv = document.getElementById("error-message");
    errorMessageDiv.innerHTML = message;
}
