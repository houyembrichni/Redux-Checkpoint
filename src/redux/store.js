import { createStore } from "redux";
import AddTask from "./reducers/AddTask";

const store =createStore(
    AddTask ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.
    __REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
