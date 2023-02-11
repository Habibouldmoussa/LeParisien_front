//Importation des composants react

import { Link } from "react-router-dom";
//On récupere l'ID du article et on redirige vers le bon lien
function Resum({ id, image, title, body }) {
    return (
        <article className="">
            <Link to={`/Article/${id}`} >
                <img src={image} className="" alt={title} />
                <p className="">{title}</p>
                <p className="">{body}</p>
            </Link>
        </article>
    )
}
export default Resum