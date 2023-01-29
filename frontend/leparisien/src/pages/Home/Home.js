import Resum from '../../components/Resum/Resum'
import { useFetch } from '../../utils/Hooks/Hooks'


function Home() {
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
                        data.map((element) => (
                            <Resum key={element.id} id={element.id} title={element.title} cover={element.cover} body={element.body} />
                        ))

                    )}
                </section>
            </main>
        </div>
    )
}
export default Home 