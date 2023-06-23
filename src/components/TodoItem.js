// TodoItem.js

import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../store/actions/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onToggleHandler = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <button onClick={onToggleHandler}>{todo.isDone ? "취소" : "완료"}</button>
    </div>
  );
};

export default TodoItem;
