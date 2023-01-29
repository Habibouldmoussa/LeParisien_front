//import Resume from '../../components/Resume/Resume'
import { useFetch } from '../../utils/Hooks/Hooks'


function Admin() {
    const { isLoading, data, error } = useFetch('http://localhost:4200/article/');
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
                        <p>{data.title}</p>

                    )}
                </section>
            </main>
        </div>
    )
}
export default Admin 