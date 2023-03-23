import React from "react" 

const ItemDetail = ({item}) => {
    return (
 
            <div className="row" id="itemdetail">
                <div className="col-md-12 ">
                    <img src={item.imagen} className="img-fluid" alt='#' />
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <h2>${item.precio}</h2>
                </div>
            </div>    
    )
 
}

export default ItemDetail 