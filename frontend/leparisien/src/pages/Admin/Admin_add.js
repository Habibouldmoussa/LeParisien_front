//import Resume from '../../components/Resume/Resume'
import { useCreatArticle } from '../../utils/Hooks/Hooks'


function AdminAdd() {

    return (
        <div>
            <main className="">

                <section className="">
                    <div>
                        <h2>Créer un article</h2>
                        <form>
                            <label for="title"> Titre </label><input type="text" id="title" /><br />
                            <label for="body"></label>
                            <textarea id="body"></textarea>
                            <button type="button" onClick={() => useCreatArticle}>Créer un article</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default AdminAdd 