import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from '../ContactData/ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type='text' name="name" placeholder="Please enter name"></input>
                    <input className={classes.Input} type='email' name="email" placeholder="Please enter email"></input>
                    <input className={classes.Input} type='text' name="street" placeholder="Please enter street"></input>
                    <input className={classes.Input} type='text' name="postal" placeholder="Please enter postal"></input>

                    <Button type="Success" clicked={this.orderHandler}>Order</Button>

                </form>
            </div>
        );
    }
}

export default ContactData;