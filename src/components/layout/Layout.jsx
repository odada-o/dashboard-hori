import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Box, Stack } from '@chakra-ui/react'
import History from './History'
import Util from './Util'
import DynamicTitle from './DynamicTitle'

const Layout = () => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'} bg={'bgDefault'}>
            <Header />
            <Box
                as="main"
                id="main"
                flexGrow={1}
                pl={{ sm: 0, xl: 292 }}
                pt={{ sm: 100, xl: 100 }}
                transition={'all 0.2s'}
            >
                <Stack spacing={0} pos={'fixed'} top={'27px'} left={{ sm: '20px', xl: '315px' }} right={'20px'}>
                    <History />
                    <DynamicTitle />
                    <Util />
                </Stack>

                {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
                <Outlet />
            </Box>
            <Footer />
        </Box>
    )
}

export const LayoutNone = () => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'}>
            <Box as="main" id="main" flexGrow={1}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
