import React from "react";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/TodoDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoList />
      <TodoDetail />
    </div>
  );
}

export default App;
