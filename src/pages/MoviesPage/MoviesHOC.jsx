import React from "react";
import CallApi from "../../api/api";
import _ from "lodash";
import Loader from "../../components/UI/Loader";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  actionCreatorOnChangePagination,
  actionCreatorGetMovies,
  actionCreatorToggleLoader
} from "../../actions/actions";

function MoviesHOC(Component) {
  return class extends React.Component {
    componentDidMount() {
      const {
        filters: { sort_by, primary_release_year, with_genres },
        page,
        toggleLoader,
        getMovies,
        onChangePagination,
        pagination,
      } = this.props;
      const queryStringParams = {
        language: "en-EN",
        sort_by: sort_by,
        page: page,
        primary_release_year: primary_release_year
      };
      if (with_genres.length > 0) {
        queryStringParams.with_genres = with_genres.join(",");
      }
      toggleLoader();
      onChangePagination({ name: "page", value: `${pagination.page}`});
      return CallApi.get("/discover/movie", {
        params: queryStringParams
      }).then(data => {
        getMovies(data.results);
        toggleLoader();
      });
    }

    componentDidUpdate(state) {
      const {
        filters,
        filters: { sort_by, primary_release_year, with_genres },
        pagination: { page },
        toggleLoader,
        onChangePagination,
        getMovies
      } = this.props;
      const queryStringParams = {
        language: "en-EN",
        sort_by: sort_by,
        page: page,
        primary_release_year: primary_release_year
      };
      if (with_genres.length > 0) {
        queryStringParams.with_genres = with_genres.join(",");
      }

      if (!_.isEqual(filters, state.filters)) {
        toggleLoader();
        onChangePagination({ name: "page", value: 1 });
        return CallApi.get("/discover/movie", {
          params: queryStringParams
        }).then(data => {
          getMovies(data.results);
          toggleLoader();
          onChangePagination({ name: "totalPages", value: data.total_pages });
        });
      } else if (page !== state.pagination.page) {
        toggleLoader();
        return CallApi.get("/discover/movie", {
          params: queryStringParams
        }).then(data => {
          getMovies(data.results);
          toggleLoader();
        });
      }
    }

    render() {
      const { movies, isLoading } = this.props;
      return (
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <Component {...this.props} movies={movies} />
          )}
        </div>
      );
    }
  };
}

const mapStateToProps = state => {
  return {
    state: state,
    filters: state.filters,
    pagination: state.pagination,
    movies: state.movies,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePagination: ({ name, value }) =>
      dispatch(actionCreatorOnChangePagination(name, value)),
    getMovies: movies => dispatch(actionCreatorGetMovies(movies)),
    toggleLoader: () => dispatch(actionCreatorToggleLoader())
  };
};

const composedHOC = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  MoviesHOC
);

export default composedHOC;
