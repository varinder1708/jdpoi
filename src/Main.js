import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from './Home/Home'
import About from './About'
class Main extends Component {
  render() {
    return (
      <Switch>
        {/* <Route  exact path="/about" component={About} /> */}
        <Route exact  path="/" component={Home} />
        
      </Switch>
    );
  }
}
export default Main;