import {CgShoppingCart} from "react-icons/cg"
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div className="cart__widget">
      <div className="cart__icon">
      <CgShoppingCart size={"1.5rem"}/> 
      </div>
      <span>20</span>
    </div>
  )
}
