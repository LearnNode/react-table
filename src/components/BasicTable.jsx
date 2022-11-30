import React, { useMemo } from 'react';
import { useTable, useFilters, useGlobalFilter, usePagination } from 'react-table';
import mockData from '../../MOCK_DATA.json';
import { columnsData, groupedColumns } from './columns';
import './table.css';

const BasicTable = () => {
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => mockData, []);
  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    footerGroups, 
    rows, 
    prepareRow, 
    state, 
    setGlobalFilter,
    setPageSize,
    page, 
    nextPage, 
    canNextPage,
    canPreviousPage,
    previousPage, 
    pageOptions,
    gotoPage,
    pageCount,
  } = useTable({
    columns,
    data
  }, useFilters, useGlobalFilter, usePagination);

  // const firstTenRows = rows.slice(0, 20);

  const { globalFilter, pageSize, pageIndex } = state;

  console.log(pageSize)

  return (
    <>
    <div className='search'>
      <input 
        type="search" 
        value={globalFilter} 
        onChange={(e) => setGlobalFilter(e.target.value)} 
        placeholder='Search Results...'
      />
    <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} className='table--select'>
      {
        [10, 25, 50].map((page) => (
          <option key={page} value={page}>Show {page}</option>
        ))
      }
    </select>
    </div>
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
      <div className='footer'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>
        <span>
          Page {' '} <strong>{pageIndex + 1} of {pageOptions.length}</strong>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        {"||"}
        <span>Go to page: {' '}
          <input type="Number" defaultValue={pageIndex + 1}  
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page)
            }}
          />
        </span>
      </div>
    </>
  )
}

export default BasicTable