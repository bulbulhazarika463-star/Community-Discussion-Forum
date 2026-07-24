document.addEventListener("DOMContentLoaded", function () {

    const joinBtn = document.getElementById("joinBtn");

    if (joinBtn) {

        joinBtn.addEventListener("click", function () {

            window.location.href = "register.html";

        });

    }

});