import React from "react";

export default class Pagination extends React.Component {
  render() {
    const {
      pagination: { page, totalPages },
      onChangePagination
    } = this.props;
    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={() => {
              onChangePagination({ name: "page", value: page - 1 });
            }}
            name="page"
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-light"
            disabled={page === totalPages}
            onClick={() => {
              onChangePagination({ name: "page", value: page + 1 });
            }}
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
