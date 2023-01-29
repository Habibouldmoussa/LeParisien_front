//Importation des composants react
import { useEffect, useState } from "react";
//import { useLocation } from "react-router-dom";
//Le custom hook useFetch est utiliser pour consommé l'url de l'api 
export function useFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }

        }
        fetchData();

    }, [url])
    return { isLoading, data, error }
}
//ce hook est quand a lui destiné a récuperer un seul item de l'api
export function useFinditem(url, id) {
    const [dataLog, setDatalog] = useState({})
    const [isLoadingLog, setLoadinglog] = useState(true)
    const [errorLog, setErrorlog] = useState(false)

    const { isLoading, data, error } = useFetch(url);
    if (error) { setErrorlog(true) }
    useEffect(() => {
        if (!url) return
        setLoadinglog(true)
        async function getArticle() {
            if (!isLoading) {
                try {
                    const response = await data.find(log => log.id === id)
                    setDatalog(response)
                } catch (err) {
                    console.log(err)
                    setErrorlog(true)
                } finally {
                    setLoadinglog(false)
                }
            }
        }
        getArticle();
    }, [data, id, isLoading, url])
    return { isLoadingLog, dataLog, errorLog }
}


