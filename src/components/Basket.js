import React from 'react';

const Basket = (props) => {
    console.log(props,"<<< props from basket")
    const {cartItems} =props;
    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 && <p>Cart is empty!</p>}
        </div>
    );
};

export default Basket;