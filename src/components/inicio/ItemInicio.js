import React from 'react'
import { Link } from 'react-router-dom'
const Items = ({ producto }) => {
	const { id } = producto
	return (
		<div style={{flexBasis: "53%"}}>
			<div>
				<article>
					<div>
						<div>
							<div>
								<Link to={`/tienda/item/${id}`}>
									<img src={producto.img[0]} alt={producto.titulo} />
								</Link>
							</div>
						</div>
					</div>
					<div>
						<span style={{justifyContent: "center", textAlign: 'center'}}>{producto.titulo}</span>
					</div>
				</article>
			</div>
		</div>
	)
}
export default Items
