import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import CardDelete from './components/CardDelete'
import CardUsers from './components/CardUsers'
import Form from './components/Form'
import SerchUsers from './components/SerchUsers'

const URL = `https://users-crud1.herokuapp.com/users/`

function App() {
  const [users, setUsers] = useState() //Usuarios del api get
  const [formCreate, setFormCreate] = useState(false) // formulario para crear
  const [form, setForm] = useState(true)// mostrar formulario
  const [modifyUser, setModifyUser] = useState() //obtener el usuario que mdificaremos
  const [search, setSearch] = useState() //buscador
  const [cardDelete, setCardDelete] = useState(false)
  const [deleteUserId, setDeleteUserId] = useState()



  const formUsers = () => form ? setForm(false) : setForm(true)

  const change = () => {
    setFormCreate(true)
    formUsers()
  }

  const changeDeleteCard = () => cardDelete ? setCardDelete(false) : setCardDelete(true)

  const getUsers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  const deleteUser = (id) => {
    axios.delete(`${URL}${id}/`)
      .then(res => {
        console.log(res.data),
          getUsers()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Crud Of Users</h1>
      <SerchUsers users={users} setSearch={setSearch} userSearch={search}/>
      <div className='create'>
        <button onClick={change}>Create Users</button>
      </div>
      <div className='container-card'>
        {
          search?
          search.map(user => <CardUsers key={user.id}
            users={user} formUsers={formUsers}
            setModifyUser={setModifyUser} setDeleteUserId={setDeleteUserId}
            setCardDelete={setCardDelete} changeDeleteCard={changeDeleteCard}
          />) :
          users?.map(user => <CardUsers key={user.id}
            users={user} formUsers={formUsers}
            setModifyUser={setModifyUser} setDeleteUserId={setDeleteUserId} 
            setCardDelete={setCardDelete} changeDeleteCard={changeDeleteCard}
          />) 
        }
      </div>
      {
        !form && <Form formCreate={formCreate} formUsers={formUsers}
          getUsers={getUsers} modifyUser={modifyUser} setForm={setForm}
          setFormCreate={setFormCreate} setModifyUser={setModifyUser}
        />
      }
      {cardDelete && <CardDelete deleteUserId={deleteUserId} 
        deleteUser={deleteUser} changeDeleteCard={changeDeleteCard} 
          />}
    </div>
  )
}

export default App
