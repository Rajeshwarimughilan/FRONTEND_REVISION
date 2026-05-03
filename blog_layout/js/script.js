const postsContainer = document.getElementById("posts");

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        renderPosts(data.slice(0, 6));
    } catch (err) {
        postsContainer.innerHTML = `<p style="color:red">${err.message}</p>`;
    }
}

function renderPosts(posts) {
    postsContainer.innerHTML = "";

    if (posts.length === 0) {
        postsContainer.innerHTML = `<p>No Posts Available</p>`;
        return;
    }

    posts.forEach((post) => {
        const div = document.createElement("div");
        div.classList.add("post");

        div.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>
        `;

        postsContainer.appendChild(div);
    });
}

    fetchPosts();