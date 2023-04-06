import Header from "./Header/Header"
import "./App.css"
import GoodsPage from "./Pages/GoodsPage/GoodsPage"
import AboutPage from "./Pages/AboutPage/AboutPage"
import ContactsPage from "./Pages/ContactsPage/ContactsPage"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFoundPage from "./NotFoundPage/NotFoundPage"
import HomePage from "./Pages/HomePage/HomePage"
import GoodInfoPage from "./Pages/GoodInfoPage/GoodInfoPage"

function App(){
    return (
        <div>
            <Header/>
            <Router>
                <Routes>
                    {/* FIRST IS HOME PAGE with "/" */}
                    <Route path="/" element={<HomePage/>}/> 
                    <Route path="/goods" element={<GoodsPage/>}/>
                    <Route path="/goods/:id" element={<GoodInfoPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Router>
            <div>
                2023(c) by Telran School
            </div>
        </div>
    )
}

export default App