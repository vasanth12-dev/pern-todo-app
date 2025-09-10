1. Folder structure formatting

Use proper Markdown code block with tree structure:

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

2. Setup Instructions formatting

Wrap commands in proper Markdown code blocks:

# Clone the repo
git clone https://github.com/<your-username>/pern-todo.git
cd pern-todo

# Backend Setup
cd backend
npm install

# Create a .env file in backend/
# Example:
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=perntodo

# Start backend server
npm run dev
# Server runs at http://localhost:5000

3. API endpoints table in Markdown
| Method | Endpoint       | Description           |
|--------|----------------|----------------------|
| GET    | /todos         | Fetch all todos      |
| POST   | /todos         | Add a new todo       |
| GET    | /todos/:id     | Fetch todo by ID     |
| PUT    | /todos/:id     | Update todo by ID    |
| DELETE | /todos/:id     | Delete todo by ID    |