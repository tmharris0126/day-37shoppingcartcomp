import addcartItem from "../actions/itemAct.js";

const initialState = {
  items: [{}],
  itemsinCart: [{}]
};

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {};
  }
  return state;
}
