import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const { CartWidgetNumber } = useContext(CartContext);


    return (
        <>
            <Link to={"/cart"}>
                <div className="Cart-div">
                    <BsFillCartFill />
                    {CartWidgetNumber === 0
                        ? null
                        : <span className="BsFillCartFill-number">
                            {CartWidgetNumber}
                          </span>}
                </div>
            </Link>
        </>
    )
}
export default CartWidget;