import React from 'react';
import banner1 from '../img/banner-1.png';
import banner2 from '../img/banner-2.png';
import banner3 from '../img/banner-3.png';
import CategoriasProductos from '../components/CategoriaProductos';


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
	  <section>
		  <CategoriasProductos/>
	  </section>
	  <section style={{padding: "100px 0"}}></section>

    </>
  )
}

export default Inicio