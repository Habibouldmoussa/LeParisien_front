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
    const [dataArt, setDataArt] = useState({})
    const [isLoadingArt, setLoadingArt] = useState(true)
    const [errorArt, setErrorArt] = useState(false)

    const { isLoading, data, error } = useFetch(url);
    if (error) { setErrorArt(true) }
    useEffect(() => {
        if (!url) return
        setLoadingArt(true)
        async function getArticle() {
            if (!isLoading) {
                try {
                    const response = await data.find(log => log.id === id)
                    setDataArt(response)
                } catch (err) {
                    console.log(err)
                    setErrorArt(true)
                } finally {
                    setLoadingArt(false)
                }
            }
        }
        getArticle();
    }, [data, id, isLoading, url])
    return { isLoadingArt, dataArt, errorArt }
}
export function useCreatArticle(url, newArticle) {
    const [message, setMessage] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    //if (!url) { return }
    isLoading(true)
    // POST request using fetch with set headers

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + process.env.TOKEN_API,
            },
            body: JSON.stringify({ newArticle })
        };

        async function creat() {
            try {
                const response = await fetch(url, requestOptions);
                const data = await response.json()
                setMessage(data);
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        creat();
    }, [newArticle, url])
    return { isLoading, message, error }
}

