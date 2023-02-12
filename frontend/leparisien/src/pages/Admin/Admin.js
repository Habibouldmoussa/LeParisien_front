import Resum from '../../components/Resum/Resum'
import { Link } from 'react-router-dom'
//import { useState } from 'react'
import { useFetch } from '../../utils/Hooks/Hooks'
import axios from 'axios'
import Login from '../../components/Login/Login'
import '../../utils/style/loader.css';


function Admin() {
    //const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = localStorage.getItem("token");
    const { isLoading, data, error } = useFetch('http://localhost:4200/articles/');
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }
    const deleteArticle = (id) => {
        axios.delete('http://localhost:4200/articles/' + id, {
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
                        <Link to="/AdminAdd" className="" > Ajouter un article</Link>
                        {data.map((element) => (
                            <div key={element._id} >
                                <Link to={`/Admin/Article/${element._id}`} ><i class="fa-solid fa-pen"></i></Link>
                                <button onClick={() => { deleteArticle(element._id) }}><i class="fa-solid fa-trash"></i></button>
                                <Resum key={element._id} id={element._id} title={element.title} image={element.image} body={element.body} />

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