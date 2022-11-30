import React from 'react'

const ColumnFilter = ({ column }) => {
  const { filterValue, setFiler } = column;
  return (
    <span>
      Search: {' '}
      <input
        type="text"
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
      />
    </span>
  )
}

export default ColumnFilter