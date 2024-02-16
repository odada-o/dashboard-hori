import { Card, CardHeader, Progress, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { tableComplexData } from '../../../variables/tables'
import { FaCheck, FaExclamation } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

const CheckTableComm = () => {
    return (
        <Card>
            <CardHeader>Complex Table</CardHeader>
            <TableContainer>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>NAME</Th>
                            <Th>STATUS</Th>
                            <Th>DATE</Th>
                            <Th>PROGRESS</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* element.map() */}
                        {tableComplexData.map((row, index) => (
                            <Tr key={index}>
                                <Td>{row.name}</Td>
                                <Td>
                                    {/* 조건부 아이콘 Approved, Disable, Error 일 경우 */}
                                    {row.status === 'Approved' && <FaCheck color="green" />}
                                    {row.status === 'Disable' && <FaTimes color="red" />}
                                    {row.status === 'Error' && <FaExclamation color="orange" />}
                                    {row.status}
                                </Td>
                                <Td>{row.date}</Td>
                                <Td>
                                    <Progress value={row.progress} />
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default CheckTableComm
