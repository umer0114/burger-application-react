import React from 'react';
import classes from './Order.css'

const order = (props) => {

    let generatedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return <span className={classes.capsule}> {igKey} ({props.ingredients[igKey]})</span>
        })


    return (
        <div className={classes.Order}>
            <p>Ingredients: {generatedIngredients}</p>
            <p>Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;