import React from 'react';
import { Link } from 'react-router-dom';
import ItemListContainerReciente from '../components/inicio/ItemListContainerReciente';
import portada from '../img/portada.webp';



const Inicio = () => {

	return (
		<>
			<section className='banner-inicio'>
				<img className='img-banner' src={portada} alt={"Lenu-Second-Hand-Portada"} />
				<h1>Lenu</h1>
				<div></div>
				<h2>second hand</h2>
			</section>
			<section className='container2 container-extra'>
				<div className='row'>
					<div className='col-sm-12 col-md-6'>
						<div className='Regalos-inicio'>
							<div>
								<img alt={'hola'} src={"https://firebasestorage.googleapis.com/v0/b/proyecto-reactjs-5d082.appspot.com/o/inicio%2F121-1213294-regalos-vector-png-gift-clipart-preview-rev-1.png?alt=media&token=5d8044ba-0111-4786-8d12-5dd89c886cc8"}></img>
							</div>
							<div>
								<h2>Regalitos</h2>
								<button>Ver</button>
							</div>
						</div>
					</div>
					<div className='col-sm-12 col-md-6'>
						<div className='Babyshower-inicio'>
							<div>
								<img alt={'hola'} src={"https://firebasestorage.googleapis.com/v0/b/proyecto-reactjs-5d082.appspot.com/o/inicio%2Fpng-clipart-teddy-bear-paper-party-baby-shower-bear-blue-mammal-preview-rev-1.png?alt=media&token=62c2b6c6-0880-49b3-85d5-645603e3b38a"}></img>
							</div>
							<div>
								<h2>Babyshower</h2>
								<button>Ver</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='Categoria-inicio'>
				<div>
					<h3>BUSCA POR CATEGORÍA</h3>
				</div>
				<div>
					<div>
						<img src='https://firebasestorage.googleapis.com/v0/b/proyecto-reactjs-5d082.appspot.com/o/inicio%2F278012975-5326455167366568-3696938908371074251-n.jpg?alt=media&token=0906afbd-07c9-4a5d-89d4-8b6b8ba356d3' alt='Categoria-superior'></img>
						<li><Link to={"/tienda/category/1"}><div><h4>Superior</h4></div></Link></li>
					</div>
					<div>
						<img src='https://firebasestorage.googleapis.com/v0/b/proyecto-reactjs-5d082.appspot.com/o/inicio%2F283493460-600440467656658-258446110050851359-n.jpg?alt=media&token=762e0fa3-946c-41a1-8b81-f0290e6c5405' alt='Categoria-inferior'></img>
						<li><Link to={"/tienda/category/2"}><div><h4>Inferior</h4></div></Link></li>
					</div>
					<div>
						<img src='https://firebasestorage.googleapis.com/v0/b/proyecto-reactjs-5d082.appspot.com/o/inicio%2F279054690-1338452180008747-2544151120685602720-n.jpg?alt=media&token=17411f41-efdd-49cb-a39a-a79d1f00e59b' alt='Categoria-calzados'></img>
						<li><Link to={"/tienda/category/3"}><div><h4>Calzados</h4></div></Link></li>
					</div>
				</div>
			</section>
			<section className='Recientes-inicio'>
				<div>
					<h3>
						PRODUCTOS ALEATORIOS
					</h3>
				</div>
				<div>
					<ItemListContainerReciente />
				</div>
			</section>
			<section style={{ padding: "100px 0" }}></section>
		</>
	)
}

export default Inicio