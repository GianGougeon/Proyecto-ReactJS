import React from 'react'
import Item from '../Item'

export const ItemList = ({ listaProductos }) => {
    return (
        <>
            <div className="div-tienda">
                <div>
                    <div>
                        <div>
                            {listaProductos.map((productos) => <Item key={productos.id} producto={productos} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemList