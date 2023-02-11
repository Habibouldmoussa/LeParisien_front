//import Resume from '../../components/Resume/Resume'
//import { useFetch } from '../../utils/Hooks/Hooks'


function AdminModif() {


    return (
        <main className="">

            <section className="admin">
                <div>
                    <h2>Créer un article</h2>
                    <form>
                        <label for="title"> Titre </label><input type="text" id="title" /><br />
                        <label for="body"></label>
                        <textarea id="body"></textarea>
                        <button type="button">Créer un article</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default AdminModif