import { useState } from 'react'
import useUsersStore from '../Store/usersStore';

export default function UserForm() {
  const addNewUser = useUsersStore((state) => state.addNewUser);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '') {
      setError('All fields are required');
      return;
    }

    setError('');

    const newUser = {
      name,
      email,
    };

    addNewUser(newUser);
    setName('');
    setEmail('');
  };

  return (
    <div className='mt-32'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center justify-center space-y-4'
      >
        {error && (
          <p className='text-red-500 text-sm'>{error}</p>
        )}

        <label className='font-medium'>User fullname</label>
        <input 
          className='border p-2 w-64 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          type='text' 
          placeholder='Enter your fullname' 
        />

        <label className='font-medium'>User email</label>
        <input 
          className='border p-2 w-64 rounded focus:outline-none focus:ring-2 focus:ring-blue-500' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type='email' 
          placeholder='Enter your email' 
        />

        <button 
          className='bg-black text-white p-2 w-64 rounded hover:bg-blue-600 transition'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
