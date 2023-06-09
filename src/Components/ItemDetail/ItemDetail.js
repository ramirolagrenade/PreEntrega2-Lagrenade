import React from "react" 
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'


export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data, quantity);
    }
    return (
        <div className="row item">
            <div className="col-md-12">
                <img src={data.img} alt="#" className="img-fluid" />
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <h2>Precio: ${data.price}</h2>
                    {
                        goToCart ? <Link to='/cart' className="vi">Terminar compra</Link>:
                        <ItemCount initial = {1} stock={5} onAdd={onAdd}/>
                    }
            </div>
        </div>
    )
}

export default ItemDetail 