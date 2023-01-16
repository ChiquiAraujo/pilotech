import { useState} from 'react'

const Form = () => {

    // const[name, setName]= useState("")
    // const[lastName,setLastName]= useState("")
    const[userData, setUserData]= useState({name:"", lastName:""})
  
    const handleSubmit = (event)=>{
        event.preventDefault()        
        console.log(userData)        
    }

    // const handleChangeName = (event)=>{
    //     setUserData({...userData, name: event.target.value})    
    // }
  
    return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Ingrese su nombre' 
        name='name' 
        onChange={(event)=>setUserData({...userData, name: event.target.value})}
        value ={userData.name}
        />
        <input type="text" 
        placeholder='Ingrese su apellido' 
        name='lastName' 
        onChange={(event)=> setUserData({...userData, lastName: event.target.value})} 
        value={userData.lastName}
         />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form
