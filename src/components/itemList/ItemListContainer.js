// hoks
import { useEffect } from "react";
import { useState } from "react";
//itemlist
import ItemList from "./ItemList";
//itemcount
import ItemCount from "../ItemCount";
//GetData = Promise array
import { getData } from "../../data/data";

const  ItemListContainer = ({Contenido}) =>{

    //Variables de estado
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(false)


    useEffect(() => {
        setCargando(true)
        getData
        .then((res)=> setListaProductos(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    }, []);





    return(
        <>
            <div style={{padding: '0 0 300px 0'}}>
            <h1 style={{justifyContent: 'center', display: 'flex', paddingTop: '10vh'}}>{Contenido}</h1>
            
            {cargando ? <div className="dot-spin" /> : <ItemList listaProductos={listaProductos}/>}
            
            </div>

            <ItemCount stock={5} initial={1}/>
        </>
    )
}
export default ItemListContainer;