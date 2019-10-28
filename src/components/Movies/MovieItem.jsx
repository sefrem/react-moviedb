import React from "react";
import Like from "../UI Components/Like";
import Bookmark from "../UI Components/Bookmark";
import AppContextHOC from "../HOC/AppContextHOC";
import { Link } from "react-router-dom";

class MovieItem extends React.Component {

  render() {
    const { item } = this.props;

    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top card-img--height"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <Link className="card-title" to={`/movie/${item.id}`}>{item.title}</Link>
          <div className="card-text">Рейтинг: {item.vote_average}</div>
        </div>
        <div  className="d-flex justify-content-between">
          <Like 
            item={item}
          />
          <Bookmark
           item={item}
          />
        </div>
      </div>
    );
  }
}

export default AppContextHOC(MovieItem);
