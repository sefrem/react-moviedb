import React from "react";
import Login from "./Login";
import UserMenu from "./UserMenu";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
          {this.props.user ? <UserMenu /> : <Login />}
        </div>
      </nav>
    );
  }
}
