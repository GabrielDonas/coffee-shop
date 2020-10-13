import React from 'react'
import './styles.scss';
import CoffeMainOne from '../../assets/coffee-placeholder_1.jpg';
import CoffeMainTwo from '../../assets/coffee-placeholder_2.jpg';

const Directory = () => {
    return (
        <div className="directory">
            <div className="wrap">
                <div style={{backgroundImage: `url(${CoffeMainOne})`}}
                className="item">
                    <a>Shop Coffee 1</a>
                </div>
                <div style={{backgroundImage: `url(${CoffeMainTwo})`}}
                className="item">
                    <a>Shop Coffee 2</a>
                </div>
            </div>
        </div>
    )
}

export default Directory
