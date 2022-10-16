import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default class Navbar extends Component {
    render() {
        let { cartItems } = this.props
        return (
            <>
                <nav className='bg-white shadow navbar-light'>
                    <div className="container">
                        <div className="links d-flex justify-content-between align-items-baseline py-3">
                            <Link className='navbar-brand' to='home'>
                                <h3>
                                    Shopping Cart
                                </h3>
                            </Link>
                            <Link className="text-dark" to='basket'>
                                <i className="fa-solid fa-cart-shopping">
                                    {
                                        cartItems !== 0 ?
                                            <>
                                                <span className='quantity'>
                                                    <span className="quantity-number">{cartItems}</span>
                                                </span>
                                            </>
                                            :
                                            <span className='quantity'>
                                                <span className="quantity-number">0</span>
                                            </span>
                                    }
                                </i>
                            </Link>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
