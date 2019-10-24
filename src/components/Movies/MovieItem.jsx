import React from "react";
import Like from "../Utilities/Like";
import Bookmark from "../Utilities/Bookmark";
import AppContextHOC from "../HOC/AppContextHOC";

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
          <h6 className="card-title">{item.title}</h6>
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
