import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
