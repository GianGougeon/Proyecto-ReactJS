import React from 'react'
import { Link } from 'react-router-dom'
const Items = ({ producto }) => {
	const { id, titulo, imagenURL, descripcion, precio } = producto
	return (
		<div className='Card'>
			<div className='Card-p2'>
				<div className='img-wrapper'>
					<Link to={`/tienda/item/${id}`}>
						<img src={imagenURL} className="" alt={descripcion} width={300} height={370} />
					</Link>
				</div>
				<div className='Card-txt'>
					<Link to={`/tienda/item/${id}`}>
						<h3>{titulo}</h3>
						<span>$U {precio}</span>
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Items
