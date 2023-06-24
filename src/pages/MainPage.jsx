// MainPage.js

import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const MainPage = () => {
  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default MainPage;
