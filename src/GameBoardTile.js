import React, { Component } from 'react';
import './App.css';

class GameBoardTile extends Component {



  render() {
    return (
      <div className="tile">
        tile
        { this.props.columnId}
        { this.props.rowId}
      </div>
    );
  }
}

export default GameBoardTile;
