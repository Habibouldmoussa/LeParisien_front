//Importation des composants react
import { useFinditem } from '../../utils/Hooks/Hooks';
import { useParams, Navigate } from 'react-router-dom';
function Article() {
    //Récuperation de l'id de l'URL 
    const { id } = useParams()

    //Récuperation du Article par son id
    let { isLoadingArt, dataArt, errorArt } = useFinditem('http://localhost:4200/articles', id)
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
                <main >
                    <div>
                        <div  >
                            <h1>{dataArt.title}</h1>
                            <p>{dataArt.body}</p>
                        </div>
                        <div className="" >
                            <div className="" >
                                <p>{dataArt.host.name}</p>
                                <div className="">
                                    <img src={dataArt.host.picture} alt={dataArt.host.name} />
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            ) : (
                <Navigate replace to="/404" />
            )))
}
export default Article 