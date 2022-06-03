import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { rotateAction, changeBtnStyle } from "./Component/Redux/Action"


class App extends Component {
 constructor(props){
   super(props)
   console.log("props", this.props);
   this.clickHandler = this.clickHandler.bind(this)
 } 

  clickHandler(){
    console.log("click event call");
    // this.props.startAction()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className={`App-logo ${(this.props.start) ? '': 'App-logo-paused'}`} alt="logo"/> */}
          <button style={{...this.props.btnStyle}} onClick={() => this.props.rotateAction(!this.props.start)} onMouseOver={this.props.changeBtnStyle}>{(!this.props.start) ? 'Play' : 'Pause'}</button>
        </header>
        
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("state---", state)

  return {...state}
}

const mapDispatchToProps = dispatch => {
return {
  rotateAction: (payload) => dispatch(rotateAction(payload)),
  changeBtnStyle: () => dispatch(changeBtnStyle)
}};

export default connect(mapStateToProps, mapDispatchToProps)(App);