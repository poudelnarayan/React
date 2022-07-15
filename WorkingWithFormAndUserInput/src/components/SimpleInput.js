import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setenteredName] = useState("");

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  /*

  If your need the value only once when the form is submitted ,using ref will be better because logging and 
  updating the state value with every keystroke is a bit overkill.

  However , if you need the vlaue after every keystroke , for example for an instant validation , then using 
  state is better because with ref you cant really do that.


  */
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setenteredName(""); // resetting the value
    /*
    Resetting the values using ref doesnt have a ideal way .
    Because we are directly manipulating DOM here , We're using some vanilla JS code to directly
    reach out to the dom and change something there. 
    And that is typically not something you should do.You should leave that upto react.
    */
    nameInputRef.current.value = ""; // not an ideal way of reseting
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
