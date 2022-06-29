import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, refs) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(refs, () => {
        return {
            focus: activate
        }
    });

    return <div
        className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
            }`}
    >
        <label htmlFor={props.id}>{props.label}</label>
        <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur} // whenever the input field looses focus , the validation function is called
        />
    </div>
});

export default Input;