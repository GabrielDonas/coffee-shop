import React from 'react'
import './style.scss'
import CoffeeBag from '../../assets/CoffeeBag.jpg'

const ShoppingCartItems = ({ title, price, quantity}) => {


    return (
        <div className="items-container">
            <div className="item-info">
                <div className="thumbnail-container">
                    <div className="thumbnail-cart" style={{backgroundImage: `url(${CoffeeBag})`}}>
                    </div>
                </div>
                <div className="item-description">
                    <div className="title-cart">{title}</div>
                    <div className="item-price">£{price}</div>
                </div>
            </div>
            
            <div className="buttons-container">
                <button className="remove-item">-</button>
                <button className="quantity-cart">{quantity}</button>
                <button className="add-item" onClick={() => quantity++}>+</button>
            </div>
        </div>
    )
}

export default ShoppingCartItems
