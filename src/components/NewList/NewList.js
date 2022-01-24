import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import classes from "./NewList.module.css";

const NewList = (props) => {
  const [enteredTaskname, setEnteredTaskname] = useState("");
  const [enteredTaskdate, setEnteredTaskdate] = useState("");
  const [enteredTasktype, setEnteredTasktype] = useState("");
  const [error, setError] = useState();

  const addListHandler = (event) => {
    event.preventDefault();
    if (
      enteredTaskname.trim().length === 0 ||
      enteredTasktype.trim().length === 0 ||
      enteredTaskdate.toString().trim().length === 0
    ) {
      setError({
        title: "InValid! input",
        message: "Please enter valid input",
      });
      console.log("ERROR!!");
      return;
    }
    props.onAddTask(enteredTaskname, enteredTaskdate, enteredTasktype);
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
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
          <div className={classes.buttonStyles}>
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit"> Add Task</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewList;
