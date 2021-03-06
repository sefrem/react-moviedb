import React from "react";
import { connect } from "react-redux";

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <img
          className="rounded-circle"
          src={`https://secure.gravatar.com/avatar/${
            user.avatar.gravatar.hash
          }.jpg?s=64"`}
          alt="avatar"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.sessionInfo.user,
  }
};

export default connect(
  mapStateToProps,
  )(User);
