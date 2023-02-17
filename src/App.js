import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Catalog from "./Pages/Catalog";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";


// Implement a SPA application that will interact with the already developed API at https://petstore.swagger.io/v2/pet/findByStatus?status=available
// All data on API requests can be viewed at https://petstore.swagger.io
// You need to create an online pet store.
const history = []
function App() {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [carts, setCarts] = useState([]);
    const [cart, setCart] = useState(null);
    useEffect(() => {
        if (user) {
            setCart(carts.find((cart) => cart.email === user.email))
        }
    }, [carts])
    const [orders, setOrders] = useState([]);
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const addToOrder = (cart) => {
        if (!orders) {
            setOrders([])
        }
        const newOrders = [...orders]
        newOrders.push(cart)
        setOrders(newOrders)

    }
    const addToCart = (item) => {
        const newCart = [...carts]
        let userCart = newCart.find((cart) => {
            return cart.email === user.email
        })
        if (!userCart) {
            userCart = {
                email: user.email,
                items: [],
            }
            newCart.push(userCart)
        }
        if (!userCart.items) {
            userCart.items = []
        }
        if (userCart.items.find((item_u) => item_u.id === item.id)){
            item.quantity = userCart.items.find((item_u) => item_u.id === item.id).quantity + 1
            console.log(userCart.items)
            userCart.items = userCart.items.filter((item_u) => item_u.id!== item.id)
            userCart.items.push(item)
        } else {
            item.quantity = 1
            userCart.items.push(item)
        }
        setCarts(newCart)
    }

    const decreaseItem = (item) => {
        const newCart = [...carts]
        let userCart = newCart.find((cart) => {
            return cart.email === user.email
        })
        userCart.items.map((i) => {
            if (userCart.items.find((item_u) => item_u.id === i.id)){
                if (i.quantity === 1){
                    i.quantity = userCart.items.find((item_u) => item_u.id === i.id).quantity - 1
                    userCart.items = userCart.items.filter((item_u) => item_u.id!== i.id)
                } else {
                    i.quantity = userCart.items.find((item_u) => item_u.id === i.id).quantity - 1
                }

            }
            return i
        });

            setCarts(newCart)
    }
    const getPets = () => {
        setLoading(true);
        fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            const response = data
            setPets(response);
            return response
        })
    };

    const removeFromCart = (item) => {
        const newCart = [...carts]
        let userCart = newCart.find((cart) => {
            return cart.email === user.email
        })
        userCart.items.map((i) => {
            if (userCart.items.find((item_u) => item_u.id === i.id)){
                if (true){
                    i.quantity = userCart.items.find((item_u) => item_u.id === i.id).quantity - 1
                    userCart.items = userCart.items.filter((item_u) => item_u.id!== i.id)
                } else {
                    i.quantity = userCart.items.find((item_u) => item_u.id === i.id).quantity - 1
                }

            }
            return i
        });

            setCarts(newCart)
    }

    useEffect(() => {
        getPets();
        console.log(pets);
    }, []);


  
  return (
    <Router>
      <div className="App">
          <nav>
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
              }}>
                  {user ? <div>
                  {/* button logout */}
                      <button onClick={
                          () => {
                              setUser(null);
                          }
                      }>
                          Logout
                      </button>
                  </div> : <div>
                      <Link
                          to="/login"
                      >Login</Link>
                      <br/>
                      <Link
                          to="/registration"
                          >Register</Link>
                      </div>}
                  <Link to="/pets">Catalog</Link>
                  <Link to="/cart">Cart</Link>
                  {user ? <Link to="/orders">orders</Link> : null}
              </div>
          </nav>

          <Routes>
              <Route path="/login" element={<Login user={user} setUser={setUser} setUsers={setUsers} users={users} history={history} />} />
              <Route path="/registration" element={<Registration user={user} setUser={setUser} setUsers={setUsers} users={users} />} />
              <Route path="/cart" element={<Cart cart={cart?.items} pets={pets} user={user} addToOrder={addToOrder} addToCart={addToCart} setCart={setCart} decrease={decreaseItem} removeFromCart={removeFromCart} />} />
              <Route path="/orders" element={<Orders
                  orders={orders}
              />} />
              <Route path="/pets" element={<Catalog pets={pets} user={user} setCart={addToCart} cart={carts}  />} />
          </Routes>


      </div>
    </Router>    
  );
}

export default App;
