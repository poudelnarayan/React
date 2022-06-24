import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  /*
    `` -> backticks is called template literal
    whatever you type in between will be treated as a regular string
    and also you can inject the dynamic string

  */

  const FormControl = styled.div`
    margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${porps => props.invalid ? 'red ' : 'black'}
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
    background:${porps => props.invalid ? '#ffd7d7' : 'transparent'}
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  
  &.invalid input {
    border-color:red;
    background:#ffd7d7;
  }
  
  &.invalid label {
    color:red;
  }
  
  `;

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
  //       {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label> */}
  //       {/* <input style={{ borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent' }} type="text" onChange={goalInputChangeHandler} /> */}
  //       <label >Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />

  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

 


  return (
    <form onSubmit={formSubmitHandler} >
      {/* <FormControl className={!isValid && 'invalid'} > */}
      <FormControl invalid={!isValid} >

        {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label> */}
        {/* <input style={{ borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent' }} type="text" onChange={goalInputChangeHandler} /> */}
        <label >Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} key='GoalInput' />

      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
