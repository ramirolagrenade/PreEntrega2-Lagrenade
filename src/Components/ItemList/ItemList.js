import React from "react" 
import Item from "../Item/Item"



const ItemList = ({data}) => {
    return(

        <div className="row" id="itemdetail">{ 
            data.map(data => 
            <div className="col-md-3" key={data.id}>
                <Item data={data}/>
            </div>
            )
       }        
        </div>
    )
}

export default ItemList 