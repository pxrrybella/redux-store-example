import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import cartSlice from '../data/cartSlice'

const Checkout = () => {
    const dispatch = useDispatch()
    const { clearAllItems } = cartSlice.actions

    dispatch(clearAllItems());

    return (
        <main class="container main-store">
        <h2>Demo ended, thank you!.</h2>
        <Link class="pink-background" to="/" end>
            <h2>Click here to go back to the home page.</h2>
        </Link>
        </main>
    );

};

export default Checkout;