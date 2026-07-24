document.addEventListener("DOMContentLoaded", function () {

    const postForm = document.getElementById("postForm");

    postForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const title = document.getElementById("title").value.trim();
        const category = document.getElementById("category").value;
        const content = document.getElementById("content").value.trim();

        if (title === "" || category === "" || content === "") {
            alert("Please fill in all fields.");
            return;
        }

        const post = {
            title: title,
            category: category,
            content: content,
            date: new Date().toLocaleString()
        };

        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        posts.push(post);

        localStorage.setItem("posts", JSON.stringify(posts));

        alert("Post published successfully!");

        postForm.reset();

        window.location.href = "discussions.html";

    });

});