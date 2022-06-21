import React from 'react'
import axios from 'axios'

const URL = `https://users-crud1.herokuapp.com/users/`
const SerchUsers = ({users, setSearch, userSearch}) => {

    const search = (e) => {
        e.preventDefault()
        const value = e.target.search.value.toLowerCase()
        const userSearch = value.replace(/ /g, "")
        //let resultUsers = []
        if(userSearch){            
            users.map(user =>{                  
                let firstName = user.first_name.toLowerCase().replace(/ /g, "")
                let lastName = user.last_name.toLowerCase().replace(/ /g, "")
                let name = firstName + lastName
                if(name.includes(userSearch)){
                    axios.get(`https://users-crud1.herokuapp.com/users/${user.id}`)
                    .then(res =>  {
                                /*resultUsers.push([res.data])*/
                                setSearch([res.data])})
                    .catch(err => alert('An intentional problem occurred again'))
                    .finally(miForm.reset())
                }
            })
        } else{
            alert('Please write a name')

        }
        //setSearch(resultUsers)
     }
    

  return (
    <div className='search'>
        <form onSubmit={search} id='miForm'>
            { userSearch && <button onClick={() => setSearch(null)} className='prevent'><i className="fa-solid fa-arrow-left-long"></i></button>}
            <input type="text" name='search'/>
            <button>Search</button>
        </form>
    </div>
  )
  }

export default SerchUsers
