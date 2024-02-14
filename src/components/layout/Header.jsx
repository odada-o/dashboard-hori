import { Link as ReactRouterLink } from 'react-router-dom'
import { Box, Heading, Link } from '@chakra-ui/react'
import Gnb from './Gnb'

const Header = () => {
    return (
        <Box
            as="header"
            id="header"
            position={'fixed'}
            top={0}
            left={{ base: '-100%', xl: 0 }}
            bottom={0}
            zIndex={1000}
            transition={'left 0.3s'}
            w={292}
            bg={'white'}
        >
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
                <Link as={ReactRouterLink} to="/">
                    <strong>HORIZON</strong> FREE
                </Link>
            </Heading>

            <Gnb />
        </Box>
    )
}

export default Header
