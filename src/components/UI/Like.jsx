import React from "react";
import CallApi from "../../api/api";
import "../../../node_modules/material-design-icons/iconfont/material-icons.css";
import { connect } from "react-redux";
import { toggleModal } from "../../redux/auth/auth.actions";

class Like extends React.Component {
  state = {
    like: false
  };

  componentDidMount() {
    const { movie, favoriteMovies } = this.props;
    // console.log("movie", movie)
    // console.log("favorite", favoriteMovies)
    favoriteMovies.forEach(item => {
       if(item.id === movie.id) {
        this.setState({
          like: true
        })
      }
    })
  }

  onToggleLike = () => {
    if (!this.props.session_id) {
      this.props.toggleModal();
    } else {
      this.setState(
        prevState => ({
          like: !prevState.like
        }),
        () => this.onLike(this.state.like)
      );
    }
  };

  onLike = likeState => {
    const { session_id, movie } = this.props;
    CallApi.post("/account/{account_id}/favorite", {
      params: {
        session_id: session_id,
        media_type: "movie",
        media_id: movie.id,
        favorite: likeState
      }
    }).then(data => {
      console.log(data.status_message);
    });
  };

  render() {
    const { like } = this.state;
    return (
      <i className="material-icons" onClick={this.onToggleLike}>
        {like ? "star" : "star_border"}
      </i>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.auth.session_id,
    favoriteMovies: state.movies.favoriteMovies
  }
};

const mapDispatchToProps = {
    toggleModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
