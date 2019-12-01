import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
];
const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            {controls.map((ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    add={() => props.add(ctrl.type)}
                    remove={() => props.remove(ctrl.type)}
                    disabled={props.ingredients[ctrl.type] === 0}
                >
                </BuildControl>
            )))}
            <button
                onClick={props.orderClicked}
                className={classes.OrderButton}
                disabled={!props.purchaseable}
            >
                ORDER NOW
            </button>
        </div>
    );
};

export default BuildControls;