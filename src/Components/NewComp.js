import React, { Component } from 'react';
import bell from "./bell.png"
import turnoff from "./turnoff.png"

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to Natalie's News",
         sub: "Subscribe",
         imageURL: turnoff
      }
    }
    styles = {
        fontStyle: "italic",
        color: "purple"
      };
    Buttonchange = () => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed"
        })
    }
    imageChange = () => {
        this.setState({
            imageURL: bell,
            message: "Thank You!"
        })
    }
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p />
        <img 
        style={{ width: "50px", height: "50px" }}
        src={this.state.imageURL}
        onClick={this.imageChange}
        alt='' />
      </div>
    )
  }
}

export default NewComp;