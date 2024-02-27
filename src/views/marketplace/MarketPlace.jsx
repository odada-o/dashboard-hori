import React, { useEffect } from 'react'
import { Box, Flex, Grid, GridItem, SimpleGrid, VStack } from '@chakra-ui/react'
import Banner from './components/Banner'
import { TitleH3 } from '../../components/common/Title'
import Nft from '../../components/card/Nft'

import Nft1 from 'assets/img/nfts/Nft1.png'
import Nft2 from 'assets/img/nfts/Nft2.png'
import Nft3 from 'assets/img/nfts/Nft3.png'
import Nft4 from 'assets/img/nfts/Nft4.png'
import Nft5 from 'assets/img/nfts/Nft5.png'
import Nft6 from 'assets/img/nfts/Nft6.png'
import Avatar1 from 'assets/img/avatars/avatar1.png'
import Avatar2 from 'assets/img/avatars/avatar2.png'
import Avatar3 from 'assets/img/avatars/avatar3.png'
import Avatar4 from 'assets/img/avatars/avatar4.png'

const MarketPlace = () => {
    useEffect(() => {
        // 컴포넌트가 마운트될 때 body에 id 추가
        document.body.setAttribute('id', 'marketplace')

        // 컴포넌트가 언마운트될 때 실행될 클린업 함수
        return () => {
            // 컴포넌트가 언마운트될 때 body에서 id 제거
            document.body.removeAttribute('id')
        }
        // []를 두번째 인자로 넘겨주면 컴포넌트가 마운트될 때와 언마운트될 때만 실행됨
        // 만약 두번째 인자를 넘겨주지 않으면 컴포넌트가 업데이트될 때마다 실행됨
        // 만약 두번째 인자에 특정 값이 들어가면 그 값이 변경될 때만 실행됨
        // 만약 두번째 인자에 빈 배열이 들어가면 컴포넌트가 마운트될 때만 실행됨
    }, [])

    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" display={{ base: 'block', xl: 'grid' }} gap={6}>
                <Flex gridColumn={'1 / span 2'} flexDir={'column'} w="100%" gap={10}>
                    <Banner />
                    <Flex direction="column" gap={10}>
                        <Box>
                            <TitleH3>Trending NFTs</TitleH3>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                                <Nft
                                    name="Abstract Colors"
                                    author="By Esthera Jackson"
                                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                                    image={Nft1}
                                    currentbid="0.91 ETH"
                                    download="#"
                                />
                                <Nft
                                    name="Abstract Colors"
                                    author="By Esthera Jackson"
                                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                                    image={Nft2}
                                    currentbid="0.91 ETH"
                                    download="#"
                                />
                                <Nft
                                    name="Abstract Colors"
                                    author="By Esthera Jackson"
                                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                                    image={Nft3}
                                    currentbid="0.91 ETH"
                                    download="#"
                                />
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <TitleH3>Recently Added</TitleH3>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                                <Nft
                                    name="Abstract Colors"
                                    author="By Esthera Jackson"
                                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                                    image={Nft4}
                                    currentbid="0.91 ETH"
                                    download="#"
                                />
                                <Nft
                                    name="Abstract Colors"
                                    author="By Esthera Jackson"
                                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                                    image={Nft5}
                                    currentbid="0.91 ETH"
                                    download="#"
                                />
                                <Nft
                                    name="Abstract Colors"
                                    author="By Esthera Jackson"
                                    bidders={[Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1]}
                                    image={Nft6}
                                    currentbid="0.91 ETH"
                                    download="#"
                                />
                            </SimpleGrid>
                        </Box>
                    </Flex>
                </Flex>
                <Flex w="100%" flexDir={'column'} gap={10}>
                    <Box w="100%" h="100" bg="blue.500"></Box>
                    <Box w="100%" h="100" bg="blue.500"></Box>
                </Flex>
            </Grid>
        </>
    )
}

export default MarketPlace
