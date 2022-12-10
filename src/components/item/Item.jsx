import CustomButton from "../customButton/CustomButton";


const Item = ({elements}) => {
  return (
    <div key={elements.id} className="cards__products">                  
          <img className="cards__img" src={elements.img} alt="" />
          <h3>{elements.name}</h3>
          <p>{elements.description}</p>
          <b>{elements.price}€</b>
          <p>Stock disponible: {elements.stock} </p>        
          <button> Ver Detalles  </button>
          <div><CustomButton/></div>          
        </div>
  );
};

export default Item;