// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve task input value and trim whitespace
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item (li) for the task
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create the remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Add event listener to remove the task when the button is clicked
        removeButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
        });

        // Append the remove button to the new task
        newTask.appendChild(removeButton);

        // Append the new task (li) to the task list
        taskList.appendChild(newTask);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Add task when 'Add Task' button is clicked
    addButton.addEventListener('click', addTask);

    // Allow task addition by pressing 'Enter' key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
