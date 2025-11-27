import React from 'react'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

export default function UserForm(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
// console.log(props)
const handleName = (e) => {
  setName(e.target.value)
  
}

function handleEmail (e){
   setEmail(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();

  if (name.length > 0 && email.length > 0) {
     let newUser = {
    name: name,
    email: email,
    id: uuid(),
  }

  props.addUser(newUser)
  setName("")
  setEmail("")
  }

 
}

  return (
    <>
    
      <div>
        

      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-4 relative '>

         
      <label className='mb-2 font-medium ' htmlFor="">User fullname</label>
     <input className='border p-2 w-64 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ' value={name} onChange={handleName} type="text" placeholder='Enter your fullname' />

      <label className='mb-2 font-medium ' htmlFor="">User email</label>
      <input className='border p-2 w-64 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' value={email} onChange={handleEmail} type='email' placeholder='Enter your email' />

      <button  className='bg-blue-500 text-white p-2 mt-4 w-64 rounded hover:bg-blue-600 transition duration-200' type="submit">Submit</button>
      
    </form>
      </div>
      </>
  )
}











// export class UserForm extends Component {
//   constructor() {
//     this.state = { name: "", email: "" };
//   }
//   render() {
//     return (
//       <>
//       <div>
//          <form>
//           <label htmlFor="">Email Address</label>
//      <input type="text" placeholder='email' />
//          <label htmlFor="">Password</label>
//       <input type='text' placeholder='Password' />

//       <button type="submit">submit</button>
//     </form>
//       </div>
//       </>
//     )
//   }
// }