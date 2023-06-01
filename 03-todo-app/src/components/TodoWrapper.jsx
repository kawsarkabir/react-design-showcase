import React, { useState } from "react";
import TodoFrom from "./TodoFrom";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="TodoWrapper">
      <TodoFrom addTodo={addTodo} />
    </div>
  );
};

export default TodoWrapper;
