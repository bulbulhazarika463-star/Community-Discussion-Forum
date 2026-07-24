document.addEventListener("DOMContentLoaded", function () {

    const discussionContainer = document.getElementById("discussionContainer");
    const searchInput = document.getElementById("searchInput");

    const totalPosts = document.getElementById("totalPosts");
    const totalMembers = document.getElementById("totalMembers");
    const totalCategories = document.getElementById("totalCategories");

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    updateStatistics();
    displayPosts(posts);

    function updateStatistics() {

        totalPosts.textContent = posts.length;

        totalMembers.textContent = 0;

        const categories = [...new Set(posts.map(post => post.category))];
        totalCategories.textContent = categories.length;

    }

    function displayPosts(postList) {

        discussionContainer.innerHTML = "";

        if (postList.length === 0) {

            discussionContainer.innerHTML = `
                <div class="no-post">
                    <h2>No Discussions Yet</h2>
                    <p>Create your first discussion to get started.</p>
                </div>
            `;
            return;
        }

        postList.forEach((post) => {

            const originalIndex = posts.indexOf(post);

            const card = document.createElement("div");
            card.className = "post-card";

            card.innerHTML = `
                <h3>${post.title}</h3>

                <span class="category">${post.category}</span>

                <p class="post-content">
                    ${post.content}
                </p>

                <div class="actions">

                    <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        ${post.date}
                    </span>

                    <button class="delete-btn" onclick="deletePost(${originalIndex})">
                        <i class="fa-solid fa-trash"></i>
                        Delete
                    </button>

                </div>
            `;

            discussionContainer.appendChild(card);

        });

    }

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase().trim();

            const filteredPosts = posts.filter(post =>

                post.title.toLowerCase().includes(value) ||

                post.category.toLowerCase().includes(value) ||

                post.content.toLowerCase().includes(value)

            );

            displayPosts(filteredPosts);

        });

    }

});

function deletePost(index) {

    if (confirm("Are you sure you want to delete this post?")) {

        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        posts.splice(index, 1);

        localStorage.setItem("posts", JSON.stringify(posts));

        alert("Post deleted successfully!");

        location.reload();

    }

}