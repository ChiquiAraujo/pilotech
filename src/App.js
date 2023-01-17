import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Form from "./components/form/Form";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContext";



function App() {
  return (
    <BrowserRouter>
        <CartContextProvider>

         <NavBar/>

         <Routes>

           <Route path="/" element={<h1>Aquí se renderizará la home</h1>} />   

           <Route path="/tienda" element={<ItemListContainer greeting={"Tienda de moviles"}/>} />

            <Route path="/category/:id" element={<ItemListContainer/>} />        

            <Route path="/itemDetail/:id" element={<ItemDetailContainer/>} />

            <Route path="/checkout" element={<Form/>}/>

           <Route path="/cart" element={<Cart/>}/>   
             
            <Route path="*" element={<h2>Ups... Page not found <br/> Error 404 </h2>}/>

         </Routes>

       </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

