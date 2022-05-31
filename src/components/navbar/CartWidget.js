import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import './../../css/style.css';

const CartWidget = () => {
    // Carrito contador
    let CartWidgetNumber = 7

    return(
        <>
            <Link to={"/cart"}>
                <div className="Cart-div">
                    <BsFillCartFill />
                    <div className="BsFillCartFill-number">
                        {CartWidgetNumber}
                    </div>
                </div>
            </Link>
        </>
    )
}
export default CartWidget;