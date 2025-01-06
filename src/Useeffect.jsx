import React,{ useState,useEffect } from 'react'
function Useeffect(){
    let [count,setCount]=useState(0)
    useEffect(()=>{
      console.log("value updated")
    },[count])
    
    return(
      <>
      <div>
      <h1>Count:{count}</h1>
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=>setCount(count-1)}>Decrement</button> 
      </div>
  
     
      </>
    )
  }
  export default Useeffect


   
