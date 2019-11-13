import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Football from "./Football";
import Snooker from "./Snooker";
import Tennis from "./Tennis";
import Home from "./Home";
import Voted from "./Voted";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 class="glow">Welcome to Sports Poll Center</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>          
            <li><NavLink to="/football">Football</NavLink></li>
            <li><NavLink to="/snooker">Snooker</NavLink></li>
            <li><NavLink to="/tennis">Tennis</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/football" component={Football}/>
            <Route path="/snooker" component={Snooker}/>
            <Route path="/tennis" component={Tennis}/>
          </div>
        </div>
         </HashRouter>
    );
  }
}
 
export default Main;