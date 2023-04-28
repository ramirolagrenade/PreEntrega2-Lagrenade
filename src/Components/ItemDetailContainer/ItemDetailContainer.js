import React from "react"
import { useEffect, useState, } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
// import Games from "../Json/Games.json"
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const querybd = getFirestore()
        const queryDoc = doc(querybd, 'items', id)
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [id])

    return (
        <div className="container">
            <ItemDetail data={data} />
        </div>
    )

}

export default ItemDetailContainer 