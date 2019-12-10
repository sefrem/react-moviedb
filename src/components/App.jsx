import React from "react";
import Header from "./Header/Header";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import { BrowserRouter, Route } from "react-router-dom";
import { actionUpdateLogin } from "../actions/actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

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
    session_id: state.sessionInfo.session_id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLogin: bindActionCreators(actionUpdateLogin, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
