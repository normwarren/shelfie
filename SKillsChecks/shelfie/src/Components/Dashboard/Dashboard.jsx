import React, { Component } from "react";
import Product from ".././Product/Product";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {this.props.inventory.map(product => {
          return (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
              product={product}
              //updateProfile={this.updateProfile}
              //deleteProfile={this.deleteProfile}
            />
          );
        })}
      </div>
    );
  }
}
