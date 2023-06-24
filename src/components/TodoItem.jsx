// TodoItem.js

import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/actions/todoActions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onToggleHandler = () => {
    dispatch(toggleTodo(todo.id));
  };

  const onDeleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <button onClick={onToggleHandler}>{todo.isDone ? "취소" : "완료"}</button>
      <button onClick={onDeleteHandler}>삭제</button>
    </div>
  );
};

export default TodoItem;
