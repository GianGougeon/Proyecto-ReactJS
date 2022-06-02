import { useState } from "react";

const ItemCount = ({ initial, stock, onCheck }) => {
    // usestate
    let [stockValue, setStock] = useState(initial);
    // incremento del valor
    const increment = () => {
        if (stockValue < stock) setStock(stockValue + 1)
    }
    // decremento del valor
    const decrement = () => {
        if (stockValue > 1) setStock(stockValue - 1)
    }
    // si no hay stock
    if (stock === 0) {
        stockValue = 'No disponible'
    }
    return (

        <div className="contador">
            <div className="ItemCountDiv">
                {stock === 0 ? null : <span className='Stock-producto'>Disponible: {stock}</span>}
                <div className="ItemCount">
                    {stock === 0 ? null : <button onClick={decrement}>−</button>}

                    <label>{stockValue}</label>

                    {stock === 0 ? null : <button onClick={increment}>+</button>}

                </div>

                {stock === 0 ? null : <div className="ItemCount-Agregar">
                    <button onClick={() => onCheck(stockValue)}>Agregar al Carrito</button>
                </div>}

            </div>
        </div>

    )
}
export default ItemCount