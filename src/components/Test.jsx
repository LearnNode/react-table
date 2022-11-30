import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';
import BasicTable from './BasicTable';

const Test = () => {
  const dispatch  = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  return (
    <div>
      <BasicTable />
    </div>
  )
}

export default Test