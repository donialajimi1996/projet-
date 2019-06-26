import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }
  valid(item, type) {
    let itemValue = item.target.value;
    switch (type) {
      case "name": {
        this.setState({ name: itemValue });
        break;
      }

      case "email": {
        this.setState({ email: itemValue });
        break;
      }

      default: {
        this.setState({ message: itemValue });
      }
    }
    console.warn("all", this.state);
  }
  submit() {
    let obj = {};
    obj.name = this.state.name;
    obj.email = this.state.email;
    obj.message = this.state.message;

    console.warn("submit data", obj);
  }
  render() {
    var title = {
      fontSize: "3em",
      paddingTop: 60,
      fontFamily: " 'Merriweather', serif",
      color: "#b28348"
    };
    var contact = {
      backgroundColor: "white",
      height: 1100
    };
    var title1 = {
      fontSize: "3em",
      paddingTop: 30,
      fontFamily: " 'Merriweather', serif",
      color: "#5e2804",
      textAlign: "center",
      paddingLeft: 160,
      paddingBottom: 30,
      backgroundColor: "rgb(255,255,255,0.3)"
    };
    var title2 = {
      fontSize: "3em",
      paddingTop: 30,
      fontFamily: " 'Merriweather', serif",
      color: "rgb(17,40,55)",
      textAlign: "center",

      paddingBottom: 30
    };
    var des = {
      textAlign: "center",
      fontFamily: " 'Merriweather', serif"
    };
    var down = {
      backgroundColor: "rgb(17,40,55)",
      margin: 150,
      padding: 50
    };
    var input = {
      width: "100%"
    };
    var label = {
      color: "#b6b6b7",
      fontFamily: " 'Merriweather', serif"
    };
    return (
      <div>
        <div className="contactCover">
          {" "}
          <center>
            {" "}
            <h4 style={title}>Contact Us</h4>{" "}
          </center>
        </div>
        <div style={contact}>
          <form>
            <h2 style={title2}>At Your Service</h2>
            <hr /> <br />
            <h5 style={des}>
              "My personal goals are to be happy, healthy and to be surrounded
              by loved ones" <center> - Kiana Tom -</center>
            </h5>
            <div style={down}>
              <span>
                <p>
                  <label style={label} for="name">
                    Name:
                  </label>
                  <br />
                  <input
                    style={input}
                    type="username"
                    name="username"
                    id="name"
                    placeholder="Enter Your Name"
                    required
                    onChange={item => this.valid(item, "name")}
                  />
                </p>
              </span>
              <span>
                <p>
                  <label style={label} for="email">
                    Email:
                  </label>
                  <br />
                  <input
                    style={input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="YourEmail@email.com"
                    required
                    onChange={item => this.valid(item, "email")}
                  />
                </p>
              </span>
              <p>
                <label style={label} for="messages">
                  Message:
                </label>
                <br />
                <textarea
                  style={input}
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  onChange={item => this.valid(item, "message")}
                />
              </p>
              <p>
                <center>
                  {" "}
                  <button
                    style={label}
                    type="submit"
                    onClick={() => this.submit()}
                  >
                    Submit
                  </button>
                </center>
              </p>
            </div>
          </form>
        </div>
        <div className="bottomContact">
          <h4 style={title1}>THANKS FOR YOUR VISIT</h4>
        </div>
      </div>
    );
  }
}

export default Contact;
