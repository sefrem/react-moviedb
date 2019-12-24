import React from "react";
import CallApi from "../../api/api";
import _ from "lodash";
import Loader from "../../components/UI/Loader";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchMovies } from "../../redux/movies/movies.actions";
import { toggleLoader } from "../../redux/loader/loader.actions";
import {  onChangePagination } from "../../redux/pagination/pagination.actions";


function MoviesHOC(Component) {
  return class extends React.Component {
    componentDidMount() {
      const {
        filters: { sort_by, primary_release_year, with_genres },
        toggleLoader,
        fetchMovies,
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
      onChangePagination({ name: "page", value: page });
      fetchMovies(queryStringParams)
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

const mapDispatchToProps = {
    onChangePagination,
    fetchMovies, 
    toggleLoader
};

const composedHOC = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  MoviesHOC
);

export default composedHOC;
