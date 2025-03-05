document.getElementById("fetchComments").addEventListener("click", function () {
    const postId = document.getElementById("postId").value;
    const accessToken = "992847379576086|0tTFtXdVKYcPXMKvTWmMOR6UEcY"; // Replace with your actual token

    if (!postId) {
        alert("Please enter a Post ID.");
        return;
    }

    const url = `https://graph.facebook.com/debug_token?input_token=992847379576086|0tTFtXdVKYcPXMKvTWmMOR6UEcY&access_token=992847379576086|0tTFtXdVKYcPXMKvTWmMOR6UEcY`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const commentsDiv = document.getElementById("comments");
            commentsDiv.innerHTML = "<h2>Comments:</h2>";

            if (data.data) {
                data.data.forEach(comment => {
                    commentsDiv.innerHTML += `<p>${comment.message}</p>`;
                });
            } else {
                commentsDiv.innerHTML = "<p>No comments found.</p>";
            }
        })
        .catch(error => console.error("Error fetching comments:", error));
});
