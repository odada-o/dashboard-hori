import { Box, Card, CardBody, Flex, Spacer, Stat, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import { MdBarChart } from 'react-icons/md'

const MiniSt = (props) => {
    const { name, value, startContent, endContent } = props

    return (
        <Card>
            <CardBody>
                <Flex>
                    {startContent}
                    <Stat ml={5}>
                        <StatLabel>{name}</StatLabel>
                        <StatNumber>{value}</StatNumber>
                    </Stat>
                    <Spacer />
                    {endContent}
                </Flex>
            </CardBody>
        </Card>
    )
}

export default MiniSt
