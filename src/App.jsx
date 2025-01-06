//  import './App.css'
// import Useeffect from './Useeffect'  
// import Useref from './Useref'
// import { createContext } from 'react';
// import Hen from './Hen.jsx'
// export let nameContext = createContext();
// function App (){  
//    return (
//     <div>
//    {/* <Useeffect/> */}
//    {/* <Useref/> */}
//    <nameContext.Provider value="water">
//     <Hen />
//     </nameContext.Provider>
//     </div>
   
//    )
//   }
//   export default App

//  import './App.css'
// import Useeffect from './Useeffect'  
// import Useref from './Useref'
// import { createContext } from 'react';
// import Hen from './Hen.jsx'
// export let nameContext = createContext();
// function App (){  
//    return (
//     <div>
//    {/* <Useeffect/> */}
//    {/* <Useref/> */}
//    <nameContext.Provider value="water">
//     <Hen />
//     </nameContext.Provider>
//     </div>
   
//    )
//   }
//   export default App

import React,{useState,useMemo,useEffect} from "react";
function App() {
  let [number,setNumber]=useState(0);
  let [dark,setDark]=useState(false);
  let doubleNumber=useMemo(()=>{
    return slowFunction(number);
  },[number]);

  let themeStyles=useMemo(()=>{
    return {
      backgroundColor:dark?"black":"white",
      color:dark?"white":"black"
    }
  },[dark]);
  useEffect(()=>{
    console.log("Theme Changed");
  },[themeStyles]);
  return (
    <div>
      <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
      <button onClick={()=>setDark((val)=>!val)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}
export default App;
function slowFunction(num){
  for(let i=0;i<1000000000;i++){}
  return num*2;
}