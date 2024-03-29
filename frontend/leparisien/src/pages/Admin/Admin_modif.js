//Importation des composants react
import { useFinditem } from '../../utils/Hooks/Hooks'
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from "react";

function AdminModif() {
    const [slug, setSlug] = useState();
    const [Article, setArticle] = useState();
    const [formDate, setFromDate] = useState();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    //Récuperation de l'id de l'URL 
    const { id } = useParams()
    //Récuperation du token s'il existe 
    const token = localStorage.getItem('token');
    //Récuperation du Article par son id
    let { isLoadingArt, dataArt, errorArt } = useFinditem('https://article-lp-api.onrender.com/articles', id)
    useEffect(() => {
        setTitle(dataArt.title);
        setBody(dataArt.body);
    }, [dataArt])
    if (errorArt) {
        return <span>Oups il y a eu un problème</span>
    }

    const handleUploadClick = (e) => {
        e.preventDefault()
        axios.put('https://article-lp-api.onrender.com/articles/' + id, formDate, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token,
            },
        })
            .then((data) => { console.log(data); window.location.href = "/Admin"; })
            .catch((err) => console.error(err));

    };
    const handleChangeArticle = async (e) => {
        setArticle({ ...Article, [e.target.name]: e.target.value });
        let Data = new FormData();
        if (e.target.name === 'title') {
            setTitle(e.target.value)
            setSlug(e.target.value.replaceAll(" ", "_"),);
        } else if (e.target.name === 'image') {
            Data.append("image", e.target.files[0]);
        } else {
            setBody(e.target.value);
        }
        const article = JSON.stringify({
            ...Article,
            "slug": slug
        });
        Data.append("Article", article);
        setFromDate(Data);
    }
    return (
        <main className="">
            {isLoadingArt ? (
                <div className='loader'></div>
            ) : (dataArt || token ? (
                <section className="admin_modif">
                    <h2>Modifier un article</h2>
                    <form onSubmit={handleUploadClick} className='admin__modif'>
                        <label >Titre</label><input type="text" name="title" onChange={handleChangeArticle} value={title} /><br />
                        <textarea name="body" onChange={handleChangeArticle} value={body} rows="20"  ></textarea><br />
                        <input type="file" name="image" onChange={handleChangeArticle} /><br />
                        <button type="submit" >Modifier cet article</button>
                    </form>
                </section>
            ) : (
                <Navigate replace to="/Admin" />
            )
            )}
        </main>
    )

}
export default AdminModif