import React from 'react'
import ItemCount from './ItemCount'

const Items = ({producto}) =>{
const {titulo, imagenURL, categoria, descripcion, precio, stock} = producto

    return(
        <div className='Card'>
            <div className='Card-p2'>
                <a>
                    <img src={imagenURL} className="" alt={descripcion} width={300} height={370} />
                    <div className='Card-txt'>
                    <h3>{titulo}</h3>
                    <span>$U {precio}</span>
                    </div>
                    {/* <ItemCount stock={stock} initial={1}/> */}
                </a>
            </div>
        </div>
    )
}
export default Items

