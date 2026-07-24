document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const message = document.getElementById("message");

        if (name === "" || email === "" || password === "" || confirmPassword === "") {

            message.style.color = "red";
            message.textContent = "Please fill all fields.";
            return;
        }

        if (password !== confirmPassword) {

            message.style.color = "red";
            message.textContent = "Passwords do not match.";
            return;
        }

        const user = {
            name,
            email,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        message.style.color = "green";
        message.textContent = "Registration Successful!";

        setTimeout(function () {
            window.location.href = "login.html";
        }, 1500);

    });

});