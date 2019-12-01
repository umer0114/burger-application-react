import React from 'react';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <Auxiliary>
        {props.show ? <Backdrop closeModal={props.clicked}></Backdrop>: null}
        <div
            className={classes.Modal}
            style={{opacity: props.show ? '1': '0'}}
        >
            {props.children}
        </div>
        </Auxiliary>
    );
};

export default Modal;