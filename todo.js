const id = window.location.search.substring(4);
const btnAdd = document.getElementById('btn-add');
const input = document.getElementById('input');


async function addPostServer(id, input) {
    const response = await fetch('http://localhost:3000/todos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            input
        })
    })
    return response.json();
}


async function deletePostServer(id) {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }


btnAdd.addEventListener('click', function () {
    const post = {
        input: input.value
    }
    addPostServer(id, post.input);


    input.value = null;

    return false;



    // console.log("merge")

})

// // display posts

function createPostHTML(id, input) {
    const inputHtml = document.createElement('p');
    const articleHtml = document.createElement('article');
    const btnDelete = document.createElement('button');
    const x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    inputHtml.innerText = input;
    btnDelete.innerText = 'Delete';
    articleHtml.appendChild(inputHtml);
    articleHtml.appendChild(btnDelete);
    articleHtml.appendChild(x);
    return articleHtml;


    btnDelete.addEventListener('click', function() {
        return deletePostServer(id);
        
    })
}

const displayPostsInHTML = (posts) => {
    const containerListPost = document.getElementById('post-list');
    const postsHTML = posts.map(({ id, input }) => createPostHTML(id, input))
    containerListPost.append(...postsHTML)
}

async function getPosts() {
    try {
        const response = await fetch('http://localhost:3000/todos');
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
