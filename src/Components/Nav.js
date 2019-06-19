import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// components
import SearchForm from "./SearchForm";

class Nav extends Component {
  // Function passed down to the search form to set query string on submit
  setSearch = query => {
    window.location.assign(`/search/${query}`);
  };

  render() {
    return (
      <div>
        <SearchForm setSearch={this.setSearch} />
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/search/whitewaterkayaking">
                Whitewater Kayaking
              </NavLink>
            </li>
            <li>
              <NavLink to="/search/flyfishing">Fly Fishing</NavLink>
            </li>
            <li>
              <NavLink to="/search/scubadiving">Scuba Diving</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
