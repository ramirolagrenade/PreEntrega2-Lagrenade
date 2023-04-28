import React from "react"
import { Link } from "react-router-dom"

const Item = ({data}) => {
    return (
        <Link to={"/item/" + data.id} className="text-decoration-none" >
            <div className="container">
                <div className="card border-0 row cardM">
                    <img src={data.img} className="card-img-top" alt={data.title} />
                    <div className="card-body text-center">
                        <p className="card-text ">{data.title} </p>
                    </div>
                </div>
            </div>
        </Link>  
    )
}

export default Item