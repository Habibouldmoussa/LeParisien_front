//Importation des composants react
import { useFinditem } from '../../utils/Hooks/Hooks';
import { useParams, Navigate } from 'react-router-dom';
function Article() {
    //Récuperation de l'id de l'URL 
    const { id } = useParams()

    //Récuperation du Article par son id
    let { isLoadingArt, dataArt, errorArt } = useFinditem('https://article-lp-api.onrender.com/articles', id)
    if (errorArt) {
        return <span>Oups il y a eu un problème</span>
    }

    /* On verifie si le Article existe sinon on redirige l'utilisateur vers la page d'erreur
    *et on affiche le loader en attendant les données  
    */
    return (
        isLoadingArt ? (
            <div className='loader'></div>
        ) : (
            dataArt ? (
                <div className='article'>
                    <h2 className='article__title'>{dataArt.title}</h2>
                    <div className="article__image" >
                        <img src={dataArt.image} alt={dataArt.title} />
                    </div>
                    <p className='article__body'>{dataArt.body} </p>
                </div>
            ) : (
                <Navigate replace to="/404" />
            )))
}
export default Article 