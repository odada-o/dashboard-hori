import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views'
import MarketPlace from './views/MarketPlace'
import DataTables from './views/DataTables'
import Profile from './views/Profile'
import Signin from './views/Signin'

const routeArr = [
    {
        path: '/',
        element: <Home />,
        background: 'red',
    },
    {
        path: '/marketplace',
        element: <MarketPlace />,
    },
    {
        path: '/datatables',
        element: <DataTables />,
    },
    {
        path: '/profile',
        element: <Profile />,
    },
    {
        path: '/signin',
        element: <Signin />,
    },
]

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routeArr.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
