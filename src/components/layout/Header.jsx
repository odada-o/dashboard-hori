import { Box, ButtonGroup, Container, Heading, IconButton } from '@chakra-ui/react'
import { SearchIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContainerLg from './Container'

const Header = () => {
    return (
        <Box as="header" borderBottom={'1px solid'} borderColor={'#eee'}>
            <ContainerLg>
                <Box display={['block', null, 'flex']} h={100} alignItems={'center'} justifyContent={'space-between'}>
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
                    <IconBtnGroup>
                        <IconButton aria-label="Search database" icon={<SearchIcon />} />
                        <IconButton aria-label="Light database" icon={<SunIcon />} />
                    </IconBtnGroup>
                </Box>
            </ContainerLg>
        </Box>
    )
}
// const 변수이름 = styled(컴포넌트 이름)`속성: 값;`
const IconBtnGroup = styled(ButtonGroup)`
    button {
        background: red;
    }
`
// const 변수이름 = styled.태그이름`속성: 값;`
const Nav = styled.nav`
    height: 100%;
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
