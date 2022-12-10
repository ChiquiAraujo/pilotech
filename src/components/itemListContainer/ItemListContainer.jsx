import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { products } from '../../products'
import "../item/Item.css"
import ItemList from '../itemList/ItemList'


const ItemListContainer = ( ) => {

  const [items, setItems] = useState([])
 
    console.log(items)
  
  useEffect (()=> {
    const task = new Promise ( (resolve, reject) => {
      setTimeout(() => {
        resolve (products)        
      }, 2000);     
      
    })
  
    task
      .then( (res)=> {setItems (res)} )
      .catch( (err)=> {console.log("No se cargan los productos")} )
  }, [])
      
  return (

    <div>   
      <ItemList items={items}/>     
    </div>
    
  )
}


export default ItemListContainer