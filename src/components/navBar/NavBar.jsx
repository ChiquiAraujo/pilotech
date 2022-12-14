import "./NavBar.css";
import { CartWidget } from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = ()=>{
    return (
        <div>
            <header className="navbar__header">
                <div>
                    <Link to="/"><img src="https://res.cloudinary.com/drsommzie/image/upload/v1669410743/samples/pilotech/logo_ngwyy1.svg" alt="logo" /></Link>                    
                </div>
                <ul>
                    <li><Link className="ul__li--link" to="./tienda">Tienda</Link></li>                    
                    <li><Link className="ul__li--link" to="./category/movil">Moviles</Link></li>                    
                    <li><Link className="ul__li--link" to="./category/tablet">Tables</Link></li>
                    <li><Link className="ul__li--link" to="./category/watchs">Relojes</Link></li>
                    <li><Link className="ul__li--link" to="/category/laptop">Portátiles</Link></li>
                </ul>
                
                <CartWidget/>            
            </header>
        </div>
    )
}

export default NavBar;