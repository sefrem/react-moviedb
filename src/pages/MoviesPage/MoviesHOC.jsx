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
import { bindActionCreators } from 'redux';

function MoviesHOC(Component) {
  return class extends React.Component {
    componentDidMount() {
      const {
        filters: { sort_by, primary_release_year, with_genres },
        toggleLoader,
        getMovies,
        onChangePagination,
        pagination: { page }
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
      onChangePagination({ name: "page", value: page });
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
        <div className="container">
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
    filters: state.filters,
    pagination: state.pagination,
    movies: state.movies.movies,
    isLoading: state.loader.general
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangePagination: bindActionCreators(actionCreatorOnChangePagination, dispatch),
    getMovies: bindActionCreators(actionCreatorGetMovies, dispatch),
    toggleLoader: bindActionCreators(actionCreatorToggleLoader, dispatch)
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
