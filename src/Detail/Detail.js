
import React, { Component } from "react";
import * as queryString from "query-string";
import axios from "axios";
import DisplayProperty from "../components/displayproperty/displayproperty";

class Detail extends Component {
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
    axios
      .get(
        "http://cls.timesofindia.indiatimes.com/index.php?fn=lData&_id="+this.state.id
      )
      .then(response => {
        this.setState({ data: response.data[0] });
        console.log("detail page");
        console.log(response.data[0]);
      });
  }
  render() {
    return (
      <div>
       <DisplayProperty obj={this.state.data}/>
      </div>
    );
  }
}

export default Detail;
