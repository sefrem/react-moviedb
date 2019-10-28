import React from "react";

export default class Pagination extends React.Component {

  handleClick = value => () => this.props.onChangePagination({ name: "page", value: value});
  
  render() {
    const {
      pagination: { page, totalPages }
    } = this.props;
    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={this.handleClick(page-1)}
            name="page"
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-light"
            disabled={page === totalPages}
            onClick={this.handleClick(page+1)}
            name="page"
          >
            Next
          </button>
        </div>
        <p className="text-center">
          Page {page} of {totalPages}
        </p>
      </div>
    );
  }
}
