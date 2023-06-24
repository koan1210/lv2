import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/actions/todoActions";
import { Link } from "react-router-dom";
import Modal from "./modal";
import "./common/css/TodoItem.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const onToggleHandler = () => {
    dispatch(toggleTodo(todo.id));
  };

  const onDeleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`todo ${todo.isDone ? "green-border" : "red-border"}`}>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <div className="button-group">
        <button onClick={onToggleHandler}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={onDeleteHandler}>삭제</button>
        <button onClick={onOpenModal}>상세 정보</button>
      </div>
      {showModal && (
        <Modal onClose={onCloseModal}>
          <h2>Todo ID: {todo.id}</h2>
          <h3>제목: {todo.title}</h3>
          <p>내용: {todo.body}</p>
        </Modal>
      )}
    </div>
  );
};

export default TodoItem;
