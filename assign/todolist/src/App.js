import React, { useState } from "react";
import "./App.css";
import DisplayList from "./components/DisplayList";
import AddItem from "./components/AddItem";

function App() {
  const [toDoList, setToDoList] = useState([
    { key: 0, task: "first thing", status: false },
    { key: 1, task: "second thing", status: true },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <body className="App-body">
        <AddItem toDoList={toDoList} setToDoList={setToDoList} />
        <DisplayList toDoList={toDoList} setToDoList={setToDoList} />
      </body>
    </div>
  );
}

export default App;
