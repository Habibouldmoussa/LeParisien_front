//Importation des composants react
import { useEffect, useState } from "react";
import axios from "axios";

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
                    const response = await data.find(log => log._id === id)
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

    const [dataArt, setDataArt] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    isLoading(true)
    // POST request using fetch with set headers

    useEffect(() => {
        if (!url) { return }
        const token = localStorage.getItem('token');

        const requestOptions = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'Bearer ' + token,
            },
        };

        async function creat() {
            try {
                const response = await axios.post(url, newArticle, requestOptions)
                const data = await response.json()
                setDataArt(data);
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        creat();
    }, [newArticle, url])
    return { isLoading, dataArt, error }
}

