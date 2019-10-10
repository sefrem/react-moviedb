import React from "react";

import { Star, Bookmark } from '@material-ui/icons';



export default class MovieItem extends React.Component {
  show = e => {
    console.log(e.target)
  }
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
        <Star onClick={this.show}/>
        <Bookmark onClick={this.show}/>
        
        
      </div>
    );
  }
}
