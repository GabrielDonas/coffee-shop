import React, { useState, useEffect } from 'react'
import CoffeePlaceholder from '../../assets/coffee-placeholder_1.jpg'
import data from '../../data'
import './style.scss'

const Shelf = () => {
    const [total, setTotal] = useState(0);

    const HandleSum = price => {
        setTotal(total + price) 
    }


    return (
        <div>
            <h1>Total: {total}</h1>
            <div className="shelf-container">
                {data.products.map(product => 
                    <div className="shelf-item" key={product.id}>
                        <div className="image-container">
                            <div style={{backgroundImage: `url(${CoffeePlaceholder})`}}
                                className="thumbnail">
                            </div>
                        </div>
                        <h3 className="title">{product.title} <span role="img" aria-label={`flag of ${product.country}`}>{product.flag}</span></h3>
                        <div className="description">{product.description}</div>
                        <div className="price">{product.price}£</div>
                        <button onClick={() => {HandleSum(product.price)}}>Add to Cart</button>
                </div> 
                )}
            </div>
        </div>
    )
}

export default Shelf