import React, { Component } from "react";
import DisplayRow from "../displayrow/displayrow";




class DisplayRecords extends Component {
  constructor(props) {
    super(props);
    console.log("--- in displyrecords")
    console.log(props.records)
    // for (var i = 0; i < props.records.length; i++) {
    //   console.log("Found in DisplayRecords " + props.records[i].title);
    // }
  }











  render() {
    return (<div>
      {
        this.props.records.map((item,i) => <DisplayRow key={i} val={item} />)
      } 
  </div>);
  }
}


export default DisplayRecords;
