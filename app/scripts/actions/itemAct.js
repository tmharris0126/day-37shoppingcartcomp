import { connect } from "react-redux";

export default function addcartItem(item, price) {
  return function(dispatch) {
    dispatch({ type: "ADD_ITEM", item: item, price: price });
  };
  console.log(Item_Added);
}
