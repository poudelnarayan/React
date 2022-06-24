import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = props => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = event => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid username and age'
            });
            return;
        }
        // + sign converts digits in string to numbers
        if (+age < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0)'
            });
            return;
        }
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);

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
                    <input type="text" id='username' value={username} onChange={usernameChangeHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input type="number" id='age' value={age} onChange={ageChangeHandler} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
    );

}

export default AddUser;