import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, ButtonGroup, Button, Heading, IconButton, Container, UnorderedList, ListItem } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Gnb from './Gnb'
import gsap from 'gsap'

const Header = () => {
    const location = useLocation() // 현재 위치 정보를 가져옴

    // 스크롤 이벤트 함수
    const handleScroll = () => {
        // 현재 경로가 '/intro'인 경우에만 애니메이션 실행
        if (location.pathname === '/') {
            const scrollY = window.scrollY
            const hd = document.querySelector('#header')
            const navBelt = document.querySelector('.nav-belt__wrapper')
            const navBar = document.querySelector('.nav-bar__wrapper')
            const hdHeight = hd.offsetHeight
            const swiperHeight = document.querySelector('.main-slide').offsetHeight

            if (scrollY > swiperHeight - hdHeight) {
                gsap.to(navBar, { backgroundColor: '#fff', duration: 0.5 })
                gsap.to(navBelt, { backgroundColor: '#f6f7f8', duration: 0.5 })
                gsap.to(navBelt.querySelectorAll('button'), { color: '#000', duration: 0.5 })
            } else {
                gsap.to(navBar, { backgroundColor: '', duration: 0.5 })
                gsap.to(navBelt, { backgroundColor: '', duration: 0.5 })
            }
        }
    }

    useEffect(() => {
        // 스크롤 이벤트 리스너 추가
        window.addEventListener('scroll', handleScroll)

        // 컴포넌트가 언마운트되거나 경로가 변경될 때 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [location.pathname])

    return (
        <Box
            as="header"
            id="header"
            position={'fixed'}
            top={0}
            left={0}
            right={0}
            zIndex={1000}
            bg="rgba(0,0,0,.1)"
            backdropFilter={'saturate(180%) blur(15px)'}
        >
            {/* tab */}
            <Box
                className="nav-belt__wrapper"
                display={['none', null, null, null, 'block']}
                h={'32px'}
                bg={'rgba(0,0,0,.6)'}
            >
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
            <Box className="nav-bar__wrapper" bg={'rgba(0,0,0,.05)'}>
                <Container display={'flex'} h={'60px'} alignItems={'center'} justifyContent={'space-between'}>
                    <Heading as={'h1'} fontSize={24}>
                        <Link to="/">Dashboard</Link>
                    </Heading>

                    <Gnb />
                    <ButtonGroup>
                        <IconButton variant="ghost" aria-label="Search database" icon={<SearchIcon />} />
                        <IconButton variant="ghost" aria-label="Light database" icon={<SunIcon />} />
                        <IconButton
                            variant="ghost"
                            aria-label="전체 메뉴"
                            icon={<HamburgerIcon />}
                            display={{ sm: 'block', lg: 'none' }}
                        />
                    </ButtonGroup>
                </Container>
            </Box>
        </Box>
    )
}

export default Header
