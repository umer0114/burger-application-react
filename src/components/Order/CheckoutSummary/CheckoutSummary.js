import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope to deliver your dream burger</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                type="Danger"
                clicked={props.checkoutCanceledHandler}
            >
                CANCEL
            </Button>

            <Button
                type="Success"
                clicked={props.checkoutContinueHandler}
            >
                CONTINUE
            </Button>
        </div>
    );
}

export default checkoutSummary;