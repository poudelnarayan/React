import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const [error, setError] = useState();


    const addUserHandler = event => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const userage = ageInputRef.current.value;
        if (name.trim().length === 0 || userage.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid username and age'
            });
            return;
        }
        // + sign converts digits in string to numbers
        if (+userage < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0)'
            });
            return;
        }
        props.onAddUser(name, userage);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';


    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler} >
                    <label htmlFor='username'  >Username</label>
                    <input type="text" id='username' ref={nameInputRef} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input type="number" id='age' ref={ageInputRef} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
    );

}

export default AddUser;