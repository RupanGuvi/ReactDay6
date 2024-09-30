import React, { useState } from "react";

const ReactForms = () => {
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    age: "",
  });


const handleChange = (e)=>{
    setFormData(()=>({
        ...formData,
        [e.target.name]:e.target.value
    }))
}

 const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(formData);
    }

  return (
    <div>
      {/* <h1>User Name: {text}</h1>
            <input type='text' className='form-control' onChange={handleChange} name='userName'/> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            onChange={handleChange}
            value={formData.userName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">
           Age
          </label>
          <input
            type="text"
            className="form-control"
            name="age"
            onChange={handleChange}
            value={formData.age}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ReactForms;
