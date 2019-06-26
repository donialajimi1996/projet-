import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      url: "",
      select: "Fastfood",
      food: []
    };
  }
  valid(item, type) {
    let itemValue = item.target.value;
    switch (type) {
      case "name": {
        this.setState({ name: itemValue });
        break;
      }

      case "price": {
        this.setState({ price: itemValue });
        break;
      }

      case "url": {
        this.setState({ url: itemValue });
        break;
      }
    }
  }

  clickForm = e => {
    e.preventDefault();
    let obj = {};
    obj.name = this.state.name;
    obj.price = this.state.price;
    obj.url = this.state.url;
    obj.select = this.state.select;
    console.warn("submit data", obj);
    let name = this.obj;
    let price = this.obj;
    let url = this.obj;
    let select = this.state.value;
    console.log(this.state);
    this.setState({
      name: name,
      price: price,
      url: url,
      select: select
    });
    let foodArr = this.state;
    this.state.food.push(foodArr);
    console.log(this.state.food);
  };
  handleChange = event => this.setState({ select: event.target.value });
  handleSubmit = () => {};
  render() {
    var all = {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      paddingTop: 100,
      color: "#ffffff",
      paddingBottom: 100
    };
    var title = {
      paddingLeft: 100,
      paddingTop: 120
    };
    var p = {
      paddingTop: 20,
      paddingLeft: 20
    };
    var button = {
      backgroundColor: "#1a1e23",
      color: "white",
      width: 100,
      height: 40
    };
    var part2 = {
      backgroundColor: "white",
      height: 500,
      paddingTop: 50
    };

    var basPara = {
      backgroundColor: "rgb(88,77,69,0.1)",
      height: "30%",
      textAlign: "center",
      fontFamily: "'Merriweather', serif",
      fontSize: "1.5em",
      paddingTop: 10
    };
    var form = {
      maxWidth: 450,
      background: "#FAFAFA",
      padding: 30,
      margin: "50px auto",
      boxShadow: "1px 1px 25px rgba(0, 0, 0, 0.35)",
      borderRadius: 10,
      border: "6px solid #112837"
    };
    var titleForm = {
      textAlign: "center",
      fontFamily: "'Merriweather', serif",
      fontSize: "1.5em"
    };
    var formGroup = {
      display: "block",
      marginBottom: 10,
      minHeight: 35
    };
    return (
      <div>
        <div style={all} className="container-fluid cover ">
          <div>
            <h1 style={title}>LE BON GOUT</h1>
          </div>
          <div className="right">
            <p style={p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <center>
              {" "}
              <button style={button}>About US</button>
            </center>
          </div>
        </div>
        <div style={part2}>
          <h4 style={titleForm}>PUT YOUR OWN FOOD</h4>
          <Form
            style={form}
            onSubmit={e => {
              this.clickForm(e);
            }}
          >
            <FormGroup style={formGroup}>
              <Label for="Name">Name :</Label>
              <Input
                value={this.state.name}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={item => this.valid(item, "name")}
                className="fielsStyle fieldSplit"
              />
            </FormGroup>
            <FormGroup style={formGroup}>
              <Label for="Price">Price :</Label>
              <Input
                value={this.state.price}
                type="text"
                name="price"
                id="price"
                placeholder="Enter the price of the item"
                onChange={item => this.valid(item, "price")}
                className="fielsStyle fieldSplit"
              />
            </FormGroup>
            <FormGroup style={formGroup}>
              <Label for="Url">Url :</Label>
              <Input
                value={this.state.url}
                type="text"
                name="url"
                id="url"
                placeholder="url "
                onChange={item => this.valid(item, "url")}
                className="fielsStyle fieldSplit"
              />
            </FormGroup>
            <FormGroup style={formGroup}>
              <Label for="Select">Select :</Label>
              <Input
                value={this.state.select}
                type="select"
                name="select"
                id="select"
                onChange={this.handleChange}
                className="fielsStyle fieldSplit"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Fastfood">Fastfood</option>
                <option value="Dessert">Dessert</option>
              </Input>
            </FormGroup>
            <Button type="submit" className="buttonInput">
              Submit
            </Button>
          </Form>

          {this.state.food.map(food => (
            <div>
              <h2>{food.name}</h2>
              <p> {food.price} </p>
              <img src={food.url} alt="" />
              <h3> {food.select} </h3>
            </div>
          ))}
        </div>
        <div className="coverFinalHome">
          <div style={basPara}>
            {" "}
            <h4>
              FOOD is the ingredient that binds us TOGETHER{" "}
              <i class="far fa-heart" />.
            </h4>
            <p>
              “We eat the year away. We eat the spring and the summer and the
              fall. We wait for something to grow and then we eat it.”{" "}
              <center>- Shirley Jackson -</center>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
