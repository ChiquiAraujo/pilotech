import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../products'
import CustomLoader from '../customLoader/CustomLoader'
import "../item/Item.css"
import ItemList from '../itemList/ItemList'


const ItemListContainer = ( ) => {


  const {id} = useParams()
  console.log(id)

  const [items, setItems] = useState([])
 
    console.log(items)
  
  useEffect (()=> {

    const categoriaFilterd = products.filter (categoria => categoria.category === id)
       
    const task = new Promise ( (resolve, reject) => {
      setTimeout(() => {
        resolve (id ? categoriaFilterd : products)        
      }, 2000);     
      
    })
  
    task
      .then( (res)=> {
        setItems (res)} )
      .catch( (err)=> {
        console.log("No se cargan los productos")} )

  }, [id])
      
  return (    
    <div>   

      { items.length > 0 ? <ItemList items={items}/> : <CustomLoader/> }       
        
    </div>    
  )
}


export default ItemListContainer