 import React from 'react'
import UserItem from './UserItem'
 
  function UserList(props) {
  console.log(props.users.length)
   return (
       <>
      <div className='backdrop-blur-lg bg-white/10 shadow-2xl p-12 rounded-xl border border-white/20'>
      <h1 className='border p-3 mb-2 font-extrabold'>List Of Names & Emails</h1>
     
      {props.users.map((user) =>{
       
        return <UserItem key={user.id} details={user} />
       })}
       {/*  */}
     
       
         </div>
       </>
   )
 }
  export default UserList
 

