import { v4 as uuidv4 } from "uuid";
import Task from "../../components/Task";
const intitalState = {
  Tasks: [

  ]
};

const AddTask = (state = intitalState, action) => {
   
console.log(action);
  switch (action.type) {
    case "ADD-Task":
      return {
        ...state,
        Tasks: [
          ...state.Tasks,
          { description: action.payload, done: false, id: uuidv4() },
        ],
      };
    case "Edit-Task":
      return {
        ...state,
        Tasks: state.Tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.newTaskData }
            : task
        ),
      };
    case "Delete-task":
      return {
        ...state,
        Tasks: state.Tasks.filter((task) =>
          task.id !== action.payload ? task : false
        ),
      };
    case "Set-done":
      return {
        ...state,
        Tasks: state.Tasks.map((task) =>
          task.id == action.payload.id ? { ...task, done: true } : task
        ),
      };
    default:
      return state;
  }
};
export default AddTask;
