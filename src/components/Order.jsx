import React from "react";

// order component

export default function Order(props) {
    const { order } = props;
    return (
        <div>
            <h1>Order</h1>
            {console.log(order)}
            {order.map((pet) => (
                <div>
                    <p key={pet.id}>{pet.name}</p>
                    <p>{pet.quantity} шт</p>
                </div>
            ))}
            <p>-----------------------------------------------</p>
        </div>
    );
}