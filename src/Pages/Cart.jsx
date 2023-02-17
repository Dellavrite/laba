import React from "react";
import {Link} from "react-router-dom";

// Cart page
// display all pet items in the cart and buttons to add items to the order

export default function Cart({ cart, pets, user, addToOrder, addToCart, setCart, decrease, removeFromCart }) {
    if (!cart) {
        return null
    }
    return (
    <div className="cart">
        {cart?.map((item) => {
            return (
                <div key={item.id} className="cart-item">
                    <h3>{item.name}</h3>
                    <p>{item.quantity}</p>
                    <button onClick={
                        () => addToCart(
                            {
                                ...cart.find((i) => i.id === item.id),
                            }
                        )}>Increase</button>
                    <button onClick={ () =>
                        decrease(item)
                    }>Decrease</button>
                    <button onClick={
                        () => removeFromCart(item)
                    }>Remove</button>
                </div>
            )
        })}
        <Link to="/orders">
            <button onClick={() => addToOrder(cart)}>Add to order</button>
        </Link>


    </div>
    )
}