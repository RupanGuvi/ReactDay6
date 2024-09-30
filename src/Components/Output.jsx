import React, { useEffect, useState } from 'react';

const Output = ({Calculate}) => {
    const [data,setData]= useState([])


useEffect(()=>{
    console.log("Function triggered");
    setData(Calculate)
},[Calculate])

    return (
        <div>
            {data.map((ele,index)=>{
                return(
                    <div key={index}>
                        <p>{ele}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Output;