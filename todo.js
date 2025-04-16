let todos = [];

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <input type="text" value="${todo}" readonly>
            <button class="update-btn" onclick="enableEdit(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const task = todoInput.value.trim();
    if (task) {
        todos.push(task);
        todoInput.value = '';
        renderTodos();
    }
}

function enableEdit(index) {
    const todoItem = document.querySelectorAll('.todo-item')[index];
    const input = todoItem.querySelector('input');
    input.readOnly = false;
    input.focus();
    const updateBtn = todoItem.querySelector('.update-btn');
    updateBtn.textContent = 'Save';
    updateBtn.onclick = () => saveTodo(index, input);
}

function saveTodo(index, input) {
    const task = input.value.trim();
    if (task) {
        todos[index] = task;
        input.readOnly = true;
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

document.getElementById('todoInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});