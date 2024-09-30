import React, { useState } from "react";

const Counter = ({ setValue, value }) => {
  //const [status, setStatus] = useState(true);

  const handleIncrement = () => {
    //setStatus(false)
    setValue((ele) => ele + 1);
    
    
  };
  const handleDecrement = () => {
   // setStatus(true)
    if (value > 0) {
      setValue((ele) => ele - 1);
   
    }
  };

  return (
    <div>
        {console.log(value)}
      <h1>Count:{value}</h1>
      <br></br>
      {/* {status ? (
        <button onClick={handleIncrement}>Increment</button>
      ) : (
        <button onClick={handleDecrement}>Decrement</button>
      )} */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
