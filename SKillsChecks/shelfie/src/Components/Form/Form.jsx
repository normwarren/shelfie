import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    };
    //this.getInventory = this.getInventory.bind(this);
  }

  addProduct = product => {
    axios
      .post("/api/product", product)
      .then(res => {
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log("we have a problem:", err));

    this.getInventory();
    this.clearInputClick();
  };

  handleClick = () => {
    let { name, price, imgurl: image_url } = this.state;
    let product = { name, price, image_url };
    this.addProduct(product);
  };

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  clearInputClick = () => {
    //let { name } = e.target;
    this.setState({
      name: "",
      price: 0,
      imgurl: ""
    });
  };

  render() {
    return (
      <div style={{ border: "1px solid black", margin: 20, width: 250 }}>
        <h1>Form</h1>
        <form>
          <div />
          <div className="image">
            <img src="http://goo.gl/ijai22" alt="myimage" />
          </div>
          <section>
            <label htmlFor="imgurl">Image URL:</label>
            <div>
              <input
                onChange={this.handleChange}
                type="text"
                name="imgurl"
                id="imgurl"
              />
            </div>

            <label htmlFor="name">Product Name:</label>
            <div>
              <input
                onChange={this.handleChange}
                type="text"
                name="name"
                id="name"
              />
            </div>
            <label htmlFor="price">Price:</label>
            <div>
              <input
                onChange={this.handleChange}
                type="text"
                name="price"
                id="price"
              />
            </div>
            <button onClick={this.clearInputClick}>Cancel</button>
            <button onClick={this.handleClick}>Add to Inventory</button>
          </section>
        </form>
      </div>
    );
  }
}
