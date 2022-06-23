import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*
   USING A SINGLE STATE

   const [userInput, setUserInput] = useState({
       enteredTitle:'',
       enteredAmount:'',
       enteredDate:'',
   })


   */

    const titleChangeHandler = (event) => {// We automatically get the event passed by the onChange prop
        setEnteredTitle(event.target.value);
        /*
        !IF SINGLE STATE IS USED

        setUserInput({
            ...userInput,  // Spread Operator 
            enteredTitle: event.target.value,

        })  <-- this technically would work but in the niche case it would fail. and simply 
                    it's not a good practice to update it like this(As we depend on previous state).

        !INSTEAD WE MUST DO

        !Everytime when we depend on the previous state like this or as like a counter where a value is
        !incremented to the previous value we must do like this:


        setUserInput((prevState) => {
            
            return {...prevState , enteredTitle: event.target.value};
        
        })


        Now , why should we do like this?
            -> In many cases both will work fine, But react schedules state updates.
                It doesn't perfom them instantly. And therfore , theoritically , If you schedule a lot of
                state updates at the same time , you could be depending on the outdated or incorrect state snapshot.
                In this new method, react will gurantee the state you get in this inner function will always be the latest state
                snapshot.


        */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        /*
        IF SINGLE STATE IS USED

        setUserInput({
            ...userInput,  // Spread Operator 
            enteredAmount: event.target.value,

        })

        */
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        /*
       IF SINGLE STATE IS USED

       setUserInput({
           ...userInput,  // Spread Operator 
           enteredDate: event.target.value,

       })

       */
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredDate,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                {/* value = {enteredTitle}  refers to two way binding */}
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="1" step="1" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type='submit'> Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;

/*
Two way binding:
    For input we don't just listen to changes ,  but we can also pass a new value back into the input.
    So that we can reset or change the input programatically.
*/

