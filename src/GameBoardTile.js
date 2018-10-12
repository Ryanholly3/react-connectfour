import React, { Component } from 'react';
import './App.css';



const img1 = "http://icons.iconarchive.com/icons/sykonist/looney-tunes/128/Bugs-Bunny-Carrot-icon.png"
const img2 = "http://icons.iconarchive.com/icons/sykonist/looney-tunes/128/Daffy-Duck-Angry-icon.png"

let box = null

class GameBoardTile extends Component {

  renderImage = () => {
    if(box === "clicked" ){
      if(!this.props.player2) {
        return ( <img src={img1}></img>)
      } else {
        return ( <img src={img2}></img>
      );
      }
   }
  }



  render() {
    return (
      <div className='tile' >
        { this.renderImage() }
      </div>
    );
  }
}

export default GameBoardTile;
