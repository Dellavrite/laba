import React from "react";

// pet component for api https://petstore.swagger.io/v2/pet/findByStatus?status=available
export default function Pet({ pet, user, setCart, cart }) {
    // simple animation for button with class anim
    const handleClick = (e) => {
        e.preventDefault();
        e.target.classList.add("anim");
        setTimeout(() => {
            e.target.classList.remove("anim");
        }, 1000);
    };

    return (
        <div>
            <h1>{pet.id}</h1>
            <h2>{pet.name}</h2>
            {user ? <button className={""} onClick={(e) => {
                setCart(pet);
                handleClick(e);
            }
            }>Add to Cart</button> : null}
        </div>
    );
}