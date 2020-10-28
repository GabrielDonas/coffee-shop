import React, { useState } from 'react';
import ShoppingCartItems from '../ShoppingCartItems/index'
import Checkout from "../Checkout/index"
import { slide as Menu } from 'react-burger-menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './style.scss'


const ShoppingCart = () => {
    const [isOpen, setIsOpen] = useState(false);

    function showSettings(event) {
    event.preventDefault();
    setIsOpen(true)
    }

    return (
        <div>
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
