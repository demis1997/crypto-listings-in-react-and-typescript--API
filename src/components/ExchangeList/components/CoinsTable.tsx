import React from "react";
import { useTable, useSortBy, Column } from "react-table";

//sorts table rows, cells, headers, properties etc.
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex,
    Box,
    Image
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { CoinEntry } from "../../../types/Coins";

export const CoinsTable = ({ columns, data }: { columns: Column<CoinEntry>[], data: CoinEntry[] }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable<CoinEntry>({ columns, data }, useSortBy);

    return (
        <Table {...getTableProps()}>
            <Thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <Th userSelect="none" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                <Flex alignItems="center">
                                    {(column.Header !== 'Icon') && column.render("Header")}
                                    {/* Add a sort direction indicator */}
                                    {column.isSorted ? (
                                        column.isSortedDesc ? (
                                            <ChevronDownIcon ml={1} w={4} h={4} />
                                        ) : (
                                            <ChevronUpIcon ml={1} w={4} h={4} />
                                        )
                                    ) : (
                                        ""
                                    )}
                                </Flex>
                            </Th>
                        ))}
                    </tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <Tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                if (cell.column.Header === 'Icon') {
                                    return (
                                        <Td {...cell.getCellProps()}>
                                            <Box boxSize={'30px'}>
                                                <Image src={cell.value} />
                                            </Box>
                                        </Td>
                                    );
                                };

                                return (
                                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                                );
                            })}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
}