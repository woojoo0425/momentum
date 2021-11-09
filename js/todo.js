const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todolist = todoForm.querySelector("#todo-list");

function handleToDosubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.innerText = "";
}

todoForm.addEventListener("submit", handleToDosubmit);