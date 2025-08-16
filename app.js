const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value;
    console.log('Tarea agregada:', task);
    if(task) {
        taskList.append(createTaskElement(task))
        taskInput.value = ''
    }
});

function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;
    li.append(createButton('❌','delete-btn'), createButton('✏️','edit-btn'));
    return li;
}

function createButton(text, className) {
    const btn = document.createElement('span');
    btn.textContent = text;
    btn.className = className;
    return btn;
}

taskList.addEventListener('click', (event) => {
    console.log('Elemento clicado:', event.target);
    if(event.target.classList.contains('delete-btn')) {
        deleteTask(event.target.parentElement);
    } else if(event.target.classList.contains('edit-btn')) {
        editTask(event.target.parentElement);
    }
})

function deleteTask(taskItem) {
    if(confirm('¿Estás segur@ de que quieres eliminar esta tarea?')) {
        taskItem.remove();
    }
}

function editTask(taskItem) {
    const taskText = taskItem.firstChild.textContent;
    const newTask = prompt('Edita la tarea:', taskText);
    if(newTask && newTask.trim() !== '') {
        taskItem.firstChild.textContent = newTask;
    }
}