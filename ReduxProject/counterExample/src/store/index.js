import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: "counter",
  initialState, // initialState: initialState (same in modern js)
  reducers: {
    increment(state) {
      state.counter++;
      /*
    It seems to be allowed here. But we still must not manupulate the existing state.but the good thing is 
    when using Redux ToolKit and its function like create slice, we can't accidently manipulate the existing state 
    because redux toolkit internally uses another package called imgur , which will detect code like this and which
    will automatically clone the existing state , create a new state object object  , keep all the state which we're not editing 
    and override the state which we are editing in an immutable way.we still have immutable code here even though it doesnot look
    like this because of this interally used package and therefore we can't accidently manipulate the existing state.
    */
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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
