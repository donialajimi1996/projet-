import React, { Component } from "react";
import Profile from "../../pics/Profile.jpg";
class About extends Component {
  render() {
    var all = {
      paddingTop: 60,
      color: "#ffffff",
      paddingBottom: 100,
      paddingLeft: 50,
      display: "inline-block",
      width: "100%"
    };
    var title = {
      paddingBottom: 20,
      fontFamily: " 'Playfair Display', serif",
      paddingLeft: 15,
      color: "#e2d3a3",
      fontWeight: "Bold"
    };
    var para = {
      paddingTop: 33,
      paddingLeft: 10,
      display: "inline-block",
      width: "30%",
      fontFamily: "'Merriweather', serif"
    };
    var para2 = {
      paddingLeft: 10,
      display: "inline-block",
      paddingTop: 33,
      width: "30%",
      fontFamily: "'Merriweather', serif"
    };
    var workers = {
      backgroundColor: "white",
      width: "100%",
      height: 500,
      display: "grid",
      gridTemplateColumns: "1.5fr 2fr"
    };
    var image = {
      width: 400,
      height: 380,
      position: "relative",
      top: 30,
      right: -30,
      display: "block",
      borderRadius: "20%",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.5)"
    };
    var social = {
      paddingTop: 10,
      paddingRight: 20,
      fontSize: "2em"
    };
    var des = {
      padding: 100,
      backgroundColor: "rgb(88,77,69,0.1)"
    };
    var grid = {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr"
    };
    var You = {
      padding: 60,
      backgroundColor: "rgb(88,77,69,0.5)",
      color: "#d0d191",
      fontFamily: "'Vidaloka', serif"
    };
    return (
      <div>
        <div style={all} className="about">
          <h1 style={title}>About</h1>
          <p style={para} className="paraAbout">
            “Humor keeps us alive. Humor and food. Don't forget food. You can go
            a week without laughing.”
            <center>
              <div> ― Joss Whedon ―</div>
            </center>
          </p>
          <p style={para2} className="paraAbout para2">
            “The only time to eat diet food is while you're waiting for the
            steak to cook.”{" "}
            <center>
              <div> ― Julia Child ―</div>
            </center>
          </p>
        </div>
        <div style={workers}>
          <div>
            <img style={image} src={Profile} alt="" />
          </div>
          <div style={des}>
            <h4>Donia Lajimi</h4>
            <p>
              {" "}
              “Part of the secret of success in life is to eat what you like and
              let the food fight it out inside.”{" "}
              <center>
                <div> ― Mark Twain―</div>
              </center>
              I'am a student in Higher School of Science and Technology at
              Hammam Sousse, who studies science computer technology and
              communication ,i create this website because i love eating...
              <i class="far fa-grin-hearts" />
            </p>
            <center>
              {" "}
              <span title="My facebook" onClick={this.facebook}>
                <i style={social} class="fab fa-facebook-square" />
              </span>
              <span title="Instagram" onClick={this.instagram}>
                <i style={social} class="fab fa-instagram" />
              </span>
              <span title="My gitty" onClick={this.github}>
                <i style={social} class="fab fa-github-square" />
              </span>
            </center>{" "}
          </div>
        </div>
        <div style={grid} className="bottom">
          <div />
          <div style={You}>
            {" "}
            <h4>YOU ARE WHAT YOU EAT</h4>
            <p>
              To enjoy good health, to bring true happiness to one's family, to
              bring peace to all, one must first discipline and control one's
              own mind. If a man can control his mind he can find the way to
              Enlightenment, and all wisdom and virtue will naturally come to
              him.
              <center>
                <div> - Buddha -</div>
              </center>
            </p>
            <p>
              You can look in the mirror and find a million things wrong with
              yourself. Or you can look in the mirror and think, 'I feel good, I
              have my health, and I'm so blessed.' That's the way I choose to
              look at it.
              <center>
                {" "}
                <div>- Isla FIsher -</div>
              </center>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
