import React, { Component } from "react";
import SearchBar from "../components/SearchBarStaticdata/SearchBar";
import styles from "./search.css";

import Citieslistinput from "../components/citieslistinput/citieslistinput";
import * as queryString from "query-string";
import axios from "axios";
import DisplayRecords from "../components/displayrecords/DisplayRecords";


class TestComponent extends Component {
  constructor(props) {
    super(props);

    let params_query = queryString.parse(props.location.search);
    //console.log(queryString.parse(props.location.search));
    // this.state={...params_query}
    this.state = { ...params_query, data: [] };
    // this.state = queryString.parse(props.location.search);

    this.fetchdata();
  }
  fetchdata = () => {};
  searchCategory = event => {
    event.preventDefault();
    window.location =
      "/search?location=" +
      this.state.location +
      "&category=" +
      this.state.category;
  };
  componentWillMount() {
    axios
      .get(
        "http://cls.timesofindia.indiatimes.com/index.php?fn=cData&categoryName=" +
          this.state.category
      )
      .then(response => {
        this.setState({ data: response.data });
        console.log("results in Search");
        console.log(response.data);
      });
  }
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
              <Citieslistinput val={this.state.location} onselectvalue={this.setLocation} />
            </span>
            <span className="searchbarContainer">
              <SearchBar val={this.state.category} onselectvalue={this.setCategory} />
            </span>
            <input type="submit" className="search" value="Search" ></input>
          </form>
        </div>
        <div className="resultsContainer">
          <DisplayRecords records={this.state.data} />
        </div>
      </div>
    );
  }
}
export default TestComponent;
