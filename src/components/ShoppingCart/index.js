import React from 'react'
import { slide as Menu } from 'react-burger-menu'

const ShoppingCart = () => {
    const showSettings =  e => {
        e.preventDefault();
    }

    return (
        <div>
            <Menu rigth>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/">About</a>
                <a id="contact" className="menu-item" href="/">Contact</a>
                <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        </div>
    )
}

export default ShoppingCart
