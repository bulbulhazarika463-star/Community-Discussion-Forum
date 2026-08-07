document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {

            message.style.color = "red";
            message.textContent = "Please fill all fields.";
            return;

        }

        try {

            const baseUrl = window.API_BASE_URL || "http://localhost:5000/api";
            const response = await fetch(`${baseUrl}/auth/login`, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });

            const data = await response.json();

            if (data.success) {

                // Save JWT Token
                localStorage.setItem("token", data.token);

                // Save logged-in user
                localStorage.setItem("currentUser", JSON.stringify(data.user));

                message.style.color = "green";
                message.textContent = "Login Successful!";

                setTimeout(() => {

                    window.location.href = "dashboard.html";

                }, 1500);

            } else {

                message.style.color = "red";
                message.textContent = data.message;

            }

        } catch (error) {

            console.error(error);

            message.style.color = "red";
            message.textContent = "Server Error!";

        }

    });

});