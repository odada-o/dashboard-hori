import React from 'react'
import { useTable } from 'react-table'
import { Card, CardHeader, Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

const CheckTable = () => {
    const data = React.useMemo(
        () => [
            /* tableDataCheck 배열 */
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: '',
                accessor: 'checked',
                Cell: ({ value }) => <Checkbox isChecked={value} />,
            },
            {
                Header: 'NAME',
                accessor: 'name',
            },
            {
                Header: 'PROGRESS',
                accessor: 'progress',
            },
            {
                Header: 'QUANTITY',
                accessor: 'quantity',
            },
            {
                Header: 'DATE',
                accessor: 'date',
            },
        ],
        []
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

    return (
        <Card>
            <CardHeader>Check Table</CardHeader>
            <TableContainer>
                <Table variant="simple" {...getTableProps()}>
                    <Thead>
                        {headerGroups.map((headerGroup) => (
                            <Tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <Th {...column.getHeaderProps()} isNumeric={column.isNumeric}>
                                        {column.render('Header')}
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

export default CheckTable
