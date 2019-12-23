import React from "react";
import Header from "./Header/Header";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import { BrowserRouter, Route } from "react-router-dom";
import { updateLogin } from "../redux/auth/auth.actions";
import { connect } from "react-redux";

class App extends React.Component {
  
  componentDidMount() {
    const {session_id} = this.props;
    if(session_id) this.props.updateLogin(session_id);
  }

  render() {
    return (
      <BrowserRouter>
          <Header />
          <Route exact path="/" component={MoviesPage} />
          <Route path="/movie/:id" component={MoviePage} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id
  };
};

const mapDispatchToProps = {
    updateLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
