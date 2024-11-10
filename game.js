// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    
    // Clear input
    input.value = "";
    
    // Optional: Add a delete button to each task
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteButton);
}
