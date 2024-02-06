import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Box } from '@chakra-ui/react'

const Layout = () => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'}>
            <Header />
            <Box as="main" id="main" flexGrow={1}>
                {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}

export default Layout
