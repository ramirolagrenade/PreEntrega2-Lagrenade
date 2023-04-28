import { NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <nav className="col navegador d-flex justify-content-between">
            <ul className="menu">
                <li>
                    <NavLink to={"/genero/accion"}>Accion</NavLink>
                    <NavLink to={"/genero/simulacion"}>Simulacion</NavLink>
                    <NavLink to={"/genero/terror"}>Terror</NavLink>
                </li>
            </ul>
            <div>
                <NavLink to={"/cart"}>
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    )
}
export default NavBar