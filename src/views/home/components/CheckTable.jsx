import { Card, CardHeader, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

const CheckTable = () => {
    return (
        <Card>
            <CardHeader>Check Table</CardHeader>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>NAME</Th>
                            <Th>PROGRESS</Th>
                            <Th isNumeric>QUANTITY</Th>
                            <Th>DATE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                            <Td>12 Jan 2021</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                            <Td>12 Jan 2021</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                            <Td>12 Jan 2021</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default CheckTable
