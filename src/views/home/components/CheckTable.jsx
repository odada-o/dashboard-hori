import { Card, CardHeader, Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { tableDataCheck } from '../../../variables/tables'

const CheckTable = () => {
    return (
        <Card>
            <CardHeader>Check Table</CardHeader>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>NAME</Th>
                            <Th>PROGRESS</Th>
                            <Th isNumeric>QUANTITY</Th>
                            <Th>DATE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* element.map() */}
                        {tableDataCheck.map((row, index) => (
                            <Tr key={index}>
                                <Td>
                                    <Checkbox isChecked={row.checked} />
                                </Td>
                                <Td>{row.name}</Td>
                                <Td>{row.progress}</Td>
                                <Td isNumeric>{row.quantity}</Td>
                                <Td>{row.date}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default CheckTable
