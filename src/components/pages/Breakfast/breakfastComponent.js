import React, { Component } from "react";

class BreakfastComponent extends Component {
  render() {
    var bloc = {
      width: 350,
      height: 450,
      backgroundColor: "#7d5961",
      color: "#c0b0b5",
      fontWeight: "bold",
      fontFamily: "'Merriweather', serif",
      textAlign: "center"
    };
    var image = {
      width: 350,
      height: 300
    };
    return (
      <div style={bloc} className="bloc">
        <img style={image} src={this.props.source} alt="" />

        <p> {this.props.titre} </p>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default BreakfastComponent;
