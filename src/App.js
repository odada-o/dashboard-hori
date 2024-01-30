import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views'
import MarketPlace from './views/MarketPlace'
import DataTables from './views/DataTables'
import Profile from './views/Profile'
import Signin from './views/Signin'
import Rtl from './views/Rtl'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/marketplace" element={<MarketPlace />} />
                <Route path="/datatables" element={<DataTables />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/rtl" element={<Rtl />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
