import { Box, Container } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box as="footer" h={20} bg={'#eee'}>
            <Container maxW={1280} m={'0 auto'}>
                Footer
            </Container>
        </Box>
    )
}
export default Footer
