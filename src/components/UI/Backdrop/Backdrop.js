import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
    return (
        <div 
            className={classes.Backdrop}
            onClick={props.clicked}
        ></div>
    );
};

export default Backdrop;