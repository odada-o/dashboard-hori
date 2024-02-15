import { Card, CardBody, CardHeader, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

const TotalSpent = () => {
    return (
        <Card>
            <CardHeader>
                <Stat>
                    <StatLabel>Sent</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        $37.5K
                    </StatHelpText>
                </Stat>
            </CardHeader>
            <CardBody></CardBody>
        </Card>
    )
}

export default TotalSpent
