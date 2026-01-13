import { create } from "zustand";
import { v4 as uuid } from 'uuid';

const useUsersStore = create((set) => ({
  users: [
    { }
  ],

  addNewUser: (newUser) => set((state) => ({
    users: [...state.users, { ...newUser, id: uuid() }]
  })),

  removeUser: (id) => set((state) => ({
    users: state.users.filter(user => user.id !== id)
  })),

  editUser: (userId, newUserDetails) => set((state) => ({
    users: state.users.map((user) => {
      if (user.id === userId)
      {
        return newUserDetails
      }
      else{
        return user
      }
    })
  })),

}));

export default useUsersStore;