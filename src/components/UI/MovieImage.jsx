import React from "react";

export default class MovieImage extends React.Component {
  render() {
    const { path } = this.props;
    return (
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${path}`}
        alt=""
      />
    );
  }
}
