//Importation des composants react
import Resum from '../../components/Resum/Resum'
import { useFetch } from '../../utils/Hooks/Hooks'


function Home() {
    const { isLoading, data, error } = useFetch('http://article-lp-api.onrender.com/articles/');
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <main className="">
            <section className="home">
                {isLoading ? (
                    <div className='loader'></div>
                ) : (
                    data.map((element) => (
                        <Resum key={element._id} id={element._id} title={element.title} image={element.image} body={element.body} />
                    ))
                )}
            </section>
        </main>

    )
}
export default Home 