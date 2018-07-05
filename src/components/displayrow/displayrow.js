import React, { Component } from "react";
import styles from "./displayrow.css";
class DisplayRow extends Component {

  constructor(props) {
    super(props);
    console.log(props.val.name);
  }
  render() {
    return (
      <div className="row">
        <div><strong><a href={"/detail?id="+this.props.val._id.$oid}>{this.props.val.title}</a></strong></div>
        {/* <div><strong><a href={"/detail?id=5b3cbe3d37f3fcc759a9a504"}>{this.props.val.title}</a></strong></div> */}
        <div>Rating: {this.props.val.avg_rating}</div>
     {/* <input className="btn"  type="button" value="Best Deal"/> */}
     <div>{this.props.val.Category}</div>
      </div>
    );
  }
}




export default DisplayRow;
