import React, {useEffect} from "react";
import Pet from "../components/Pet";

// catalog for pet shop

export default function Catalog({ pets, loading, user, setCart, cart } ) {
    useEffect(() => {
    }, [])
    return (
        <div>
            <h1>Catalog</h1>
            {loading ?
                <p>Loading...</p> :
                <div>{pets?.map((pet) => {
                    return <Pet key={pet.id} pet={pet} user={user} setCart={setCart} cart={cart} />
                })}</div>}
        </div>
    )

}