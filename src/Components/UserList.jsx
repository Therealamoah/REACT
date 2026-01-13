import useUsersStore from '../Store/usersStore';
import UserItem from './UserItem'

export default function UserList() {
  const users = useUsersStore((state) => state.users);
  const removeUser = useUsersStore((state) => state.removeUser);

  return (
    <div className='bg-gray-200 p-10 mt-32  '>
      <h1 className='bg-black text-white border p-10 mb-2 font-extrabold block'>
        list of Students in the Class
      </h1>
      <div className='bg-gray-500'>
     {users.map((user) => (
          <UserItem key={user.id} userId={user.id} />  
        ))}
      </div>
    </div>
  )
}