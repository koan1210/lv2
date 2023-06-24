// TodoList.js

import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <h2>Working.... 🔥</h2>
      {workingTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <h2>Done...! 🎉</h2>
      {doneTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
