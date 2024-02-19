import { Box, Flex, Grid, GridItem, SimpleGrid, VStack } from '@chakra-ui/react'
import Banner from './components/Banner'

const MarketPlace = () => {
    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" display={{ base: 'block', xl: 'grid' }} gap={6}>
                <Flex gridColumn={'1 / span 2'} flexDir={'column'} w="100%" gap={10}>
                    <Banner />
                    <Box w="100%" h="100" bg="blue.500"></Box>
                    <Box w="100%" h="100" bg="blue.500"></Box>
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
