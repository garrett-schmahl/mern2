import React, { useState } from "react";

const AddItem = (props) => {
  const { toDoList, setToDoList } = props;
  const [task, setTask] = useState("");
  const [counter, setCounter] = useState(2);

  const handleNew = (event) => {
    event.preventDefault();
    const newItem = {
      key: counter,
      task: task,
      status: false,
    };
    let newCounter = counter + 1;
    setCounter(newCounter);
    setTask("");
    setToDoList([...toDoList, newItem]);
    return;
  };

  return (
    <div className="addItem">
      <form onSubmit={(event) => handleNew(event)}>
        <div>
          <label>New Task: </label>
          <input
            onChange={(event) => {
              setTask(event.target.value);
            }}
            type="text"
            value={task}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddItem;
