import React from 'react'
import {products} from '../../products'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import Counter from "../counter/Counter";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()
    console.log(id)

    useEffect( ()=> {
        const productSelect = products.find( producto => producto.id === +id)
        setProduct(productSelect)
    }, 
    [id])

    console.log(product)

  return (
    <div className="cards__products">                  
        <img className="cards__img" src={product.img} alt="" />
        <h3>{product.name}</h3>
        <p>{product.brand} {product.description}</p>       
        <p>En almacen: {product.stock}</p>
        <p>Categoría: {product.category} </p>
        <b>{product.price}€</b>                 
        <div><Counter/> </div>
        <button>Añadir al carrito</button>          
    </div>
  )
}

export default ItemDetailContainer