import React, { Component } from 'react';
import GameBoardTile from './GameBoardTile'
import './App.css';
var array1= [
  {position: 1},
  {position: 2},
  {position: 3},
  {position: 4},
  {position: 5},
  {position: 6},
]
var count=0

class GameBoard extends Component {

  renderTiles = () =>{
      count+=1
      return array1.map((item, i) => <GameBoardTile key={i} columnId={count} rowId={ item.position } value={false}/>)
  }

  addToken = () =>{


  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col" id="1" onClick={ this.addToken() }>
            { this.renderTiles() }
          </div>
          <div className="col" id="2">
            { this.renderTiles() }
          </div>
          <div className="col" id="3">
            { this.renderTiles() }
          </div>
          <div className="col" id="4">
            { this.renderTiles() }
          </div>
          <div className="col" id="5">
            { this.renderTiles() }
          </div>
          <div className="col" id="6">
            { this.renderTiles() }
          </div>
          <div className="col" id="7">
            { this.renderTiles() }
          </div>
        </div>
      </div>

    );
  }
}

export default GameBoard;
