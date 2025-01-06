// import React,{ useState,useRef} from 'react'
// function Useref(){
//     let [count,setCount]=useState(0)
//     let countRef=useRef(0)
//     let Increment=()=>{
//         setCount(count+1)
//         countRef.current++
//     }
//     console.log("State:",count)
//     console.log("Ref:",countRef.current)

    
//     return(
//       <>
//       <div>
//       <h1>Count:{countRef.current}</h1>
//           <button onClick={Increment}>+++++</button>
//       </div>
  
     
//       </>
//     )
//   }
//   export default Useref

//---------------count the letters----------
  import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function Useref() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    console.log("Render Count: ", count.current);
    
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
export default Useref


   
