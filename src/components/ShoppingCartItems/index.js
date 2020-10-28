import React from 'react'
import './style.scss'
import CoffeeBag from '../../assets/CoffeeBag.jpg'

const ShoppingCartItems = () => {
    return (
        <div className="items-container">
            <div className="item-info">
                <div className="thumbnail-container">
                    <div className="thumbnail-cart" style={{backgroundImage: `url(${CoffeeBag})`}}>
                    </div>
                </div>
                <div className="item-description">
                    <div className="title-cart">RED BRICK</div>
                    <div className="item-price">£13</div>
                </div>
            </div>
            
            <div className="buttons-container">
                <button className="remove-item">-</button>
                <button className="quantity-cart">1</button>
                <button className="add-item">+</button>
            </div>
        </div>
    )
}

export default ShoppingCartItems
