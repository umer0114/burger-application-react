import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
        </ul>
    );
};

export default NavigationItems;