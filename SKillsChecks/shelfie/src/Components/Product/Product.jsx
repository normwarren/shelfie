import React, { Component } from "react";

export default class Product extends Component {
  render() {
    //console.log(this.props);
    let { product } = this.props;

    return (
      <div style={{ border: "1px solid #eee", margin: 10, width: 150 }}>
        <img src={product.img} alt="" width="100" />
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
      </div>
    );
  }
}
