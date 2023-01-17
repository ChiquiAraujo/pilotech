import {products} from '../../products'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'

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
                     
      <ItemDetail product={product}/>
    
  )
}

export default ItemDetailContainer