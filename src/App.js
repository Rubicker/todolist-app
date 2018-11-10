import React, { useState } from "react";
import Form from "./Form";
export default () => {
  const [todos, setTodos] = useState([]);
  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) => (k === i ? { ...todo, complete: !todo.complete } : todo)
      )
    );
  return (
    <div className="App">
      <h2 className="title">TodoList</h2>
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={i}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
            className="todo-item"
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setTodos([])}> Reset </button>
    </div>
  );
};
