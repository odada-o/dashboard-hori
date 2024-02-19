import { Card, CardHeader, Flex, Progress, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
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
                                    <Flex alignItems="center" gap={2}>
                                        {/* && 연산자 : 두 조건 모두 참일 경우 출력 */}
                                        {/* 조건부 아이콘 Approved, Disable, Error 일 경우 */}
                                        {row.status === 'Approved' && <FaCheck color="green" />}
                                        {row.status === 'Disable' && <FaTimes color="red" />}
                                        {row.status === 'Error' && <FaExclamation color="orange" />}
                                        {row.status}
                                    </Flex>
                                </Td>
                                <Td>{row.date}</Td>
                                <Td>
                                    {/* 문자열에서 숫자만 추출하여 Progress 컴포넌트의 value로 사용 */}
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
