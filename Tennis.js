import React, { Component } from "react";
import SportsData from './Data.json';

class Tennis extends Component {
  handleonClick = ()=> {
     console.log('Vote Casted:');
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
         <button onClick= {(e) => this.handleonClick(e)}> rösta </button>
         </div>
        })}
      </div>
       )
    }
} 

export default Tennis;