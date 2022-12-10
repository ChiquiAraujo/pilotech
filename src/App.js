import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<h1>Aquí se renderizará la home</h1>} />   

        <Route path="/tienda" element={<ItemListContainer greeting={"Tienda de moviles"}/>} />

        <Route path="/category/:id" element={<ItemListContainer/>} />        

        <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />

        <Route path="/cart" element={<h2>Aqué va el carrito</h2>} />   
             
        <Route path="*" element={<h2>Ups... Page not found <br/> Error 404 </h2>}/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;

