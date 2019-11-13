import React from "react";
import AppContextHOC from "../HOC/AppContextHOC";

class ResetFilters extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={this.props.resetFilters}
          style={{ width: "180px" }}
        >
          Reset All Filters
        </button>
      </div>
    );
  }
}

export default AppContextHOC(ResetFilters);
