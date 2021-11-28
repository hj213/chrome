const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

let todos = [];

function saveTodos (){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    todos = todos.filter( (todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function todoSubmit (event){

    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();

}

todoForm.addEventListener("submit", todoSubmit);

const savedTodo = localStorage.getItem('todos');

if (savedTodo) {
    const parsedTodo = JSON.parse(savedTodo);
    todos = parsedTodo;
    parsedTodo.forEach(paintTodo);
}