import React from "react";
import "../../../node_modules/material-design-icons/iconfont/material-icons.css";
import CallApi from "../../api/api";
import AppContextHOC from "../HOC/AppContextHOC";

class MovieItem extends React.Component {
  state = {
    like: false,
    bookmark: false
  };

  onToggleFavWatch = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      [id]: !prevState[id]
    }));
    if(this.props.session_id) this.onWatchLike(id);
  };

  onWatchLike = id => {
    const { session_id, item } = this.props,
          { like, bookmark } = this.state,
          likeUrl = "/account/{account_id}/favorite",
          watchUrl = "/account/{account_id}/watchlist",
          check = id === "like";
    CallApi.post(`${check ? likeUrl : watchUrl}`, {
      params: {
        session_id: session_id,
        media_type: "movie",
        media_id: item.id,
        ...check && { favorite: `${!like ? true : false}` } || {
                      watchlist: `${!bookmark ? true : false}`
        }
      }
    }).then(data => {
      console.log(data.status_message);
    });
  };

  render() {
    const { item } = this.props;
    const { like, bookmark } = this.state;

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
        <div>
          <i
            className="material-icons"
            id="bookmark"
            onClick={this.onToggleFavWatch}
          >
            {bookmark ? "bookmark" : "bookmark_border"}
          </i>
          <i
            className="material-icons"
            id="like"
            onClick={this.onToggleFavWatch}
          >
            {like ? "star" : "star_border"}
          </i>
        </div>
      </div>
    );
  }
}

export default AppContextHOC(MovieItem);
