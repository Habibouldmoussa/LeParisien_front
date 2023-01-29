
//Importation des composants react
import { NavLink } from 'react-router-dom'
//On integre les balises de navigation de react route 
function Header() {
    return (
        <header className="">
            <nav className="">
                <NavLink to="/" className="" >
                    <img src="" alt="logo" className="" />
                </NavLink>
                <ul className="">
                    <NavLink to="/"  >
                        {({ isActive }) => (
                            <li className="">Accueil</li>
                        )}
                    </NavLink>
                    <NavLink to="Admin">
                        {({ isActive }) => (
                            <li className="">Admin</li>
                        )}
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}
export default Header