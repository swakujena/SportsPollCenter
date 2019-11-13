import React, { Component } from "react";
import SportsData from './Data.json';
import Home from "./Home";
import {
  Route,
  Router,
  NavLink,
  HashRouter
} from "react-router-dom";
import Voted from "./Voted";


class Tennis extends Component {
  
  handleonClick = ()=> {
    console.log('Vote Casted');
   this.props.history.push("/voted"); 
  }
	render() {
		return (
      <div >
        {SportsData.map((dataItem, index) => {
         if (dataItem.sport === "TENNIS") 
        return <div>
         <h2>{dataItem.homeName}</h2>
         <h3>({dataItem.awayName})</h3>
         <h5>{dataItem.sport}</h5>
         <button onClick={this.handleonClick}>rösta</button>
         <Route path = "/voted" component={Voted}/>
         </div>
        })}
      </div>
       )
    }
} 

export default Tennis;