import React, { useState } from "react";

const TodoFrom = ({addTodo}) => {
  const { value, setValue } = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="What is the task today ? "
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoFrom;
