//Importation des composants react
import Resum from '../../components/Resum/Resum'
import { Link } from 'react-router-dom'
import { useFetch } from '../../utils/Hooks/Hooks'
import axios from 'axios'
import Login from '../../components/Login/Login'
import '../../utils/style/loader.css';


function Admin() {
    //récuperation du token s'il éxiste 
    const token = localStorage.getItem("token");
    const { isLoading, data, error } = useFetch('http://article-lp-api.onrender.com/articles/');
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }
    const deleteArticle = (id) => {
        axios.delete('http://article-lp-api.onrender.com/articles/' + id, {
            headers: {
                'authorization': 'Bearer ' + token,
            },
        })
            .then((data) => { console.log(data); window.location.href = "/Admin"; })
            .catch((err) => console.error(err));

    }
    return (
        <main >
            <section className="admin">
                {!token ? (
                    <div>
                        <Login />
                    </div>

                ) : (isLoading ? (
                    <div className='loader' ></div>
                ) : (
                    <div>
                        <Link to="/AdminAdd" className="admin__addart" > <i className="fa-solid fa-plus"></i> Ajouter un article</Link>
                        {data.map((element) => (
                            <div key={element._id} >
                                <Resum key={element._id} id={element._id} title={element.title} image={element.image} body={element.body} />
                                <p className='admin__button'>
                                    <button><Link to={`/Admin/Article/${element._id}`} ><i className="fa-solid fa-pen"></i></Link></button>
                                    <button onClick={() => { deleteArticle(element._id) }} className="admin__button-sup"><i className="fa-solid fa-trash"></i></button>
                                </p>
                            </div>
                        ))}
                    </div>

                )
                )}
            </section>
        </main >
    )
}
export default Admin 