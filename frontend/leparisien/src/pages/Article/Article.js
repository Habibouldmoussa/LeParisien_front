//Importation des composants react
import { useFinditem } from '../../utils/Hooks/Hooks';
import { useParams, Navigate } from 'react-router-dom';
function Article() {
    //Récuperation de l'id de l'URL 
    const { id } = useParams()

    //Récuperation du Article par son id
    let { isLoadingLog, dataLog, errorLog } = useFinditem('http://localhost:4200/articles', id)
    if (errorLog) {
        return <span>Oups il y a eu un problème</span>
    }

    /* On verifie si le Article existe sinon on redirige l'utilisateur vers la page d'erreur
    *et on affiche le loader en attendant les données  
    */
    return (
        isLoadingLog ? (
            <div className='loader'></div>
        ) : (
            dataLog ? (
                <main >
                    <div>
                        <div  >
                            <h1>{dataLog.title}</h1>
                            <p>{dataLog.body}</p>
                        </div>
                        <div className="" >
                            <div className="" >
                                <p>{dataLog.host.name}</p>
                                <div className="">
                                    <img src={dataLog.host.picture} alt={dataLog.host.name} />
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