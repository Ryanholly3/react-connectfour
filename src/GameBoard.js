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
let box = null


class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxclicked: false,
      colId: null,
      vertCount1: 0,
      vertCount2: 0,
      vertCount3: 0,
      vertCount4: 0,
      vertCount5: 0,
      vertCount6: 0,
      vertCount6: 0

    }
  }


  renderTiles = () =>{
      count+=1
      return array1.map((item, i) => <GameBoardTile key={i} columnId={count} rowId={ item.position } player2={this.props.player2} box={this.state.boxclicked} colId={this.state.colId}  vertCount={this.state}/>)
  }

  boxclick2 = (event) => {
    let colId = event.currentTarget
    this.setState({
      colId: colId
      
    })
    if (colId === 1) {
      let vertCount1 = this.state.vertCount1++
      this.setState({
        vertCount1: vertCount1
      })
    }
    else if (colId === 2){
      let vertCount2 = this.state.vertCount2++
      this.setState({
        vertCount2: vertCount2
      })
    }
    else if (colId === 3){
      let vertCount3 = this.state.vertCount3++
      this.setState({
        vertCount3: vertCount3
      })
    }
    else if (colId === 4){
      let vertCount4 = this.state.vertCount4++
      this.setState({
        vertCount4: vertCount4
      })
    }
    else if (colId === 5){
      let vertCount5 = this.state.vertCount5++
      this.setState({
        vertCount5: vertCount5
      })
    }
    else if (colId === 6){
      let vertCount6 = this.state.vertCount6++
      this.setState({
        vertCount6: vertCount6
      })
    }
    else if (colId === 7){
      let vertCount7 = this.state.vertCount7++
      this.setState({
        vertCount7: vertCount7
      })
    }
  }



  render() {
    return (
      <div className="container" onClick={this.props.boxclick}>
        <div className="row">
          <div className="col" id="1" onClick={this.boxclick2}>
            { this.renderTiles() }
          </div>
          <div className="col" id="2" onClick={this.boxclick2}>
            { this.renderTiles() }
          </div>
          <div className="col" id="3" onClick={this.boxclick2}>
            { this.renderTiles() }
          </div>
          <div className="col" id="4" onClick={this.boxclick2}>
            { this.renderTiles() }
          </div>
          <div className="col" id="5" onClick={this.boxclick2}>
            { this.renderTiles() }
          </div>
          <div className="col" id="6" onClick={this.boxclick2}>
            { this.renderTiles() }
          </div>
          <div className="col" id="7" onClick={this.boxclick2}>
            { this.renderTiles() }
          </div>
        </div>
      </div>

    );
  }
}

export default GameBoard;
