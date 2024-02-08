import React, { useEffect, useState } from 'react'
import { Box, ButtonGroup, Button, Heading, IconButton, Container, UnorderedList, ListItem } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import Gnb from './Gnb'
import gsap from 'gsap'

const Header = () => {
    return (
        <Box as="header" id="header" position={'fixed'} top={0} left={0} bottom={0} zIndex={1000} w={292} bg={'white'}>
            <Heading as={'h1'} fontSize={24}>
                <Link to="/">Dashboard</Link>
            </Heading>

            <Gnb />
        </Box>
    )
}

export default Header
