
//Importation des composants react
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useState } from 'react';
const token = localStorage.getItem("token");

//On integre les balises de navigation de react route 
function Header() {
    const [query, setQuery] = useState()
    const logout = () => {
        localStorage.clear();
        window.location.href = "/Admin";
    }
    const search = (e) => {
        e.preventDefault()
        window.location.href = "/Recherche/" + query;
    }
    return (
        <header className="header">
            <nav className="header__nav">
                <NavLink to="/" className="" >
                    <img src={logo} alt="logo" className="" />
                </NavLink>
                <ul className="header__menu">
                    <NavLink to="/"  >
                        {({ isActive }) => (
                            <li className={isActive ? "header__menu__item-active" : "header__menu__item"}>Accueil</li>
                        )}
                    </NavLink>
                    <NavLink to="Admin">
                        {({ isActive }) => (
                            <li className={isActive ? "header__menu__item-active" : "header__menu__item"}>Admin</li>
                        )}
                    </NavLink>
                    {token && (
                        <li onClick={() => { logout() }} className="header__menu__item-logout">Log out</li>
                    )}
                </ul>
                <form onSubmit={search}>
                    <input type="search" name="q" onChange={(e) => setQuery(e.target.value)} />
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </nav>
            <hr />
        </header >
    )
}
export default Header