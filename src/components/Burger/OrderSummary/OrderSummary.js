import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const list = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{list}</ul>
      <p>
        <strong>Total Price : ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
    </Aux>
  );
};

export default orderSummary;
