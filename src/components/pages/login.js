import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  valid(item, type) {
    let itemValue = item.target.value;
    switch (type) {
      case "name": {
        if (itemValue.length < 4) {
          item.target.style.color = "red";
          this.setState({ name: itemValue });
        } else {
          item.target.style.color = "";
          this.setState({ name: itemValue });
        }
        break;
      }
      case "password": {
        if (itemValue.length < 8) {
          item.target.style.color = "red";
          this.setState({ password: itemValue });
        } else {
          item.target.style.color = "";
          this.setState({ password: itemValue });
        }
        break;
      }
    }
  }
  submit() {
    let obj = {};
    obj.name = this.state.name;
    obj.password = this.state.password;

    console.warn("submit data", obj);
  }

  render() {
    var grid = {
      display: "grid",
      gridTemplateColumns: "1.5fr 1.5fr"
    };
    var back = {
      backgroundColor: "rgb(26, 30, 35, 0.3)",

      paddingTop: 150,
      paddingLeft: 60,
      paddingRight: 60
    };
    var title = {
      fontFamily: "'Merriweather', serif",
      fontSize: "2em",
      paddingLeft: 270
    };
    var btn = {
      backgroundColor: "#959795",
      marginLeft: 290
    };
    var input = {
      marginLeft: 220,
      marginBottom: 20
    };
    return (
      <div style={grid} className="LogCover">
        {" "}
        <div />
        <div style={back}>
          {" "}
          <h4 style={title}>Login</h4>
          <input
            style={input}
            type="name"
            placeholder="Enter Email"
            onChange={item => this.valid(item, "name")}
          />
          <br />
          <input
            style={input}
            type="password"
            placeholder="Enter password"
            onChange={item => this.valid(item, "password")}
          />{" "}
          <br />
          <button style={btn} type="submit" onClick={() => this.submit()}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
