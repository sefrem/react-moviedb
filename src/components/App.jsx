import React from "react";
import Header from "./Header/Header";
import CallApi from "../api/api";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import { BrowserRouter, Route } from "react-router-dom";
import {
  actionCreatorUpdateAuth,
  actionCreatorLogOut,
  actionCreatorToggleModal,
  actionCreatorOnChangeFilter,
  actionCreatorOnChangePagination,
  actionCreatorResetFilters,
  actionCreatorToggleLoader,
  actionCreatorToggleLoaderVideos,
  actionCreatorToggleLoaderCredits
} from "../actions/actions";
import { connect } from "react-redux";

export const AppContext = React.createContext();

class App extends React.Component {
  componentDidMount() {
    const { session_id } = this.props;
    if (session_id) {
      return CallApi.get("/account", {
        params: {
          session_id
        }
      }).then(user => {
        this.props.updateAuth(user, session_id);
      });
    }
  }

  render() {
    const {
      user,
      session_id,
      updateAuth,
      onLogOut,
      showModal,
      toggleModal,
      onChangeFilter,
      filters,
      pagination,
      onChangePagination,
      resetFilters,
      toggleLoader,
      isLoading,
      isLoadingVideos,
      toggleLoaderVideos,
      isLoadingCredits,
      toggleLoaderCredits
    } = this.props;

    return (
      <BrowserRouter>
        <AppContext.Provider
          value={{
            user,
            updateAuth,
            onLogOut,
            session_id,
            toggleModal,
            showModal,
            onChangeFilter,
            filters,
            pagination,
            onChangePagination,
            resetFilters,
            toggleLoader,
            isLoading,
            isLoadingVideos,
            toggleLoaderVideos,
            isLoadingCredits,
            toggleLoaderCredits
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

const mapStateToProps = state => {
  return {
    user: state.user,
    session_id: state.session_id,
    showModal: state.showModal,
    filters: state.filters,
    pagination: state.pagination,
    isLoading: state.loader.general,
    isLoadingVideos: state.loader.videos,
    isLoadingCredits: state.loader.credits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAuth: (user, session_id) =>
      dispatch(actionCreatorUpdateAuth({ user, session_id })),
    onLogOut: () => dispatch(actionCreatorLogOut()),
    toggleModal: () => dispatch(actionCreatorToggleModal()),
    onChangeFilter: e => dispatch(actionCreatorOnChangeFilter(e)),
    onChangePagination: ({ name, value }) =>
      dispatch(actionCreatorOnChangePagination(name, value)),
    resetFilters: () => dispatch(actionCreatorResetFilters()),
    toggleLoader: () => dispatch(actionCreatorToggleLoader()),
    toggleLoaderVideos: () => dispatch(actionCreatorToggleLoaderVideos()),
    toggleLoaderCredits: () => dispatch(actionCreatorToggleLoaderCredits())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
