import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
//import Product from "./Components/Product/Product";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    };
  }

  //getInventory
  getInventory() {
    axios
      .get("/api/inventory")
      .then(res => {
        //console.log(`this is my res.data: ${res.data}`);
        this.setState({
          inventory: res.data
        });
      })
      .catch(err => console.log("we have a problem:", err));
  }
  componentDidMount() {
    this.getInventory();
  }

  render() {
    return (
      <div>
        <Header />
        <section className="contain">
          <div className="on">
            <Dashboard inventory={this.state.inventory} />
          </div>
          <div className="tw">
            <Form getInventory={this.getInventory} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
