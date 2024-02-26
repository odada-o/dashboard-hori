import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import styled from 'styled-components'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const Banner = () => {
    return (
        <SwiperStyle pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <Box className="slide-box" bg={'primary'}>
                    <Heading className="slide-title">Discover, collect, and sell extraordinary NFTs</Heading>
                    <Text className="slide-text">
                        Enter in this creative world. Discover now the latest NFTs or start creating your own!
                    </Text>
                    <Flex className="btn-area">
                        <ButtonStyle $white>Discover now</ButtonStyle>
                        <ButtonStyle>Watch Video</ButtonStyle>
                    </Flex>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className="slide-box" bg={'secondary'}>
                    <Heading className="slide-title">Discover, collect, and sell extraordinary NFTs</Heading>
                    <Text className="slide-text">
                        Enter in this creative world. Discover now the latest NFTs or start creating your own!
                    </Text>
                    <Flex className="btn-area">
                        <ButtonStyle $white>Discover now</ButtonStyle>
                        <ButtonStyle>Watch Video</ButtonStyle>
                    </Flex>
                </Box>
            </SwiperSlide>
            <SwiperSlide>
                <Box className="slide-box" bg={'tertiary'}>
                    <Heading className="slide-title">Discover, collect, and sell extraordinary NFTs</Heading>
                    <Text className="slide-text">
                        Enter in this creative world. Discover now the latest NFTs or start creating your own!
                    </Text>
                    <Flex className="btn-area">
                        <ButtonStyle $white>Discover now</ButtonStyle>
                        <ButtonStyle>Watch Video</ButtonStyle>
                    </Flex>
                </Box>
            </SwiperSlide>
        </SwiperStyle>
    )
}

const ButtonStyle = styled.button`
    height: 40px;
    padding: 0 15px;
    border-radius: 0.75rem;
    font-size: 16px;
    background: ${(props) => (props.$white ? 'white' : '')};
    color: ${(props) => (props.$white ? ({ theme }) => theme.colors.primary : 'white')};
`

const SwiperStyle = styled(Swiper)`
    width: 100%;
    height: 338px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 20px;
    .swiper-slide {
    }
    .slide-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 56px 64px;
    }
    .slide-title {
        font-size: 1.875rem;
        color: white;
    }
    .slide-text {
        margin-top: 10px;
        color: #b5acff;
        font-size: 1rem;
        font-weight: 500;
    }
    .btn-area {
        margin-top: auto;
    }
    .swiper-pagination {
        bottom: 0;
    }
    .swiper-pagination-bullet {
        background-color: #000;
    }
    .swiper-pagination-bullet-active {
        background-color: #fff;
    }
`

export default Banner
