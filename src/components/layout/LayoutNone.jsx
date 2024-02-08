import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'

const LayoutNone = () => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'}>
            <Box as="main" id="main" flexGrow={1}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}

export default LayoutNone
