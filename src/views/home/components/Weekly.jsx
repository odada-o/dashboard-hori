import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import { lineChartDataTotalSpent, lineChartOptionsTotalSpent } from '../../../variables/charts'
import LineChart from '../../../components/charts/LineChart'

const Weekly = () => {
    return (
        <Card display={'flex'}>
            <CardHeader>Weekly Revenue</CardHeader>
            <CardBody>
                <LineChart chartData={lineChartDataTotalSpent} chartOptions={lineChartOptionsTotalSpent} />
            </CardBody>
        </Card>
    )
}

export default Weekly
