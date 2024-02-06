import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/home/Home'
import MarketPlace from './views/marketplace/MarketPlace'
import DataTables from './views/datatables/DataTables'
import Profile from './views/profile/Profile'
import Signin from './views/signin/Signin'
import Layout from './components/layout/Layout'

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
                <Route path="/" element={<Layout />}>
                    {routeArr.map((item, index) => (
                        <Route key={index} path={item.path} element={item.element} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers
