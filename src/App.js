import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data"
import {useState} from "react";

function App() {
  const {items} = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exist = cartItems.find(elem=> elem.id === item.id);
    if(exist) {
      setCartItems(
        cartItems.map(elem=> elem.id === item.id ? {...exist, qty:exist.qty+1} : elem)
      );
    }else {
      setCartItems([...cartItems, {...item, qty: 1}]);
    }
  }

  const removeFromCart = (item) => {
    const exist = cartItems.find(elem=>elem.id === item.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter(elem=> elem.id !== item.id));
    }else {
      setCartItems(
        cartItems.map(elem=> elem.id === item.id ? {...exist, qty:exist.qty-1} : elem)
 
      )
    }
  }

  return (
    <div>
     <Main items={items} addToCart={addToCart} removeFromCart={removeFromCart}></Main>
     <Basket cartItems={cartItems}></Basket>
    </div>
  );
}

export default App;
