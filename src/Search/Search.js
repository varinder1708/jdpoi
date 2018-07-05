import React, { Component } from "react";
import SearchBar from "../components/SearchBarStaticdata/SearchBar";
import styles from "./search.css";
import Citieslistinput from "../components/citieslistinput/citieslistinput";
import * as queryString from "query-string";
import axios from "axios";
import DisplayRecords from "../components/displayrecords/DisplayRecords";

class Search extends Component {
  constructor(props) {
    super(props);

    this.loadstatefromparams();
  }
  loadstatefromparams = () => {
    let params_query;
    if (this.props.location.search == "") {
      params_query = { category: "", location: "" };
    } else {
      params_query = queryString.parse(this.props.location.search);
    }
    this.state = { ...params_query, data: [] };
  };
  componentWillMount() {
    if (this.state.category != "") {
      axios
        .get(
          "http://cls.timesofindia.indiatimes.com/index.php?fn=cData&categoryName=" +
            this.state.category
        )
        .then(response => {
          this.setState({ data: response.data });
        });
    }
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
              <Citieslistinput
                val={this.state.location}
                onselectvalue={this.setLocation}
              />
            </span>
            <span className="searchbarContainer">
              <SearchBar
                onselectvalue={this.setCategory}
                val={this.state.category}
              />
            </span>
            <input type="submit" className="search" val="Search" />
          </form>
        </div>

        <div className="resultsContainer">
          <DisplayRecords records={this.state.data} />
        </div>
      </div>
    );
  }
}
export default Search;
