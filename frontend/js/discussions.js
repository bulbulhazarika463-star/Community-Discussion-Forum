document.addEventListener("DOMContentLoaded", function () {

    const discussionContainer = document.getElementById("discussionContainer");
    const searchInput = document.getElementById("searchInput");

    const totalPosts = document.getElementById("totalPosts");
    const totalCategories = document.getElementById("totalCategories");

    let posts = [];

    async function loadPosts() {

        try {

            const response = await fetch("http://localhost:5000/api/posts");

            const data = await response.json();

            if (data.success) {

                posts = data.posts;

                updateStatistics();

                displayPosts(posts);

            }

        } catch (error) {

            console.error(error);

            discussionContainer.innerHTML = `
                <div class="no-post">
                    <h2>Unable to load posts</h2>
                    <p>Please make sure the backend server is running.</p>
                </div>
            `;

        }

    }

    function updateStatistics() {

        totalPosts.textContent = posts.length;

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

            const date = new Date(post.createdAt).toLocaleString();

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
                        <i class="fa-solid fa-user"></i>
                        ${post.author ? post.author.name : "Unknown"}
                    </span>

                    <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        ${date}
                    </span>

                </div>
            `;

            discussionContainer.appendChild(card);

        });

    }

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const filteredPosts = posts.filter(post =>

            post.title.toLowerCase().includes(value) ||

            post.category.toLowerCase().includes(value) ||

            post.content.toLowerCase().includes(value)

        );

        displayPosts(filteredPosts);

    });

    loadPosts();

});