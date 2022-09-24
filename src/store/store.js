import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ExpenseReducer from "../reducers/ExpenseReducer";

let store = createStore(ExpenseReducer, applyMiddleware(thunk));

export default store;
