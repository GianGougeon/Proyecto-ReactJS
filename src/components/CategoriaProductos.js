import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CategoriasProductos = () => {

    const { id, tienda } = useParams();



    return (
        <div>
            <div className='inicioEdad-categoria'>
                <h3>Categorias</h3>
            </div>
            <div className='Categoria-inicio'>
                <Link to={'/tienda'}>
                    <div
                        className={"tienda" === tienda
                            ? "active"
                            : "no-active"}>

                        {/*  <img src={""} alt={"Todo"}></img> */}
                        <p>Todo</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/1'}>
                    <div className={"1" === id
                        ? "active"
                        : "no-active"}>
                        {/* <img src={""} alt={"123123"}></img> */}
                        <p>Superior</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/2'}>
                    <div className={"2" === id
                        ? "active"
                        : "no-active"}>
                        {/*             <img src={""} alt={"Remeras"}></img> */}
                        <p>Inferior</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/3'}>
                    <div className={"3" === id
                        ? "active"
                        : "no-active"}>
                        {/* <img src={""} alt={"123123"}></img> */}
                        <p>Calzados</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default CategoriasProductos;