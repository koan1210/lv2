import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  const completedTodos = todos.filter((todo) => todo.completed);
  const inProgressTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h2>완료</h2>
      {completedTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      <h2>진행중</h2>
      {inProgressTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
