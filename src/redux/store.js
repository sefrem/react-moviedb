import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducerApp from "./rootReducer";
import {cookies} from "../utils/cookies";
import { UPDATE_AUTH, LOGOUT } from "../redux/auth/auth.types";

const cookiesUpdate = store => next => action => {
    if (action.type === UPDATE_AUTH) {
        cookies.set("session_id", action.payload.session_id, {
            path: "/",
            maxAge: 2592000
          });
    };
    if (action.type === LOGOUT) {
        cookies.remove("session_id");
    }
    return next(action)
}

const store = createStore(reducerApp, composeWithDevTools(applyMiddleware(thunk, cookiesUpdate)));

export default store;
