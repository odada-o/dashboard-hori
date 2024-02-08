import { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { UnorderedList, ListItem, css, Link } from '@chakra-ui/react'
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

    const [isSelected, setIsSelected] = useState(0)

    return (
        <UnorderedList display={{ sm: 'none', xl: 'block' }} py={6} gap={'40px'} fontSize={'16px'}>
            {navArr.map((item, index) => (
                <ListItem key={index} onClick={() => setIsSelected(index)}>
                    <Link
                        as={ReactRouterLink}
                        to={item.path}
                        display="flex"
                        alignItems="center"
                        gap="17px"
                        p="9px 0 9px 20px"
                        sx={{
                            // 조건부 스타일 적용
                            color: isSelected === index ? 'red' : 'inherit',
                            fontWeight: isSelected === index ? 'bold' : 'normal',
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
