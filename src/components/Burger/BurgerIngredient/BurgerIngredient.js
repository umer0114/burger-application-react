import React from 'react';
import Classes from './BurgerIngredient.css'
import ProtoTypes from 'prop-types';

export const burgerTypes = {
    breadBottom: 'bread-bottom',
    breadTop: 'bread-top',
    meat: 'meat',
    bacon: 'bacon',
    cheese: 'cheese',
    salad: 'salad'
};

const BurgerIngredient = (props) => {
    let ingredient = null;
    switch(props.type) {
        case burgerTypes.breadBottom:
            ingredient = <div className={Classes.BreadBottom}></div>
            break;
        case burgerTypes.breadTop:
                ingredient = (
                    <div className = {Classes.BreadTop}>
                        <div className={Classes.Seeds1}></div>
                        <div className={Classes.Seeds2}></div>
                    </div>
                );
            break;
        case burgerTypes.meat:
            ingredient = <div className={Classes.Meat}></div>
            break;
        case burgerTypes.cheese:
            ingredient = <div className={Classes.Cheese}></div>
            break;
        case burgerTypes.bacon:
            ingredient = <div className={Classes.Bacon}></div>
            break;
        case burgerTypes.salad:
            ingredient = <div className={Classes.Salad}></div>
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
}

BurgerIngredient.prototypes = {
    type: ProtoTypes.string.isRequired
};
export default BurgerIngredient;