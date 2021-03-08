import React from "react";
import Rainbow from "./hoc/Rainbow";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <i
            className="material-icons right"
            style={{ cursor: "pointer" }}
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            check_box
          </i>
        </div>
      );
    })
  ) : (
    <p className="center"> There is no todos !</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Rainbow(Todos);
