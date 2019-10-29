import React from "react";
import {  Table } from 'reactstrap';


export default class MovieDetails extends React.Component {

    formatNumber = number => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render() {
        const { movie } = this.props;
        console.log(movie)
        return (
              <Table className="mt-4">
                  <tbody>
                <tr>
                    <th>Status</th>
                    <td>{movie.status}</td>
                </tr>
                <tr>
                    <th>Release date</th>
                    <td>{movie.release_date}</td>
                </tr>
                <tr>
                    <th>Slogan</th>
                    <td>{movie.tagline}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{movie.production_countries && movie.production_countries.map((item, index) => (
                        <span key={index}>{item.name} </span>
                    ))}</td>
                </tr>
                <tr>
                    <th>Budget</th>
                    <td>{movie.budget && this.formatNumber(movie.budget)}</td>
                </tr>
                <tr>
                    <th>Revenue</th>
                    <td>{movie.revenue && this.formatNumber(movie.revenue)}</td>
                </tr>
                <tr>
                    <th>Genres</th>
                    <td className="d-flex flex-column align-items-start">{movie.genres && movie.genres.map((item, index) => (
                        <p className="badge badge-warning mb-2" key={index}>{item.name} </p>
                        ))} 
                    </td>
                </tr>
                <tr>
                    <th>Homepage</th>
                    <td>{movie.homepage}</td>
                </tr>
                <tr>
                    <th>Runtime</th>
                    <td>{movie.runtime} minutes</td>
                </tr>
                <tr>
                    <th>Company</th>
                    <td className="d-flex flex-column align-items-start">{movie.production_companies && movie.production_companies.map((item, index) => (
                        <p className="badge badge-info mb-2" key={index}>{item.name} </p>
                    ))}</td>
                </tr>
                </tbody>
              </Table>
        
        )
    }
}