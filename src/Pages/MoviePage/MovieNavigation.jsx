import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Nav, NavItem } from "reactstrap";

class MovieNavigation extends React.Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="mt-4">
        <Nav tabs>
          <NavItem>
            <NavLink to={`/movie/${id}/details`} className="nav-link">
              Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/movie/${id}/videos`} className="nav-link">
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/movie/${id}/credits`} className="nav-link">
              Credits
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default withRouter(MovieNavigation);
