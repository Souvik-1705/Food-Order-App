import React ,{ Fragment,useState } from 'react';
import './App.css';
import { Header } from './Components/Layout/Header';
import  { Meals }  from './Components/meals/Meals';
import Cart from "./Components/Cart/Cart";   

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
     <Fragment>
      {cartIsShown && <Cart onClose={hiddenCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
     </Fragment>
    </div>
  );
}

export default App;
