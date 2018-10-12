import React, { Component } from 'react';
import Modal from "./Modal"
import Modal2 from "./Modal2"

class StartPage extends Component {

  render() {
    return (
      <div className="m-3">
        <h1> Looney Tunes Connect 4</h1>
        <form>
          <div className="form-group">
            <label for="playerOneName">Player 1</label>
            <input type="text" className="form-control" id="playerOneName" placeholder="Enter name" />
          </div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Pick Character
  </button>
          <div className="form-group mt-2">
            <label for="exampleInputPassword1">Player 2 </label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter name" />
          </div>
        </form>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
  Pick Character
</button>
<div className="mt-2">
<button type="submit" className="btn btn-primary">Submit</button>
</div>


<Modal />
<Modal2 />



      </div>
    );
  }
}

export default StartPage;
