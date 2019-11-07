import React from "react";
import CallApi from "../../api/api";
import _ from "lodash";
import Loader from "../UI/Loader";

export default Component =>
  class MoviesHOC extends React.Component {
    constructor() {
      super();

      this.state = {
        isLoading: true,
        movies: []
      };
    }

    getMovies = (filters, page) => {
      const { sort_by, primary_release_year, with_genres } = filters;
      const queryStringParams = {
        language: "en-EN",
        sort_by: sort_by,
        page: page,
        primary_release_year: primary_release_year
      };
      if (with_genres.length > 0) {
        queryStringParams.with_genres = with_genres.join(",");
      }
      this.setState({
        isLoading: true
      });
      CallApi.get("/discover/movie", {
        params: queryStringParams
      }).then(data => {
        this.setState({
          movies: data.results,
          isLoading: false
        });
        this.props.onChangePagination({
          name: "totalPages",
          value: data.total_pages
        });
      });
    };

    componentDidMount() {
      const { filters, page } = this.props;
      this.getMovies(filters, page);
    }

    componentDidUpdate(prevProps) {
      const {
        filters,
        pagination: { page },
        onChangePagination
      } = this.props;

      if (!_.isEqual(filters, prevProps.filters)) {
        onChangePagination({ name: "page", value: 1 });
        this.getMovies(filters, 1);
      } else if (page !== prevProps.pagination.page) {
        this.getMovies(filters, page);
      }
    }

    render() {
      const { movies, isLoading } = this.state;

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
