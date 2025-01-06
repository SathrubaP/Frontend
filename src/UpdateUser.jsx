// import React , {useEffect, useState} from 'react'
// import axios from 'axios'
// import {useParams} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

// const UpdateUser = () => {
//   const {id}=useParams();
//   const[name,setName]=useState(); 
//   const[email,setEmail]=useState();
//   const[address,setAddress]=useState();
//   const navigate = useNavigate();

//   useEffect(()=>{
//     axios.get(`https://backend-e1oc.onrender.com/api/user/update/${id}`)
//     .then((result)=>{
//         setName(result.data.name)
//         setEmail(result.data.email)
//         setAddress(result.data.address)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//   },[id])

//   const updateUser = (e) => {
//     e.preventDefault();
//     axios.put(`https://backend-e1oc.onrender.com/api/user/update/${id}`,{name,email,address})
//     .then((result)=>{
//         console.log(result)
//         navigate('/')}
//       )
//       .catch((err)=>{
//           console.log(err)
//          })
//       }
    
//   return (
//     <div>
//      <div>
//       <h1>Update</h1>
//       <form onSubmit={updateUser}>
//         <label>Name</label>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
//         <label>Email</label>
//         <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/><br/>
//         <label>Address</label>
//         <input type="text" value={address}  onChange={(e)=>setAddress(e.target.value)}/><br/>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//     </div>
//   )
// }

// export default UpdateUser;


import React from 'react'
import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';


const UpdateUser = () => {
  const{id}=useParams();
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[address,setAddress]=useState();
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(`https://backend-e1oc.onrender.com/api/user/update/${id}`)
      .then(result => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAddress(result.data.address);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

 
  const update=(e)=>{
    e.preventDefault();
    axios.put(`https://backend-e1oc.onrender.com/api/user/update/${id}`, {
      name: name,
      email: email,
      address: address
    })
    .then(result=>{
      console.log(result);
      navigate('/');
    })
    .catch(err=>{
      console.error(err);
    });
  }

  return (
    <div>
      <h1>UpdateUser</h1>
      <form onSubmit={update}>
            <label>Name</label>
            <td><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></td><br/>
            <label>Email</label>
            <td><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td><br/>
            <label>Address</label>
            <td><input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/></td><br/>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser
