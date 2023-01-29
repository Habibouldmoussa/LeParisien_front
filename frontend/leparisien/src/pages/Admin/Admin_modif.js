//import Resume from '../../components/Resume/Resume'
import { useFetch } from '../../utils/Hooks/Hooks'


function AdminModif() {
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
                                <label for="title"> Titre </label><input type="text" id="title" /><br />
                                <label for="body"></label>
                                <textarea id="body"></textarea>
                                <button type="button">Créer un article</button>
                            </form>
                        </div>

                    )}
                </section>
            </main>
        </div>
    )
}
export default AdminModif