import React, { useContext } from 'react'
import { ShoppingContext } from '../ShoppingContext/ShoopingContext'
import './style.scss'

const Checkout = () => {
    const [, cartProducts] = useContext(ShoppingContext)

    
    const calculateTotal = () => {
        let total = 0;
        if(cartProducts.length !== 0){
            const result = cartProducts.map(product => product.price * product.quantity).reduce((a, b) => a + b)
            total = result;
            }
            return total
        }
        

    return (
        <div className="checkout-container">
            <div className="total">
                <span>Total:</span>
                <span>£{calculateTotal()}</span>
            </div>
        <button>CHECKOUT</button>
        </div>
    )
}

export default Checkout
