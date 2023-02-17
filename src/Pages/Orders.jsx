import React from "react";
import Order from "../components/Order";

// page with orders

export default function Orders({ orders }) {
    return (
        <div>
            <h1>Orders</h1>
            { orders?.map(order => <Order order={order} />) }
        </div>
    )

}