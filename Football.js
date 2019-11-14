import React, { Component } from "react";
import SportsData from './Data.json';
import Home from "./Home";
import Voted from "./Voted";


class Football extends Component {
  
  handleonClick = ()=> {
    console.log('Vote Casted');
   this.props.history.push("/voted"); 
  }
	render() {
		return (
      <div >
        {SportsData.map((dataItem, index) => {
         if (dataItem.sport === "FOOTBALL") 
        return( 
        <div key={dataItem.id}>
         <h2>{dataItem.homeName}</h2>
         <h3>({dataItem.awayName})</h3>
         <h5>{dataItem.sport}</h5>
         <button onClick={this.handleonClick}>rösta</button>
         </div>
         )
        })}
      </div>
       )
    }
} 

export default Football;