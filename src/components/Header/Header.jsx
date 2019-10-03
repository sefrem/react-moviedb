import React from "react";
import Login from "./Login";
import User from "./User";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="_blank">
                Home
              </a>
            </li>
          </ul>
          {this.props.user ? (
            <User />
          ) : (
            <Login  />
          )}
        </div>
      </nav>
    );
  }
}
