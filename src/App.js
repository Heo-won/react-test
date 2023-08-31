import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState("");
  const [todos, setTodos] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todoList === "") {
      return;
    }
    setTodos((currentTodos) => [todoList, ...currentTodos]);
    setTodoList("");
  };
  const onChange = (e) => {
    setTodoList(e.target.value);
  };
  return (
    <div className="mainContainer">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="입력하세요"
          onChange={onChange}
          value={todoList}
        />
        <button>등록하기</button>
        <h1 className="todoListTitle">Todo List</h1>
      </form>
      <div className="todoBoxContainer">
        {todos.map((item, index) => (
          <li className="todoBox">{item}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
