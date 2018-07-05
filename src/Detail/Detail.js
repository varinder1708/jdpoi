import React, { Component } from "react";
import * as queryString from "query-string";
import axios from "axios";
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
    var divStyle = {
      "font-size": "24px"
    };
    var divStylee = {
      "font-size": "20px"
    };
    return (
      <div>
        <p style={divStyle}>
          <strong>{this.state.data.title}</strong>
        </p>
        <p style={divStylee}>
          <strong>Rating: {this.state.data.avg_rating}</strong>
        </p>
        <p style={divStylee}>
          <strong>{this.state.data.full_address}</strong>
        </p>
        <p style={divStylee}>
          <strong>{this.state.data.Category}</strong>
        </p>
      </div>
    );
  }
}

export default Detail;
