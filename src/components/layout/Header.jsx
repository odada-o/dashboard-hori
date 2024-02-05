import { Box, ButtonGroup, Button, Heading, IconButton, Container, UnorderedList, ListItem } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Gnb from './Gnb'
import gsap from 'gsap'

const Header = () => {
    // 스크롤 이벤트 함수
    const HandleScoll = () => {
        const scrollY = window.scrollY // 현재 스크롤 위치
        const hd = document.querySelector('#header') // 헤더
        const navBelt = document.querySelector('.nav-belt__wrapper') // 헤더
        const navBar = document.querySelector('.nav-bar__wrapper') // 헤더
        const hdHeight = hd.offsetHeight // 헤더 높이
        const swiperHeight = document.querySelector('.topCont')?.offsetHeight || 0 // 슬라이드 높이
        // ||(or 연산자) : swiperHeight가 없으면 0을 넣어준다.
        console.log(scrollY)
        console.log(swiperHeight - hdHeight)
        // 537

        // if : 100px 이상 스크롤 되면 헤더에 배경색을 입힌다.
        if (scrollY > swiperHeight - hdHeight) {
            // gsap.to(요소, {옵션})
            gsap.to(navBar, { backgroundColor: '#fff', duration: 0.5 })
            gsap.to(navBelt, { backgroundColor: '#f6f7f8', duration: 0.5 })

            gsap.to(navBelt.querySelectorAll('button'), { color: '#000', duration: 0.5 })
        } else {
            // else : 100px 이하로 스크롤 되면 배경색을 없앤다.
            gsap.to(navBar, { backgroundColor: '', duration: 0.5 })
            gsap.to(navBelt, { backgroundColor: '', duration: 0.5 })
        }
    }

    // 스크롤 이벤트 등록
    window.addEventListener('scroll', HandleScoll)

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
