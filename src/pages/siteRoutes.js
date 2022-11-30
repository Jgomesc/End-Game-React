import {BrowserRouter, Routes,Route} from 'react-router-dom'


import Home from './home'
import Jogadores from './jogadores'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element= {<Home />} />
                <Route path='/jogadores' element= {<Jogadores/>} />
            </Routes>
        </BrowserRouter>
    )
}