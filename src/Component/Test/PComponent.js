import React, { Component, PureComponent } from 'react'
import WildCard from './WildCard';

/*
    When used PureComponent and clicking on button multiple times you wouldn't get console.log for parents and child component but it would show in noramal Component.

*/

class PComponent extends React.PureComponent {
    constructor(){
        super()
        this.state = {x:10, y:15}
    }
    clickHandler = () => {
        this.setState({x:12})
    }
  render() {
      console.log("x", this.state.x);
    return (
        <div>
            <h4>PComponent</h4>
            <button onClick={this.clickHandler}>Click Me!</button>
            <WildCard data={this.state.y} />
        </div>
    )
  }
}

export default PComponent