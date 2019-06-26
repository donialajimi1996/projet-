import React, { Component } from "react";

class Footer extends Component {
  render() {
    var footer = {
      backgroundColor: "#1a1e23",
      color: "#e2d3a3",
      height: 70
    };
    var title = {
      paddingTop: "1.6em",
      textAlign: "center",
      opacity: "30%",
      fontFamily: "'Ranga', cursive"
    };
    return (
      <footer style={footer}>
        <h6 style={title}> C copyright by DONIA LAJIMI... </h6>
      </footer>
    );
  }
}

export default Footer;
