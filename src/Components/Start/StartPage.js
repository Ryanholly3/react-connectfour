import React, { Component } from 'react';
import Modal from "./Modal"


class StartPage extends Component {

  render() {
    return (
      <div>
        <h1> START PAGE </h1>
        <form>
          <div className="form-group">
            <label for="playerOneName">Player 1 Name</label>
            <input type="text" className="form-control" id="playerOneName" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<Modal />



      </div>
    );
  }
}

export default StartPage;
