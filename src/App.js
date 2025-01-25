import { React, useState } from 'react';
import Todolist from './components/Todolist';
import Commpletbtn from './components/completbtn';

export default function App() {
  let [todos, setTodos] = useState([]);
  const [showtodoList, setshowtodoList] = useState("All");
  const [toggelCompletlist, setToggelCompletlist] = useState(true);

  // *********** Add to do list *********** //
  function AddTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function showTodo(s) {
    setshowtodoList(s);
  }

  function togelComplet(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  }

  if (showtodoList === "active") {
    todos = todos.filter((todo) => !todo.complete);
  } else if (showtodoList === "complete") {
    todos = todos.filter((todo) => todo.complete);
  }

  function handleDelet(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function removeComplete() {
    setTodos(todos.filter((todo) => !todo.complete));
  }

  function toggleAll() {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        complete: toggelCompletlist,
      }))
    );
    setToggelCompletlist(!toggelCompletlist);
  }

  return (
    <div
    className="d-flex justify-content-center align-items-center"
    style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
  >
    <div
      className="container text-center p-4"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
      }}
    >
      <h1 className="mb-4" style={{ color: "#343a40" }}>
        To-Do List
      </h1>
      <Todolist onSubmit={AddTodo} />
  
      <div className="mt-3">
        {todos.map((todo) => (
          <Commpletbtn
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelet(todo.id)}
            togelComplet={() => togelComplet(todo.id)}
          />
        ))}
      </div>
  
      <div className="mt-4">
        <button
          onClick={() => showTodo("All")}
          className="btn btn-primary btn-sm me-2"
        >
          All
        </button>
        <button
          onClick={() => showTodo("active")}
          className="btn btn-warning btn-sm me-2"
        >
          Active
        </button>
        <button
          onClick={() => showTodo("complete")}
          className="btn btn-success btn-sm"
        >
          Complete
        </button>
      </div>
  
      <div className="mt-3">
        {todos.some((todo) => todo.complete) && (
          <button
            onClick={removeComplete}
            className="btn btn-danger btn-sm me-2"
          >
            Remove All Complete
          </button>
        )}
        <button onClick={toggleAll} className="btn btn-secondary btn-sm">
          Toggle All Complete: {`${toggelCompletlist}`}
        </button>
      </div>
    </div>
  </div>
  
  );
}


