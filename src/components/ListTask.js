import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useSelector } from "react-redux";
import Task from "./Task";
import { useDispatch } from "react-redux";
import { AddTask, setdone } from "../redux/actions";
function ListTask() {
  const dispatch = useDispatch();
  const Tasks = useSelector((store) => store.Tasks);
  const [newTask, setNewTask] = useState({});
  const [done, setDone] = useState();

  console.log(Tasks);
  return (
    <div className="list">
      <h2 style={{ color: "black" }}> List Task Today </h2>
      <Form>
        <Form.Group className="Add task">
          <Form.Input
            description="decription"
            type="text"
            placeholder="Add task"
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          <Button 
            color="black"
            onClick={() => {
              dispatch(AddTask(newTask));
            }}
          >
            Add
          </Button>
        </Form.Group>
        <Button color="blue" onClick={() => setDone()}>
          All
        </Button>

        <Button color="red" onClick={() => setDone(false)}>
          {" "}
          Not done
        </Button>
        <Button color="green" onClick={() => setDone(true)}>
          {" "}
          done
        </Button>
      </Form>
      <div className="Task-list">
        {Tasks.filter((Tasks) =>
          done == undefined ? Tasks : Tasks.done == done
        ).map((task) =>
          task.done ? (
            <div style={{ backgroundColor: "#B87333" }}>
              <Task {...task} />
            </div>
          ) : (
            <Task {...task} />
          )
        )}
      </div>
    </div>
  );
}

export default ListTask;
