import { Box, SimpleGrid, VStack } from '@chakra-ui/react'
import MiniSt from '../../components/card/MiniSt'

const Home = () => {
    return (
        <VStack spacing={5}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px" w={'100%'}>
                <MiniSt />
                <MiniSt />
                <MiniSt />
                <MiniSt />
                <MiniSt />
                <MiniSt />
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <Box bg="tomato" height="80px">
                    ddd
                </Box>
                <Box bg="tomato" height="80px">
                    ddd
                </Box>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <Box bg="tomato" height="80px">
                    ddd
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <Box bg="tomato" height="80px">
                        ddd
                    </Box>
                    <Box bg="tomato" height="80px">
                        ddd
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <Box bg="tomato" height="80px">
                    ddd
                </Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <Box bg="tomato" height="80px">
                        ddd
                    </Box>
                    <Box bg="tomato" height="80px">
                        ddd
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
        </VStack>
    )
}

export default Home
