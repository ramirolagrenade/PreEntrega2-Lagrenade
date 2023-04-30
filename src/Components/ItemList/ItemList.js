import React from "react" 
import Item from "../Item/Item"
import './ItemList.css' 

const ItemList = ({data}) => {
    return(

        <div className="row">{ 
            data.map(data => 
            <div className="col-md-3 gen" key={data.id}>
                <Item data={data}/>
            </div>
            )
       }        
        </div>
    )
}

export default ItemList 