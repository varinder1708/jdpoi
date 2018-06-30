import React, { Component } from "react";
import SearchBar from "../SearchBarStaticdata/SearchBar";
import styles from './home.css';
import Citieslistinput from "../citieslistinput/citieslistinput";
class Home extends Component {
  render() {
    return (
      <div className="container">
        <span className="citieslistinputContainer">
          <Citieslistinput />
        </span>
        <span className="searchbarContainer">
          <SearchBar />
        </span>
      <input type="button" className="search" value="Search"/>
      </div>
    );
  }
}
export default Home;
