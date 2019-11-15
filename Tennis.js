import React, { Component } from "react";
import SportsData from './Data.json';
import Home from "./Home";
import Voted from "./Voted";

class Tennis extends Component {
   
  handleClick = ()=> {
    console.log('Vote Casted');
   this.props.history.push("/voted"); 
   localStorage.setItem('myPoll', JSON.stringify (SportsData));
  }
	render() {
		return (
      <div >
        {SportsData.map((dataItem, index) => {
         if (dataItem.sport === "TENNIS") 
        return( 
        <div key={dataItem.id}>
         <h2>{dataItem.homeName}</h2>
         <h3>({dataItem.awayName})</h3>
         <h5>{dataItem.sport}</h5>
         <button onClick={this.handleClick}>rösta</button>
         </div>
         )
        })}
      </div>
       )
    }
} 

export default Tennis;
