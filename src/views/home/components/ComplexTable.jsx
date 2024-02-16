import React from 'react'
import { useTable, useSortBy } from 'react-table'
import {
    Box,
    Card,
    CardHeader,
    Checkbox,
    Progress,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { tableComplexData } from '../../../variables/tables'
import { FaAngleDown, FaAngleUp, FaCheck, FaExclamation } from 'react-icons/fa6'
import { TitleH2 } from '../../../components/common/Title'
import { FaTimes } from 'react-icons/fa'

const ComplexTable = () => {
    // tableDataCheck 배열
    // useMemo를 사용하여 데이터를 캐싱
    // useMemo를 사용하지 않으면 렌더링 될 때마다 데이터가 새로 생성되어 렌더링 성능에 영향을 줄 수 있음
    const data = React.useMemo(() => tableComplexData, [])

    // 컬럼 정의
    const columns = React.useMemo(
        () => [
            {
                Header: 'NAME',
                accessor: 'name',
            },
            {
                Header: 'STATUS',
                accessor: 'status',
                // STATUS 열의 셀에 상태에 따른 아이콘과 텍스트를 렌더링
                Cell: ({ value }) => (
                    <Box display="flex" alignItems="center">
                        {value === 'Approved' && <FaCheck color="green" />}
                        {value === 'Disable' && <FaTimes color="red" />}
                        {value === 'Error' && <FaExclamation color="orange" />}
                        <span style={{ marginLeft: '10px' }}>{value}</span>
                    </Box>
                ),
            },
            {
                Header: 'DATE',
                accessor: 'date',
            },
            {
                Header: 'PROGRESS',
                accessor: 'progress',
                // PROGRESS 열의 셀에 Progress 컴포넌트를 사용하여 진행 상태 바를 렌더링
                Cell: ({ value }) => {
                    // 문자열에서 숫자 부분만 추출하여 숫자 타입으로 변환
                    const progressValue = parseInt(value, 10) // '70%'에서 70으로 변환
                    return <Progress value={progressValue} colorScheme="blue" size="sm" />
                },
            },
        ],
        []
    )

    // useTable 훅을 사용하여 테이블 인스턴스 생성
    // useSortBy 훅을 사용하여 정렬 기능 추가
    const tableInstance = useTable({ columns, data }, useSortBy)

    // 테이블 인스턴스에서 필요한 속성 추출
    // getTableProps: 테이블 요소에 필요한 props
    // getTableBodyProps: 테이블 바디 요소에 필요한 props
    // headerGroups: 헤더 그룹에 대한 정보
    // rows: 테이블 데이터
    // prepareRow: 행에 필요한 props
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <Card>
            <CardHeader>
                <TitleH2>Complex Table</TitleH2>
            </CardHeader>
            <TableContainer>
                <Table variant="simple" {...getTableProps()}>
                    <Thead>
                        {/* 헤더 그룹 렌더링 */}
                        {headerGroups.map((headerGroup) => (
                            // 헤더 그룹에 필요한 props
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        isNumeric={column.isNumeric}
                                    >
                                        {column.render('Header')}
                                        {/* 정렬 방향 표시 */}
                                        {column.isSorted ? column.isSortedDesc ? <FaAngleDown /> : <FaAngleUp /> : ''}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <Tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                                                {cell.render('Cell')}
                                            </Td>
                                        )
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default ComplexTable
