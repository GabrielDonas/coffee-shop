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
          <div className={cartProducts.length > 0 ? "badge-counter-wrapper" : "quantity-none"}>
            <div className="badge-count">{cartProducts.length}</div>
          </div>
        </button> 
        <Menu isOpen={false} right>
        <div className="item-list">
            {cartProducts.map((product, index) => {
               return <ShoppingCartItems key={index} 
                title={product.title} 
                price={product.price} 
                quantity={product.quantity}/>
            })}
        </div>
          <Checkout />
        </Menu>
      </div>
  )
}

export default ShoppingCart
