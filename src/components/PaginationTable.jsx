import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import mockData from '../../MOCK_DATA.json';
import { columnsData, groupedColumns } from './columns';
import './table.css';

const PaginationTable = () => {
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => mockData, []);
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    page, 
    nextPage, 
    canNextPage,
    canPreviousPage,
    previousPage, 
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow 
  } = useTable({
    columns,
    data
  }, usePagination);

  const { pageIndex, pageSize } = state;

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
          {page.map((row) => {
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
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>
        <span>
          Page {' '} <strong>{pageIndex + 1} of {pageOptions.length}</strong>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        <span>Go to page: {' '}
          <input type="Number" defaultValue={pageIndex + 1}  
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page)
            }}
          />
        </span>
        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
          {
            [10, 25, 50].map((page) => (
              <option key={page} value={page}>Show {page}</option>
            ))
          }
        </select>
      </div>
    </>
  )
}

export default PaginationTable