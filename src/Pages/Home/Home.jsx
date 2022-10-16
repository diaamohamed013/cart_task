import React, { Component } from 'react'
import Cards from '../Cards/Cards'

export default class Home extends Component {
    render() {
        let { products, addToCart, removeFromCart, removeItem, cartItems } = this.props
        return (
            <>
                <div className="row g-3 py-4 align-items-center justify-content-center">
                    {
                        products.map((product) =>
                            <Cards key={product.id}
                                product={product}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                removeItem={removeItem}
                                cartItems={cartItems.find((p) => p.id === product.id)}
                            />
                        )
                    }
                </div>
            </>
        )
    }
}
