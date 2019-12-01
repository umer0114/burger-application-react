import React from 'react';
import classes from './Logo.css';
import BurgerLogo from '../../assets/images/burger-logo.png';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={BurgerLogo} alt="MyBurger"></img>
        </div>
    );
};

export default Logo;