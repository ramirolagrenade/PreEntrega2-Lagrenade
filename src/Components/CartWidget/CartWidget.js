import React from "react"
import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const {totalProducts} = useCartContext()
    return (
        <div className="menu menu3">
            <button id="cesta-carrito"><i className="fas fa-shopping-cart"></i>
                <span id="contador-carrito"> {totalProducts() || '0'}</span>
            </button>
        </div>

    )
}
export default CartWidget