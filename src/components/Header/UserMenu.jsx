import React from "react";
import {connect} from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import CallApi from "../../api/api";
import { onLogOut } from "../../redux/auth/auth.actions"

class UserMenu extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  handleLogout = () => {
    CallApi.logout("/authentication/session", {
      body: {
        session_id: this.props.session_id
      }
    }).then(this.props.onLogOut());
  };

  render() {
    const { user } = this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
        <DropdownToggle
          tag="div"
          onClick={this.toggleDropdown}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
          <img
            className="rounded-circle"
            src={`https://secure.gravatar.com/avatar/${
              user.avatar.gravatar.hash
            }.jpg?s=64"`}
            alt="avatar"
          />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.handleLogout}>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    session_id: state.auth.session_id
  }
};

const mapDispatchToProps = {
    onLogOut
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(UserMenu);
