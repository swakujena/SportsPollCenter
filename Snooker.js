import React, { Component } from "react";
import SportsData from './Data.json';

class Snooker extends Component {
  handleonClick = ()=> {
     console.log('Vote Casted');
     
  }
	render() {
		return (
      <div >
        {SportsData.map((dataItem, index) => {
         if (dataItem.sport === "SNOOKER") 
        return <div>
         <h1>{dataItem.homeName}</h1>
         <h3>({dataItem.awayName})</h3>
         <h5>{dataItem.sport}</h5>
         <button onClick= {(e) => this.handleonClick(e)}> rösta </button>
         </div>
        })}
      </div>
       )
    }
} 

export default Snooker;