import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "INCREMENT":
    //  state.counter++;

    //   return {
    //     counter: state.counter,
    //     showCounter: state.showCounter,
    //   };

    /*
    This is a super bad example of using reducer . We musn't use reducer to change state.
    this can leads to bugs, unpredictable behaviour and hard to debug.
    We should use action to change state and must always return a brand new state.
    */

    case "INCREMENT":
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case "INCREASE":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case "TOGGLE_COUNTER":
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};
const store = createStore(counterReducer);

export default store;
