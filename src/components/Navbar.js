import React from "react";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { cartProductIds } = useSelector((state) => state.cart);

    return (
            <nav className="d-sm-flex justify-content-around">
                <div class="d-flex">
                <Link class="navbar-title navbar-link d-flex align-items-center" to="/" end>
                <h1>k a w a i i ♡ s t o r e</h1>
                <i className="bi bi-shop-window" />
                </Link>
                </div>

                <Link class="cart navbar-link d-flex align-items-center me-ms-5" to="/cart" title="cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                <p className="cart-number">{cartProductIds.length} </p>
                </Link>
            </nav>
    )
}

export default Navbar;