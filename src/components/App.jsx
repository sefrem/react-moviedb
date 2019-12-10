import React from "react";
import Header from "./Header/Header";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import { BrowserRouter, Route } from "react-router-dom";
import { actionUpdateLogin } from "../actions/actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.updateLogin();
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLogin: () => dispatch(actionUpdateLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
