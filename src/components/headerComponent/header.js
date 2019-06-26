import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    var logo = {
      fontSize: "1.5em"
    };
    var icon = {
      paddingRight: 10
    };
    var icon1 = {
      paddingRight: 5
    };
    return (
      <header>
        <div style={logo} className="logo">
          <i style={icon} class="fas fa-utensils" />
          LE BON GOUT
        </div>

        <nav>
          <ul>
            <li className="first">
              <Link to="/">
                <i style={icon1} class="fas fa-concierge-bell" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/About"> About Us</Link>
            </li>
            <li>
              <Link to="/Breakfast"> Breakfast</Link>
            </li>
            <li>
              <Link to="/Fastfood"> Fastfood</Link>
            </li>
            <li>
              <Link to="/Dessert"> Dessert</Link>
            </li>

            <li>
              <Link to="/Contact">
                <i class="fas fa-envelope" /> Contact Us
              </Link>
            </li>
            <li className="last">
              <Link to="/Login">
                <i class="fas fa-sign-in-alt" /> Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
