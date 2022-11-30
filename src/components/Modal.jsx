import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

const Modal = ({ open, close, selectedUser }) => {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value
    }))
  };
  
  useEffect(() => {
    if (selectedUser !== null) {
      console.log(selectedUser)
      setUser({
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        date_of_birth: selectedUser.date_of_birth,
        country: selectedUser.country,
        phone: selectedUser.phone
      })
    }
  }, [ selectedUser, setUser ]); 
  
  if (!open) return null;
  return (
    <div className='modal--overlay' onClick={close}>
      <div className='modal--container' onClick={(e) => e.stopPropagation()}>
        <div className='modal--header'>
          <h2>Update Data</h2>
          <div onClick={close} className='close--btn'>X</div>
        </div>
        <div className='modal--body'>
          <div className='modal--body__box'>
            <div className="modal--body__item">
              <label>First Name:</label>
              <input type="text" name='first_name' value={user.first_name} onChange={handleChange} />
            </div>
            <div className="modal--body__item">
              <label>Last Name:</label>
              <input type={"text"} name='last_name' value={user.last_name} onChange={handleChange}  />
            </div>
            <div className="modal--body__item">
              <label>Date of Birth:</label>
              <input type={"date"} name='date_of_birth' value={user.date_of_birth} onChange={handleChange}  />
            </div>
            <div className="modal--body__item">
              <label>Country:</label>
              <input type={"text"} name='country' value={user.country} onChange={handleChange}  />
            </div>
            <div className="modal--body__item">
              <label>Phone:</label>
              <input type={"text"} name='phone' value={user.phone} onChange={handleChange}  />
            </div>
          </div>
          <div className='update--btn__container'>
            <div className='update--btn' onClick={() => console.log(user)}>
              Update
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;