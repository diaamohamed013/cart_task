import React, { Component } from 'react'
import '../Cards/Cards.scss'

export default class Cards extends Component {
    render() {
        let { product, cartItems, removeFromCart, removeItem, addToCart } = this.props;
        let { price, image, name } = product;
        return (
            <div className="col-lg-3 col-md-6">
                <div className="products">
                    <div className="card shadow p-3 bg-light">
                        <div className="card-img d-flex justify-content-center my-3">
                            <img src={image} className="w-100" alt="product" />
                        </div>
                        <div className="card-body p-0">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-price"> {price}</p>
                        </div>
                        {
                            cartItems ?
                                <div className='card-process-quantity'>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className="btn text-danger fs-5 border-0" onClick={() => removeFromCart(product)}>
                                            -
                                        </button>
                                        <span>{cartItems.quantity}</span>
                                        <button className="btn text-success fs-5 border-0" onClick={() => addToCart(product)}>
                                            +
                                        </button>
                                        <button className="btn text-warning border-0" onClick={() => removeItem(product)}>
                                            <i className='fas fa-trash-can'></i>
                                        </button>
                                    </div>
                                </div>
                                :
                                <div className="card-process-add d-flex justify-content-center">
                                    <button onClick={() => addToCart(product)} className="btn btn-info px-5 py-1 my-1">
                                        Add To Cart
                                    </button>
                                </div>

                        }
                    </div>
                </div>

            </div>
        )
    }
}
