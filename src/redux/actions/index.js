export const AddTask = (payload) => {
  return {
    type: "ADD-Task",
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: "Edit-Task",
    payload,
  };
};
export const setdone = (payload) => {
  return {
    type: "Set-done",
    payload,
  };
};
export const deletetask = (payload) => {
  return {
    type: "Delete-task",
    payload,
  };
};