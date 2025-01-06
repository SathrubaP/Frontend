import React, { useEffect } from 'react'
import './User.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const[user,setUsers]=useState([
        // {name:"Sathru",email:"sathru@gmail.com",address:"Salem"}
]);
useEffect(()=>{
    axios.get("https://backend-e1oc.onrender.com/api/user/fetch")
    .then((result)=>{
        setUsers(result.data) })
},[]);

const deleteUser = (id) => {
    axios.delete (`https://backend-e1oc.onrender.com/api/user/delete/${id}`)
    .then((result)=>{
        console.log("user deleted");
    })
    .catch((err)=>{
        console.log(err);
    })
        
}
  return (
    <div className="Container">
        <center><h1>User Details</h1></center>
        <Link  to ="/create" className='create-user-link'>Create User</Link>
        <table>
           <tr>  
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
           </tr>
          {
                user.map((users)=>(
                    <tr>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.address}</td>
                        <td>
                       <button> <Link  to ={`/update/${users._id}`}>update</Link></button>
                        <button onClick ={()=>deleteUser(users._id)}>Delete</button>
                        </td>

                    </tr>
                ))
          }
        </table>
    </div>
  )
}

export default User
