# PERN Todo App

## 📌 Overview
A full-stack Todo application built with **PostgreSQL, Express, React, and Node.js (PERN stack)**.  
This app allows users to create, read, update, and delete todos with persistent storage.

---

## 🚀 Features
- Add new todos
- View all todos
- Update todo description
- Delete todos
- Parameterized queries for security (prevents SQL injection)
- Returns updated/created rows directly using `RETURNING *`

---

## 🗂 Folder Structure
```bash
pern-todo/
├── backend/
│   ├── server.js
│   ├── pool.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── package.json
│   └── src/
├── .gitignore
└── README.md
⚙️ Setup Instructions
1. Clone the repo
bash
Copy code
git clone https://github.com/<your-username>/pern-todo.git
cd pern-todo
2. Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file inside backend/:

bash
Copy code
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=perntodo
Start backend server:

bash
Copy code
npm run dev
➡️ Server runs at http://localhost:5000

📡 API Endpoints
Method	Endpoint	Description
GET	/todos	Fetch all todos
POST	/todos	Add a new todo
GET	/todos/:id	Fetch todo by ID
PUT	/todos/:id	Update todo by ID
DELETE	/todos/:id	Delete todo by ID

🛠 Tech Stack
Backend: Node.js, Express.js, PostgreSQL

Frontend: React.js

Database: PostgreSQL

Libraries: pg for database connection, dotenv for environment variables

📖 Notes
Uses parameterized queries ($1, $2) to prevent SQL injection

Returns rows directly using RETURNING * for better performance

Backend and frontend are in separate folders but in the same repository (monorepo)