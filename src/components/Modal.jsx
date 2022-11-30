import React from 'react'

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className='modal--overlay'>
      <div className='modal--container'>
        <div className='modal--header'>
          <h2>Update Data</h2>
          <div onClick={close} className='close--btn'>X</div>
        </div>
        <div className='modal--body'>
          <div className='modal--body__box'>
            <div className="modal--body__item">
              <label>First Name:</label>
              <input type={"text"} />
            </div>
            <div className="modal--body__item">
              <label>Last Name:</label>
              <input type={"text"} />
            </div>
            <div className="modal--body__item">
              <label>Date of Birth:</label>
              <input type={"date"} />
            </div>
            <div className="modal--body__item">
              <label>Country:</label>
              <input type={"text"} />
            </div>
            <div className="modal--body__item">
              <label>Phone:</label>
              <input type={"text"} />
            </div>
          </div>
          <div className='update--btn__container'>
            <div className='update--btn'>
              Update
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;