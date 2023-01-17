import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import NoInfo from "../noInfo/NoInfo"


const Cart = () => {

  const{cart, clearCart, getTotalPrice} = useContext(CartContext)

  //console.log(cart)
  
  // if(cart.length < 1)
  // return <h2>No hay artículos en el carrito</h2>

  return (
    <div>      
      {
        cart.map(item =>(          
          <div style={{ border: '0.1px solid #000000'}}>
            <img className="cards__img" src={item.img} alt="" />
            <h2 key={item.div}>{item.name} </h2>
            <p>{item.brand},
            {item.category},</p>
            <p>{item.description} </p>
            <p> Unidades: <strong>{item.quantity} </strong> </p>            
          </div> 
                    
        ))}

        { cart.length < 1 && <NoInfo /> }
              
        <div>
            <button onClick={()=> clearCart()}>Vaciar carrito</button>
        </div>
        
        <div>
          <h3>Resumen:</h3>
          <p> Total: <strong>{ getTotalPrice() > 0 ? getTotalPrice() : "Añade productos al carrito"} </strong> </p>      
        </div>

        
        <div>
          <button>Comprar</button>
        </div>
    </div>

    // ->
  )
}

export default Cart