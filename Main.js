import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Football from "./Football";
import Snooker from "./Snooker";
import Tennis from "./Tennis";



 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Welcome to Sports Poll Center</h1>
          <ul className="header">
            <li><NavLink exact to="/">Football</NavLink></li>
            <li><NavLink to="/snooker">Snooker</NavLink></li>
            <li><NavLink to="/tennis">Tennis</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Football}/>
            <Route path="/snooker" component={Snooker}/>
            <Route path="/tennis" component={Tennis}/>
          </div>
        </div>
         </HashRouter>
    );
  }
}
 
export default Main;