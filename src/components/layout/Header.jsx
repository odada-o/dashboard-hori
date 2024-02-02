import { Box, ButtonGroup, Button, Heading, IconButton, Container, UnorderedList, ListItem } from '@chakra-ui/react'
import { SearchIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContainerLg from './Container'
import { lighten } from 'polished'

const Header = () => {
    return (
        <Box as="header" bg="rgba(0,0,0,.1)" backdropFilter={'saturate(180%) blur(15px)'}>
            {/* tab */}
            <Box display={['none', null, null, null, 'block']} h={'32px'} bg={'rgba(0,0,0,.6)'}>
                <Container display="flex" justifyContent={'space-between'} alignItems={'center'}>
                    <ButtonGroup gap={'10px'}>
                        <Button colorScheme="teal" variant="link12">
                            공공 기관용
                        </Button>
                        <Button colorScheme="teal" variant="link12">
                            금융 클라우드
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup gap={'10px'}>
                        <Button colorScheme="teal" variant="link12">
                            로그인
                        </Button>
                        <Button colorScheme="teal" variant="link12">
                            회원가입
                        </Button>
                        <Button colorScheme="teal" variant="link12">
                            Languages
                        </Button>
                    </ButtonGroup>
                </Container>
            </Box>
            {/* header */}
            <Box bg={'rgba(0,0,0,.05)'}>
                <Container
                    display={['block', null, 'flex']}
                    h={100}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Heading as={'h1'} fontSize={24}>
                        <Link to="/">Dashboard</Link>
                    </Heading>

                    <UnorderedList display={'flex'} gap={'20px'}>
                        <ListItem>
                            <Link to="/">Main Dashboard</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/marketplace">NFT Marketplace</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/datatables">Data Tables</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/datatables">Profile</Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/datatables">Sign In</Link>
                        </ListItem>
                    </UnorderedList>
                    <ButtonGroup bg={{ sm: 'blue', md: 'red', lg: 'yellow' }}>
                        <IconButton aria-label="Search database" icon={<SearchIcon />} />
                        <IconButton aria-label="Light database" icon={<SunIcon />} />
                    </ButtonGroup>
                </Container>
            </Box>
        </Box>
    )
}

export default Header
