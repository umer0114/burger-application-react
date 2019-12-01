import React from 'react';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import Classes from './Burger.css';

const Burger = (props) => {
    let generatedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])]
                .map((_, index) => {
                    return <BurgerIngredient type={igKey} key={igKey+index}></BurgerIngredient>
                })
        })
            .reduce((arr, val) => {
                return arr.concat(val);
            });
        if (!generatedIngredients.length) {
            generatedIngredients = <p>Please start adding ingredients.</p>
        }
    return (
        <div className={Classes.content}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {generatedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
}

export default Burger;