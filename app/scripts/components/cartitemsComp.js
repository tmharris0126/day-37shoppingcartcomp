import containers from "../containers/all.js";
import React from "react";
import Cart from "./cartComp.js";
import { connect } from "react-redux";
import all from "../containers/all.js";

class CartItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }
  render() {
    return (
      <section>
        <header>
          <h1>Something</h1>
        </header>
        <div className="cartItems">
          <h2> items={this.props.item.itemName}</h2>
          <h4> ${this.props.item.price}</h4>
        </div>
        <button onClick={this.props.addClick}>Add Item</button>
        <button onClick={this.props.removeClick}>Remove Item</button>
      </section>
    );
  }
}

export default connect(all.setState)(CartItems);

// render() {
//   return <CartItems items={this.state.items} />;
