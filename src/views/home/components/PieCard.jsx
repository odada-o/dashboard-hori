import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import PieChart from '../../../components/charts/PieChart'
import { pieChartData, pieChartOptions } from '../../../variables/charts'

const PieCard = () => {
    return (
        <Card>
            <CardHeader title="Pie Chart" />
            <CardBody>
                <PieChart h="100%" w="100%" chartData={pieChartData} chartOptions={pieChartOptions} />
            </CardBody>
        </Card>
    )
}

export default PieCard
