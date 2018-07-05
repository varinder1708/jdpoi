import React, { Component } from "react";
import DisplayRow from "../displayrow/displayrow";

class DisplayRecords extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.records.map((item, i) => <DisplayRow key={i} val={item} />)}
      </div>
    );
  }
}

export default DisplayRecords;
