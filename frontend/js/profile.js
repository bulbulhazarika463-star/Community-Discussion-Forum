document.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        document.getElementById("userName").textContent = user.name;
        document.getElementById("userEmail").textContent = user.email;

    }

    document.getElementById("logoutBtn").addEventListener("click", function () {

        localStorage.removeItem("user");

        window.location.href = "index.html";

    });

});