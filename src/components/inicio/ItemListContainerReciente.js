import { useEffect } from "react";
import { useState } from "react";
import ItemListReciente from "./ItemListReciente";
import { getData } from "../../data/data";
const { productos } = require('../../data/data');

const ItemListContainerReciente = () => {

    //Variables de estado
    const [listaProductos,
        setListaProductos] = useState([])
    const [cargando,
        setCargando] = useState(false)


    useEffect(() => {
        setCargando(true)
        // ultimos 3 productos del array
        const productoReciente = productos.slice(-3);
        if (productos.length < 4) {
            productoReciente.shift();
        }
        getData(2000, productoReciente)
            .then((res) => setListaProductos(res)).catch((error) => console.log(error)).finally(() => setCargando(false))
    }, []);

    return (
        <>
            {cargando
                ? <div className="dot-spin" />
                : <ItemListReciente listaProductos={listaProductos} />}
        </>
    )
}
export default ItemListContainerReciente;