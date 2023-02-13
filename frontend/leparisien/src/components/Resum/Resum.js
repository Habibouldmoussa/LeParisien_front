//Importation des composants react

import { Link } from "react-router-dom";
//On récupere l'ID du article et on redirige vers le bon lien
function Resum({ id, image, title, body }) {
    return (
        <article >
            <Link to={`/Article/${id}`} className="resum" >
                <img src={image} className="resum__image" alt={title} />
                <div className="resum__text">
                    <h2 className="resum__text__title">{title}</h2>
                    <p className="resum__text__body" >{body}</p>
                </div>
            </Link>
        </article>
    )
}
export default Resum