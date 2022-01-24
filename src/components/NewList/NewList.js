import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./NewList.module.css";

const NewList = (props) => {
  const [enteredTaskname, setEnteredTaskname] = useState("");
  const [enteredTaskdate, setEnteredTaskdate] = useState("");
  const [enteredTasktype, setEnteredTasktype] = useState("");

  const addListHandler = (event) => {
    event.preventDefault();
    console.log(enteredTaskname, enteredTaskdate, enteredTasktype);
    setEnteredTaskname("");
    setEnteredTasktype("");
    setEnteredTaskdate("");
  };

  const tasknameChangeHandler = (event) => {
    setEnteredTaskname(event.target.value);
  };
  const taskdateChangeHandler = (event) => {
    setEnteredTaskdate(event.target.value);
  };
  const tasktypeChangeHandler = (event) => {
    setEnteredTasktype(event.target.value);
  };

  return (
    <div>
      <Card className={classes.form}>
        <form onSubmit={addListHandler}>
          <label htmlFor="taskname">Enter Task Name</label>
          <input
            id="taskname"
            type="text"
            value={enteredTaskname}
            onChange={tasknameChangeHandler}
            placeholder="Please enter the task name"
          ></input>
          <label htmlFor="taskdate">End date </label>
          <input
            id="taskdate"
            type="date"
            value={enteredTaskdate}
            onChange={taskdateChangeHandler}
          ></input>
          <label htmlFor="tasktype">Type</label>
          <input
            id="tasktype"
            type="text"
            value={enteredTasktype}
            onChange={tasktypeChangeHandler}
            placeholder="Personal or Project"
          ></input>
          <button type="submit"> Add Task</button>
        </form>
      </Card>
    </div>
  );
};

export default NewList;
