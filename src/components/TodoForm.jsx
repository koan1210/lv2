// TodoForm.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todoActions";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || body.trim() === "") {
      return;
    }
    dispatch(
      addTodo({
        id: new Date().getTime(),
        title,
        body,
        isDone: false,
      })
    );
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default TodoForm;
