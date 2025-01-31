import React ,{useState } from 'react';
import './App.css';
import { Header } from './Components/Layout/Header';
import  { Meals }  from './Components/meals/Meals';
import Cart from "./Components/Cart/Cart";   
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hiddenCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <div className="App">
     <CartProvider>
      {cartIsShown && <Cart onClose={hiddenCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
     </CartProvider>
    </div>
  );
}

export default App;
