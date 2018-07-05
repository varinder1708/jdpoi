import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import Search from './Search/Search';
import Detail from './Detail/Detail';
import Testcomponent from './Search/testcomponent';

class Main extends Component {
  render() {
    return (
      <Switch>
        {/* <Route  exact path="/about" component={About} /> */}
        <Route exact  path="/search" component={Search} />
        <Route exact  path="/" component={Home} />
        <Route exact  path="/detail" component={Detail} />
        <Route exact  path="/test" component={Testcomponent} />
        
        
      </Switch>
    );
  }
}
export default Main;