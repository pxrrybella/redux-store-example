import React from "react";
import productList from "../data/productList.json"
import { useDispatch, useSelector } from 'react-redux'
import cartSlice from '../data/cartSlice'

const Home = () => {
    const { cartProductIds } = useSelector((state) => state.cart)
    const { addToCart, removeFromCart } = cartSlice.actions
    const dispatch = useDispatch()
  

    return (
        <main class="container main-store">
            <aside class="home-toast" onClick={()=> document.querySelector(".home-toast").classList.toggle("hidden")}>
                <span>Click on the cart icon to checkout! ☆～（ゝ。∂）</span>
                <sub>Click this notification to close it.</sub>
            </aside>
            <h2>Products</h2>
            <section class="d-flex flex-wrap align-items-center justify-content-center">
            {productList.products.map(
                item => <article class="product">
                    <img class="w-25 m-3 rounded" src={item.imageUrl} alt=""/>
                    <div class="d-flex flex-column">
                    <p>{item.name} ${item.price}</p>
                    
                    {!cartProductIds.includes(item.id) && (
                    <button className="btn btn-pink" onClick={() => dispatch(addToCart(item.id))}>
                                    {/* with dispatch i send the item data to the slice logic through the action parameter*/}
                      Add to cart
                    </button>
                    )}

                    {cartProductIds.includes(item.id) && (
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-pink" onClick={() => dispatch(removeFromCart(item.id))}>-</button>
                        <button type="button" class="btn btn-outline-pink">{cartProductIds.filter(product => product === item.id).length}</button>
                        <button type="button" class="btn btn-pink" onClick={() => dispatch(addToCart(item.id))}>+</button>
                    </div>
                    )}
                    </div>
                </article>
            )}
            </section>
        </main>
    )
}

export default Home;