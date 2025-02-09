// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-button'); // "Add Task" button
    const taskInput = document.getElementById('task-input'); // Input field for tasks
    const taskList = document.getElementById('task-list'); // Unordered list for tasks

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the task text from the input field
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!"); // Prompt the user to enter a task
            return; // Exit the function if no task is entered
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText; // Set the text content of the list item

        // Create a "Remove" button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set the button text
        removeButton.className = 'remove-btn'; // Add a class for styling

        // Add an event listener to the "Remove" button to delete the task
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove the list item from the task list
        };

        // Append the "Remove" button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add an event listener to the input field for the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call the addTask function when "Enter" is pressed
        }
    });
});