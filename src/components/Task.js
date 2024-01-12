import React, { useState } from "react";
import { Button, ButtonGroup, Form } from "semantic-ui-react";
import { editTask, setdone, deletetask } from "../redux/actions";
import { useDispatch } from "react-redux";
function Task({ description, done, id }) {
  const dispatch = useDispatch();
  const [showEdite, setshowEdite] = useState(false);
  const [newTaskData, setNewTaskData] = useState("");
  console.log(id);
  return (
    <div>
      {showEdite ? (
        <Form>
          <Form.Input
            defaultValue={description}
            description="description"
            type="text"
            onChange={(e) => {
              setNewTaskData(e.target.value);
            }}
          />
          <Button color="blue"
            onClick={() => {
              dispatch(editTask({ id, newTaskData }));
              setshowEdite(false);
            }}
          >
            Save
          </Button>
        </Form>
      ) : (
        <div className="task-data">
          <h3> {description} </h3>
          <Button
            color="grey"
            onClick={() => {
              setshowEdite(true);
            }}
          >
            Edit
          </Button>
          <Button
            color="green"
            onClick={() => {
              dispatch(setdone({ id }));
            }}
            notdone
          >
            {" "}
            Done
          </Button>
          <Button color="red" onClick={() => dispatch(deletetask(id))}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default Task;
