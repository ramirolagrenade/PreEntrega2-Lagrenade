import React from "react" 
import { useState, useEffect } from "react" 
import { useParams } from "react-router-dom" 
import Games from "./Json/Games.json"
import ItemList from "./ItemList"



const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams () 

    useEffect(() => {
        const  promesa = new Promise((resolve,reject) => {
             setTimeout(() => {
                resolve(id ? Games.filter(item => item.genero === id) : Games)
            }, 1000)
        }) 

        promesa.then((data) => {
            setItem(data)
        })
    },[id]) 

    return (
        <div className="container">
            <div className="row">
                <ItemList item={item}/>
            </div>
      
        </div>       
    )
}

export default ItemListContainer 