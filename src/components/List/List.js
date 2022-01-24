import React from "react";
import Card from "../UI/Card";
import NewList from "../NewList/NewList";
import classes from "./List.module.css";
import { FaTrash } from "react-icons/fa";

const List = (props) => {
  return (
    <div>
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => (
            <li>
              {user.name} {user.date} {user.type}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default List;
