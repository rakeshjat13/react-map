import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import {rotateStart, rotateStop} from "./Component/Redux/Action"


class App extends Component {
 constructor(props){
   super(props)
   console.log("props", this.props);
 } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${(this.props.start) ? '': 'App-logo-paused'}`} alt="logo" onClick={() => this.props.startAction()}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state", state)

  return {...state}
}

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(rotateStart),
  stopAction: () => dispatch(rotateStop)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);