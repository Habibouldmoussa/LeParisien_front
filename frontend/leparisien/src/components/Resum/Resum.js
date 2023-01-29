//Importation des composants react

import { Link } from "react-router-dom";
//On récupere l'ID du article et on redirige vers le bon lien
function Resum({ id, cover, title, body }) {
    return (
        <article className="">
            <Link to={`/Article/${id}`} >
                <img src={"/assets/" + cover} className="" alt={title} />
                <p className="">{title}</p>
                <p className="">{body}</p>
            </Link>
        </article>
    )
}
export default Resum