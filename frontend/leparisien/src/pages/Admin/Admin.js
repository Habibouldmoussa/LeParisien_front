//import Resume from '../../components/Resume/Resume'
import { useFetch } from '../../utils/Hooks/Hooks'


function Admin() {
    const { isLoading, data, error } = useFetch('http://localhost:4200/articles/');
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div>
            <main className="">

                <section className="">
                    {isLoading ? (
                        <div className='loader'></div>
                    ) : (
                        <div>
                            <h2>Créer un article</h2>
                            <form>
                                <input type="text" /><br />
                                <textarea></textarea><br />
                                <button type="button">Créer un article</button>
                            </form>
                        </div>

                    )}
                </section>
            </main>
        </div>
    )
}
export default Admin 