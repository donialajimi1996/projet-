import React, { Component } from "react";
import FastfoodComponent from "./fastfoodComponent";
import pic1 from "./../../../pics/pic1.jpg";
import pic2 from "./../../../pics/pic2.jpg";
import pic3 from "./../../../pics/pic3.jpg";

import pic7 from "./../../../pics/pic7.jpg";
import pic8 from "./../../../pics/pic8.jpg";
import pic9 from "./../../../pics/pic9.jpg";

class Fastfood extends Component {
  state = [
    {
      image: pic1,
      titre: "Lasagne au viande haché",
      des: "9.900 dinars"
    },
    {
      image: pic2,
      titre: "Pizza spéciale TANDO's",
      des: "10.500 dinars"
    },
    {
      image: pic3,
      titre: "Frango Combo",
      des: "12.500 dinars"
    },

    {
      image: pic7,
      titre: "Le burrito au chawarma de poulet TANDO's",
      des: "7.500 dinars"
    },
    {
      image: pic8,
      titre: "YUCCA's sandwish escalope",
      des: "7.500 dinars"
    },
    {
      image: pic9,
      titre: "PLAN B's escalope pané farci au gruyère",
      des: "8.500 dinars"
    }
  ];
  render() {
    var part2 = {
      backgroundColor: "#bd8a4e",
      height: 1200,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      paddingTop: 70,
      paddingLeft: 120
    };
    var grid = {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      paddingTop: 20,
      fontFamily: "'Merriweather', serif"
    };
    var des = {
      backgroundColor: "rgb(26, 30, 35, 0.3)",
      color: "#dec6ae",
      paddingTop: 150,
      paddingLeft: 60,
      paddingRight: 60,
      fontSize: "1.5em",
      textAlign: "justify"
    };
    var title1 = {
      color: "#bd8a4e",
      fontSize: "3em",
      paddingLeft: 50,
      paddingTop: 100,
      fontWeight: "bold"
    };
    var grid1 = {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",

      fontFamily: "'Merriweather', serif"
    };
    var des2 = {
      backgroundColor: "rgb(84,11,7,0.2)",
      color: "#dec6ae",
      paddingTop: 50,
      paddingLeft: 60,
      paddingRight: 60,
      fontSize: "1.5em",
      textAlign: "justify",
      fontWeight: "bold"
    };
    var title2 = {
      color: "#540b07",
      fontSize: "3em",
      paddingLeft: 50,
      paddingTop: 100
    };
    return (
      <div>
        <div style={grid} className="fastCover">
          <h6 style={title1}>Fastfood</h6>

          <p style={des}>
            Fast food is popular because it's convenient, it's cheap, and it
            tastes good. But the real cost of eating fast food never appears on
            the menu.
            <center>- Eric Schlosser -</center>
          </p>
        </div>
        <div style={part2}>
          {" "}
          <FastfoodComponent
            source={this.state[0].image}
            titre={this.state[0].titre}
            desc={this.state[0].des}
          />
          <FastfoodComponent
            source={this.state[1].image}
            titre={this.state[1].titre}
            desc={this.state[1].des}
          />{" "}
          <FastfoodComponent
            source={this.state[2].image}
            titre={this.state[2].titre}
            desc={this.state[2].des}
          />
          <FastfoodComponent
            source={this.state[3].image}
            titre={this.state[3].titre}
            desc={this.state[3].des}
          />
          <FastfoodComponent
            source={this.state[4].image}
            titre={this.state[4].titre}
            desc={this.state[4].des}
          />{" "}
          <FastfoodComponent
            source={this.state[5].image}
            titre={this.state[5].titre}
            desc={this.state[5].des}
          />
        </div>
        <div style={grid1} className="fastCoverFinal">
          {" "}
          <div style={des2}>
            <p>
              “We have sold ourselves into a fast food model of education, and
              it's impoverishing our spirit and our energies as much as fast
              food is depleting our physical bodies.”
              <center> - Ken Robinson -</center>
            </p>{" "}
            <p>
              {" "}
              Dear Diet, things just aren’t going to work out between us. It’s
              not me it’s you. You are tasteless and boring and I can’t stop
              cheating on you.
              <center>- Donia Lajimi -</center>
            </p>
          </div>
          <h4 style={title2}>
            The journey of a thousand pounds begins with a single burger.
          </h4>{" "}
        </div>
      </div>
    );
  }
}

export default Fastfood;
