import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import mockData from '../../MOCK_DATA.json';
import { columnsData } from './columns';
import './table.css';

const SortingTable = () => {
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => mockData, []);
  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable({
    columns,
    data
  }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr { ...headerGroup.getHeaderGroupProps() }>
            {headerGroup.headers.map((column) => (
              <th { ...column.getHeaderProps(column.getSortByToggleProps()) }>
                {column.render('Header')}
                <span>
                  {column.isSorted? (column.isSortedDesc?'🔽' : 'Up') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps()}>
                {column.render('Footer')}
              </td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  )
}

export default SortingTable