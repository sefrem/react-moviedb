import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  user: null,
  session_id: cookies.get("session_id")
};

const sessionInfo = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_AUTH":
      return updateAuth(state, action);
    case "LOGOUT":
      return logout(state);
    default:
      return state;
  }
};

const updateAuth = (state, action) => {
  console.log(action);
  cookies.set("session_id", action.payload.session_id, {
    path: "/",
    maxAge: 2592000
  });
  return {
    ...state,
    user: action.payload.user,
    session_id: action.payload.session_id
  };
};

const logout = state => {
  cookies.remove("session_id");
  return {
    ...state,
    user: null,
    session_id: null
  };
};

export default sessionInfo;
