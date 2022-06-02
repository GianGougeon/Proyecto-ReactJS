import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../img/banner-1.png';
import banner2 from '../img/banner-2.png';
import banner3 from '../img/banner-3.png';



const Inicio = () => {

	const proximamente = () =>{
		alert("proximamente");
	}
{/* Same as */}

	
  return (
    <>
      <section className='banner-inicio'>
        <img src={banner1} alt={"hola"}/>
        <img src={banner2} alt={"hola"}/>
        <img src={banner3} alt={"hola"}/>
      </section>

      <section className='container container-extra'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
			  <div className='Regalos-inicio'>
				  <div>
					  <img alt={'hola'} src={"https://i.ibb.co/4sbRG9t/121-1213294-regalos-vector-png-gift-clipart-preview-rev-1.png"}></img>
					</div>
				  <div>
				  <h2>Regalitos</h2>
				  <button onClick={proximamente}>Ver</button>
				  
				  </div>
			  </div>
			  </div>
          <div className='col-sm-12 col-md-6'>
		  <div className='Babyshower-inicio'>
				  <div>
					  <img alt={'hola'} src={"https://i.ibb.co/nLVRPDm/png-clipart-teddy-bear-paper-party-baby-shower-bear-blue-mammal-preview-rev-1.png"}></img>
					  </div>
				  <div>
				  <h2>Babyshower</h2>
				  <button onClick={proximamente}>Ver</button>
				  </div>
			  </div>
			  </div>

        </div>
      </section>
	  <section className='Categoria-inicio'>
		  <div><h3>BUSCA POR CATEGORÍA</h3></div>
		  <div>
			  <div>
				  <img src='https://i.ibb.co/qR72pmY/278012975-5326455167366568-3696938908371074251-n.jpg'></img>
				  <li><Link to={"/tienda/category/1"}><div><h4>Superior</h4></div></Link></li>
			  </div>
			  <div>
				  <img src='https://i.ibb.co/qrf6YCw/283493460-600440467656658-258446110050851359-n.jpg'></img>
				  <li><Link to={"/tienda/category/2"}><div><h4>Inferior</h4></div></Link></li>
			  </div>
			  <div>
				  <img src='https://i.ibb.co/C1vgT4V/279054690-1338452180008747-2544151120685602720-n.jpg'></img>
				  <li><Link to={"/tienda/category/3"}><div><h4>Calzados</h4></div></Link></li>
			  </div>
		  </div>

	  </section>
	  <section style={{padding: "100px 0"}}></section>

    </>
  )
}

export default Inicio