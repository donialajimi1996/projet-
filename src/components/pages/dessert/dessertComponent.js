import React, { Component } from "react";

class DessertComponent extends Component {
  render() {
    var bloc = {
      width: 350,
      height: 450,
      backgroundColor: "#868086",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "'Merriweather', serif",
      color: "#dddad7"
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

export default DessertComponent;
