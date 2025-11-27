import React from 'react'

export default function UserItem(props) {
  console.log(props)
  return (
   <>
   
  <h1>{props.details.name}</h1>
   <h1>{props.details.email}</h1>

   </>
  )
}
