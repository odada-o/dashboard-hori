import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import styled from 'styled-components'
import { Heading, Text } from '@chakra-ui/react'

const Banner = () => {
    return (
        <SwiperStyle pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <Heading>Discover, collect, and sell extraordinary NFTs</Heading>
                <Text>Join the world's largest NFT marketplace</Text>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </SwiperStyle>
    )
}

const SwiperStyle = styled(Swiper)`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
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
