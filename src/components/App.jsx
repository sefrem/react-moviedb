import React from "react";
import Filters from "./Filters/Filters";
import MoviesList from "./Movies/MoviesList";
import Header from "./Header/Header";
import Cookies from "universal-cookie";
import CallApi from "../api/api";

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
      }, 
      showModal: false
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

  onLogout = () => {
    cookies.remove("session_id");
    this.setState({
      session_id: null,
      user: null
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
        page: 1
      }
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  componentDidMount() {
    const session_id = cookies.get("session_id");
    if (session_id) {
      return CallApi.get("/account", {
        params: {
          session_id
        }
      }).then(user => {
        this.updateUser(user);
        this.updateSessionId(session_id);
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
          updateSessionId: this.updateSessionId,
          onLogout: this.onLogout,
          session_id: this.state.session_id,
          showModal: this.state.showModal,
          toggleModal: this.toggleModal
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
                <MoviesList
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
