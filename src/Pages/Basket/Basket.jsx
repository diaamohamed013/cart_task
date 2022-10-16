import React, { Component } from 'react'
import './Basket.scss'

export default class Basket extends Component {
    render() {
        const { cartItems, addToCart, removeFromCart, removeItem } = this.props;
        const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
        const taxPrice = itemsPrice * 0.14;
        const shippingPrice = itemsPrice > 1000 ? 20 : 0;
        const totalPrice = itemsPrice + taxPrice + shippingPrice;
        return (
            <div className="cart py-4">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 m-auto">
                            <h2 className='mb-4'>Cart Items</h2>
                            <div>
                                {cartItems.length === 0 && <div>Cart is empty</div>}
                                {cartItems.map((item) => (
                                    <div key={item.id} className="items d-flex justify-content-between py-2">
                                        <img src={item.image} className="w-img-50" alt='productImage'></img>
                                        <div className="card-process-quantity d-flex justify-content-center align-items-baseline">
                                            <button className="btn text-dark border-0" onClick={() => removeFromCart(item)}>
                                                -
                                            </button>
                                            <button className="btn text-success border-0" onClick={() => addToCart(item)}>
                                                +
                                            </button>
                                            <p>
                                                {item.quantity} x {item.price.toFixed(2)}
                                            </p>
                                        </div>
                                        <button className="btn text-warning border-0" onClick={() => removeItem(item)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </div>
                                ))}

                                {cartItems.length !== 0 && (
                                    <>
                                        <hr></hr>
                                        <div className="itemPrice">
                                            <h3>Items Price</h3>
                                            <p>{itemsPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="itemPrice">
                                            <h3>Tax Price</h3>
                                            <p>{taxPrice.toFixed(2)}</p>
                                        </div>
                                        <div className="itemPrice">
                                            <h3>Shipping Price</h3>
                                            <p>
                                                {shippingPrice.toFixed(2)}
                                            </p>
                                        </div>

                                        <div className="itemPrice">
                                            <h3>
                                                Total Price
                                            </h3>
                                            <p>
                                                {totalPrice.toFixed(2)}
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="itemCheck text-center">
                                            <button className='btn btn-warning px-5 py-1' onClick={() => alert('Implement Checkout!')}>
                                                Checkout
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                


            </div>
        )
    }
}
