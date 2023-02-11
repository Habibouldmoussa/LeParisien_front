import Resum from '../../components/Resum/Resum'
import { NavLink } from 'react-router-dom'
import { useFetch } from '../../utils/Hooks/Hooks'


function Admin() {
    const { isLoading, data, error } = useFetch('http://localhost:4200/articles/');
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div>
            <main >

                <section className="admin">
                    {isLoading ? (
                        <div className='loader'></div>
                    ) : (
                        <div>
                            <NavLink to="/AdminAdd" className="" > Ajouter un article</NavLink>
                            {data.map((element) => (
                                < Resum key={element._id} id={element._id} title={element.title} image={element.image} body={element.body} />
                            ))}
                        </div>

                    )}
                </section>
            </main>
        </div>
    )
}
export default Admin 