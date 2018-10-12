import React, { Component } from 'react';
import AppNav from './AppNav';
import CurrentPlayer from './CurrentPlayer';
import GameBoard from './GameBoard';
import GameButtons from './GameButtons';
import StartPage from './Components/Start/StartPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <div className="App">
        <StartPage />
        <AppNav />
        <CurrentPlayer />
        <GameButtons />
        <GameBoard />
      </div>
    );
  }
}

const RouterEx = () => (
  <Router>
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">StartPage</Link>
        <Link to="/app" className="navbar-brand">App</Link>
      </nav>
       <Route exact path="/app" component={StartPage}/>
      <Route exact path="/" component={App}/>
    </div>
  </Router>
)

export default RouterEx;
