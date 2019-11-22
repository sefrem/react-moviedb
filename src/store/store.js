import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerApp from "../reducers/reducers";

const store = createStore(reducerApp, applyMiddleware(thunk));

export default store;
