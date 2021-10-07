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

            <h1>TotalPayment: {
                 cartItems.length !== 0 &&
                cartItems.map(item=> {
                    if(item.id === "1"){
                        return item.qty * item.price+Math.floor(item.qty/3)*-20 
                    }else if(item.id === "2") {
                        return item.qty * item.price+Math.floor(item.qty/2)*-15 
                    }else {
                        return item.qty * item.price
                    }
                }).reduce((a,c)=> a +c )
                }
            </h1>

            <h2> Total items : {
             cartItems.reduce((a,c)=> {
             return a +c.qty},0)
            }</h2>

            <h2> Subtotal(Before discount): {
            cartItems.reduce((a,c)=> {
             return a +c.qty*c.price},0)
            }</h2>

        </div>
    );
};

export default Basket;