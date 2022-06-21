import React from 'react'

const CardDelete = ({deleteUser, deleteUserId, changeDeleteCard }) => {

    
  return (
    <div className='container-delete'>
      <div className='card-delete'>
        <div className='img-delete'>
          <i className="fa-solid fa-question"></i>
        </div>
        <h1>Are you sure you want to delete this user?</h1>
        <div className='container-button'>
          <button onClick={() => {deleteUser(deleteUserId.id), changeDeleteCard()}}>
            Remove
          </button>
          <button onClick={changeDeleteCard}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardDelete