import React from 'react';
import './default.scss'
import Header from './components/Header/index'
import Shelf from './components/Shelf/index'
import ShoppingCart from './components/ShoppingCart/index'

function App() {
  return (
    <>  
      <Header />
      <ShoppingCart />
      <Shelf />
    </>
  );
}

export default App;
