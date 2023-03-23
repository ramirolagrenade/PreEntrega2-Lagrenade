import React from "react" 
import { useEffect, useState, } from "react" 
import { useParams } from "react-router-dom" 
import ItemDetail from "./ItemDetail" 
import Games from "../Components/Json/Games.json" 


const ItemDetailContainer = () => {

    const [item, setItem] = useState({}) 
    const {id} = useParams() 

    useEffect(() => {
        const promesa = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(Games.find(item => item.id  === parseInt(id)))
            }, 2000) 
        }, []) 

        promesa.then((data) => {
            setItem(data) 
        })

    }, [id])


    return(
        
        <div className="container">
            <ItemDetail item={item} />
        </div> 

    )
}

export default ItemDetailContainer 