import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos.find((t) => t.id === parseInt(id))
  );

  const onGoBack = () => {
    navigate(-1); // 뒤로 가기
  };

  if (!todo) {
    return <div>Todo not found.</div>;
  }

  return (
    <div>
      <h2>Todo ID: {todo.id}</h2>
      <h3>제목: {todo.title}</h3>
      <p>내용: {todo.body}</p>
      <button onClick={onGoBack}>이전으로</button>
    </div>
  );
};

export default DetailPage;
