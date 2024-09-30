import React ,{ useMemo, useState } from 'react';

const UseMemo = () => {

    const [number,setNumber]= useState(0);
    const [darkMode,setDarkMode]= useState(false);
    
    const style ={
      backgroundColor:darkMode ? "black" : "white",
      color: darkMode ? "white" : "black"
    }
    const countNumber = useMemo(()=>{
        return calculate(number)
    },[number])

    //const countNumber = calculate(number)
    

    return (
        <div style={style}>
        <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />
       <h2>{countNumber}</h2>
        <button onClick={()=>setDarkMode(!darkMode)}>Toggle</button>
      </div>
    );
};

export default UseMemo;

function calculate(num){
  console.log("function called");
  
  for(let i=0;i<1000;i=i+1){
    
  }
  return num
}