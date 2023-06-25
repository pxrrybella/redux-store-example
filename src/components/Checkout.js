import React from "react";
import { NavLink } from 'react-router-dom'

import productList from "../data/productList.json"
import { useDispatch, useSelector } from 'react-redux'
import cartSlice from '../data/cartSlice'

const Checkout = () => {
    const dispatch = useDispatch()
    const { clearAllItems } = cartSlice.actions
    const { cartProductIds } = useSelector((state) => state.cart)
    const cartData = productList.products.filter((product) => cartProductIds.includes(product.id));
    const total = () => {
        let counter = 0;
        cartData.map(item =>
            counter += item.price);
        return counter;
    }

    return (<>
        { cartProductIds.length === 0 ? 
        <>
        <h1>Demo ended.</h1>
        <NavLink to="/" end>
            <h1>Go Back Kawaii Store's Home</h1>
            <i className="bi bi-shop-window" />
        </NavLink>
        </>
        : 
        <main>
            <h1>Checkout</h1>
            <section>{cartData.map(item => <p>{item.name}, {item.price}</p>)}</section>
            <p>{total()}</p>
            <button onClick={()=> dispatch(clearAllItems())}>Pay</button>
        </main> }
        </>);

};

export default Checkout;