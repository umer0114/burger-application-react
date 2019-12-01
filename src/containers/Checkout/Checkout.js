import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
        console.log('Clicked');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceledHandler={this.checkoutCanceledHandler}
                    checkoutContinueHandler={this.checkoutContinueHandler}
                >
                </CheckoutSummary>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={
                        (props) => (
                            <ContactData ingredients={props.ingredients} {...props}></ContactData>
                        )
                    }
                />
            </div>
        );
    }
}

export default Checkout;