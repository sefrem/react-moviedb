import React from "react";
import { withRouter } from "react-router";
import Like from "../../components/UI/Like";
import Bookmark from "../../components/UI/Bookmark";
import MovieImage from "../../components/UI/MovieImage";

class MovieHeader extends React.Component {
  render() {
    const {
      backdrop_path,
      original_title,
      overview,
      release_date,
      vote_average
    } = this.props.movie;
    const release_year = `${release_date}`.split("-")[0];
    return (
      <div className="row mt-4">
        <div className="col-4">
          <MovieImage path={backdrop_path} />
        </div>
        <div className="col-8">
          <h5 className="title mb-4">
            {original_title} ({release_year})
          </h5>
          <Like movie={this.props.movie} />
          <Bookmark movie={this.props.movie} />
          <h6 className="">Rating {vote_average}</h6>
          <p className="mb-4">{overview}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieHeader);
