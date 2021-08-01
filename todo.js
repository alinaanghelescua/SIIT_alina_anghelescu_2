const id = window.location.search.substring(4);
const btnAdd = document.getElementById('btn-add');
const input = document.getElementById('input');

async function addToDoServer(id, input) {
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


async function deleteToDoServer(id) {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}


async function updateToDoServer(id, checked) {
    try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                checked: checked
            })
        })
        return response.json();
    } catch (err) {
        console.log(err)
    }
}


btnAdd.addEventListener('click', function () {
    const ToDo = {
        input: input.value
    }
    addToDoServer(id, ToDo.input);

    // input.value = null;
    // return false;
    // console.log("merge")
})


function createToDoHTML(id, input, checked) {
    const inputHtml = document.createElement('p');
    const articleHtml = document.createElement('article');
    const btnDelete = document.createElement('button');
    const x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");

    if (checked) {
        x.setAttribute("checked", checked)
    };

    inputHtml.innerText = input;
    btnDelete.innerText = 'Delete';
    articleHtml.appendChild(inputHtml);
    articleHtml.appendChild(btnDelete);
    articleHtml.appendChild(x);

    // console.log(checked)

    btnDelete.addEventListener('click', function () {
        deleteToDoServer(id);

    })

    x.addEventListener('click', function () {
        if (x.checked == true) {

            updateToDoServer(id, true)
            // console.log("merge")
        }
        else {
            updateToDoServer(id, false)
        }
    })

    return articleHtml;
}

const displayToDoInHTML = (ToDo) => {
    const containerListToDo = document.getElementById('post-list');
    console.log()
    const ToDoHTML = ToDo.map(({ id, input, checked }) => createToDoHTML(id, input, checked))
    containerListToDo.append(...ToDoHTML)
}

async function getToDo() {
    try {
        const response = await fetch('http://localhost:3000/todos');
        return response.json();
    } catch (err) {
        console.log(err)
    }
}

async function showToDo() {
    const ToDo = await getToDo();
    displayToDoInHTML(ToDo)
}
showToDo();
