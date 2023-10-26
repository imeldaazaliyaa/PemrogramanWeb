const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Hapus</button>
        `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function editTask(button) {
  const li = button.parentElement;
  const taskText = li.querySelector("span").textContent;
  const newText = prompt("Edit aktivitas:", taskText);
  if (newText !== null) {
    li.querySelector("span").textContent = newText;
  }
}

function deleteTask(button) {
  const li = button.parentElement;
  taskList.removeChild(li);
}
