import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart'; 
import CartProvider from './store/CartProvider';
import Home from './pages/Home'; 
import ChefJoin from './pages/ChefJoin'; 

function App() {

const [cartIsShown, setCartIsShown]= useState(false);

const showCartHandler = () => {
  setCartIsShown(true); 
}; 

const hideCartHandler = () => {
 setCartIsShown(false); 
}; 

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<ChefJoin />} />
    </Routes>
    </CartProvider>
  );
}

export default App;