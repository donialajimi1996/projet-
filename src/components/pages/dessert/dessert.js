import React, { Component } from "react";
import DessertComponent from "./dessertComponent";
import crepz from "./../../../pics/crepz.jpg";
import gaufre from "./../../../pics/gaufre.jpg";
import too from "./../../../pics/too.jpg";
class Dessert extends Component {
  state = [
    {
      image: crepz,
      titre: "The SECRET's Crepe Blacky",
      des: "8.500 dinars"
    },
    {
      image: gaufre,
      titre: "The SECRET's Gaufres nutella banane au fruits sec",
      des: "9.500 dinars"
    },
    {
      image: too,
      titre: "The SECRET's Gaufres Nutella",
      des: "10.500 dinars"
    }
  ];
  render() {
    var back = {
      backgroundColor: "rgb(26, 30, 35, 0.3)",
      width: "50%",
      height: "100%"
    };
    var part2 = {
      backgroundColor: "#b2a89e",
      height: 600,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      paddingTop: 70,
      paddingLeft: 120
    };
    var title1 = {
      color: "#b2a89e",
      fontSize: "3em",
      paddingLeft: 270,
      paddingTop: 30,
      fontWeight: "bold"
    };
    var des1 = {
      color: "#b2a89e",
      paddingLeft: 200,
      paddingTop: 50,
      fontSize: "1.5em",
      textAlign: "justify",
      width: 500
    };
    var grid = {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr"
    };
    var You = {
      padding: 60,
      backgroundColor: "rgb(88,77,69,0.5)",
      color: "#bfcbc1",
      fontSize: "1.2em",
      fontFamily: "'Vidaloka', serif"
    };
    return (
      <div>
        <div className="coverDessert">
          <div style={back}>
            {" "}
            <h5 style={title1}> Dessert</h5>
            <p style={des1}>
              “ I'm not a vegetarian, I'm a dessertarian. “
              <center>- Bill Watterson -</center>“ There is no better way to
              bring people together than with desserts. “{" "}
              <center>- Gail Simmons -</center>
            </p>
          </div>
        </div>
        <div style={part2}>
          <DessertComponent
            source={this.state[0].image}
            titre={this.state[0].titre}
            desc={this.state[0].des}
          />
          <DessertComponent
            source={this.state[1].image}
            titre={this.state[1].titre}
            desc={this.state[1].des}
          />{" "}
          <DessertComponent
            source={this.state[2].image}
            titre={this.state[2].titre}
            desc={this.state[2].des}
          />
        </div>
        <div style={grid} className="coverDessertFinal">
          <div />
          <div style={You}>
            {" "}
            <h4>SAVE ROOM FOR DESSERT</h4>
            <p>
              " Look, there's no metaphysics on earth like chocola"
              <center>
                <div> - Fernando Pessoa -</div>
              </center>
            </p>
            <p>
              " I want to have a good body, but not as much as I want dessert."
              <center>
                {" "}
                <div>- Jason Love -</div>
              </center>
            </p>
            <p>
              " Dessert is probably the most important stage of the meal, since
              it will be the last thing your guests remember before they pass
              out all over the table." <center>-Wiliam Powell-</center>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dessert;
