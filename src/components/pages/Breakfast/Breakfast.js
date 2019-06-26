import React, { Component } from "react";
import BreakfastComponent from "./breakfastComponent";
import grung1 from "./../../../pics/grung1.jpg";
import grung2 from "./../../../pics/grung2.jpg";
import grung3 from "./../../../pics/grung3.jpg";
import yucca from "./../../../pics/yucca.jpg";
import yucca1 from "./../../../pics/yucca1.jpg";
import yucca3 from "./../../../pics/yucca3.jpg";

class Breakfast extends Component {
  state = [
    {
      image: grung1,
      titre: "brunch the grunge",
      des: "15dinar"
    },
    {
      image: grung2,
      titre: "brunch the grunge",
      des: "15dinar"
    },
    {
      image: grung3,
      titre: "brunch the grunge",
      des: "15dinar"
    },
    {
      image: yucca,
      titre: "Breakfast YUCCA",
      des: "15 dinars"
    },
    {
      image: yucca1,
      titre: "YUCCA's Breakfast TURK ",
      des: "13.500 dinars"
    },
    {
      image: yucca3,
      titre: "YUCCA's brunch",
      des: "12.500 dinars"
    }
  ];
  render() {
    var centerContainer = {
      backgroundColor: "#c0b0b5",
      height: 1200,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      paddingTop: 70,
      paddingLeft: 120
    };

    var des = {
      backgroundColor: "rgb(26, 30, 35, 0.3)",
      color: "#c0b0b5",
      paddingTop: 150,
      paddingLeft: 60,
      paddingRight: 60,
      fontSize: "1.5em"
    };
    var grid = {
      display: "grid",
      gridTemplateColumns: "1.5fr 2fr",
      paddingTop: 30,
      fontFamily: "'Merriweather', serif"
    };
    var title = {
      color: "#c0b0b5",
      fontSize: "3em",
      paddingLeft: 50,
      paddingTop: 100
    };
    var finale = {
      backgroundColor: "rgb(26, 30, 35, 0.5)",
      width: "100%",
      height: 570,
      fontFamily: "'Merriweather', serif"
    };
    var des2 = {
      color: "#dba75f",
      fontSize: "1.5em",
      paddingLeft: 210,
      paddingRight: 210,
      paddingTop: 50,
      textAlign: "justify"
    };
    var title1 = {
      color: "#dba75f",
      paddingTop: 50,
      paddingLeft: 100,
      fontSize: "2.5em"
    };
    return (
      <div>
        <div style={grid} className="breakfastCover">
          {" "}
          <h4 style={title}>Breakfast</h4>{" "}
          <p style={des}>
            There's nothing like starting the day with a healthy, filling
            breakfast smoothie. <center> - Hannah Bronfman -</center>
          </p>
        </div>

        <div style={centerContainer}>
          {" "}
          <BreakfastComponent
            source={this.state[0].image}
            titre={this.state[0].titre}
            desc={this.state[0].des}
          />
          <BreakfastComponent
            source={this.state[1].image}
            titre={this.state[1].titre}
            desc={this.state[1].des}
          />{" "}
          <BreakfastComponent
            source={this.state[2].image}
            titre={this.state[2].titre}
            desc={this.state[2].des}
          />
          <BreakfastComponent
            source={this.state[3].image}
            titre={this.state[3].titre}
            desc={this.state[3].des}
          />
          <BreakfastComponent
            source={this.state[4].image}
            titre={this.state[4].titre}
            desc={this.state[4].des}
          />{" "}
          <BreakfastComponent
            source={this.state[5].image}
            titre={this.state[5].titre}
            desc={this.state[5].des}
          />
        </div>
        <div className="breakfastCoverFinal">
          {" "}
          <div style={finale}>
            {" "}
            <h5 style={title1}>
              BREAKFAST IS THE MOST IMPORTANT MEAL OF THE DAY{" "}
            </h5>
            <p style={des2}>
              Breakfast is my most important meal. It's often the meal you play
              a game on. I make sure I have oatmeal, milk, and fruit. It's the
              fuel you use to hopefully do your best, so eating right is a big
              part of being a professional athlete. I wish I paid more attention
              to it earlier in my life. <center>- Andrew Luck -</center>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Breakfast;
