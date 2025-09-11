import React, { useEffect, useState } from "react";

const ListToDos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const allTodos = await response.json();
      setTodos(allTodos);
    } catch (err) {
      console.error(err.message);
    }
  };

  // delete todo
  const deleteTodo = async(id) => {
    const todo = await fetch(`http://localhost:5000/todos/${id}`,
        {
        method : "DELETE"
       }
    )
    setTodos(todos.filter(todo => todo.todo_id !== id));
  }
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListToDos;
