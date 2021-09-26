import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';


const Product = (props) => {
    // console.log(props.product);
    // console.log(props);
    const {name, img, seller, price, stock} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />

            </div>
            <div >
                <h4 className='product-name'>{name}</h4>
                <p><small>by {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                initialRating={props.product.star}
                className='icon-color'
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                ></Rating>
                <br/>
                <button onClick={()=>props.handleAddToCart(props.product)} className='btn-regular'>{cartIcon} add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;