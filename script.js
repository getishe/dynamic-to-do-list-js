// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage on page load
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        
        if (storedTasks) {
            const tasksArray = JSON.parse(storedTasks);
            tasksArray.forEach(taskText => {
                // For each task in Local Storage, create and display the task
                const newTask = document.createElement('li');
                newTask.textContent = taskText;

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.classList.add('remove-btn');

                removeButton.addEventListener('click', () => {
                    removeTask(newTask, taskText);
                });

                newTask.appendChild(removeButton);
                taskList.appendChild(newTask);
            });
        }
    }

    // Save tasks to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new task element
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.addEventListener('click', () => {
            removeTask(newTask, taskText);
        });

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        // Add the new task to the tasks array in Local Storage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        saveTasks(tasks);

        taskInput.value = "";
    }

    // Function to remove a task and update Local Storage
    function removeTask(taskElement, taskText) {
        // Remove the task from the DOM
        taskList.removeChild(taskElement);

        // Update the tasks array in Local Storage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = tasks.filter(task => task !== taskText); // Remove the task from the array
        saveTasks(updatedTasks);
    }

    // Add event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page is ready
    loadTasks();
});
