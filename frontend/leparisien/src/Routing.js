//Importation des dépendances react
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Importation des pages
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import AdminModif from './pages/Admin/Admin_modif';
import AdminAdd from './pages/Admin/Admin_add';
import Error from './pages/Error/Error';
import Article from './pages/Article/Article';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Routing
function Routing() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/AdminAdd' element={<AdminAdd />} />
                <Route path='/Admin' element={<Admin />} />
                <Route path='/Admin/Article/:id' element={<AdminModif />} />
                <Route path='/Article/:id' element={<Article />} />
                <Route path='/Article/*' element={<Error />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;