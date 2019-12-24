import React from "react";
import _ from "lodash";
import Loader from "../../components/UI/Loader";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchMovies } from "../../redux/movies/movies.actions";
import {  onChangePagination } from "../../redux/filters/filters.actions";


function MoviesHOC(Component) {
  return class extends React.Component {
    componentDidMount() {
      const {
        sorting : { sort_by, primary_release_year, with_genres },
        fetchMovies,
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
      fetchMovies(queryStringParams)
    }

    componentDidUpdate(state) {
      const {
        sorting,
        sorting: { sort_by, primary_release_year, with_genres },
        pagination: { page },
        onChangePagination,
        fetchMovies
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
      if (!_.isEqual(sorting, state.sorting)) {
        onChangePagination({ name: "page", value: 1 });
        return fetchMovies(queryStringParams);
      } else if (page !== state.pagination.page) {
        return fetchMovies(queryStringParams)
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
    sorting: state.filters.sorting,
    pagination: state.filters.pagination,
    movies: state.movies.movies,
    isLoading: state.loader.general
  };
};

const mapDispatchToProps = {
    onChangePagination,
    fetchMovies
};

const composedHOC = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  MoviesHOC
);

export default composedHOC;
