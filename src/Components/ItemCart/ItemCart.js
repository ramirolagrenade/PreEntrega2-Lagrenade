import React from "react" 
import { useCartContext } from "../../context/CartContext" 

const ItemCart = ({item})=>{
    const {removeProduct} = useCartContext() 

    return (
        <div className="itemCart">
            <img src={item.img} alt={item.title} srcSet="" />
            <div>
                <p>Titulo: {item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio u: {item.price}</p>
                <p>Subtotal: {item.quantity * item.price}</p>
                <button onClick={()=> removeProduct(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart 