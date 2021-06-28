const id = window.location.search.substring(4);
const btnPost = document.getElementById('btn-post');
const title = document.getElementById('title');
const text = document.getElementById('text');
// const myForm = document.getElementById('my-form');

//create posts

async function addPostServer(postId, title, text) {
    const response = await fetch('http://localhost:3000/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            text
        })
    })
    return response.json();
}


btnPost.addEventListener('click', function () {
    const post = {
        title: title.value,
        text: text.value
    }
    addPostServer(id, post.title, post.text);


    title.value = null;
    text.value = null;
    return false;



    // console.log("merge")

})

// // display posts

function createPostHTML(id, title, text) {
    const titleHtml = document.createElement('h1')
    const textHtml = document.createElement('p')
    const articleHtml = document.createElement('article')
    titleHtml.innerText = title;
    textHtml.innerText = text && text.length > 150 ? text.substring(0, 150) + "..." : text;
    articleHtml.appendChild(titleHtml)
    articleHtml.appendChild(textHtml)
    return articleHtml;
}

const displayPostsInHTML = (posts) => {
    const containerListPost = document.getElementById('post-list');
    const postsHTML = posts.map(({ id, title, text }) => createPostHTML(id, title, text))
    containerListPost.append(...postsHTML)
}

async function getPosts() {
    try {
        const response = await fetch('http://localhost:3000/posts');
        return response.json();
    } catch (err) {
        console.log(err)
    }
}

async function showPosts() {
    const posts = await getPosts();
    displayPostsInHTML(posts)
}
showPosts();






