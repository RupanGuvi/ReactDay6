import React, { useCallback, useState } from 'react';
import Output from './Output';

const UseCallbackHook = () => {
    const [number,setNumber]= useState(0);
    const [darkMode,setDarkMode]= useState(false);
    
    const style ={
      backgroundColor:darkMode ? "black" : "white",
      color: darkMode ? "white" : "black"
    }

    const Calculate = useCallback(()=>{
        return [number * 1 , number * 2 , number * 3]
 },[number])

//  const Calculate = () =>{
//     return [number * 1 , number * 2 , number * 3]
//  }

    return (
        <div style={style}>
      <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />
      <Output Calculate= {Calculate}></Output>
      <button onClick={()=>setDarkMode(!darkMode)}>Toggle</button>
    </div>
    );
};

export default UseCallbackHook;