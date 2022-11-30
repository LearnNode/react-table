import React from 'react'
import BasicTable from './components/BasicTable';
import { Provider } from 'react-redux';
import './App.css'
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import RowSelection from './components/RowSelection';
import { store } from './store';
import Test from './components/Test';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Test />
      </div>
    </Provider>
  )
}

export default App