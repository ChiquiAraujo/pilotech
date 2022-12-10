import {CgShoppingCart} from "react-icons/cg"
import "./CartWidget.css";
import {Link} from "react-router-dom"

export const CartWidget = () => {
  return (
    <Link to="/cart"> 
    <div className="cart__widget">
      <div className="cart__icon">
      <CgShoppingCart size={"1.5rem"}/> 
      </div>
      <span>20</span>
    </div>
    </Link>
  )
}
