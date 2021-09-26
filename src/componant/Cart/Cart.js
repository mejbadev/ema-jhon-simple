import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    // const totalReducer = (previous, product) => previous+ product?.quantity * product.price;
    // const total =props.cart.reduce(totalReducer,0); 
    let totalQuantity = 0;
    let total =0; 
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        total =total+ product.price*product.quantity;
        totalQuantity = totalQuantity+ product.quantity;
        
    }
    const shipping = total> 0? 15: 0;
    const tax = (parseFloat(total)+parseFloat(shipping))*0.1;
    const allTotal = parseFloat(total)+parseFloat(shipping)+parseFloat(tax);
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {totalQuantity}</h4>
            <h4>Total Price: {total}</h4>
            <h4>Shipping: {shipping}</h4>
            <h4>Tax: {tax}</h4>
            <h4>All Total: {allTotal}</h4>
        </div>
    );
};

export default Cart;