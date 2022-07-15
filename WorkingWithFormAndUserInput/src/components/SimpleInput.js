import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setenteredName] = useState("");
  const [enteredNameIsValid, setenteredNameIsValid] = useState(false);
  const [enteredNameTouched, setenteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setenteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setenteredNameIsValid(true);
    }
  };

  const nameInputBlurHandler = (event) => {
    setenteredNameTouched(true);
    if (enteredName.trim() === "") {
      setenteredNameIsValid(false);
    }
  };

  /*

  If your need the value only once when the form is submitted ,using ref will be better because logging and 
  updating the state value with every keystroke is a bit overkill.

  However , if you need the vlaue after every keystroke , for example for an instant validation , then using 
  state is better because with ref you cant really do that.


  */
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setenteredNameTouched(true);

    if (enteredName.trim() === "") {
      setenteredNameIsValid(false);
      return;
    }
    setenteredNameIsValid(true);

    /*
    The client-side validation which we're doing here , where we validate in the browser , is'nt everything you should be doing.
    If you have a real website a real web-application , which you're building , then validating in the browser as we are about to
    add it here is great for the user experience because you give user a direct feedback , but you always should validate the inputs
    on the server , because this code here on the browser , can be edited by the user . We can dive into the source code and change
    the raw javascript code . So that is not reliable . 

    */

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

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control ";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler} // when the input field looses focus
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
