import React from 'react';
import './default.scss'
import { ShoppingProvider } from './components/ShoppingContext/ShoopingContext'
import Header from './components/Header/index'
import Shelf from './components/Shelf/index'
import ShoppingCart from './components/ShoppingCart/index'

function App() {
  return (
    <>
      <ShoppingProvider>
        <Header />
        <ShoppingCart />
        <Shelf />
      </ShoppingProvider>  
    </>
  );
}

export default App;