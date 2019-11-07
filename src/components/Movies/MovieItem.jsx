import React from "react";
import Like from "../UI/Like";
import Bookmark from "../UI/Bookmark";
import AppContextHOC from "../HOC/AppContextHOC";
import { Link } from "react-router-dom";
import MovieImage from "../UI/MovieImage";

class MovieItem extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="card" style={{ width: "100%" }}>
        <MovieImage path={movie.backdrop_path || movie.poster_path} />
        <div className="card-body">
          <Link className="card-title" to={`/movie/${movie.id}/details`}>
            {movie.title}
          </Link>
          <div className="card-text">Rating: {movie.vote_average}</div>
          <div className="mt-2">
            <Like movie={movie} />
            <Bookmark movie={movie} />
          </div>
        </div>
      </div>
    );
  }
}

export default AppContextHOC(MovieItem);
