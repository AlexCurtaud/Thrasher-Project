const file = document.querySelector("#image");

const button = document.querySelector("#newPost");

button.addEventListener("click", function () {
    postCreator();
    document.querySelector("#blog-form").reset();
})

function postCreator() {
    const divPost = document.createElement('div');
    divPost.className = "blog-post";

    const divImg = document.createElement('div');
    divImg.className = "blog-post-img";

    const img = document.createElement('img');
    const file = document.querySelector("#image").files[0];
    const url = window.URL.createObjectURL(file);
    img.src = url;
    img.className = "img-blog";

    const divText = document.createElement('div');
    divText.className = "blog-text";

    const title = document.createElement('h3');
    title.innerText = document.querySelector("#title").value
    title.className = "";

    const story = document.createElement("p");
    story.innerText = document.querySelector("#story").value;
    story.className = "";

    const author = document.createElement("p");
    author.innerText = document.querySelector("#author").value;
    author.className = "";

    divImg.appendChild(img);

    divText.appendChild(title);
    divText.appendChild(story);
    divText.appendChild(author);

    divPost.appendChild(divImg);
    divPost.appendChild(divText);

    const divBlog = document.querySelector(".blog-posts");
    divBlog.appendChild(divPost);
}