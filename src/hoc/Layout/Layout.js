import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary'
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        })
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer
                    visible={this.state.sideDrawerOpen}
                    toggleSideDrawer={this.sideDrawerToggleHandler}
                >
                </SideDrawer>

                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;