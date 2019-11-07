import React from "react";
import { Table } from "reactstrap";
import _ from "lodash";

export default class MovieDetails extends React.Component {
  formatNumber = number => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  renderCountries = countries => {
    return countries.map((item, index) => (
      <span key={index}>{item.name} </span>
    ));
  };

  renderGenres = genres => {
    return genres.map((item, index) => (
      <p className="badge badge-warning mb-2" key={index}>
        {item.name}
      </p>
    ));
  };

  renderCompanies = companies => {
    return companies.map((item, index) => (
      <p className="badge badge-info mb-2" key={index}>
        {item.name}{" "}
      </p>
    ));
  };

  render() {
    const {
      status,
      release_date,
      tagline,
      production_countries,
      budget,
      revenue,
      genres,
      homepage,
      runtime,
      production_companies
    } = this.props.movie;

    const details = [
      { title: "Status", data: status },
      { title: "Release Date", data: release_date },
      { title: "Slogan", data: tagline },
      { title: "Country", data: production_countries },
      { title: "Budget", data: budget },
      { title: "Revenue", data: revenue },
      { title: "Genres", data: genres },
      { title: "Homepage", data: homepage },
      { title: "Runtime", data: runtime },
      { title: "Company", data: production_companies }
    ];

    return (
      <Table className="mt-4">
        <tbody>
          {details
            .filter(item => {
              console.log(typeof item.data);
              if (typeof item.data === "object") {
                return !_.isEmpty(item.data);
              }
              return item.data;
            })
            .map((item, index) => {
              if (item.title === "Budget" || item.title === "Revenue") {
                return (
                  <tr key={index}>
                    <th>{item.title}</th>
                    <td>{this.formatNumber(item.data)}</td>
                  </tr>
                );
              }
              if (item.title === "Country") {
                return (
                  <tr key={index}>
                    <th>{item.title}</th>
                    <td>{this.renderCountries(item.data)}</td>
                  </tr>
                );
              }
              if (item.title === "Genres") {
                return (
                  <tr key={index}>
                    <th>{item.title}</th>
                    <td className="d-flex flex-column align-items-start">
                      {this.renderGenres(item.data)}
                    </td>
                  </tr>
                );
              }
              if (item.title === "Runtime") {
                return (
                  <tr key={index}>
                    <th>{item.title}</th>
                    <td>{item.data} minutes</td>
                  </tr>
                );
              }
              if (item.title === "Company") {
                return (
                  <tr key={index}>
                    <th>{item.title}</th>
                    <td className="d-flex flex-column align-items-start">
                      {this.renderCompanies(item.data)}
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={index}>
                  <th>{item.title}</th>
                  <td>{item.data}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    );
  }
}
