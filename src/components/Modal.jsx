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
      </div>
    </div>
  )
}

export default Modal;