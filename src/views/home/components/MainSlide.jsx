import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Image } from '@chakra-ui/react'
import styled from 'styled-components'

const MainSlide = () => {
    return (
        <>
            <SwiperWrap pagination={true} modules={[Pagination]} className="main-slide topCont">
                <SwiperSlide>
                    <Image
                        src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=3667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Dan Abramov"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://images.unsplash.com/photo-1632292220916-e9c34dd75db2?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Dan Abramov"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="https://images.unsplash.com/photo-1632243313737-e03f05bd09db?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Dan Abramov"
                    />
                </SwiperSlide>
            </SwiperWrap>
        </>
    )
}

const SwiperWrap = styled(Swiper)`
    img {
        display: block;
        width: 100%;
        height: 630px;
        object-fit: cover;
        object-position: center;
    }
`

export default MainSlide
