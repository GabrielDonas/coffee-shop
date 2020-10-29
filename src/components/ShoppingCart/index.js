import React, { useContext } from 'react';
import { ShoppingContext } from '../ShoppingContext/ShoopingContext'
import ShoppingCartItems from '../ShoppingCartItems/index'
import Checkout from "../Checkout/index"
import { slide as Menu } from 'react-burger-menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.scss'


const ShoppingCart = () => {
  const [productlist, cartProducts, setCartProducts] = useContext(ShoppingContext) // fix this

  return (
      <div>
        <button onClick={() => console.log(cartProducts)}>LOOOOOG</button> {/*remove once it's fixed*/}
        <button className="bm-burger-button">
          <ShoppingCartIcon className="cart"/>
        </button> 
        <Menu isOpen={false} right>
          <ShoppingCartItems />
          <Checkout />
        </Menu>
      </div>
  )
}

export default ShoppingCart
