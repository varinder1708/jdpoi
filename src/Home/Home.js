import React, { Component } from "react";
import SearchBar from "../components/SearchBarStaticdata/SearchBar";
import styles from "./home.css";
import Citieslistinput from "../components/citieslistinput/citieslistinput";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      category: ""
    };
  }
  
  searchCategory = event => {
    event.preventDefault();
    window.location =
      "/search?location=" +
      this.state.location +
      "&category=" +
      this.state.category;
  };

  setLocation = loc => {
    this.setState({ location: loc });
  };

  setCategory = cat => {
    this.setState({ category: cat });
  };
  render() {
    return (
      <div className="page">
        <div className="container">
          <form onSubmit={this.searchCategory}>
            <span className="citieslistinputContainer">
              <Citieslistinput val="" onselectvalue={this.setLocation} />
            </span>
            <span className="searchbarContainer">
              <SearchBar val="" onselectvalue={this.setCategory} />
            </span>
            <input type="submit" className="search" value="Search" ></input>
          </form>
        </div>
   
      </div>
    );
  }
}
export default Home;
