import React, { Component } from "react";

class FastfoodComponent extends Component {
  render() {
    var bloc = {
      width: 350,
      height: 450,
      backgroundColor: "#83562e",
      color: "#bd8a4e",
      fontFamily: "'Merriweather', serif",
      textAlign: "center",
      fontWeight: "bold"
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

export default FastfoodComponent;
