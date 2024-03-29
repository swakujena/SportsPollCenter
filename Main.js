import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Football from "./Football";
import Snooker from "./Snooker";
import Tennis from "./Tennis";
import Home from "./Home";
import Voted from "./Voted";
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1 className="glow">Welcome to Sports Poll Center</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>          
            <li><NavLink to="/football">Football</NavLink></li>
            <li><NavLink to="/snooker">Snooker</NavLink></li>
            <li><NavLink to="/tennis">Tennis</NavLink></li>
            <li><NavLink to="/voted">Poll</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/football" component={Football}/>
            <Route path="/snooker" component={Snooker}/>
            <Route path="/tennis" component={Tennis}/>
            <Route path="/voted" component={Voted}/>
          </div>
        </div>
         </BrowserRouter>
    );
  }
}
 
export default Main;