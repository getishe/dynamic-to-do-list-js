// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 3: Create the addTask Function
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // If taskText is not empty, add it to the task list
        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new remove button for the task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');
            
            // Add an onclick event to remove the task from the list
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeButton);

            // Append the li element to the task list
            taskList.appendChild(li);

            // Clear the input field after adding the task
            taskInput.value = '';
        } else {
            // Alert the user if the task input is empty
            alert('Please enter a task.');
        }
    }

    // Step 4: Attach Event Listeners
    // Add event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener for the "Enter" key press to add a task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
