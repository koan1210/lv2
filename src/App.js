import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Styled Components
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const TodoContainer = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TodoTitle = styled.h3`
  margin-top: 0;
`;

const TodoBody = styled.p`
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
`;

// Redux Actions
const addTodo = (title, body) => ({
  type: "ADD_TODO",
  payload: {
    id: Math.random().toString(),
    title,
    body,
    isDone: false,
  },
});

const toggleDone = (id) => ({
  type: "TOGGLE_DONE",
  payload: {
    id,
  },
});

const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: {
    id,
  },
});

// Redux Reducer
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_DONE":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

// Redux Store
const store = createStore(todoReducer);

// Components
function TodoItem({ todo }) {
  return (
    <TodoContainer>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoBody>{todo.body}</TodoBody>
      <Button onClick={() => store.dispatch(toggleDone(todo.id))}>
        {todo.isDone ? "취소" : "완료"}
      </Button>
      <Button onClick={() => store.dispatch(deleteTodo(todo.id))}>
        삭제하기
      </Button>
    </TodoContainer>
  );
}

function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
}

function TodoForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        제목
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        내용
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <Button type="submit">추가하기</Button>
    </form>
  );
}

function WorkingTodos() {
  const todos = store.getState().filter((todo) => !todo.isDone);

  return (
    <div>
      <h2>진행 중.... 🔥</h2>
      <TodoList todos={todos} />
    </div>
  );
}

function DoneTodos() {
  const todos = store.getState().filter((todo) => todo.isDone);

  return (
    <div>
      <h2>완료...! 🎉</h2>
      <TodoList todos={todos} />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="list">
          <header>
            <h1>할 일 목록</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">진행 중</Link>
                </li>
                <li>
                  <Link to="/done">완료</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <ListContainer>
              <Routes>
                <Route path="/" element={<WorkingTodos />} />
                <Route path="/done" element={<DoneTodos />} />
              </Routes>
              <TodoForm
                onSubmit={(title, body) => store.dispatch(addTodo(title, body))}
              />
            </ListContainer>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
