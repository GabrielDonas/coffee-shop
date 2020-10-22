import React from 'react'
import CoffeePlaceholder from '../../assets/coffee-placeholder_1.jpg'
import data from '../../data'
import './style.scss'

const Shelf = () => {
    return (
        <div>
            <div className="shelf-container">
                {data.products.map(product => 
                    <div className="shelf-item">
                        <div className="image-container">
                            <div style={{backgroundImage: `url(${CoffeePlaceholder})`}}
                                className="thumbnail">
                            </div>
                        </div>
                        <h3 className="title">{product.title} <span role="img" aria-label="brazilian flag">🇧🇷</span></h3>
                        <div className="description">{product.description}</div>
                        <div className="price">{product.price}£</div>
                        <button>Add to Cart</button>
                </div> 
                )}
            </div>
        </div>
    )
}

export default Shelf