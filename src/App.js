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

  return (
    <div>
     <Main items={items} addToCart={addToCart} ></Main>
     <Basket></Basket>
    </div>
  );
}

export default App;
