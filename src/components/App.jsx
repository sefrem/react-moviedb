import React from "react";
import Header from "./Header/Header";
import Cookies from "universal-cookie";
import CallApi from "../api/api";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import { BrowserRouter, Route } from "react-router-dom";

const cookies = new Cookies();
export const AppContext = React.createContext();

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      session_id: null,
      user: null,
      showModal: false
    };
  }

  updateSessionId = session_id => {
    cookies.set("session_id", session_id, {
      path: "/",
      maxAge: 2592000
    });
    this.setState({
      session_id
    });
  };

  updateUser = user => {
    this.setState({
      user
    });
  };

  onLogout = () => {
    cookies.remove("session_id");
    this.setState({
      session_id: null,
      user: null
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  componentDidMount() {
    const session_id = cookies.get("session_id");
    if (session_id) {
      return CallApi.get("/account", {
        params: {
          session_id
        }
      }).then(user => {
        this.updateUser(user);
        this.updateSessionId(session_id);
      });
    }
  }

  render() {
    const { user, session_id, showModal } = this.state;

    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user: user,
            updateUser: this.updateUser,
            updateSessionId: this.updateSessionId,
            onLogout: this.onLogout,
            session_id: session_id,
            showModal: showModal,
            toggleModal: this.toggleModal
          }}
        >
          <Header user={user} />
          <Route exact path="/" component={MoviesPage} />
          <Route path="/movie/:id" component={MoviePage} />
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}
