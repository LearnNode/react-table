import React from 'react'

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className='modal--overlay'>
      <div onClick={close}>X</div>
      <div className='modal--container'>Modal</div>
    </div>
  )
}

export default Modal;