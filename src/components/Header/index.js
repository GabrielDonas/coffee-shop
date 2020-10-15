import React from 'react'
import './style.scss'
import Logo from './../../assets/Logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className="container">
            <div style={{backgroundImage: `url(${Logo})`}}
                className="logo">
            </div>
            <button variant="contained">
                <ShoppingCartIcon className="cart"/>
            </button>
        </div>
    )
}

export default Header
