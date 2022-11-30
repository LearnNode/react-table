import React from 'react'
import BasicTable from './components/BasicTable';
import './App.css'
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';

const App = () => {
  return (
    <div className='app'>
      <BasicTable />
    </div>
  )
}

export default App