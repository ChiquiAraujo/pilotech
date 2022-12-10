import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import Counter from "./components/counter/Counter";


function App() {
  return (
    <div>
     <NavBar/>

     <Counter/>

     <ItemListContainer greeting={"Tienda de moviles"}/> 
    </div>
  );
}

export default App;
