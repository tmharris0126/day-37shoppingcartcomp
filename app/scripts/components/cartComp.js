import React from "react";
import CartItems from "./cartitemsComp.js";
import addcartItem from "../actions/itemAct.js";
class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.removeClick = this.removeClick.bind(this);
    this.addClick = this.addClick.bind(this);
  }
  addClick(item, price) {
    return () => {
      this.props.dispatch(addcartItem(item, price));
    };
  }

  render() {
    return <div>Im in the cart items</div>;
  }
}

export default CartItems;
//
//
//
//
// // const CartItems = props =>
// componentWillMount() {
//   $.ajax().then(items =>
//     this.setState({ items: items }));
// }
