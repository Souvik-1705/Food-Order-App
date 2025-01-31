import React ,{ Fragment } from 'react';
import './App.css';
import { Header } from './Components/Layout/Header';
import  { Meals }  from './Components/meals/Meals';
import Cart from "./Components/Cart/Cart";   

function App() {
  return (
    <div className="App">
     <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
     </Fragment>
    </div>
  );
}

export default App;
