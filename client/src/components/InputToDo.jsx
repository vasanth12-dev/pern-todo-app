import React, { useState } from "react";

const InputToDo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();  // to parse the client response.
      //console.log(data); 

      setDescription(""); 
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Pern ToDo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter todo..."
        />
        <button className="btn btn-success ms-2">Add</button>
      </form>
    </>
  );
};

export default InputToDo;
