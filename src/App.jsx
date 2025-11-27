import UserForm from './Components/UserForm'
import UserList from './Components/UserList'
import React from 'react'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

 function App() {
  const [users, setUsers] = useState([{name: 'Sam', email: 'sam@email.com', id: uuid()},
    {name: 'Collins', email: 'collins@email.com', id:  uuid()},
  ])
  // Add New User 
  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
    console.log(users);
    console.log(newUser);
  };
  console.log(users.name);
  
  return (
     <>
     <div className='flex justify-center m-56 space-x-20'>
    <UserForm addUser={addNewUser} />
    <UserList users={users} />
    </div>
   
    
    </>
  )
}
export default App
 