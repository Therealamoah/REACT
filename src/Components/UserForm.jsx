import { useState } from 'react'
import useUsersStore from '../Store/usersStore';

export default function UserForm() {
  const addNewUser = useUsersStore((state) => state.addNewUser);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length > 0 && email.length > 0) {
      let newUser = {
        name: name,
        email: email,
      }

      addNewUser(newUser);
      setName("");
      setEmail("");
    }
  }

  return (
    <div className='mt-32'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-4 relative'>
        <label className='mb-2 font-medium'>User fullname</label>
        <input 
          className='border p-2 w-64 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
          value={name} 
          onChange={handleName} 
          type="text" 
          placeholder='Enter your fullname' 
        />

        <label className='mb-2 font-medium'>User Contact</label>
        <input 
          className='border p-2 w-64 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
          value={email} 
          onChange={handleEmail} 
          type='tel' 
          placeholder='(555) 555-5555' 
        />

        <button 
          className='bg-black text-white p-2 mt-4 w-64 rounded hover:bg-blue-600 transition duration-200' 
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}