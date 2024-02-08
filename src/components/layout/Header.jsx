import { Box, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Gnb from './Gnb'

const Header = () => {
    return (
        <Box as="header" id="header" position={'fixed'} top={0} left={0} bottom={0} zIndex={1000} w={292} bg={'white'}>
            <Heading
                as={'h1'}
                fontSize={25}
                fontWeight={400}
                pt={14}
                pb={9}
                textAlign={'center'}
                borderBottom={'1px solid'}
                borderColor={'lineDefault'}
            >
                <Link to="/">
                    <strong>HORIZON</strong> FREE
                </Link>
            </Heading>

            <Gnb />
        </Box>
    )
}

export default Header
