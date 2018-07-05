import React, { Component } from "react";


class DisplayProperty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var divStyle = {
        "font-size": "14px"
      };
      var divStylee = {
        "font-size": "11px"
      };
    return (
      <div>
        <p style={divStyle}>
          <strong>{this.props.obj.title}</strong>
        </p>
        <p style={divStylee}>
          <strong>Rating: {this.props.obj.avg_rating}</strong>
        </p>
        <p style={divStylee}>
          <strong>{this.props.obj.full_address}</strong>
        </p>
        <p style={divStylee}>
          <strong>{this.props.obj.Category}</strong>
        </p>
      </div>
    );
  }
}

export default DisplayProperty;
