import React from 'react'
import Item from '../Item'

export const ItemList = ({listaProductos}) => {
  return (
    <>
    
    <h2 className='container-Card'>Lista de productos:</h2>
    <div className='Card-itemlist container'>
      

          {listaProductos.map((productos) =><Item key={productos.id} producto={productos}/>)}

    </div>
    
    
    </>
  )
}
export default ItemList