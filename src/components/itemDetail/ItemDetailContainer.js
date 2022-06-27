import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { fireStoreFetchOne } from '../utils/fireStoreFetch';

const ItemDetailContainer = () => {
    //Variables de estado
    const [item, setItem] = useState([])
    const [cargando, setCargando] = useState(true)
    const { id } = useParams();


    useEffect(() => {
        setCargando(true);
        fireStoreFetchOne(id)
            .then(result => setItem(result))
            .catch(err => console.log(err))
            .finally(() => setCargando(false))

    }, []);
    return (
        <>
            {cargando
                ? <div className='ItemDetailContainerLoader'><div className="dot-spin" /></div>
                : <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer