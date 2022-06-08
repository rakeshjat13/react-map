import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { connect } from "react-redux";
import { rotateAction, changeBtnStyle } from "../Redux/Action"
import { padding } from '@mui/system';


class App extends Component {
 constructor(props){
   super(props)
   console.log("props", this.props);
   this.clickHandler = this.clickHandler.bind(this)
   this.state = {x:'PQR'}
 } 

  clickHandler(){
    console.log("click event call");
    // this.props.startAction()
  }

  render() {
    return (
      <div className="App">
        <TestC />
        <header className="App-header">
          {/* <img src={logo} className={`App-logo ${(this.props.start) ? '': 'App-logo-paused'}`} alt="logo"/> */}
          <div>
            <button onClick={() => this.props.rotateAction(true)}>{(!this.props.start) ? 'Play' : 'Pause'}</button>
            <button onClick={() => this.props.changeBtnStyle(false)}>Paused</button>
            <button onClick={() => this.setState({user:'Xyz'})}>Click Me!</button>
          </div>
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
  changeBtnStyle: () => dispatch(changeBtnStyle())
}};

export default connect(mapStateToProps, mapDispatchToProps)(App);


class TestC extends React.Component{
  constructor(){
    super()
  }

  render(){
    console.log("props TestC ")
    return(
      <>
        <h3>Child TestC component load. </h3>
      </>
    )
  }
}