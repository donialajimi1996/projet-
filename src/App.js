import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/headerComponent/header";
import Footer from "./components/FooterComponent/footer";
import HomePage from "./components/pages/homePage";
import Breakfast from "./components/pages/Breakfast/Breakfast";
import Fastfood from "./components/pages/Fastfood/fastfood";

import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Login from "./components/pages/login";
import "./Assets/CSS/default.min.css";
import Dessert from "./components/pages/dessert/dessert";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={HomePage} />
          <Route exact path="/Breakfast" component={Breakfast} />
          <Route exact path="/Fastfood" component={Fastfood} />
          <Route exact path="/Dessert" component={Dessert} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
