import React, { useEffect, useState } from 'react'
import { Box, Button, Card, SimpleGrid, VStack } from '@chakra-ui/react'
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
    const [color, setColor] = useState('yellow')
    // useEffect(함수, [의존성 배열])
    // 1. 컴포넌트가 마운트(탄생) 할 때 배경색 노랑색으로 변경
    useEffect(() => {
        console.log('색상이 변경됨', color)
        document.body.style.backgroundColor = color
        document.body.id = 'intro'
        document.body.classList.add('intro')

        // 2. 컴포넌트가 언마운트(소멸) 될 때 배경색 원래대로 변경
        return () => {
            document.body.style.backgroundColor = ''
            document.body.id = ''
            document.body.classList.remove('intro')
        }
    }, [color])

    // Updating
    // 3. 업데이트 : 버튼 클릭시 배경색 변경
    const toggleColor = () => {
        setColor((prevColor) => (prevColor === 'yellow' ? 'blue' : 'yellow'))
    }
    // color가 변경될 때마다 함수 실행
    // 데이터가 변경될 때마다 함수가 실행
    // useEffect(() => {}, [color])

    return (
        <VStack spacing={5}>
            <Button onClick={toggleColor}>배경색 변경</Button>
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
