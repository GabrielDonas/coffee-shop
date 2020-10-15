import React from 'react'
import CoffeePlaceholder from '../../assets/coffee-placeholder_1.jpg'
import './style.scss'

const Shelf = () => {
    return (
        <div>
            <div className="shelf-container">
                <div className="shelf-item">
                    <div className="image-container">
                        <div style={{backgroundImage: `url(${CoffeePlaceholder})`}}
                            className="thumbnail">
                        </div>
                    </div>
                    <h3 className="title">Red Brick</h3>
                    <p>Seasonal blend is a mix of Los Ancestros from Guatemala and Puente Tarrazu from Costa Rica.</p>
                    <div className="price">£10.00</div>
                    <button>Add to Cart</button>
                </div> 
                <div className="shelf-item">
                    <div className="image-container">
                        <div style={{backgroundImage: `url(${CoffeePlaceholder})`}}
                            className="thumbnail">
                        </div>
                    </div>
                    <h3 className="title">Red Brick</h3>
                    <p>Seasonal blend is a mix of Los Ancestros from Guatemala and Puente Tarrazu from Costa Rica.</p>
                    <div className="price">£10.00</div>
                    <button>Add to Cart</button>
                </div> 
            </div>
        </div>
    )
}

export default Shelf