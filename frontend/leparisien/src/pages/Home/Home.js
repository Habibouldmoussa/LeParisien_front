import Resume from '../../components/Resum/Resum'
import { useFetch } from '../../utils/Hooks/Hooks'

//Integration du banner et les cards des logomeents 
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
                            <Resume key={element.id} id={element.id} title={element.title} cover={element.cover} />
                        ))

                    )}
                </section>
            </main>
        </div>
    )
}
export default Home 