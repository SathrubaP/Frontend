
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import './UpdateUser.css';


const UpdateUser = () => {
  const{id}=useParams();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[address,setAddress]=useState('');
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
    axios.put(`https://backend-e1oc.onrender.com/api/user/update/${id}`, { name, email, address})
    .then(result=>{
      console.log(result);
      navigate('/');
    })
    .catch(err=>{
      console.error(err);
    });
  }

  return (
    <div className='Container'>
      <h1>UpdateUser</h1>
      <form onSubmit={update}>
  <div>
    <label htmlFor="name">Name</label>
    <input 
      type="text" 
      id="name" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  </div>
  
  <div>
    <label htmlFor="email">Email</label>
    <input 
      type="email" 
      id="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
    />
  </div>

  <div>
    <label htmlFor="address">Address</label>
    <input 
      type="text" 
      id="address" 
      value={address} 
      onChange={(e) => setAddress(e.target.value)} 
    />
  </div>

  <button type="submit">Update</button>
</form>

    </div>
  )
}

export default UpdateUser;
