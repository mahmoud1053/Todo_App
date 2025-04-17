const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const toggleMode = document.getElementById("toggleMode");

const API_URL = "http://localhost:5292/api/Tasks"; // Your .NET API endpoint

async function loadTasks() {
  const res = await fetch(API_URL);
  const data = await res.json();
  renderTasks(data);
}

async function addTask(task) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });

  if (res.ok) {
    showNotification("Task added successfully!");
    loadTasks();
  }
}

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  showNotification("Task deleted.");
  loadTasks();
}

async function markDone(task) {
  task.done = true;
  await fetch(`${API_URL}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });
  showNotification("Task marked as done!");
  loadTasks();
}

function showNotification(msg) {
  if (Notification.permission === "granted") {
    new Notification(msg);
  }
}

function renderTasks(tasks) {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskHtml = `
      <div class="col-md-4 mb-4">
        <div class="card task-card shadow-sm ${task.done ? 'border-success' : ''}">
          <div class="card-body">
            <h5 class="card-title">${task.done ? '✅ ' : ''}${task.title}</h5>
            <p class="card-text">Category: ${task.category}</p>
            <p class="card-text">Due: ${task.dueDate || "No deadline"}</p>
            <button class="btn btn-success btn-sm me-2" onclick='markDone(${JSON.stringify(task)})'>Done</button>
            <button class="btn btn-danger btn-sm" onclick='deleteTask(${task.id})'>Delete</button>
          </div>
        </div>
      </div>
    `;
    taskList.innerHTML += taskHtml;
  });
}

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("taskTitle").value;
  const category = document.getElementById("taskCategory").value;
  const dueDate = document.getElementById("taskDueDate").value;

  const newTask = { title, category, dueDate, done: false };
  addTask(newTask);
  taskForm.reset();
});

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

if ("Notification" in window && Notification.permission !== "granted") {
  Notification.requestPermission();
}

// Load tasks from API on page load
loadTasks();
