import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoForms from "./Components/TodoForms";
import TodoList from "./Components/TodoList";

const App = () => {
  //creating the state to hold our data
const [user, setUser] = useState([
  {name: "Collins Amoah", email: "Collinsamoah594@gmail.com", id:uuidv4()},
  {name: "Mr Amoah", email: "collinsamoah206@gmail.com", id: uuidv4()}
])

// "Create" in the CRUD operations
const addNewUser = (newUser) => {
  setUser([...user, newUser]);//the spread operator is used to copy the existing array elements and then the new user created is added to the end of the array
 
  
}
 console.log(user);
  return (
    <div className='flex space-x-1'>
      <TodoForms addNewUser={addNewUser} />
      <TodoList users={user} />
    </div>
  )
}

export default App