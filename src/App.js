import React, { useState } from "react";
import List from "./components/List/List";
import classes from "./App.module.css";
import NewList from "./components/NewList/NewList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const addTaskHandler = (tName, tDate, tType) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, { name: tName, date: tDate, type: tType }];
    });
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing && (
        <button className={classes.button} onClick={startEditingHandler}>
          Add New task
        </button>
      )}
      {isEditing && (
        <NewList onAddTask={addTaskHandler} onCancel={stopEditingHandler} />
      )}
      <List users={taskList}></List>
    </div>
  );
}

export default App;
