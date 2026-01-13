import React, { useState, useEffect } from 'react'
import useUsersStore from "../Store/usersStore"

export default function UserItem({ userId }) {
  // Get user directly from store using userId
  const user = useUsersStore((state) => 
    state.users.find(user => user.id === userId)
  );
  
  const removeUser = useUsersStore((state) => state.removeUser);
  const editUser = useUsersStore((state) => state.editUser);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Initialize form state when user loads or changes
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (user) {
      let updatedUser = { 
        ...user,      // Keep existing properties (id, etc.)
        name: name, 
        email: email,
      };
      
      editUser(user.id, updatedUser);
      setShowModal(false);
    }
  };

  console.log(Object.keys(user));
  
  //convert object into an array
  const userArray = Object.keys(user);

  // check if th user array is empty
  const isEmpty = userArray.length === 0;

  // Guard clause if user not found
  if (isEmpty) return null;

  // Validate a form
  


  return (
    <div className="border p-4 mb-2 rounded bg-gray-50 relative">
      <div>
        <h1 className="font-bold">Name: {user.name}</h1>
        <h1 className="text-gray-600">Email: {user.email}</h1>
      </div>

      <div className="mt-2 space-x-2">
        <button 
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Edit
        </button>
        <button 
          onClick={() => removeUser(user.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <section 
            className="fixed inset-0 bg-transparent z-40"
            onClick={() => setShowModal(false)}
          />
          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg shadow-xl z-50 p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Edit User</h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={handleNameChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input 
                  type="email" 
                  value={email} 
                  onChange={handleEmailChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}