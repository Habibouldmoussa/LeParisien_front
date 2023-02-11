//import Resume from '../../components/Resume/Resume'
//import { useCreatArticle } from '../../utils/Hooks/Hooks'
import { useState } from "react";
import axios from 'axios';

function AdminAdd() {
    const [file, setFile] = useState();
    const [slug, setSlug] = useState();
    const [title, setTitle] = useState();
    const [formDate, setFromDate] = useState();
    const [body, setBody] = useState();
    const handleUploadClick = () => {
        let Data = new FormData();
        const article = JSON.stringify({
            "title": title,
            "slug": slug,
            "body": body,
        });
        Data.append("Article", article);
        Data.append("image", file);

        setFromDate(Data)
        console.log(formDate)
        if (!file) {
            return;
        }
        axios.post('http://localhost:4200/articles', formDate, {
            headers: {
                'Content-Type': 'multipart/form-data',
                // 'Authorization': 'bearer' + process.env.REACT_APP_TOKEN_API,
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    };
    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    const handleChangetitle = (value) => {
        if (value) {
            setTitle(value);
            value = value.replaceAll(" ", "_");
            setSlug(value)
        }
    };
    const handleChangeBody = (value) => {
        if (value) {
            setBody(value);
        }
    };
    return (
        <div>
            <main className="">
                <section className="admin">
                    <div>
                        <h2>Créer un article</h2>
                        <form>
                            <label>Titre</label><input type="text" id="title" onChange={(e) => handleChangetitle(e.target.value)} /><br />
                            <textarea id="body" onChange={(e) => handleChangeBody(e.target.value)} ></textarea><br />
                            <input type="file" name="image" onChange={handleFileChange} /><br />
                            <button type="button" onClick={() => handleUploadClick()}>Créer un article</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default AdminAdd 