
//Importation des composants react
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
//On integre les balises de navigation de react route 
function Header() {
    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink to="/" className="" >
                    <img src={logo} alt="logo" className="" />
                </NavLink>
                <ul className="header__menu">
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