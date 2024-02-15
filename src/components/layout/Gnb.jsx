import { Link as ReactRouterLink, useLocation } from 'react-router-dom'
import { UnorderedList, ListItem, Link } from '@chakra-ui/react'
import { FaCartShopping } from 'react-icons/fa6'
import { AiFillHome } from 'react-icons/ai'
import { IoStatsChart } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { IoMdLogIn } from 'react-icons/io'

const Gnb = () => {
    const navArr = [
        { name: 'Main Dashboard', path: '/', icon: <AiFillHome /> },
        { name: 'NFT Marketplace', path: '/marketplace', icon: <FaCartShopping /> },
        { name: 'Data Tables', path: '/datatables', icon: <IoStatsChart /> },
        { name: 'Profile', path: '/profile', icon: <FaUser /> },
        { name: 'Sign In', path: '/signin', icon: <IoMdLogIn /> },
    ]

    const location = useLocation()

    return (
        <UnorderedList py={6} gap={'40px'} fontSize={'16px'}>
            {navArr.map((item, index) => (
                <ListItem key={index}>
                    <Link
                        as={ReactRouterLink}
                        to={item.path}
                        position="relative"
                        display="flex"
                        alignItems="center"
                        gap="17px"
                        p="9px 0 9px 20px"
                        sx={{
                            // 조건부 스타일 적용
                            color: location.pathname === item.path ? 'primary' : 'inherit', // 색상 변경
                            fontWeight: location.pathname === item.path ? 'bold' : 'inherit', // 글씨 굵기 변경
                            '&::after': {
                                content: '""',
                                display: location.pathname === item.path ? 'block' : 'none', // 선택 표시기
                                width: '4px',
                                bg: 'primay',
                                position: 'absolute',
                                top: '4px',
                                right: 0,
                                bottom: '4px',
                                borderRadius: '4px',
                            },
                            _hover: {
                                bg: 'gray.100', // 마우스 호버 시의 배경색 변경
                            },
                        }}
                    >
                        {item.icon} {item.name}
                    </Link>
                </ListItem>
            ))}
        </UnorderedList>
    )
}

export default Gnb
