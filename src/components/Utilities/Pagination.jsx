import React from "react";

export default class Pagination extends React.Component {
  render() {
    const { onChangePage, page, totalPages } = this.props;
    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light"
            disabled={page === 1}
            onClick={() => {
              onChangePage(page - 1);
            }}
          >
            Left
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={onChangePage.bind(null, page + 1)}
          >
            Right
          </button>
        </div>
        <p className="text-center">
          Page {page} of {totalPages}{" "}
        </p>
      </div>
    );
  }
}
