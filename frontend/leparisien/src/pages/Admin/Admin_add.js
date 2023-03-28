import { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom"
function AdminAdd() {
    const [slug, setSlug] = useState();
    const [Article, setArticle] = useState();
    const [formDate, setFromDate] = useState();
    const token = localStorage.getItem('token');

    const handleUploadClick = async e => {
        e.preventDefault()
        try {
            const response = await axios.post('https://article-lp-api.onrender.com/articles', formDate, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': 'Bearer ' + token,
                },
            })
            console.log(response);
            window.location.href = "/Admin";
        } catch (err) {
            console.log(err);
        }
    };

    const handleChangeArticle = async (e) => {

        setArticle({ ...Article, [e.target.name]: e.target.value });
        let Data = new FormData();
        if (e.target.name === 'title') {
            setSlug(e.target.value.replaceAll(" ", "_"),);
        } else if (e.target.name === 'image') {
            Data.append("image", e.target.files[0]);
        }
        const article = JSON.stringify({
            ...Article,
            "slug": slug
        });
        Data.append("Article", article);

        setFromDate(Data);

    };
    return (token ? (
        <main className="">
            <section className="admin_add">
                <h2>Créer un article</h2>
                <form onSubmit={handleUploadClick}>
                    <label>Titre</label><input type="text" name="title" onChange={handleChangeArticle} /><br />
                    <textarea name="body" onChange={handleChangeArticle} rows="20"  ></textarea><br />
                    <input type="file" name="image" onChange={handleChangeArticle} /><br />
                    <button type="submit" >Créer un article</button>
                </form>
            </section>
        </main >
    ) : (
        <Navigate replace to="/Admin" />
    )
    )
}
export default AdminAdd 