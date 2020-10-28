import React from 'react'
import './style.scss'

const Checkout = () => {
    return (
        <div className="checkout-container">
            <div className="total">
                <span>Total:</span>
                <span>£10</span>
            </div>
        <button>CHECKOUT</button>
        </div>
    )
}

export default Checkout
