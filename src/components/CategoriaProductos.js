import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CategoriasProductos = () => {

    const { idCategoria } = useParams();



    return (
        <div>
            <div className='inicioEdad-categoria'>
                <h3>Tienda</h3>
            </div>
            <div className='Categoria'>
                <Link to={'/tienda'}>
                    <div
                        className={idCategoria === undefined
                            ? "active"
                            : "no-active"}>
                        <p>Todo</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/1'}>
                    <div className={"1" === idCategoria
                        ? "active"
                        : "no-active"}>
                        <p>Superior</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/2'}>
                    <div className={"2" === idCategoria
                        ? "active"
                        : "no-active"}>
                        <p>Inferior</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/3'}>
                    <div className={"3" === idCategoria
                        ? "active"
                        : "no-active"}>
                        <p>Calzados</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default CategoriasProductos;