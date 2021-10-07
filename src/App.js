import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data"

function App() {
  const {items} = data;

  return (
    <div>
     <Main items={items}></Main>
     <Basket></Basket>
    </div>
  );
}

export default App;
