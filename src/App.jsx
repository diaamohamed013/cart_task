import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import data from '../src/Services/data'
import Basket from './Pages/Basket/Basket.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'

export default class App extends Component {
  state = {
    products: data.products,
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
  }

  addToCart = (product) => {
    // console.log(product);
    const cartItems = this.state.cartItems;
    const itemExist = cartItems.find((p) => p.id === product.id);
    if (itemExist) {
      const newItems = cartItems.map((p) =>
        p.id === product.id ? { ...itemExist, quantity: itemExist.quantity + 1 } : p
      );
      this.setState({ cartItems: newItems });
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
    else {
      const newItems = [...cartItems, { ...product, quantity: 1 }];
      this.setState({ cartItems: newItems });
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems;
    const itemExist = cartItems.find((p) => p.id === product.id);
    if (itemExist.quantity === 1) {
      const newItems = cartItems.filter((p) => p.id !== product.id);
      this.setState({ cartItems: newItems });
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
    else {
      const newItems = cartItems.map((p) =>
        p.id === product.id ? { ...itemExist, quantity: itemExist.quantity - 1 } : p
      );
      this.setState({ cartItems: newItems });
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  removeItem = (product) => {
    const cartItems = this.state.cartItems;
    const itemExist = cartItems.find((p) => p.id === product.id);
    if (itemExist) {
      const newItems = cartItems.filter((p) => p.id !== product.id);
      this.setState({ cartItems: newItems });
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  componentDidMount() {
    this.props.hideLoader();
  }

  render() {
    return (
      <>
        <Navbar cartItems={this.state.cartItems.length} />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home
              products={this.state.products}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              removeItem={this.removeItem}
              cartItems={this.state.cartItems}
            />}
            >
            </Route>
            <Route path='home' element={<Home
              products={this.state.products}
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              removeItem={this.removeItem}
              cartItems={this.state.cartItems}
            />}
            >
            </Route>
            <Route path='basket' element={<Basket
              addToCart={this.addToCart}
              removeFromCart={this.removeFromCart}
              removeItem={this.removeItem}
              cartItems={this.state.cartItems}
            />}
            >
            </Route>
            <Route path='*' element={<Notfound />}></Route>
          </Routes>
        </div>
      </>
    )
  }

}