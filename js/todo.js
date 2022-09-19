const todoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    li = event.target.parentElement;
    todos = todos.filter(obj => obj.id !== Number(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newObj){
    const li = document.createElement("li");
    li.id = newObj.id;
    const span = document.createElement('span');
    span.innerText = newObj.text;

    const button = document.createElement('button');
    button.innerText = 'Del';
    button.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTOdoSubmit(event){
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

todoForm.addEventListener('submit', handleTOdoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    todos = JSON.parse(savedTodos);
    todos.forEach(paintTodo);
}