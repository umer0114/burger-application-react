import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Button from '../UI/Button/Button';

const OrderSummary = (props) => {
     const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
         return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>: 
                <span style={{paddingLeft: '4px'}}>{props.ingredients[igKey]}</span>
            </li>
        );
     });
     return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>Your delicious burger has the following ingredients:</p>

            <ul>
                {ingredientSummary}
            </ul>

            <div>
                Total Price: <strong>{props.price.toFixed(2)}</strong>
                <br/>
                Continue to checkout?
                <br/>

                <Button type="Success" clicked={props.continue}>Checkout</Button>
                <Button type="Danger" clicked={props.cancel}>Cancel</Button>
            </div>
        </Auxiliary>
     );
};

export default OrderSummary;