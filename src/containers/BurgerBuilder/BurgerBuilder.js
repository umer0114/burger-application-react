import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
    cheese: 0.1,
    bacon: 0.5,
    meat: 0.6,
    salad: 0.2
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    };

    isOrderPurchaseable = (ingredients) => {
        let sum = Object.keys(ingredients).map((ingredient) => ingredients[ingredient])
                .reduce((sum, el) => {
                    return sum+el;
                }, 0);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientsHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        ingredients[type]++;
        let oldPrice = this.state.totalPrice;
        oldPrice += INGREDIENT_PRICES[type];
        this.setState({ingredients, totalPrice: oldPrice}, () => this.isOrderPurchaseable(this.state.ingredients));
    }

    orderCompletedHandler = () => {
        this.setState({purchasing: true});
    }

    removeIngredientsHandler = (type) => {
        const ingredients = {...this.state.ingredients};
        if (ingredients[type] <= 0) {
            return;
        }
        ingredients[type]--;
        let oldPrice = this.state.totalPrice;
        oldPrice -= INGREDIENT_PRICES[type];
        this.setState({ingredients, totalPrice: oldPrice}, () => this.isOrderPurchaseable(this.state.ingredients));
    }

    closeModalHandler = () => {
        this.setState({purchasing: false});
    }

    continueHandler = () => {
        const orders = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'Umer',
                address: 'Pakistan',
                email: 'umer.tahir@hotmail.com'
            }
        }
        axios.post('orders.json', orders)
            .then(response => {
                console.log(response);
                this.props.history.push('/checkout');
                this.setState({purchasing: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({purchasing: false});
            })
    }

    cancelHandler = () => {
        this.setState({purchasing: false});
    }

    render() {
        return (
            <Auxiliary>
                {this.state.purchasing ?
                <Modal
                    show={this.state.purchasing}
                    closeModal={this.closeModalHandler}
                >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        continue={this.continueHandler}
                        cancel={this.cancelHandler}
                        price={this.state.totalPrice}
                    >
                    </OrderSummary>
                </Modal> :
                null}
                
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    add={this.addIngredientsHandler}
                    remove={this.removeIngredientsHandler}
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    orderClicked={this.orderCompletedHandler}
                >
                </BuildControls>
            </Auxiliary>
        );
    }    
} 

export default withErrorHandler(BurgerBuilder, axios);