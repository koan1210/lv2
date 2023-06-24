import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducers/todoReducer";

const store = createStore(todoReducer);

export default store;
