# 📝 Todo App

A full-stack task manager that lets you add, complete, and delete tasks. Built with a clean frontend using **HTML, CSS, JavaScript, and Bootstrap**, and powered by a **.NET 8 Web API** backend with **SQLite** or **SQL Server** for data storage.



---

## 🚀 Features

- ✅ Add new tasks with category & due date
- 🗑️ Delete tasks
- ✅ Mark tasks as completed
- 🌙 Dark mode toggle
- 🔔 Browser notification support
- 🔗 Connected to a real database (via .NET Web API)

---

## 🛠 Tech Stack

**Frontend:**
- HTML5
- CSS3 + Bootstrap 5
- JavaScript

**Backend:**
- .NET 8 Web API (C#)
- Entity Framework Core
- SQLite / SQL Server

---

## 📂 Project Structure

Todo-Project/

 AiTodoApi/      # .NET 8 Web API backend

 Todo-List/      # HTML/CSS/JS + Bootstrap frontend

---

## ⚙️ How to Run

### Backend (.NET API)

```bash
cd TodoApi
dotnet restore
dotnet ef database update
dotnet run

The API will run at: https://localhost:5292/api/tasks


Frontend
Just open the index.html file inside the TodoFrontend/ folder in your browser.

🔧 Setup Notes

Make sure you have .NET SDK 8 installed.

CORS is enabled in the backend so the frontend can fetch data from it.

You can switch between SQLite or SQL Server in Program.cs.
