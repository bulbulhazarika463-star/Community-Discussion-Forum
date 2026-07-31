document.addEventListener("DOMContentLoaded", function () {

    const postForm = document.getElementById("postForm");

    postForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const title = document.getElementById("title").value.trim();
        const category = document.getElementById("category").value;
        const content = document.getElementById("content").value.trim();

        if (title === "" || category === "" || content === "") {
            alert("Please fill in all fields.");
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first.");
            window.location.href = "login.html";
            return;
        }

        try {

            const response = await fetch("http://localhost:5000/api/posts", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`

                },

                body: JSON.stringify({

                    title,
                    category,
                    content

                })

            });

            const data = await response.json();

            if (response.ok) {

                alert("Post Published Successfully!");

                postForm.reset();

                window.location.href = "discussions.html";

            } else {

                alert(data.message || "Failed to publish post.");

            }

        } catch (error) {

            console.error(error);
            alert("Server Error!");

        }

    });

});