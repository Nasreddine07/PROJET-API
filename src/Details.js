import React from 'react'
import { useParams } from "react-router-dom";
const Details = ({data}) => {
    const {idUsers}=useParams()
    const foundUser= data?.find((el)=>el.id=== +idUsers)
    console.log(foundUser)
 
  return (
    <div style={{textAlign:'center',marginTop:'200px',backgroundColor:'blue'}}>
      <h1>{foundUser.name}</h1>
      <h2>{foundUser.phone}</h2>
      <h2>{foundUser.email}</h2>
      <h4>{foundUser.website}</h4>
      
    </div>
  )
}

export default Details