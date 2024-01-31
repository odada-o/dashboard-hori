import Footer from './Footer'
import Header from './Header'
import { Box, Container } from '@chakra-ui/react'

const Layout = (props) => {
    return (
        <Box display={'flex'} flexDir={'column'} minH={'100svh'}>
            <Header />
            <Box as="main" id="main" flexGrow={1}>
                <Container maxW={1280} m={'0 auto'} py={4}>
                    <h2>{props.title}</h2>
                    {props.children}
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default Layout
