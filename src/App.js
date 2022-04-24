import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Books from './Components/Book/Books';
import Card from './Components/Card/Card';
import CartProvider from './Store/CartProvider';
// import './App.css';


const App = () => {
  const [cardIsShown,setCardIsShown] = useState(false);
  const showCardHandler=()=>{
    setCardIsShown(true);
  }
  const hideCardHandler=()=>{
    setCardIsShown(false);
  }
  return(
  <CartProvider>
      {cardIsShown && <Card onClose={hideCardHandler}/>}
      <Header onShowCard={showCardHandler} />
      <main>
        <Books />
      </main>
  </CartProvider>
);
}
export default App;
