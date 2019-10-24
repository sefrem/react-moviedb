import React from "react";

export default class ResetFilters extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.props.resetFilters}
        >
          Reset
        </button>
      </div>
    );
  }
}
