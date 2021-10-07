import React from 'react';

const Basket = (props) => {
    console.log(props,"<<< props from basket")
    const {cartItems} =props;
    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 && <p>Cart is empty!</p>}
            <ul>
            {cartItems.map(item=>{
                 return(
                     <li ley={item.id}>
                     <h2>{item.name}</h2>
                     <h2>Quentity: {item.qty}</h2>
                     <h2>Price: {
                         item.id === "1" ? item.qty * item.price+Math.floor(item.qty/3)*-20 : 
                         item.id === "2" ? item.qty * item.price+Math.floor(item.qty/2)*-15 : item.qty * item.price
                        } </h2>
                         
                    </li>
                 )
            })}  
            </ul>
        </div>
    );
};

export default Basket;