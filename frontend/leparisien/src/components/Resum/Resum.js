//Importation des composants react

import { Link } from "react-router-dom";
//On récupere l'ID du article et on redirige vers le bon lien
function Resum({ id, cover, title }) {
    return (
        <article className="">
            <Link to={`/Article/${id}`} >
                <img src={"/assets/" + cover} className="" alt={title} />
                <span className="">{title}</span>
            </Link>
        </article>
    )
}
export default Resum