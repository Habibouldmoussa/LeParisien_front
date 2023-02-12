//Importation des composants react

import { Link } from "react-router-dom";
//On récupere l'ID du article et on redirige vers le bon lien
function Resum({ id, image, title, body }) {
    return (
        <article className="resum">
            <Link to={`/Article/${id}`} >
                <img src={image} className="resum__image" alt={title} />
                <p className="resum__title">{title}</p>
            </Link>
        </article>
    )
}
export default Resum