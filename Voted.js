import React, { Component } from "react";


class Voted extends Component {
    
    
  handleClick = ()=> {
  
   let data= localStorage.getItem('myPoll');
   data = JSON.parse(data);
   console.log(data);
  }

	render() {
		return (
        <div>
          <h1>YOU HAVE VOTED</h1>
          <button onClick={this.handleClick}>Check Polls</button>

        </div>
       )
    }
} 

export default Voted;