import { Box, Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Box as="header" borderBottom={'3px solid'} borderColor={'red'}>
            <Container display={['block', null, 'flex']} justifyContent="space-between">
                <h1 style={{ width: '50px', height: '100%' }}>
                    <a href="/">Dashboard</a>
                </h1>
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
