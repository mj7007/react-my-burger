import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Aux from '../../hoc/Aux';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class Burgerbuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const updatedTotalPrice = this.state.totalPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedTotalPrice
    });

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const updateTotalPrice = this.state.totalPrice - priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updateTotalPrice
    });

    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default Burgerbuilder;
