import NavBar from "./components/navBar/NavBar"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"

function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer greeting={"Tienda de moviles"}/>
    </div>
  );
}

export default App;
