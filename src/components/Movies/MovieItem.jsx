import React from "react";
import "../../../node_modules/material-design-icons/iconfont/material-icons.css";
import CallApi from "../../api/api";
import AppContextHOC from "../HOC/AppContextHOC"

class MovieItem extends React.Component {
  state = {
    like: false,
    bookmark: false
  }

  onToggleFavWatch = e => {
    const id = e.target.id;
    this.setState(prevState => ({
     [id]: !prevState[id]
    }))
  }

  onLike = (id, session_id) => {
    CallApi.post("/account/{account_id}/favorite", {
      params: {
        session_id: session_id,
        media_type: "movie",
        media_id: id,
        favorite: true
      }
    }).then(data => {
      console.log(data);
    })
  }
    
  render() {
    const { item, session_id } = this.props;
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
        <i className="material-icons" id="bookmark" onClick={this.onToggleFavWatch}>
          { bookmark ? "bookmark" : "bookmark_border"}
          </i>
          <i className="material-icons" id="like" onClick={() => this.onLike(item.id, session_id)}>
          { like ? "star" : "star_border"}
          </i></div>
      </div>
    );
  }
}

export default AppContextHOC(MovieItem);