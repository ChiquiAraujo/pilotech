import "./NavBar.css";
import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = ()=>{
    return (
        <div>
            <header className="navbar__header">
                <div>
                    <img src="https://res.cloudinary.com/drsommzie/image/upload/v1669410743/samples/pilotech/logo_ngwyy1.svg" alt="logo" />
                </div>
                <ul>
                    <li><a href="./">Tienda</a></li>
                    <li><a href="./">Marcas</a></li>
                    <li><a href="./">Dispositivos</a></li>
                </ul>
                <CartWidget/>            
            </header>
        </div>
    )
}

export default NavBar;