import React from "react";

const DisplayList = (props) => {
  const { toDoList, setToDoList } = props;

  const changeItemStatus = (idx) => {
    const updatedItemStatus = toDoList.map((item) => {
      if (item.key === idx) {
        item.status = !item.status;
      }
      return item;
    });
    setToDoList(updatedItemStatus);
  };

  const deleteItem = (event, idx) => {
    event.preventDefault();
    const updatedItemStatus = toDoList.filter((item) => item.key !== idx);
    setToDoList(updatedItemStatus);
    return updatedItemStatus;
  };
  return (
    <div className="displayList">
      <ul>
        {toDoList.map((item, i) => (
          <li key={i}>
            <p
              style={{
                textDecorationLine: item.status ? "line-through" : "none",
              }}
            >
              {item.task}
            </p>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => changeItemStatus(item.key)}
            ></input>
            <form onSubmit={(event) => deleteItem(event, item.key)}>
              <button>Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayList;
