import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Backdrop from '../UI/Backdrop/Backdrop'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const SideDrawer = (props) => {
    let appliedClasses = [classes.SideDrawer, classes.Open];
    if (!props.visible) {
        appliedClasses = [classes.SideDrawer, classes.Close];
    }
    return (
        <Auxiliary>
            {props.visible ? <Backdrop clicked={props.toggleSideDrawer}></Backdrop>: null}
            <div className={appliedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems link='/'>Home Page</NavigationItems>
                </nav>
            </div>
        </Auxiliary>
    );
};

export default SideDrawer;