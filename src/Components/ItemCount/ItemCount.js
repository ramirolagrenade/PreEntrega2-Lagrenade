import React,{useState, useEffect} from "react" 

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial)) 

    const decrease = () =>{
        setCount(count - 1) 
    }

    const increase = () =>{
        setCount(count + 1) 
    }

    useEffect(()=>{
        setCount(parseInt(initial)) 
    }, [initial])

    return (
        <div className="container">
            <button className="cont-btn" disabled={count <= 1} onClick={decrease}> - </button>
            <span>{count}</span>
            <button className="cont-btn" disabled={count >=stock} onClick={increase}> + </button>

            <div>
                <button className="add-cart" disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    ) 
}

export default ItemCount  