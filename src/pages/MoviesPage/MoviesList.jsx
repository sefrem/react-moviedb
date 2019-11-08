import React from "react";
import MovieItem from "./MovieItem";
import PropTypes from "prop-types";
import MoviesHOC from "./MoviesHOC";

const MoviesList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map(movie => {
        return (
          <div key={movie.id} className="col-6 mb-4">
            <MovieItem movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
};

MoviesList.defaultProps = {
  movies: []
};
export default MoviesHOC(MoviesList);
