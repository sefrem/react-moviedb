import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerApp from "./rootReducer";

const store = createStore(reducerApp, applyMiddleware(thunk));

export default store;
