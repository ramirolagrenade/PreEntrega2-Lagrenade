import React from "react"

function CartWidget() {
    return (
        <div className="menu menu3">
            <button id="cesta-carrito"><i className="fas fa-shopping-cart"></i>
                <span id="contador-carrito"> 0</span>
            </button>
        </div>

    )
}
export default CartWidget