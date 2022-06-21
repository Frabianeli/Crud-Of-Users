import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const Form = ({getUsers, formCreate, formUsers, modifyUser, setForm, setFormCreate, setModifyUser}) => {

    const[data, setData] = useState(modifyUser)
    
    const form = (e) => {
        e.preventDefault()
        const create = {
            "email": e.target.email.value,
            "password": e.target.password.value,
            "first_name": e.target.firstname.value,
            "last_name": e.target.lastname.value,
            "birthday": e.target.birthday.value,
          }
          
        if(formCreate){
            axios.post(`https://users-crud1.herokuapp.com/users/`, create)
                .then(res => {console.log(res.data),
                        getUsers()})
                .catch(err => console.log(err))
                .finally(setFormCreate(false))
        } else {
            axios.patch(`https://users-crud1.herokuapp.com/users/${modifyUser.id}/`, create)
                .then(res => {console.log(res.data),
                        getUsers()})
                .catch(err => console.log(err))
        }
        setForm(true)
    } 
    const closeCreate = () =>{
        setFormCreate(false)
        formUsers()
    }

    const handleChange = (e) =>{
       setData(e.target.value)
    }

  return (
    <div className='container-form'>
        <form onSubmit={form}>
            <h2>{formCreate ? 'New User' : 'Modify User'}</h2>
            <div>
                <label htmlFor="name"><i className="fa-solid fa-user"></i> Name:</label>
                <input type="text" name='firstname' className='first-name' id='name' value={!formCreate ? data.first_name : null} onChange={handleChange}/>
                <input type="text" name='lastname' className='last-name' value={!formCreate ? data.last_name : null} onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="email"> <i className="fa-solid fa-envelope"></i> Email:</label>
                <input type="text"  name='email' id='email' value={!formCreate ? data.email : null} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password:</label>
                <input type="password" name='password' id='password' value={!formCreate ? data.password : null} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="date"><i className="fa-solid fa-calendar-day"></i> Birthday:</label>
                <input type="date" name='birthday' id='date' value={!formCreate ? data.birthday : null} onChange={handleChange}/>
            </div>
            <div className='buttons'>
                  <button><i className="fa-solid fa-square-check"></i></button>
                  <button onClick={formCreate ? closeCreate : formUsers} className='close'>Close</button>  
            </div> 
        </form>
    </div>
  )
}

export default Form