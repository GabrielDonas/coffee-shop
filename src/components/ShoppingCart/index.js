import React, { useContext } from 'react';
import { ShoppingContext } from '../ShoppingContext/ShoopingContext'
import ShoppingCartItems from '../ShoppingCartItems/index'
import Checkout from "../Checkout/index"
import { slide as Menu } from 'react-burger-menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.scss'


const ShoppingCart = () => {
  const [, cartProducts] = useContext(ShoppingContext)


  return (
      <div>
        <button className="bm-burger-button">
          <ShoppingCartIcon className="cart"/>
        </button> 
        <Menu isOpen={false} right>

          {cartProducts.map((product, index) => {
             return <ShoppingCartItems key={index} 
              title={product.title} 
              price={product.price} 
              quantity={product.quantity}/>
        })}

          <Checkout />
        </Menu>
      </div>
  )
}

export default ShoppingCart
