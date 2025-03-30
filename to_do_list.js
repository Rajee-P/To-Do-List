document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const taskName = document.getElementById('task-name').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskDueDate = document.getElementById('task-due-date').value;

    const taskList = document.getElementById('task-list');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    taskDiv.innerHTML = `
        <input type="checkbox" onchange="toggleTaskCompletion(this)">
        <h3>${taskName}</h3>
        <p>${taskDesc}</p>
        <p class="meta">Priority: ${taskPriority} | Due: ${taskDueDate}</p>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(taskDiv);

    this.reset();
});

function toggleTaskCompletion(checkbox) {
    const taskDiv = checkbox.parentElement;
    taskDiv.classList.toggle('completed', checkbox.checked);
}

function removeTask(button) {
    button.parentElement.remove();
}
