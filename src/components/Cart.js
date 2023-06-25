import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import productList from "../data/productList.json"
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../data/cartSlice';


const Cart = () => {
    // cartProductIds is part of the state of cart (cartSlice)
    const [total, setTotal] = useState(0);
    const { cartProductIds } = useSelector((state) => state.cart)
    const { addToCart, removeFromCart } = cartSlice.actions
    const dispatch = useDispatch()
    // cartData -> array with the products in the cart (not just the ids)
    const cartData = productList.products.filter((product) => cartProductIds.includes(product.id));

    useEffect(() => {
        //function to obtain the total of products
        const totalCalc = () => {
            let total = 0;
            //map through cartProductsId array, adding the price of each
            //product based on its id
            cartProductIds.map(id => total += productList.products.filter(product => product.id === id)[0].price);
            return total;
        }
        setTotal(totalCalc())
      }, [cartProductIds, cartData]);


    return (<main class="container main-store">
    { cartProductIds.length === 0 ? 
    <>
    <h2>No products added yet.</h2>
    <Link class="pink-background" to="/" end>
        <h2>Click here to go back to the home page.</h2>
    </Link>
    </>
    : 
    <>
    <h2>Items in your cart</h2>
    <section class="d-flex alignt-items-center justify-content-evenly">
    <main class="cart-items d-flex flex-wrap">
    {
        cartData.map(
            item => 
            <div class="product p-3 m-2 w-25 d-flex flex-column justify-content-center align-items-center">
            <p>{item.name} (Quantity: {cartProductIds.filter(id => id === item.id).length})</p>
            <div class="cart-image-buttons">
            <img src={item.imageUrl} class="w-25 mb-3 rounded"  alt=""/>
                <div class="btn-group me-2" role="group">
                        <button id="button-one" type="button" class="btn btn-pink" onClick={() => dispatch(removeFromCart(item.id))}>-</button>
                        <button id="button-two" type="button" class="btn btn-outline-pink">{cartProductIds.filter(product => product === item.id).length}</button>
                        <button id="button-three" type="button" class="btn btn-pink" onClick={() => dispatch(addToCart(item.id))}>+</button>
                </div>
            </div>
            </div>
        )
    }
    </main>
    <aside class="checkout-section">
    <h4>Total: ${total}</h4>
    <Link to="/checkout"><button class="btn btn-light btn-pink"> Checkout </button></Link>
    <Link to="/"><button class="btn btn-light"> Go back </button></Link>

    </aside>
    </section>
    </> }
    </main>);
    
}

export default Cart;