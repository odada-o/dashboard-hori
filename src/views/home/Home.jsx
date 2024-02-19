import { Box, Card, SimpleGrid, VStack } from '@chakra-ui/react'
import MiniSt from '../../components/card/MiniSt'
import IconBox from '../../components/icons/IconBox'
import { MdBarChart } from 'react-icons/md'
import { FcAreaChart, FcDoughnutChart, FcFlowChart, FcComboChart } from 'react-icons/fc'
import TotalSpent from './components/TotalSpent'
import Weekly from './components/Weekly'
import CheckTable from './components/CheckTable'
import DailyTraffic from './components/DailyTraffic'
import PieCard from './components/PieCard'
import ComplexTable from './components/ComplexTable'
import ComplexTableComm from './components/ComplexTableComm'
import Tasks from './components/Tasks'
import MiniCalendar from '../../components/calendar/MiniCalendar'

const Home = () => {
    return (
        <VStack spacing={5}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px" w={'100%'}>
                <MiniSt
                    name="Earnings"
                    value="$350.4"
                    startContent={<IconBox w={'56px'} h={'56px'} bg={'bgDefault'} icon={<MdBarChart />} />}
                />
                <MiniSt
                    name="Spend this month"
                    value="$642.39"
                    startContent={<IconBox w={'56px'} h={'56px'} bg={'bgDefault'} icon={<FcDoughnutChart />} />}
                />
                <MiniSt growth="10.39%" name="Sales" value="$574.34" />
                <MiniSt
                    name="Your balance"
                    value="$1,000"
                    endContent={<IconBox w={'56px'} h={'56px'} bg={'bgDefault'} icon={<FcAreaChart />} />}
                />
                <MiniSt
                    name="New Tasks"
                    value="154"
                    startContent={<IconBox w={'56px'} h={'56px'} bg={'bgDefault'} icon={<FcComboChart />} />}
                />
                <MiniSt
                    name="Total Projects"
                    value="2935"
                    startContent={<IconBox w={'56px'} h={'56px'} bg={'bgDefault'} icon={<FcFlowChart />} />}
                />
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <TotalSpent />
                <Weekly />
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <CheckTable />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <DailyTraffic />
                    <PieCard />
                </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <ComplexTable />
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                    <Tasks />
                    <MiniCalendar />
                </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" w={'100%'}>
                <ComplexTableComm />
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
