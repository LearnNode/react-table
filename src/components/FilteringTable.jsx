import React, { useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import mockData from '../../MOCK_DATA.json';
import { columnsData } from './columns';
import GlobalFilter from './GlobalFilter';
import './table.css';

const FilteringTable = () => {
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => mockData, []);
  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, state, setGlobalFilter } = useTable({
    columns,
    data
  }, useFilters, useGlobalFilter);

  const { globalFilter } = state;

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr { ...headerGroup.getHeaderGroupProps() }>
            {headerGroup.headers.map((column) => (
              <th { ...column.getHeaderProps() }>
                {column.render('Header')}
                <div>
                  {columnsData.canFilter ? column.render('Filter') : null}
                </div>
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
    </>
  )
}

export default FilteringTable