import React from 'react'
import { useState, useEffect } from 'react';
import { getData } from "../../data/data";
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {
    //Variables de estado
    const [item, setItem] = useState([])
    const [cargando, setCargando] = useState(false)

     useEffect(() => {
        setCargando(true)
        getData
        .then((res)=> setItem(res[1]))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    }, []); 
    
    

  return (
    
    <>

     {cargando ? <div className="dot-spin" /> : <ItemDetail  item={item}/>}
    
    </>
  )
}

export default ItemDetailContainer