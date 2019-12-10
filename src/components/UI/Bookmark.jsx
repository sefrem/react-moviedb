import React from "react";
import CallApi from "../../api/api";
import { connect } from "react-redux";
import { actionCreatorToggleModal } from "../../actions/actions";

class Bookmark extends React.Component {
  state = {
    bookmark: false
  };

  onToggleBookmark = () => {
    if (!this.props.session_id) {
      this.props.toggleModal();
    } else {
      this.setState(
        prevState => ({
          bookmark: !prevState.bookmark
        }),
        () => this.onBookmark(this.state.bookmark)
      );
    }
  };

  onBookmark = bookmarkState => {
    const { session_id, movie } = this.props;
    CallApi.post("/account/{account_id}/favorite", {
      params: {
        session_id: session_id,
        media_type: "movie",
        media_id: movie.id,
        favorite: bookmarkState
      }
    }).then(data => {
      console.log(data.status_message);
    });
  };

  render() {
    const { bookmark } = this.state;
    return (
      <i className="material-icons" onClick={this.onToggleBookmark}>
        {bookmark ? "bookmark" : "bookmark_border"}
      </i>
    );
  }
}

const mapStateToProps = state => {
  return {
    session_id: state.sessionInfo.session_id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(actionCreatorToggleModal())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookmark);
