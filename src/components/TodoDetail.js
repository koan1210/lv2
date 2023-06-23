import React from "react";
import { useSelector } from "react-redux";

function TodoDetail() {
  const selectedTodo = useSelector((state) => state.selectedTodo);

  if (!selectedTodo) {
    return null;
  }

  return (
    <div>
      <h2>상세 정보</h2>
      <p>ID: {selectedTodo.id}</p>
      <p>제목: {selectedTodo.title}</p>
      <p>내용: {selectedTodo.content}</p>
      <button>이전으로</button>
    </div>
  );
}

export default TodoDetail;
