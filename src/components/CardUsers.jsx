import React from 'react'

const CardUsers = ({users, formUsers, setModifyUser, setDeleteUserId, changeDeleteCard}) => {

    const update = () => {
        setModifyUser(users)
        formUsers()
    }

    const cardDelete = () => {
        changeDeleteCard()
        setDeleteUserId(users)
       } 

  return (
        <div className='card-users'>
            <div className='card-info'>
                <h3>{users.first_name} {users.last_name}</h3>
                <p>{users.email}</p>
                <h4>{users.birthday}</h4>
            </div>
            <div className='card-button'>
                <button onClick={cardDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>                
                <button onClick={update}>
                    <i className="fa-solid fa-pen"></i>
                </button>
            </div>
        </div>
  )
}

export default CardUsers