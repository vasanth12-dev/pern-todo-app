const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

//middlewares
app.use(cors());
app.use(express.json()); // by this i have access to req.body

// routes //

//create a todo
app.post("/todos", async (req, res) => {
  // await == waits for the function until the async done their work
  try {
    const { description } = req.body;
    //console.log(description);
    const newTodo = await pool.query(
      `INSERT INTO todo(description)
        VALUES($1) RETURNING * 
        `,
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

//get all todo
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query(`SELECT * FROM todo`);
    res.json(allTodos.rows); // sending data to client with query results.
  } catch (error) {
    console.log(error);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todoId = parseInt(id);
  console.log(id);
  const todo = await pool.query(
    `SELECT * FROM todo
        WHERE todo_id = ($1)`,
    [id]
  );
  res.json(todo.rows);
});

//update a todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todoId = parseInt(id);
  const { description } = req.body;
  const todo = await pool.query(
    `UPDATE todo
        SET description = ($1)
        WHERE todo_id = ($2) RETURNING *`,
    [description, todoId]
  );
  res.json("to do is updated");
});
//delete a todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todoId = parseInt(id);
  const todo = await pool.query(
    `DELETE FROM todo
        WHERE todo_id = ($1)`,
    [todoId]
  );
  res.json(`${todoId} is deleted`);
});

const port = 5000;
app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
