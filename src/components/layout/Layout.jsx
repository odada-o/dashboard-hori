import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { Box, Stack } from '@chakra-ui/react'
import History from './History'
import Util from './Util'
import DynamicTitle from './DynamicTitle'

const Layout = () => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100vh'}>
            <Header />
            <Box
                as="main"
                id="main"
                flexGrow={1}
                pl={{ base: '12px', xl: 312 }}
                pr={{ base: '12px', xl: '12px' }}
                pt={{ base: 200, md: 140 }}
                transition={'all 0.2s'}
            >
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent={'space-between'}
                    spacing={0}
                    pos={'fixed'}
                    top={'27px'}
                    left={{ base: '12px', xl: '310px' }}
                    right={'12px'}
                    // zIndex={100}
                    py={2}
                    px={{ base: 2, xl: 4 }}
                    // bg={'rgba(255, 255, 255, 0.1)'}
                    bg={'rgba(255, 0, 0, 0.1)'}
                    backdropFilter={'blur(10px)'}
                    borderRadius={'0.75rem'}
                    transition={'all 0.2s'}
                >
                    <Box>
                        <History />
                        <DynamicTitle />
                    </Box>
                    <Util />
                </Stack>

                {/* {props.showTitle && <h2>{props.title}</h2>}
                {props.children} */}
                <Outlet />
            </Box>
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
