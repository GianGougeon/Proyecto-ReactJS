import { BsFillCartFill } from "react-icons/bs";
import './../../css/style.css';

const CartWidget = () => {
    // Carrito contador
    let CartWidgetNumber = 5

    return(
        <li>
            <a>
                <div className="Cart-div">
                    <BsFillCartFill />
                    <div className="BsFillCartFill-number">
                        {CartWidgetNumber}
                    </div>
                </div>
            </a>
        </li>
    )
}
export default CartWidget;