let task = JSON.parse(sessionStorage.getItem("task")) || [];
showTask();
function addTask(){
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    if (title == "" || description == ""){
        alert("Enter title and description");
        return;
    }
    task.push({
        title: title,description: description, status:"Pending"
    });
    sessionStorage.setItem("task", JSON.stringify(task));
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    showTask();
}
function showTask() {
    let data = "";
    for (let i = 0; i < task.length; i++) {
        data += `
        <tr>
            <td>${task[i].title}</td>
            <td>${task[i].description}</td>
            <td><button class="btn btn-warning btn-sm" onclick="changeStatus(${i})">${task[i].status}</button>
            </td>
            <td>
            <button class="btn btn-primary btn-sm" onclick="editTask(${i})">Edit</button>
         <button class="btn btn-danger btn-sm"onclick="deleteTask(${i})">Delete</button>
            </td>
        </tr>`;
    }
    document.getElementById("taskTable").innerHTML = data;
}
function editTask(i) {
    let title = prompt("Enter title", task[i].title);
    let description = prompt("Enter description", task[i].description);
    if (title != null && description != null) {
        task[i].title = title;
        task[i].description = description;
        sessionStorage.setItem("task", JSON.stringify(task));
        showTask();
    }
}
function deleteTask(i) {
    task.splice(i, 1);
    sessionStorage.setItem("task", JSON.stringify(task));
    showTask();
}
function changeStatus(i) {
    if (task[i].status == "Pending") {
        task[i].status = "Completed";
    }
    else {
        task[i].status = "Pending";
    }
    sessionStorage.setItem("task", JSON.stringify(task));
    showTask();
}