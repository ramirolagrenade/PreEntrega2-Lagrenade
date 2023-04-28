import React from "react" 
import { useState, useEffect } from "react" 
import { useParams } from "react-router-dom" 
// import Games from "../Json/Games.json"
import ItemList from "../ItemList/ItemList"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


export const ItemListContainer = () => {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'items');
        if (id) {
            const queryFilter = query(queryCollection, where('genero', '==', id))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [id])

    return (
        <>
            <ItemList data={data} />
        </>
    )
}



export default ItemListContainer 