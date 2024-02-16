import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import { TitleH2 } from '../../../components/common/Title'
import ColumnChart from '../../../components/charts/BarChart'
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic } from '../../../variables/charts'

const DailyTraffic = () => {
    return (
        <Card display={'flex'}>
            <CardHeader>
                <TitleH2>Weekly Revenue</TitleH2>
            </CardHeader>
            <CardBody>
                <ColumnChart chartData={barChartDataDailyTraffic} chartOptions={barChartOptionsDailyTraffic} />
            </CardBody>
        </Card>
    )
}

export default DailyTraffic
