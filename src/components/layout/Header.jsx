import { Box, Container, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box as="header" borderBottom={'1px solid'} borderColor={'#eee'}>
            <Container display={['block', null, 'flex']} justifyContent="space-between" alignItems={'center'}>
                <Heading fontSize={24}>
                    <Link to="/">Dashboard</Link>
                </Heading>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Main Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/marketplace">NFT Marketplace</Link>
                        </li>
                        <li>
                            <Link to="/datatables">Data Tables</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign In</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </Box>
    )
}

export default Header
