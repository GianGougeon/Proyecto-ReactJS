import React from 'react'
import { Link } from 'react-router-dom'
const Items = ({ producto }) => {
	const { id, titulo, imagenURL, descripcion, precio } = producto
	return (
		<div>
			<div>
				<article>
					<div>
						<div>
							<div>
								<Link to={`/tienda/item/${id}`}>
									<img src={producto.imagenURL} alt={producto.titulo}/>
								</Link>
							</div>
						</div>
					</div>
					<div>
						<span>{producto.titulo}</span>
						<span>$U {producto.precio}</span>
					</div>
				</article>
			</div>
		</div>
	)
}
export default Items
