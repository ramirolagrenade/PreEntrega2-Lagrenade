import React from "react"
import { useCartContext } from "../../context/CartContext"

const ItemCart = ({ item }) => {
    const { removeProduct } = useCartContext()

    return (
        <div className="aling-item-center">
            <div className="cart-list">
                <img src={item.img} alt={item.title} srcSet="" />
                <div>
                    <p>Nombre: {item.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Subtotal: ${item.quantity * item.price}</p>
                    <button className="add-cart" onClick={() => removeProduct(item.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart 