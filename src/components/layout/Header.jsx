import { Box, Container, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <Box as="header" borderBottom={'1px solid'} borderColor={'#eee'}>
            <Container display={['block', null, 'flex']} justifyContent="space-between" alignItems={'center'}>
                <Heading fontSize={24}>
                    <Link to="/">Dashboard</Link>
                </Heading>
                <Nav>
                    <NavList>
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
                    </NavList>
                </Nav>
            </Container>
        </Box>
    )
}

const Nav = styled.nav`
    height: 100px;
    background: lightblue;
`

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 100%;
    margin: 0;
    list-style: none;
    li {
        width: 100%;
        text-align: center;
    }
    a {
        display: block;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        li {
            width: auto;
        }
        a {
            display: inline-block;
        }
    }
`

export default Header
