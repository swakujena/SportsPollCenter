import React, { Component } from "react";
import SportsData from './Data.json';
 
class Tennis extends Component {
	render() {
		return (
      <div >
        {SportsData.map((dataItem, index) => {
         if (dataItem.sport === "TENNIS") 
        return <div>
         <h1>{dataItem.homeName}</h1>
         <h3>({dataItem.awayName})</h3>
         <h5>{dataItem.sport}</h5>
         <button onClick={console.log('button clicked')}>rösta</button>
         </div>
        })}
      </div>
       )
    }
} 
 
export default Tennis;

