import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import mockData from '../../MOCK_DATA.json';
import Checkbox from './Checkbox';
import { columnsData } from './columns';
import './table.css';

const RowSelection = () => {
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => mockData, []);
  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, selectedFlatRows } = useTable({
    columns,
    data
  }, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [{
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => {
          return <Checkbox {...getToggleAllRowsSelectedProps()} />
        },
        Cell: ({ row }) => {
          return <Checkbox {...row.getToggleRowSelectedProps()} />
        }
      }, ...columns]
    })
  });

  const firstTenRows = rows.slice(0, 10);

  return (
    <>
    
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr { ...headerGroup.getHeaderGroupProps() }>
            {headerGroup.headers.map((column) => (
              <th { ...column.getHeaderProps() }>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {firstTenRows.map((row) => {
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
      <pre>
        <code>
          {JSON.stringify({selectedFlatRows: selectedFlatRows.map((row) => row.original)}, null, 2)}
        </code>
      </pre>
    </>
  )
}

export default RowSelection;