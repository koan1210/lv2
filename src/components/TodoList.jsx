import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./common/css/Todolist.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <div className="todo-list working-list">
        <h2>Working.... 🔥</h2>
        {workingTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div className="todo-list done-list">
        <h2>Done...! 🎉</h2>
        {doneTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
