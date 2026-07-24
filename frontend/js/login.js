document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const message = document.getElementById("message");

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {

            message.style.color = "red";
            message.textContent = "Please register first.";
            return;

        }

        if (email === user.email && password === user.password) {

            message.style.color = "green";
            message.textContent = "Login Successful!";

            setTimeout(function () {

                window.location.href = "dashboard.html";

            }, 1500);

        } else {

            message.style.color = "red";
            message.textContent = "Invalid Email or Password.";

        }

    });

});