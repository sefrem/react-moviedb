import React from "react";
import Filters from "./Filters/Filters";
import MoviesContainer from "./Movies/MoviesContainer";
import Header from "./Header/Header";
import Cookies from "universal-cookie";
import { API_URL, API_KEY_3, fetchApi } from "../api/api";

const cookies = new Cookies();
export const AppContext = React.createContext();

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      session_id: null,
      user: null,
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: "",
        with_genres: []
      },
      pagination: {
        page: 1,
        totalPages: ""
      }
    };
  }

  updateSessionId = session_id => {
    cookies.set("session_id", session_id, {
      path: "/",
      maxAge: 2592000
    });
    this.setState({
      session_id
    });
  };

  updateUser = user => {
    this.setState({
      user
    });
  };

  onChangeFilter = e => {
    const newFilter = {
      ...this.state.filters,
      [e.target.name]: e.target.value
    };
    this.setState({
      filters: newFilter
    });
  };

  onChangePagination = ({ name, value }) => {
    this.setState(prevState => ({
      pagination: {
        ...prevState.pagination,
        [name]: value
      }
    }));
  };

  resetFilters = () => {
    this.setState({
      filters: {
        sort_by: "popularity.desc",
        primary_release_year: "",
        with_genres: []
      },
      pagination: {
        page: 1,
        totalPages: ""
      }
    });
  };

  componentDidMount() {
    const session_id = cookies.get("session_id");
    if (session_id) {
      return fetchApi(
        `${API_URL}/account?api_key=${API_KEY_3}&session_id=${session_id}`
      ).then(user => {
        this.updateUser(user);
      });
    }
  }

  render() {
    const { filters, pagination, user } = this.state;

    return (
      <AppContext.Provider
        value={{
          user: user,
          updateUser: this.updateUser,
          updateSessionId: this.updateSessionId
        }}
      >
        <div>
          <Header user={user} />
          <div className="container">
            <div className="row mt-4">
              <div className="col-4">
                <div className="card" style={{ width: "100%" }}>
                  <div className="card-body">
                    <h3>Фильтры:</h3>
                    <Filters
                      filters={filters}
                      onChangeFilter={this.onChangeFilter}
                      onChangePagination={this.onChangePagination}
                      pagination={pagination}
                      resetFilters={this.resetFilters}
                    />
                  </div>
                </div>
              </div>
              <div className="col-8">
                <MoviesContainer
                  filters={filters}
                  pagination={pagination}
                  onChangePagination={this.onChangePagination}
                />
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}
