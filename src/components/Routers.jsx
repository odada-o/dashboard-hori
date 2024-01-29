import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../views/index'
// import About from './views/about'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
