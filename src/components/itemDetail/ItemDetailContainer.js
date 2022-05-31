import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from "../../data/data";
import { ItemDetail } from './ItemDetail';
const { productos } = require('../../data/data');

const ItemDetailContainer = () => {
    //Variables de estado
    const [item, setItem] = useState([])
    const [cargando, setCargando] = useState(false)
    const {id} = useParams();


    useEffect(() => {
      setCargando(true)
      getData(2000, productos.find(item => item.id === parseInt(id)))
      .then((res)=> setItem(res))
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